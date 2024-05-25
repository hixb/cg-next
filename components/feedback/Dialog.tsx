import React from 'react'

import { Modal } from '@arco-design/web-react'
import type { ModalProps } from '@arco-design/web-react/es/Modal/interface'
import clsx from 'clsx'

export default function Dialog(props: ModalProps & { children: React.ReactNode }) {
  return (
    <Modal {...props} footer={props.footer ? props.footer : null } className={clsx(['dialog', props.className])}>
      {props.children}
    </Modal>
  )
}
