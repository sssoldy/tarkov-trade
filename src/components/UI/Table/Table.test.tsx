import {render, screen} from '@testing-library/react'
import {Table} from './Table'
import {ITableContext, useTableContext} from './TableContext'

describe('<Table />', () => {
  it('default render', () => {
    render(<Table />)

    const table = screen.getByRole('table')
    expect(table).toBeEmptyDOMElement()
  })

  it('should render children', () => {
    const children = <thead data-testid="test" />
    render(<Table>{children}</Table>)

    const table = screen.getByRole('table')
    expect(table).not.toBeEmptyDOMElement()

    const childrenRoot = screen.getByTestId('test')
    expect(childrenRoot).not.toEqual(null)
  })

  describe('context: TableContext', () => {
    it('should define `stickyHeader` in the child context', () => {
      let context: ITableContext | null = null
      function Consumer() {
        context = useTableContext()
        return null
      }
      render(
        <Table stickyHeader>
          <Consumer />
        </Table>,
      )

      expect(context).not.toEqual(null)
      expect(context!.stickyHeader).toBeTruthy()
    })
  })
})
