'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button, Carousel, DatePicker, Select } from '@arco-design/web-react'
import { IconCodeSandbox, IconEye, IconUpload } from '@arco-design/web-react/icon'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import styles from './page.module.scss'

import Dialog from '@/components/feedback/Dialog'

export default function Home() {
  const [selectDate, setSelectDate] = React.useState('')
  const [visible, setVisible] = React.useState(false)

  const imageSrc = [
    'https://down.cg99.com/v1/boss/productions/2024-04-12/EznOODLZ5f914KYy7CrAFE2Yj.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-08/EvV1H00kMg6h0FmRaJczxDbYx.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-07/Gh4mCOpanztd7uxSEnnTtLfn3.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-07/xpxB4ZUR65UjwEVjTuCSRLYPc.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-03/VBKcJ0sQfVrW59GsiBaoxdxCe.jpeg',
  ]

  const modelCategories = [
    { title: '热门专辑', tip: 'Top albums', active: true },
    { title: '免费模型', tip: 'Free model', active: false },
    { title: '数字人模型', tip: 'Digital human model', active: false },
    { title: '建筑模型', tip: 'Architectural model', active: false },
    { title: '美女模型', tip: 'Beauty model', active: false },
    { title: '武器模型', tip: 'Weapon model', active: false },
    { title: '汽车模型', tip: 'Car models', active: false },
    { title: '更多模型', tip: 'More models', active: false },
  ]

  const words = [
    'https://down.cg99.com/v1/boss/productions/2024-04-02/j6XerKk7sfWrEhwOaGqDI3u5q.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-07/qFpQETbHzkuTGAL4vGJtdS2dJ.jpeg',
    'https://down.cg99.com/v1/production/2024-04-14/wQf2phnSE4QXQZmEpwGE3zcDBfrWWdnh.png',
    'https://down.cg99.com/v1/boss/productions/2024-03-18/WdVwmcU9WXi4gmd8Tud8WXWxn.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-11/MiKUiVusM5Vlu3Z3FCXDA4DKu.jpeg',
    'https://down.cg99.com/v1/production/2024-04-15/jkapSyWw8DXtGjAGpY5cGsPbf6Qd6nxe.jpg',
    'https://down.cg99.com/v1/boss/productions/2024-04-13/MXinLWeGPaHveDN5eZo8us7dv.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-11/DDC2Q16H4svU8L1SGEIOt0MYH.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-12/zJEKIRjoEpkCn9EUzQ7rnLTUT.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-12/ajkb3nKWMH7bekPMSkEBY2mca.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-11/DDC2Q16H4svU8L1SGEIOt0MYH.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-10/0wcT5PYjgJ52hMdXFyOGsxyhk.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-09/7gpKuIY672vNizFwDEtlyEiEe.jpeg',
    'https://down.cg99.com/v1/production/2024-04-08/daf2T5K8TDWwtbSDrzCZrmiPnwmbmA2M.png',
    'https://down.cg99.com/v1/boss/productions/2024-04-07/JgT7079tLWMvW9IbxuaQNZk5o.jpeg',
    'https://down.cg99.com/v1/production/2024-04-06/RcGNYspGQFBQHKnBNt5YQ7F8kZEpSWmz.jpg',
    'https://down.cg99.com/v1/boss/productions/2024-04-07/l5Fn3ZLcHjZn7SPkIXoMJAyph.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-04-03/XPM7kXNIgXfYYvvtTEgB3ec3t.jpeg',
    'https://down.cg99.com/v1/production/2024-04-03/nJBxfWJDKfzR6ziGFzACnaCm5jNWxATz.jpg',
    'https://down.cg99.com/v1/boss/productions/2024-03-22/vgOwoqp9lY8om2fD9axKkvxdb.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-03-18/gjDR7Ddrb3ZZusdhUxyLYuLsq.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-03-18/jHXbpuYb9w1fOE2MCy02zsgMU.jpeg',
    'https://down.cg99.com/v1/boss/productions/2024-03-18/hG8UUyhT69z1mTwWkUQkIx3AG.jpeg',
    'https://down.cg99.com/v1/production/2024-02-22/D6eEhxHbeGKfxmn6MSFFfBT7jpkNifn7.jpg',
    'https://down.cg99.com/v1/boss/productions/2023-12-12/1BrjXSnZFSZxFWhInWxo0GSVG.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-11-22/ZL0R1PPLv0WeKuMdVeNPvHYDX.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-11-22/ZL0R1PPLv0WeKuMdVeNPvHYDX.jpeg',
    'https://down.cg99.com/v1/production/2024-04-15/jkapSyWw8DXtGjAGpY5cGsPbf6Qd6nxe.jpg',
    'https://down.cg99.com/v1/boss/productions/2023-10-26/0l89NobjGAJqHD7HQ7yfrUOli.jpeg',
    'https://down.cg99.com/v1/production/2023-10-16/7HRA5iREmh6PCXrjkdkt3RK3TdcNXaQ3.jpg',
    'https://down.cg99.com/v1/production/2023-11-09/ebcaXKBtscRzW2nQmh4YNmxmFZnARF8N.jpg',
    'https://down.cg99.com/v1/production/2023-10-24/tbCEkGZHEG73wwxFPSQD7rme45RwanDf.JPG',
    'https://down.cg99.com/v1/boss/productions/2023-09-13/DBgAkmyMC1moxys8NtsclsNuh.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/q3LqxdVA1PzvXBFMmniwg2sKk.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/leRflasT7GZ2LN1wlsAhkWs56.jpg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/Ss3BopGEI39CL32P53DZ9Vg6U.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/xlHViX8ynVDabVPDhiVjyTOZQ.jpg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/EtR0NQOa0ojS4UHzEY8Adv9On.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/p7r6ium4g33LGUBBg9kRVfBQN.jpg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/5gZVQTc7mDVhD9nCUebr018lf.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/aCl1qagbXPaBZeCWrftsLsGwL.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/LpFhZEBUDt2ysKXaVxzloa0O1.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/PcE8wdiAus9iaLGvHObLN9YJX.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/L1WVOmn0GMhRpQz6usSrFKG2h.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/jk8bSow7ofezfVTDEd4AmOOrb.jpg',
    'https://down.cg99.com/v1/boss/productions/2023-08-24/RxB4rAkFxGWA8exfnG7A8QqoY.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-10-23/XEGwaY4NUQlhcZtwym19Ay00n.jpeg',
    'https://down.cg99.com/v1/boss/productions/2023-09-26/NVEnfVKVRV6T8xUagkC3qGaO4.jpeg',
  ]

  React.useEffect(() => console.error(selectDate), [selectDate])

  return (
    <main className={clsx('bg-[#0a0b17]')}>
      <Dialog visible={visible} onCancel={() => setVisible(false)}>
        <p>1</p>
      </Dialog>
      <Carousel
        className={clsx('mx-auto')}
        indicatorPosition="bottom"
        style={{ maxWidth: 1920, height: 600 }}
        autoPlay={{ interval: 500000 }}
        moveSpeed={1000}
      >
        {imageSrc.map((src, index) => (
          <div key={index}>
            <Link href="/">
              <Image
                loading="eager"
                src={src}
                alt={String(index)}
                width={1920}
                height={600}
                className={clsx('h-600 object-cover w-full')}
              />
            </Link>
            <div
              className={clsx('absolute bottom-24 right-88 bg-lightTransparent rounded-full py-5 px-12 flex items-center text-white text-xs hover:bg-translucent cursor-pointer transition-[var(--transition-base)]')}
            >
              <span className={clsx('text-[#989898]')}>图片来源：</span>
              <Image
                className={clsx('rounded-full ml-12 mr-5')}
                src="https://down.cg99.com/v1/user/2024-04-14/CFxArrFaytdaCkJby3WG5F5jKTPNPJ7M.jpg"
                alt=""
                width={20}
                height={20}
              />
              Longiam
            </div>
          </div>
        ))}
      </Carousel>
      <Button onClick={() => setVisible(!visible)} type="primary">你好</Button>
      <div className={clsx('w-1717 mx-auto mt-40')}>
        <ul className={clsx('flex items-center')}>
          {
            modelCategories.map((category, index) => (
              <li
                key={index}
                className={clsx('bg-[#1F2330] hover:bg-[#13384f] transition-[var(--transition-base)] cursor-pointer rounded-lg flex flex-col py-12 flex-1 ml-18 first:ml-0 pl-18 relative')}
              >
                <h5>{category.title}</h5>
                <span className={clsx('text-xs text-[#666] mt-2')}>{category.tip}</span>
                {
                  category.active
                    ? (
                      <div
                        className={clsx('absolute -bottom-3 -right-7 w-47 h-50')}
                        style={{ backgroundImage: 'url(/static/home/star.png)' }}
                      />
                      )
                    : null
                }
              </li>
            ))
          }
          <li
            className={clsx('w-296 bg-[#1F2330] rounded-lg py-12 flex-2 ml-18 px-18 relative flex items-center justify-between')}
          >
            <div className={clsx('text-xs text-[#666]')}>
              <p>轨道计轴器，车轮传感器</p>
              <span className={clsx('mt-2')}>出售成功 <em className={clsx('text-[#F3493D] font-bold')}>￥10</em></span>
            </div>
            <Button
              type="primary"
              shape="round"
              icon={<IconUpload style={{ fontSize: 19 }} />}
              className={clsx('flex items-center')}
            >
              上传模型
            </Button>
          </li>
        </ul>
        <Swiper className={clsx('mt-18')} slidesPerView={7} spaceBetween={18}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
              <SwiperSlide
                key={index}
                className={clsx('h-307 overflow-hidden border border-[#1d222e] rounded-lg relative hover:-translate-y-0.5 transition-[var(--transition-base)]')}
              >
                <div
                  className={clsx('bg-translucent rounded-full px-8 py-2 text-white absolute top-14 left-14 font-normal text=xs')}
                >
                  <IconCodeSandbox style={{ fontSize: 14, marginRight: 5 }} />
                  {index * 10}
                </div>
                <Image
                  src={`/static/home/swiper_${num}.png`}
                  alt=""
                  width={236}
                  height={307}
                  className={clsx('object-cover h-307')}
                />
                {
                  index % 3 === 0 && (
                  <div
                    className={clsx('absolute left-0 bottom-8 rounded-xl w-[calc(100%-16px)] mx-8 p-8 border border-[#313440] opacity-70 bg-[#0F121C]')}
                  >
                    <h5 className={clsx('text-white text-xs font-bold line-clamp-1')}>/角色模型</h5>
                    <p className={clsx('mt-4 text-xs line-clamp-2')}>
                      .max、.c4d、.blender、.fbx、.tbscene、.obi、UE5、UE4、.ma/mb
                    </p>
                  </div>
                  )
                }
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className={clsx('flex items-center justify-between mt-46')}>
          <h3 className={clsx('text-xl text-white font-bold')}>灵感广场</h3>
          <div>
            <DatePicker
              style={{ width: 150 }}
              onSelect={evt => setSelectDate(evt)}
              onClear={() => setSelectDate('')}
            />
            <Select
              className={clsx('ml-10')}
              placeholder="全部"
              allowClear
              style={{ width: 150 }}
            >
              {
                ['全部', '官方推荐', '原创作品', 'AI作品'].map((city, index) => (
                  <Select.Option key={index} value={city} disabled={city === 'Disabled'}>
                    {city}
                  </Select.Option>
                ))
              }
            </Select>
          </div>
        </div>
        <ul className={clsx('flex items-center mt-22')}>
          {
            [1, 2, 4, 5, 6].map((_, index) => (
              <li
                key={index}
                className={clsx('flex items-center py-4 px-8 border border-[#213440] rounded-md ml-8 first:ml-0 cursor-pointer hover:border-[#13384f] hover:bg-[#13384f] transition-[var(--transition-base)]')}
              >
                <Image
                  className={clsx('rounded-full')}
                  src="https://down.cg99.com/v1/user/2024-04-14/CFxArrFaytdaCkJby3WG5F5jKTPNPJ7M.jpg"
                  alt=""
                  width={30}
                  height={30}
                />
                <span className={clsx('ml-8 text-white text-xs')}>Pixart-a</span>
              </li>
            ))
          }
        </ul>
        <ul className={clsx('columns-7 gap-18 mt-18')}>
          {
            words.map((src, index) => (
              <li key={src} className={clsx('relative mb-24 hover:-translate-y-5 transition-[var(--transition-base)]')}>
                <Image
                  key={index}
                  src={src}
                  alt=""
                  width={233}
                  height={19990}
                  className={clsx('object-cover rounded-lg cursor-pointer')}
                />
                <div className={clsx('mt-8 flex items-center justify-between')}>
                  <div className={clsx('mt-8 text-xs text-[#97979c] flex items-center cursor-pointer')}>
                    <Image
                      src="https://down.cg99.com/v1/user/2024-04-14/CFxArrFaytdaCkJby3WG5F5jKTPNPJ7M.jpg"
                      alt=""
                      width={20}
                      height={20}
                      className={clsx('object-cover rounded-full mr-4')}
                    />
                    Longiam
                  </div>
                  <div className={clsx('mt-8 flex items-center text-[#97979c]')}>
                    <IconEye style={{ fontSize: 15, marginRight: 3 }} />
                    6
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className={clsx('mt-40')}>
        <h3 className={clsx('text-xl text-white font-bold w-1717 mx-auto')}>灵感广场</h3>
        <div className={clsx('py-32 mt-8 relative')}>
          {
            [270, 90].map((deg, index) => (
              <div key={index} className={clsx(['absolute top-0 w-241 h-324 z-10', index === 0 ? 'left-0' : 'right-0'])} style={{ backgroundImage: `linear-gradient(${deg}deg, rgba(23,23,23,0) 0%, #0A0B17 100%)` }} />
            ))
          }
          {
            [1, 2].map(value => (
              <div className={clsx(['flex w-max', value === 1 ? styles.marqueeAnimationFirst : styles.marqueeAnimationLast])} key={value}>
                <Image
                  className={clsx(['w-4052 h-64 max-w-max', value === 2 ? 'mt-24' : ''])}
                  src={`/static/home/merchant_${value}.png`}
                  alt=""
                  width={4052}
                  height={64}
                />
                <Image
                  className={clsx(['w-4052 h-64 max-w-max', value === 2 ? 'mt-24' : ''])}
                  src={`/static/home/merchant_${value}.png`}
                  alt=""
                  width={4052}
                  height={64}
                />
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}
