import React from 'react'

export default function SSR({ current }) {
  return <div>{current}</div>
}

export async function getServerSideProps() {
  const date = new Date()
  const current = date.toLocaleString()
  return {
    props: {
      current,
    },
  }
}
