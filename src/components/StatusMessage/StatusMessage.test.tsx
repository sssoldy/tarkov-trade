import {AdjustmentsIcon} from '@heroicons/react/outline'
import {render, screen} from '@testing-library/react'
import {Button} from '../UI'
import {StatusMessage} from './StatusMessage'

describe('<StatusMessage />', () => {
  it('should render', () => {
    render(
      <StatusMessage
        title="title"
        description="description"
        icon={
          <AdjustmentsIcon
            className="sm:my-[10px] sm:shrink-0 text-indigo-600 w-14 h-14"
            data-testid="icon"
          />
        }
      />,
    )

    const title = screen.getByText(/title/i)
    const description = screen.getByText(/description/i)
    const icon = screen.getByTestId('icon')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  describe('prop: button', () => {
    it('should render button', () => {
      render(
        <StatusMessage
          title="title"
          description="description"
          icon={
            <AdjustmentsIcon className="sm:my-[10px] sm:shrink-0 text-indigo-600 w-14 h-14" />
          }
          button={<Button>button</Button>}
        />,
      )

      const btn = screen.getByRole('button')
      expect(btn).toHaveTextContent(/button/i)
    })
  })
})
