export interface StatusMessageProps {
  title: string
  description: string
  icon: React.ReactNode
  button?: React.ReactNode
}

export const StatusMessage = ({
  title,
  description,
  icon,
  button,
}: StatusMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="max-w-xl px-4 sm:flex">
        {icon}
        <div className="sm:ml-6">
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-1 text-base text-gray-500">{description}</p>
          </div>
          {button && (
            <div className="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              {button}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
