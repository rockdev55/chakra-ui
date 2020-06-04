import * as React from "react"
import { useSafeLayoutEffect } from "./useSafeLayoutEffect"

/**
 * React hook for performant `useCallbacks`
 *
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export function useEventCallback<E extends Event | React.SyntheticEvent>(
  callback: (event: E, ...args: any[]) => void,
) {
  const ref = React.useRef(callback)
  useSafeLayoutEffect(() => {
    ref.current = callback
  })
  return React.useCallback(
    (event: E, ...args: any[]) => ref.current(event, ...args),
    [],
  )
}
