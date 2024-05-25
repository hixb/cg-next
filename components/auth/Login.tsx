import React from 'react'

import Dialog from '@/components/feedback/Dialog'
import type { Auth } from '@/types/auth'

export default function Login(props: Auth.TransferProps) {
  return (
    <Dialog visible={props.visible} onCancel={() => props.onCancel && props.onCancel()}>
      {
        Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>Login</div>
        ))
      }
    </Dialog>
  )
}
