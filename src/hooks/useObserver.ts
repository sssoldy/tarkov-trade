import {useRef, useEffect} from 'react'

export const useObserver = (
  ref: React.RefObject<HTMLTableRowElement>,
  canProcess: boolean,
  canLoad: boolean,
  cb: VoidFunction,
) => {
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (!canProcess) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting && canLoad) {
          console.log('useObserver')
          cb()
        }
      },
      {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px 0px 500px 0px',
        threshold: 0,
      },
    )

    if (!ref.current) return
    observer.current.observe(ref.current)
  }, [canLoad, canProcess, cb, ref])
}
