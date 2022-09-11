import {createContext, useContext} from 'react'

export interface ITableCellContext {
  variant: 'head' | 'body' | 'footer'
}

export const TableCellContext = createContext<ITableCellContext>({
  variant: 'body',
})
TableCellContext.displayName = 'TableCellContext'

export const useTableCellContext = () => {
  const context = useContext(TableCellContext)
  if (!context) {
    throw new Error(
      'useTableCell must be used within a <TableHead />, <TableBody />, <TableFooter />',
    )
  }

  return context
}
