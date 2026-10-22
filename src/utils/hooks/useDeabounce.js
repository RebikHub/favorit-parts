import { useEffect } from "react"
import { useState } from "react"

export const useDebounce = ({
  initValue, delay = 500
}) => {
  const [value, setValue] = useState(initValue)

  useEffect(() => {
    let timer = null

    timer = setTimeout(() => {
      setValue(initValue)
    }, delay)

    return () => {
      if (timer) clearTimeout(timer)
    }

  }, [delay, initValue])

  return value
}
