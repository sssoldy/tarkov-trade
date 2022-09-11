import {forwardRef, HTMLAttributes} from 'react'
import {ITableCellContext, TableCellContext} from '../TableCellContext'

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {}

const cell: ITableCellContext = {
  variant: 'head',
}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  (inProps, ref) => {
    const props = inProps

    return (
      <TableCellContext.Provider value={cell}>
        <thead ref={ref} {...props} />
      </TableCellContext.Provider>
    )
  },
)

TableHead.displayName = 'TableHead'
