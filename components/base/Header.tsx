import { Dropdown, Grid, Menu, Switch } from '@arco-design/web-react'
import { IconDown, IconMoon, IconSun } from '@arco-design/web-react/icon'
import { useTheme } from 'next-themes'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface FoundationMenu {
  title: string
  ident: string
  droplist?: React.JSX.Element
}

export default function Header() {
  const { theme, setTheme } = useTheme()

  const userList: FoundationMenu[] = [
    { title: '登录', ident: 'login' },
    { title: '|', ident: 'line' },
    { title: '注册', ident: 'register' },
  ]

  const menus: FoundationMenu[] = [
    {
      title: '发布',
      ident: 'releases',
      droplist: handleDroplist([
        { title: '发布模型', ident: 'model' },
        { title: '发布资源', ident: 'resource' },
        { title: '发布作品', ident: 'works' },
        { title: '发布文章', ident: 'article' },
        { title: '发布壁纸', ident: 'wallpaper' },
      ]),
    },
    { title: '签到', ident: 'sign', droplist: undefined },
    { title: '充值', ident: 'recharge', droplist: undefined },
    {
      title: '消息',
      ident: 'message',
      droplist: handleDroplist([
        { title: '系统消息', ident: 'system' },
        { title: '站内信', ident: 'site' },
        { title: '评论', ident: 'comment' },
        { title: '关注', ident: 'concern' },
        { title: '获赞', ident: 'like' },
        { title: '课程留言', ident: 'course' },
      ]),
    },
  ]

  const navs = [
    {
      title: '首页',
      link: '/',
      subLinks: null,
    },
    {
      title: 'CG模型',
      link: '/',
      subLinks: {
        left: [
          { title: '' },
        ],
      },
    },
  ]

  React.useEffect(() => {
    theme && handleThemeChange(theme)
  }, [theme])

  function handleDroplist(list: FoundationMenu[]) {
    return (
      <Menu>
        {
          list.map(v => (
            <Menu.Item key={v.ident}>
              <Link href={''}>{v.title}</Link>
            </Menu.Item>
          ))
        }
      </Menu>
    )
  }

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
    <header className={clsx('w-full h-20 bg-[var(--color-bg-2)]')}>
      <Grid.Row className={'px-10'}>
        <Grid.Col flex={'260px'}>
          <h1 className={'flex items-center m-0'}>
            <Link href={'/'}>
              <Image src="https://www.cg99.com/image/logo.png" width={130} height={70} alt="" />
            </Link>
            <Image src="https://www.cg99.com/image/slogen.png" width={130} height={80} alt="" />
          </h1>
        </Grid.Col>
        <Grid.Col flex={'auto'}>Menu</Grid.Col>
        <Grid.Col flex={'80px'} className={'flex items-center justify-center h-20'}>
          <Switch checkedIcon={<IconSun />} uncheckedIcon={<IconMoon />} size="default" onChange={changeTheme} />
        </Grid.Col>
        <Grid.Col flex={'200px'} className={'h-20 flex items-center justify-between'}>
          {
            menus.map(v => (
              <Dropdown droplist={v.droplist} position='bottom' key={v.ident}>
                <div className={'w-full h-full flex items-center justify-center'}>
                  <div className={'hover:text-[var(--my-primary-6)] cursor-pointer'}>
                    {v.title}
                    { v.droplist ? <IconDown /> : null }
                  </div>
                </div>
              </Dropdown>
            ))
          }
        </Grid.Col>
        <Grid.Col flex={'116px'} className={'flex items-center justify-center h-20'}>
          {
            userList.map(item =>
              <span
                key={item.ident}
                className={clsx('cursor-pointer hover:text-[var(--my-primary-6)]', { 'mx-2.5 !text-[var(--color-text-1)] !cursor-default': item.ident === 'line' })}
              >
                {item.title}
              </span>,
            )
          }
        </Grid.Col>
      </Grid.Row>
    </header>
  )
}
