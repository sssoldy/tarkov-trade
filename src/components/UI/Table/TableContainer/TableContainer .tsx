import {forwardRef, HTMLAttributes} from 'react'

interface TableContainerProps extends HTMLAttributes<HTMLDivElement> {}

const tableContainerClasse = 'overflow-x-auto'

export const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>(
  (inProps, ref) => {
    const {className, ...other} = inProps

    const classes = [className, tableContainerClasse].filter(Boolean).join(' ')

    return <div ref={ref} className={classes} {...other} />
  },
)

TableContainer.displayName = 'TableContainer'
