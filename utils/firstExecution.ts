import { IndexedBDSpace, useIndexedDB } from '@/hooks/useIndexedDB'

(() => {
  checkLoginSuccessCallback()
})()

/**
 * Check Login Success Callback
 */
function checkLoginSuccessCallback() {
  const indexedDB = useIndexedDB()

  indexedDB.get<() => void>(IndexedBDSpace.DBKeys.LOGIN_SUCCESS_CALLBACK)
    .then((callback) => {
      if (callback) {
        callback()
        indexedDB.del(IndexedBDSpace.DBKeys.LOGIN_SUCCESS_CALLBACK).then()
      }
    })
}
