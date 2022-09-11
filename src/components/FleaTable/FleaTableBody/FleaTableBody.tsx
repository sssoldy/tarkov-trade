import {StatusMessage} from '@components/StatusMessage'
import {TableBody, TableRow, TableCell, Button} from '@UI'
import {AdjustmentsIcon} from '@heroicons/react/outline'
import {useObserver} from '@hooks'
import {useRef} from 'react'
import {MemoizedFleaTableRow} from '../FleaTableRow/FleaTableRow'
import {FleaTableRowFragment} from 'src/generated-types'

interface FleaTableBodyProps {
  items: Array<FleaTableRowFragment | null>
  prevItems: Array<FleaTableRowFragment | null>
  handleFocusClick: VoidFunction
  fetchMoreItems: (offset: number) => void
}

export const FleaTableBody = ({
  items,
  prevItems,
  handleFocusClick,
  fetchMoreItems,
}: FleaTableBodyProps) => {
  const trRef = useRef<HTMLTableRowElement>(null)
  const itemsLength = items.length
  const prevItemsLength = prevItems.length

  const canProcess = Boolean(itemsLength)
  const canLoad = canProcess && itemsLength !== prevItemsLength

  useObserver(trRef, canProcess, canLoad, () => fetchMoreItems(itemsLength))

  return (
    <TableBody>
      {!items.length && (
        <TableRow className="relative h-[calc(100vh-188px)]">
          <TableCell className="align-top" colSpan={3}>
            <StatusMessage
              title="Ничего не найдено"
              description="Измените запрос и попробуйте еще раз"
              icon={
                <AdjustmentsIcon className="sm:my-[10px] sm:shrink-0 text-indigo-600 w-14 h-14" />
              }
              button={<Button onClick={handleFocusClick}>Начать поиск</Button>}
            />
          </TableCell>
        </TableRow>
      )}
      {items.map(item => {
        if (!item) return null
        const fragmentId = item.__typename!.concat(':', item.id)

        return <MemoizedFleaTableRow key={fragmentId} id={fragmentId} />
      })}
      <tr ref={trRef} aria-hidden={true} />
    </TableBody>
  )
}
