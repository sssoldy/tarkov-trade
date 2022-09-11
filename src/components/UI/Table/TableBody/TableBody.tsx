import {forwardRef, HTMLAttributes} from 'react'
import {ITableCellContext, TableCellContext} from '../TableCellContext'

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

const cell: ITableCellContext = {
  variant: 'body',
}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (inProps, ref) => {
    const props = inProps

    return (
      <TableCellContext.Provider value={cell}>
        <tbody ref={ref} {...props} />
      </TableCellContext.Provider>
    )
  },
)

TableBody.displayName = 'TableBody'
