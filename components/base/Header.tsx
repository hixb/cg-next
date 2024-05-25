'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Avatar, Button, Dropdown, Input, Menu, Message, Modal, Tooltip } from '@arco-design/web-react'
import {
  IconBold, IconBug,
  IconCamera,
  IconDown,
  IconExperiment,
  IconSearch,
  IconTranslate,
  IconUpload,
} from '@arco-design/web-react/icon'
import autoAnimate from '@formkit/auto-animate'
import clsx from 'clsx'

import { REC } from '@/components/auth/Rac'

interface NavInterface {
  title: string
  link: string
  sub?: NavInterface[]
}

interface DefinedPropsTypes {
  useBackground?: 'blur' | 'dark' | 'normal'
  useMode?: 'static' | 'fixed' | 'sticky'
}

export default function Header(props: DefinedPropsTypes) {
  const { useBackground = 'blur', useMode = 'fixed' } = props

  const [avatarState, setAvatarState] = React.useState(false)
  const useUserAuth = React.useRef<HTMLDivElement | null>(null)

  const [inputValue, setInputValue] = React.useState('')

  React.useEffect(() => {
    const current = useUserAuth.current

    current && autoAnimate(current)
  }, [useUserAuth])

  const navs: NavInterface[] = [
    { title: '首页', link: '/', sub: [] },
    { title: 'CG模型', link: '/', sub: [] },
    { title: 'CG资源', link: '/', sub: [] },
    { title: 'VIP专区', link: '/', sub: [] },
    { title: '作品', link: '/', sub: [] },
    { title: '课程', link: '/', sub: [] },
    { title: 'AI创作', link: '/', sub: [] },
    { title: '数字人生', link: '/', sub: [] },
    {
      title: '更多',
      link: '/',
      sub: [
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
      ],
    },
  ]

  const menus = [
    {
      icon: <IconUpload style={{ fontSize: 24 }} />,
      title: '发布',
      link: '/',
      sub: [
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
        { title: '哈哈哈哈哈哈', link: '/' },
      ],
    },
    { icon: <IconBold style={{ fontSize: 24 }} />, title: '充值', link: '/' },
    { icon: <IconExperiment style={{ fontSize: 24 }} />, title: '购物车', link: '/' },
  ]

  function changeLoginState() {
    REC.Login.State(true, () => console.error(1))

    if (avatarState) {
      const modalIns = Modal.confirm({
        title: '提示',
        content: '是否退出登录?',
        okButtonProps: {
          status: 'danger',
        },
        onOk: async () => {
          try {
            return await new Promise(
              (resolve, reject) => setTimeout(() => {
                setAvatarState(!avatarState)
                Message.success('已退出登录')
                modalIns.close()
                return Math.random() > 0.5 ? resolve : reject
              }, 1000),
            )
          }
          catch (evt) {
            modalIns.close()
            Message.error('Error occurs!')
            throw evt
          }
        },
      })
    }
    else {
      Message.success('已登录')
      setAvatarState(!avatarState)
    }
  }

  return (
    <header
      className={clsx(
        [
          'max-w-1920 w-full h-80 px-88 flex items-center justify-between',
          useBackground === 'blur' ? 'backdrop-blur-sm' : useBackground === 'dark' ? 'bg-[#171717]' : '',
          [
            useMode,
            {
              'left-1/2 -translate-x-1/2': useMode === 'fixed',
              'top-0 z-10': (['sticky', 'fixed'] as DefinedPropsTypes['useMode'][]).includes(useMode),
            },
          ],
        ],
      )}
    >
      <div className={clsx('flex items-center')}>
        <h1>
          <Link href="/" className={clsx('flex')}>
            <Image
              loading="eager"
              src="/static/site/logo.png"
              alt="CG99设计网-数字艺术共生平台"
              width={130}
              height={70}
            />
            <Image
              loading="eager"
              className={clsx('ml-6')}
              src="/static/site/slogan.png"
              alt="数字艺术共生平台"
              width={130}
              height={80}
            />
          </Link>
        </h1>
        <ul className={clsx('ml-41 flex')}>
          {
            navs.map((nav, index) => (
              <li key={index} className={clsx('ml-35 first:ml-0 hover:text-special', { 'text-special': index === 0 })}>
                {
                  nav.sub?.length
                    ? (
                      <Dropdown
                        position="bottom"
                        droplist={(
                          <Menu>
                            {
                              nav.sub.map((sub, subIndex) => (
                                <Menu.Item key={String(subIndex)}>
                                  <Link href={sub.link} title={sub.title}>
                                    {sub.title}
                                  </Link>
                                </Menu.Item>
                              ))
                            }
                          </Menu>
                        )}
                      >
                        <Link href={nav.link} title={nav.title}>
                          {nav.title}
                          <IconDown style={{ fontSize: 12, marginLeft: 6 }} />
                        </Link>
                      </Dropdown>
                      )
                    : (
                      <Link href={nav.link} title={nav.title}>
                        {nav.title}
                      </Link>
                      )
                }
              </li>
            ))
          }
        </ul>
      </div>
      <div className={clsx('flex items-center h-full')}>
        <Dropdown
          position="bl"
          trigger="click"
          droplist={(
            <Menu style={{ width: 284 }}>
              {
                Array.from({ length: 10 }).map((_, index) => (
                  <Menu.Item key={String(index)} onClick={() => setInputValue(`Menu Item ${index}`)}>
                    Menu Item{index}
                  </Menu.Item>
                ))
              }
            </Menu>
          )}
        >
          <Input
            style={{ width: 284, height: 38 }}
            prefix={<IconSearch style={{ fontSize: 20 }} />}
            suffix={<IconCamera style={{ fontSize: 20 }} />}
            placeholder="搜索作品、素材、创作人、机构"
            allowClear
            value={inputValue}
            onChange={e => setInputValue(e.replace(/[<>[\]]/, ''))}
          />
        </Dropdown>
        <div className={clsx('flex items-center ml-24')}>
          {
            menus.map(menu => (
              menu.sub?.length
                ? (
                  <Dropdown
                    droplist={(
                      <Menu>
                        {
                          menu.sub.map((sub, subIndex) => (
                            <Menu.Item key={String(subIndex)} className={clsx('hover:text-special')}>
                              <Link href={sub.link} title={sub.title}>
                                <IconBug className={clsx('mr-5')} />
                                {sub.title}
                              </Link>
                            </Menu.Item>
                          ))
                        }
                      </Menu>
                    )}
                    position="bottom"
                    key={menu.title}
                  >
                    <Link
                      className={clsx('flex flex-col items-center ml-26 first:ml-0 hover:text-special')}
                      href={menu.link}
                      key={menu.title}
                    >
                      {menu.icon}
                      <span>{menu.title}</span>
                    </Link>
                  </Dropdown>
                  )
                : (
                  <Link className={clsx('flex flex-col items-center ml-26 first:ml-0 hover:text-special')} href={menu.link} key={menu.title}>
                    {menu.icon}
                    <span>{menu.title}</span>
                  </Link>
                  )
            ))
          }
        </div>
        <div className={clsx('w-99 flex items-center justify-center h-full ml-24 select-none')} ref={useUserAuth}>
          {
            !avatarState
              ? (
                <Button onClick={changeLoginState} className={clsx('h-38 rounded-full')} type="primary">
                  <span className={clsx('after:content-["|"] after:mx-5')}>登录</span>
                  <span>注册</span>
                </Button>
                )
              : (
                <Avatar className={clsx('border border-white')} onClick={changeLoginState} size={48}>
                  Hello
                </Avatar>
                )
          }
        </div>
        <Dropdown
          position="bottom"
          trigger="click"
          droplist={(
            <Menu>
              {
                ['简体中文 (默认)', 'English'].map(lang => <Menu.Item key={lang}>{lang}</Menu.Item>)
              }
            </Menu>
          )}
        >
          <Tooltip position='bottom' trigger='hover' content='更改语言 (Change Language)'>
            <IconTranslate className={clsx('ml-24 cursor-pointer hover:text-special')} style={{ fontSize: 38 }} />
          </Tooltip>
        </Dropdown>
      </div>
    </header>
  )
}
