'use client'

import React from 'react'

import { ConfigProvider } from '@arco-design/web-react'
import { render as ReactDOMRender } from '@arco-design/web-react/es/_util/react-dom'
import { getConfigProviderProps } from '@arco-design/web-react/es/Modal/config'

import Login from '@/components/auth/Login'
import { useChecks } from '@/hooks/useChecks'
import { IndexedBDSpace, useIndexedDB } from '@/hooks/useIndexedDB'
import type { Auth } from '@/types/auth'

function tectonicTsxTreeNode<T>(props: T, Component: React.FC<T>) {
  let root: { render: any; _unmount: any }
  const div = document.createElement('div')
  document.body.appendChild(div)

  render()

  function render() {
    const dom = (
      <ConfigProvider {...getConfigProviderProps()}>
        <Component {...{ ...props, onCancel }} />
      </ConfigProvider>
    )

    root ? root.render(dom) : (root = ReactDOMRender(dom, div))
  }

  function onCancel() {
    root = root?._unmount?.()

    if (div.parentNode?.contains(div))
      div.parentNode.removeChild(div)
  }
}

/**
 * REC: Render Auth Components.
 */
export const REC: Auth.RacInterfaces = {
  Login: {
    State: (visible, callback?: () => void) => {
      try {
        const checks = useChecks()
        const indexedDB = useIndexedDB()

        if (!checks.isFunction(callback) && callback !== void 0)
          return Promise.reject(new Error('callback must be a function.'))

        callback && indexedDB.set(IndexedBDSpace.DBKeys.LOGIN_SUCCESS_CALLBACK, callback).then()

        const props: Auth.TransferProps = {
          visible,
        }

        tectonicTsxTreeNode(props, Login)
      }
      catch (error) {
        console.error(error)
        return Promise.reject(error)
      }
    },
  },
}
