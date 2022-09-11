import {forwardRef, TableHTMLAttributes, useMemo} from 'react'
import {TableContext} from './TableContext'

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  stickyHeader?: boolean
}

const tableClasses = 'min-w-full border-separate border-spacing-0'

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (inProps, ref) => {
    const {stickyHeader = false, className, ...other} = inProps

    const classes = [className, tableClasses].filter(Boolean).join(' ')

    const table = useMemo(
      () => ({
        stickyHeader,
      }),
      [stickyHeader],
    )

    return (
      <TableContext.Provider value={table}>
        <table ref={ref} className={classes} {...other} />
      </TableContext.Provider>
    )
  },
)

Table.displayName = 'Table'
