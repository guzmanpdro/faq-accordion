function Details({ index, children }) {
  return (
    index === 0
      ? (
        <details open>
          {children}
        </details>
      )
      : (
        <details>
          {children}
        </details>
      )
  )
}

export default Details