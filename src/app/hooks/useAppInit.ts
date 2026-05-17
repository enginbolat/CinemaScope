import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { setFavorites, setWatchLater } from '@features/user-library/store/user-library-slice'

import { api } from '@shared/api/base-api'
import useLocalStorage from '@shared/hooks/use-local-storage'

const useAppInit = () => {
  const dispatch = useDispatch()
  const { GetFromStorage } = useLocalStorage()

  useEffect(() => {
    const init = async () => {
      const favorites = await GetFromStorage<string>('FAVORITES')
      if (favorites) dispatch(setFavorites(JSON.parse(favorites)))

      const watchLater = await GetFromStorage<string>('WATCHLATER')
      if (watchLater) dispatch(setWatchLater(JSON.parse(watchLater)))

      dispatch(api.util.resetApiState())
    }
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useAppInit
