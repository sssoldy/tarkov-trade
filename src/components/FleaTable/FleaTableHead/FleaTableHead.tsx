import {TableHead, TableRow, TableCell} from '@UI'

export const FleaTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell className="border-r border-r-gray-200">
          Предложение
        </TableCell>
        <TableCell align="right">Купить</TableCell>
        <TableCell align="right">Продать</TableCell>
      </TableRow>
    </TableHead>
  )
}
