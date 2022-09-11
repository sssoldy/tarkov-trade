import {render, screen} from '@testing-library/react'
import {PriceCard} from './PriceCard'

const mock = {
  price: '13 000 ₽',
  traderName: 'Прапор',
  traderLvl: 'I',
}

describe('<PriceCard />', () => {
  it('should render with title and image', () => {
    render(<PriceCard price={mock.price} traderName={mock.traderName} />)
    const price = screen.getByText('13 000 ₽')
    const traderName = screen.getByText('Прапор')

    expect(price).toBeInTheDocument()
    expect(traderName).toBeInTheDocument()
  })

  describe('prop: traderLvl', () => {
    it('should render trader lvl badge', () => {
      render(
        <PriceCard
          price={mock.price}
          traderName={mock.traderName}
          traderLvl={mock.traderLvl}
        />,
      )
      expect(screen.getByText('I')).toBeInTheDocument()
    })
  })
})
