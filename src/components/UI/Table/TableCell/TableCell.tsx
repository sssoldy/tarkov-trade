import {forwardRef} from 'react'
import {useTableCellContext} from '../TableCellContext'
import {TdHTMLAttributes} from 'react'
import {useTableContext} from '../TableContext'

interface TableCellProps
  extends TdHTMLAttributes<HTMLTableCellElement>,
    TdHTMLAttributes<HTMLTableCellElement> {}

const thClasses = 'font-semibold bg-gray-50 border-b border-b-gray-200'
const thStickyClasses =
  'sticky top-0 z-10 bg-opacity-75 backdrop-blur backdrop-filter'

const commonCellClasses = 'py-3.5 px-3'

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  (inProps, ref) => {
    const cell = useTableCellContext()
    const isHeadCell = cell.variant === 'head'
    const Component = isHeadCell ? 'th' : 'td'

    const table = useTableContext()
    const isStickyHeader = isHeadCell && table.stickyHeader

    const {align = 'left', className, ...other} = inProps

    const classes = [
      className,
      commonCellClasses,
      isHeadCell && thClasses,
      isStickyHeader && thStickyClasses,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Component
        ref={ref}
        aria-hidden={other.children ? undefined : true}
        align={align}
        className={classes}
        {...other}
      />
    )
  },
)

TableCell.displayName = 'TableCell'
