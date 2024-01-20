'use client'

import React from 'react'
import clsx from 'clsx'
import { Button } from '@arco-design/web-react'

export default function Home() {
  const [isPlaying, setIsPlaying] = React.useState(false)

  return (
    <main className={clsx('text-red-100 text-lg transition-all delay-150 cursor-pointer', { 'text-3xl': isPlaying })} onClick={() => setIsPlaying(!isPlaying)}>
      <Button type="primary">Hello Arco</Button>
    </main>
  )
}
