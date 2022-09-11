import {render, screen} from '@testing-library/react'
import {ReactNode} from 'react'
import {ITableCellContext, useTableCellContext} from '../TableCellContext'
import {TableHead} from './TableHead'

const renderInTable = (node: ReactNode) => render(<table>{node}</table>)

describe('<TableHead />', () => {
  it('default render', () => {
    renderInTable(<TableHead />)

    const thead = screen.getByRole('rowgroup')
    expect(thead).toBeEmptyDOMElement()
  })

  it('should render children', () => {
    const children = <tr data-testid="test" />
    renderInTable(<TableHead>{children}</TableHead>)

    const thead = screen.getByRole('rowgroup')
    expect(thead).not.toBeEmptyDOMElement()

    const childrenRoot = screen.getByTestId('test')
    expect(childrenRoot).not.toEqual(null)
  })

  describe('context: tableCellContext', () => {
    it('should define `head` in the child context', () => {
      let context: ITableCellContext | null = null
      function Consumer() {
        context = useTableCellContext()
        return null
      }
      renderInTable(
        <TableHead>
          <Consumer />
        </TableHead>,
      )

      expect(context).not.toEqual(null)
      expect(context!.variant).toBe('head')
    })
  })
})
