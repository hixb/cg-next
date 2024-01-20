'use client'

import React from 'react'
import clsx from 'clsx'
import { Button } from '@arco-design/web-react'
import { useTheme } from 'next-themes'
import Header from '@/components/base/Header'

export default function Home() {
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    theme && handleThemeChange(theme)
  }, [theme])

  function changeTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
    handleThemeChange(newTheme)
  }

  function handleThemeChange(theme: string) {
    if (theme === 'dark')
      document.body.setAttribute('arco-theme', 'dark')
    else
      document.body.removeAttribute('arco-theme')
  }

  return (
    <>
      <Header></Header>
      <main className={clsx('text-[var(--primary-6)] text-lg cursor-pointer')}>
        <Button type="primary" onClick={changeTheme}>Hello Arco</Button>
        hello
      </main>
    </>
  )
}
