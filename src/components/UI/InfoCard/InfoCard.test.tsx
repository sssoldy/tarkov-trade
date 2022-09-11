import {render, screen} from '@testing-library/react'
import {InfoCard} from './InfoCard'

const mock = {
  title: 'Аптечка Grizzly',
  imgSrc: 'https://assets.tarkov.dev/590c657e86f77412b013051d-icon.jpg',
  category: 'Аптечка',
  updatedTime: '1 час назад',
  badges: ['квестовый', 'бартерный'],
}

describe('<InfoCard />', () => {
  it('should render with title and image', () => {
    render(<InfoCard title={mock.title} imgSrc={mock.imgSrc} />)
    const title = screen.getByText('Аптечка Grizzly')
    const img = screen.getByRole('img')

    expect(title).toBeInTheDocument()
    expect(img).toHaveAttribute('src', mock.imgSrc)
    expect(img).toHaveAttribute('alt', mock.title)
  })

  describe('prop: category', () => {
    it('should render category meta tag', () => {
      render(
        <InfoCard
          title={mock.title}
          imgSrc={mock.imgSrc}
          category={mock.category}
        />,
      )
      const category = screen.getByText('Аптечка')
      expect(category).toBeInTheDocument()
    })
  })

  describe('prop: updatedTime', () => {
    it('should render time meta tag', () => {
      render(
        <InfoCard
          title={mock.title}
          imgSrc={mock.imgSrc}
          updatedTime={mock.updatedTime}
        />,
      )
      const time = screen.getByText('1 час назад')
      expect(time).toBeInTheDocument()
    })
  })

  describe('meta tag bullet', () => {
    it('should render meta tag between tags only if there are more then 1 tag', () => {
      const {rerender} = render(
        <InfoCard
          title={mock.title}
          imgSrc={mock.imgSrc}
          category={undefined}
          updatedTime={mock.updatedTime}
        />,
      )
      expect(screen.queryByText('·')).not.toBeInTheDocument()

      rerender(
        <InfoCard
          title={mock.title}
          imgSrc={mock.imgSrc}
          category={mock.category}
          updatedTime={mock.updatedTime}
        />,
      )
      const bullet = screen.getByText('·')
      expect(bullet).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('prop: badges', () => {
    it('should render badges', () => {
      render(
        <InfoCard
          title={mock.title}
          imgSrc={mock.imgSrc}
          badges={mock.badges}
        />,
      )
      expect(screen.getByText('квестовый')).toBeInTheDocument()
      expect(screen.getByText('бартерный')).toBeInTheDocument()
    })
  })
})
