import {render, screen} from '@testing-library/react'
import {Badge} from './Badge'

describe('<Badge />', () => {
  it('should render children', () => {
    render(<Badge>Badge</Badge>)
    expect(screen.getByText(/badge/i)).toBeInTheDocument()
  })
})
