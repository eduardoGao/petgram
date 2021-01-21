import { useState, useEffect, useRef } from "react"

export function useIntersectionObserver() {
  const reference = useRef(null)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import("intersection-observer")
    )
      .then(() => {

        const observer = new window.IntersectionObserver((entries) => {

          const { isIntersecting } = entries[0]

          if (isIntersecting) {
            setIsShow(true)
            observer.disconnect()
          }
        })

        observer.observe(reference.current)
      })

  }, [reference])

  return [isShow, reference]

}