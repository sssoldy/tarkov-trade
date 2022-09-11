import {PriceCard} from '@UI'
import {convertArabicToRoman, formatPrice} from '@utils'
import {
  FleaTableBuyPriceFragment,
  TraderPriceFragment,
} from 'src/generated-types'

interface FleaTableBuyProps {
  buyOffer: FleaTableBuyPriceFragment
}

export const FleaTableBuy = ({buyOffer}: FleaTableBuyProps) => {
  const {price, currency, vendor} = buyOffer
  const {__typename, name} = vendor

  const formattedPrice = price && currency && formatPrice(price, currency)

  if (!formattedPrice) return null

  const isTrader = __typename === 'TraderOffer'

  if (isTrader) {
    const {minTraderLevel} = vendor as TraderPriceFragment
    const traderLvl = Number.isInteger(minTraderLevel)
      ? convertArabicToRoman(minTraderLevel as number)
      : undefined

    return (
      <PriceCard
        price={formattedPrice}
        traderName={name}
        traderLvl={traderLvl}
      />
    )
  }

  return <PriceCard price={formattedPrice} traderName={name} />
}
