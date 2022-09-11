interface PriceCardProps {
  price: string
  traderName: string
  traderLvl?: string | null
}

export const PriceCard = ({price, traderName, traderLvl}: PriceCardProps) => {
  return (
    <div className="text-right whitespace-nowrap">
      <p className="text-base font-semibold text-gray-900">{price}</p>

      <p className="inline-flex items-center space-x-1 text-gray-500">
        {traderLvl && (
          <span className="relative flex items-center justify-center w-4 h-4 text-gray-600 bg-gray-300 rounded-sm">
            {traderLvl}
            <span
              className="absolute bottom-0 right-0 border-b-4 border-l-4 border-b-white border-l-transparent"
              aria-hidden={true}
            />
          </span>
        )}
        <span>{traderName}</span>
      </p>
    </div>
  )
}
