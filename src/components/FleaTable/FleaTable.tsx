import {useLazyQuery} from '@apollo/client'
import {StatusMessage} from '@components/StatusMessage'
import {Input, TableContainer, Table, Button} from '@components/UI'
import {
  AdjustmentsIcon,
  ExclamationIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import {useState, useRef, useEffect} from 'react'
import {FleaTableRowFragment, FleaTableDocument} from 'src/generated-types'
import {FleaTableBody} from './FleaTableBody/FleaTableBody'
import {FleaTableHead} from './FleaTableHead/FleaTableHead'

export const FleaTable = () => {
  const [items, setItems] = useState<Array<FleaTableRowFragment | null>>()

  const [getItems, {loading, error, previousData, fetchMore}] = useLazyQuery(
    FleaTableDocument,
    {
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'cache-first',
      notifyOnNetworkStatusChange: true,
      pollInterval: 1000 * 60 * 5, // 5 minutes
      onCompleted(data) {
        setItems(data.items)
      },
    },
  )

  const prevItems = previousData?.items ?? []
  const searchBoxRef = useRef<HTMLInputElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleFocusClick = () => {
    if (!searchBoxRef.current) return
    searchBoxRef.current.focus()
  }

  const fetchMoreItems = (offset: number) => {
    fetchMore({variables: {offset}})
  }

  const getItemsByName = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeoutRef.current)

    const {value} = e.target
    if (!value) return

    timeoutRef.current = setTimeout(() => {
      getItems({
        variables: {
          name: value,
          offset: 0,
          limit: 10,
        },
      })
    }, 500)
  }

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  return (
    <div>
      <div className="overflow-hidden divide-y divide-gray-200 shadow ring-1 ring-gray-200 xl:rounded-md">
        <div className="sticky top-0 z-10 p-4 bg-gray-50">
          <Input
            ref={searchBoxRef}
            id="search"
            name="search"
            icon={
              <SearchIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            }
            loading={loading}
            placeholder="Поиск"
            onChange={getItemsByName}
          />
        </div>

        {items && (
          <TableContainer id="scrollArea" className="max-h-[calc(100vh-104px)]">
            <Table stickyHeader>
              <FleaTableHead />
              <FleaTableBody
                items={items}
                prevItems={prevItems}
                handleFocusClick={handleFocusClick}
                fetchMoreItems={fetchMoreItems}
              />
            </Table>
          </TableContainer>
        )}
      </div>

      {!items && !error && (
        <StatusMessage
          title="Начните поиск"
          description="Введите запрос и начните поиск"
          icon={
            <AdjustmentsIcon className="sm:my-[10px] sm:shrink-0 text-indigo-600 w-14 h-14" />
          }
          button={<Button onClick={handleFocusClick}>Начать поиск</Button>}
        />
      )}
      {error && (
        <StatusMessage
          title="Что то пошло не так"
          description={`Ошибка ${error.message}`}
          icon={
            <ExclamationIcon className="sm:my-[10px] sm:shrink-0 text-indigo-600 w-14 h-14" />
          }
          button={<Button onClick={handleFocusClick}>Начать поиск</Button>}
        />
      )}
    </div>
  )
}
