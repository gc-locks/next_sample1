import React from 'react'

export default function Item(props: { data: { id: string; current: string } }) {
  return <div>{props.data.id}</div>
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const date = new Date()
  const current = date.toLocaleString()
  return {
    props: {
      data: {
        id: params.id,
        current,
      },
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  return {
    paths: [1, 2, 3, 4, 5].map((i) => ({
      params: {
        id: `${i}`,
      },
    })),
    fallback: false,
  }
}
