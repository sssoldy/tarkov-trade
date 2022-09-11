import {forwardRef, HTMLAttributes} from 'react'

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

const tableRowClasses = 'bg-white even:bg-gray-50'

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (inProps, ref) => {
    const {className, ...other} = inProps

    const classes = [className, tableRowClasses].filter(Boolean).join(' ')

    return (
      <tr
        ref={ref}
        aria-hidden={other.children ? undefined : true}
        className={classes}
        {...other}
      />
    )
  },
)

TableRow.displayName = 'TableRow'
