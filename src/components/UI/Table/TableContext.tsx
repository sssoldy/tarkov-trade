import {createContext, useContext} from 'react'

export interface ITableContext {
  stickyHeader: boolean
}

export const TableContext = createContext<ITableContext>({
  stickyHeader: false,
})
TableContext.displayName = 'TableContext'

export const useTableContext = () => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error('useTableContext must be used within a <Table/>')
  }

  return context
}
