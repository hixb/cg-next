'use client'

import { Carousel } from '@arco-design/web-react'
import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Header from '@/components/base/Header'

export default function Home() {
  const swiperList = [
    { image: '/2024-01-25/kzlkMiC6unw5pgSoOxXmY4IOf.jpeg', link: '/' },
    { image: '/2024-02-02/IrUl2KqGhbPNpmVrxkHhRDOPN.jpeg', link: '/' },
    { image: '/2024-01-27/ii8zCYKp92sbL98Rof13jo8Ts.jpeg', link: '/' },
  ]

  return (
    <>
      <Header></Header>
      <main className={clsx('text-[var(--primary-6)] text-lg cursor-pointer w-[1920px] mx-auto')}>
        <Carousel autoPlay>
          {
            swiperList.map(v => (
              <Link href={'/'} key={v.link}>
                <img src={`https://down.cg99.com/v1/boss/productions${v.image}?x-oss-process=image/resize,h_450`} alt="" />
              </Link>
            ))
          }
        </Carousel>
      </main>
    </>
  )
}
