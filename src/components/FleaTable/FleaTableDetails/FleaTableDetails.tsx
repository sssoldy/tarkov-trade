import {useApolloClient} from '@apollo/client'
import {InfoCard} from '@UI'
import {formatToTimeAgo} from '@utils'
import {
  FleaTableDetailsFragment,
  FleaTableDetailsFragmentDoc,
} from 'src/generated-types'

type Purpose =
  | 'bartersFor'
  | 'bartersUsing'
  | 'craftsFor'
  | 'craftsUsing'
  | 'receivedFromTasks'
  | 'usedInTasks'

type PurposesDictionary = Record<Purpose, string>

interface FleaTableDataDetailsProps {
  id: string
}

const getBadges = (item: FleaTableDetailsFragment) => {
  const purposes: PurposesDictionary = {
    bartersFor: 'Нужен для обмена',
    bartersUsing: 'Можно обменять',
    craftsFor: 'Нужен для крафта',
    craftsUsing: 'Можно изготовить',
    receivedFromTasks: 'Награда за квест',
    usedInTasks: 'Нужен для квеста',
  }

  let purposesNames: [string] = ['']
  Object.entries(purposes).forEach(([purposeKey, purposeValue]) => {
    const itemKey = purposeKey as keyof FleaTableDetailsFragment
    const purposeField = item[itemKey]
    if (Array.isArray(purposeField) && purposeField.length)
      purposesNames.push(purposeValue)
  })

  return purposesNames.filter(Boolean)
}

export const FleaTableDetails = ({id}: FleaTableDataDetailsProps) => {
  const client = useApolloClient()
  const details = client.readFragment({
    id,
    fragmentName: 'FleaTableDetails',
    fragment: FleaTableDetailsFragmentDoc,
  })

  if (!details) return null

  const title = details.name || `unknown-item ${details.id}`
  const imgSrc =
    details.iconLink || 'https://assets.tarkov.dev/unknown-item-icon.jpg'
  const category = details.category?.name
  const badges = getBadges(details)
  const updatedTimeAgo = details.updated
    ? formatToTimeAgo(details.updated)
    : undefined

  return (
    <InfoCard
      title={title}
      imgSrc={imgSrc}
      category={category}
      updatedTime={updatedTimeAgo}
      badges={badges}
    />
  )
}
