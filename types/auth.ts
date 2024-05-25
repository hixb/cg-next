export namespace Auth {
  export interface TransferProps {
    /**
     * control the display state of the login box.
     */
    visible: boolean
    /**
     * callback when login box is closed.
     */
    onCancel?: () => void
  }

  export interface RacInterfaces {
    // Login Box
    Login: {
      /**
       * Change login box status.
       * @param {boolean} visible control the display state of the login box.
       * @param {() => void} [callback] callback after successful login.
       * @constructor Login.State
       */
      State: (visible: boolean, callback?: () => void) => void
    }
  }
}
