import type { AriaAttributes, DOMAttributes } from 'react'

import 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'arco-theme'?: 'dark' | 'light'
  }
}
