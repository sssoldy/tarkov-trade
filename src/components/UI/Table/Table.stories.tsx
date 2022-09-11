import {build, fake, sequence} from '@jackfranklin/test-data-bot'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Input} from '../Input'
import {WithIcon} from '../Input/Input.stories'
import {Table} from './Table'
import {TableBody} from './TableBody'
import {TableCell} from './TableCell'
import {TableContainer} from './TableContainer/TableContainer '
import {TableHead} from './TableHead'
import {TableRow} from './TableRow'

export default {
  title: 'UI/Table',
  component: Table,
  parameters: {
    controls: {exclude: ['stickyHeader']},
  },
} as ComponentMeta<typeof Table>

interface IPlainData {
  id: number
  field1: string
  field2: string
  field3: string
}
const plainDataBuilder = build<IPlainData>('PlainData', {
  fields: {
    id: sequence(),
    field1: fake(f => f.lorem.word()),
    field2: fake(f => f.lorem.word()),
    field3: fake(f => f.lorem.word()),
  },
})
const plainData = Array.from({length: 20}, () => plainDataBuilder())

interface INestedData {
  id: number
  title: string
  field1: string[]
  field2: string[]
}
const nestedDataBuilder = build<INestedData>('NestedData', {
  fields: {
    id: sequence(),
    title: fake(f => f.lorem.word()),
    field1: fake(f =>
      Array.from({length: Math.random() * 10}, () => f.lorem.word()),
    ),
    field2: fake(f =>
      Array.from({length: Math.random() * 10}, () => f.lorem.word()),
    ),
  },
})
const nestedData = Array.from({length: 20}, () => nestedDataBuilder())

export const Default: ComponentStory<typeof Table> = (args: any) => (
  <div className="overflow-hidden rounded-md shadow ring-1 ring-gray-200">
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Column #1</TableCell>
            <TableCell>Column #2</TableCell>
            <TableCell>Column #3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plainData.map(data => (
            <TableRow key={data.id}>
              <TableCell>{data.field1}</TableCell>
              <TableCell>{data.field2}</TableCell>
              <TableCell>{data.field3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)

export const StickyHeader: ComponentStory<typeof Table> = (args: any) => (
  <div className="overflow-hidden rounded-md shadow ring-1 ring-gray-200">
    <TableContainer className="max-h-[calc(100vh-32px)]">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Column #1</TableCell>
            <TableCell>Column #2</TableCell>
            <TableCell>Column #3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plainData.map(data => (
            <TableRow key={data.id}>
              <TableCell>{data.field1}</TableCell>
              <TableCell>{data.field2}</TableCell>
              <TableCell>{data.field3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)

export const WithFilter: ComponentStory<typeof Table> = (args: any) => (
  <div className="overflow-hidden divide-y divide-gray-200 shadow ring-1 ring-gray-200 xl:rounded-md">
    <div className="sticky top-0 z-10 p-4 bg-gray-50">
      <Input
        {...WithIcon}
        id="with-icon"
        value="search query"
        onChange={() => {}}
      />
    </div>
    <TableContainer className="max-h-[calc(100vh-102px)]">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Column #1</TableCell>
            <TableCell>Column #2</TableCell>
            <TableCell>Column #3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plainData.map(data => (
            <TableRow key={data.id}>
              <TableCell>{data.field1}</TableCell>
              <TableCell>{data.field2}</TableCell>
              <TableCell>{data.field3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)

const calcLargestNumOfOffers = (...arrs: number[]) => Math.max(...arrs)

export const NestedData: ComponentStory<typeof Table> = (args: any) => (
  <div className="overflow-hidden divide-y divide-gray-200 shadow ring-1 ring-gray-200 xl:rounded-md">
    <div className="sticky top-0 z-10 p-4 bg-gray-50">
      <Input
        {...WithIcon}
        id="with-icon"
        value="search query"
        onChange={() => {}}
      />
    </div>
    <TableContainer className="max-h-[calc(100vh-102px)]">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className="border-r border-r-gray-200">
              Column One
            </TableCell>
            <TableCell>Column Two</TableCell>
            <TableCell>Column Three</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nestedData.map(data => {
            const largestNumOfOffers = calcLargestNumOfOffers(
              data.field1.length,
              data.field2.length,
            )

            return Array.from({length: largestNumOfOffers}, (_, idx) => {
              const isFirstRowInGroup = idx === 0
              const isLastRowInGroup = idx === largestNumOfOffers - 1
              const tempKey = data.id.toString().concat(':', idx.toString())

              const {field1, field2} = data

              const field1Data = field1 && field1[idx]
              const field2Data = field2 && field2[idx]

              return (
                <TableRow key={tempKey}>
                  {isFirstRowInGroup && (
                    <TableCell
                      rowSpan={largestNumOfOffers}
                      className="align-top bg-white border-b border-r border-r-gray-200 border-b-gray-200"
                    >
                      {data.title}
                    </TableCell>
                  )}

                  <TableCell
                    className={`${
                      isLastRowInGroup && 'border-b border-b-gray-200'
                    }`}
                  >
                    {field1Data && field1Data}
                  </TableCell>
                  <TableCell
                    className={`${
                      isLastRowInGroup && 'border-b border-b-gray-200'
                    }`}
                  >
                    {field2Data && field2Data}
                  </TableCell>
                </TableRow>
              )
            })
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)
