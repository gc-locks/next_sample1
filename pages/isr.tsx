import React from 'react'
import Link from 'next/link'

export default function ISR({ current }) {
  return (
    <div>
      <ul>
        {[1, 2, 3, 4, 5].map((i) => (
          <li>
            <Link href={`/isr_items/${i}`}>
              <a>{i}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const date = new Date()
  const current = date.toLocaleString()
  return {
    props: {
      current,
    },
    revalidate: 50,
  }
}
