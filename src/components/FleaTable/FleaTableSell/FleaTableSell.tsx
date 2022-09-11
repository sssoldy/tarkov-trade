import {PriceCard} from '@components/UI'
import {formatPrice} from '@utils'
import {FleaTableSellPriceFragment} from 'src/generated-types'

interface FleaTableSellProps {
  sellOffer: FleaTableSellPriceFragment
}

export const FleaTableSell = ({sellOffer}: FleaTableSellProps) => {
  const {price, currency, vendor} = sellOffer
  const {name} = vendor

  const formattedPrice = price && currency && formatPrice(price, currency)

  if (!formattedPrice) return null

  return <PriceCard price={formattedPrice} traderName={name} />
}
