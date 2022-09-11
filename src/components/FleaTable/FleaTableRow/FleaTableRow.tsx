import {useApolloClient} from '@apollo/client'
import {TableRow, TableCell} from '@UI'
import {memo} from 'react'
import {FleaTableRowFragmentDoc} from 'src/generated-types'
import {FleaTableBuy} from '../FleaTableBuy/FleaTableBuy'
import {FleaTableSell} from '../FleaTableSell/FleaTableSell'
import {FleaTableDetails} from '../FleaTableDetails/FleaTableDetails'

interface FleaTableRowProps {
  id: string
}

const calcLargestNumOfOffers = (...arrs: number[]) => Math.max(...arrs)

const FleaTableRow = ({id}: FleaTableRowProps) => {
  const client = useApolloClient()
  const item = client.readFragment({
    id,
    fragmentName: 'FleaTableRow',
    fragment: FleaTableRowFragmentDoc,
  })

  if (!item) return null

  const {sellFor, buyFor} = item

  const sellOffersTotal = sellFor?.length || 0
  const buyOffersTotal = buyFor?.length || 0

  const largestNumOfOffers = calcLargestNumOfOffers(
    sellOffersTotal,
    buyOffersTotal,
  )

  return (
    <>
      {Array.from({length: largestNumOfOffers}, (_, idx) => {
        const isFirstRowInGroup = idx === 0
        const isLastRowInGroup = idx === largestNumOfOffers - 1
        const key = id.concat(':', idx.toString())

        const buyOffer = buyFor && buyFor[idx]
        const sellOffer = sellFor && sellFor[idx]

        return (
          <TableRow
            key={key}
            className={`${
              isLastRowInGroup
                ? 'shadow-[inset_0_-1px_0_0] shadow-gray-200 last:shadow-none'
                : ''
            }`}
          >
            {isFirstRowInGroup && (
              <TableCell
                rowSpan={largestNumOfOffers}
                className="align-top bg-white border-r border-r-gray-200"
              >
                <FleaTableDetails id={id} />
              </TableCell>
            )}

            <TableCell align="right">
              {buyOffer && <FleaTableBuy buyOffer={buyOffer} />}
            </TableCell>
            <TableCell align="right">
              {sellOffer && <FleaTableSell sellOffer={sellOffer} />}
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}

export const MemoizedFleaTableRow = memo(FleaTableRow)
