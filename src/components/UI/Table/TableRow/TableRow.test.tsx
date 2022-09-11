import {render, screen} from '@testing-library/react'
import {ReactNode} from 'react'
import {TableRow} from './TableRow'

const renderInTable = (node: ReactNode) =>
  render(
    <table>
      <tbody>{node}</tbody>
    </table>,
  )

describe('<TableRow />', () => {
  it('default render', () => {
    renderInTable(<TableRow />)

    const tr = screen.getByRole('row', {hidden: true})
    expect(tr).toBeEmptyDOMElement()
    expect(tr).toHaveClass('bg-white even:bg-gray-50')
  })

  it('should render children', () => {
    const children = <td data-testid="test" />
    renderInTable(<TableRow>{children}</TableRow>)

    const tr = screen.getByRole('row')
    expect(tr).not.toHaveAttribute('aria-hidden', true)
    expect(screen.getByTestId('test')).not.toEqual(null)
  })
})
