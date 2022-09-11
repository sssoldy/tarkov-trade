import {Fragment} from 'react'
import {Badge} from '../Badge'

interface InfoCardProps {
  title: string
  imgSrc: string
  category?: string
  updatedTime?: string
  badges?: string[]
}

export const InfoCard = ({
  title,
  imgSrc,
  category,
  updatedTime,
  badges,
}: InfoCardProps) => {
  const meta = [category, updatedTime].filter(Boolean).map((meta, idx) => (
    <Fragment key={meta}>
      {idx !== 0 && <span aria-hidden="true">·</span>}
      <span>{meta}</span>
    </Fragment>
  ))

  return (
    <div className="flex">
      <div className="flex-shrink-0 w-12 h-12">
        <img className="w-12 h-12 rounded-lg" src={imgSrc} alt={title} />
      </div>
      <div className="ml-4">
        <div className="font-semibold text-gray-900">{title}</div>
        {meta && (
          <p className="flex space-x-2 text-gray-500 whitespace-nowrap">
            {meta.map(meta => meta)}
          </p>
        )}
        {badges && (
          <p className="flex flex-wrap gap-2 mt-1">
            {badges.map(badge => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </p>
        )}
      </div>
    </div>
  )
}
