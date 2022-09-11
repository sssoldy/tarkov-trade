import {render, RenderOptions, screen} from '@testing-library/react'
import {ProviderProps, ReactNode} from 'react'
import {ITableCellContext, TableCellContext} from '../TableCellContext'
import {TableCell} from './TableCell'

interface RenderWithContextOptions {
  providerProps?: ProviderProps<ITableCellContext>
  optionsProps?: Omit<RenderOptions, 'wrapper'>
}

const defaultContextProps: ProviderProps<ITableCellContext> = {
  value: {variant: 'body'},
}

const renderWithContext = (
  ui: ReactNode,
  {
    providerProps = defaultContextProps,
    optionsProps,
  }: RenderWithContextOptions = {},
) => {
  return render(
    <table>
      <TableCellContext.Provider {...providerProps}>
        <tbody>
          <tr>{ui}</tr>
        </tbody>
      </TableCellContext.Provider>
    </table>,
    optionsProps,
  )
}

describe('<TableCell />', () => {
  it('default render', () => {
    renderWithContext(<TableCell />)

    const td = screen.getByRole('cell', {hidden: true})
    expect(td).toBeEmptyDOMElement()
    expect(td).toHaveAttribute('align', 'left')
    expect(td).toHaveClass('px-3 py-3.5')
  })

  it('should render children', () => {
    const children = <p data-testid="test" />
    renderWithContext(<TableCell>{children}</TableCell>)

    const td = screen.getByRole('cell')
    expect(td).not.toHaveAttribute('aria-hidden', true)
    expect(screen.getByTestId('test')).not.toEqual(null)
  })

  describe('context: tableCellContext', () => {
    it('should render cell as <td> when `variant: "body"`', () => {
      const providerProps: ProviderProps<ITableCellContext> = {
        value: {variant: 'body'},
      }
      renderWithContext(<TableCell />, {providerProps})
      screen.getByRole('cell', {hidden: true})
    })

    it('should render cell as <td> when `variant: "footer"`', () => {
      const providerProps: ProviderProps<ITableCellContext> = {
        value: {variant: 'footer'},
      }
      renderWithContext(<TableCell />, {providerProps})
      screen.getByRole('cell', {hidden: true})
    })

    it('should render cell as <th> when `variant: "head"`', () => {
      const providerProps: ProviderProps<ITableCellContext> = {
        value: {variant: 'head'},
      }
      renderWithContext(<TableCell />, {providerProps})
      screen.getByRole('columnheader', {hidden: true})
    })
  })
})
