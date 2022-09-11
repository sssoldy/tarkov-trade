import {render, screen} from '@testing-library/react'
import {ReactNode} from 'react'
import {ITableCellContext, useTableCellContext} from '../TableCellContext'
import {TableBody} from './TableBody'

const renderInTable = (node: ReactNode) => render(<table>{node}</table>)

describe('<TableBody />', () => {
  it('default render', () => {
    renderInTable(<TableBody />)

    const tbody = screen.getByRole('rowgroup')
    expect(tbody).toBeEmptyDOMElement()
  })

  it('should render children', () => {
    const children = <tr data-testid="test" />
    renderInTable(<TableBody>{children}</TableBody>)

    const tbody = screen.getByRole('rowgroup')
    expect(tbody).not.toBeEmptyDOMElement()

    const childrenRoot = screen.getByTestId('test')
    expect(childrenRoot).not.toEqual(null)
  })

  describe('context: tableCellContext', () => {
    it('should define `body` in the child context', () => {
      let context: ITableCellContext | null = null
      function Consumer() {
        context = useTableCellContext()
        return null
      }
      renderInTable(
        <TableBody>
          <Consumer />
        </TableBody>,
      )

      expect(context).not.toEqual(null)
      expect(context!.variant).toBe('body')
    })
  })
})
