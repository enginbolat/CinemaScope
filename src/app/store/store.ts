import type { TypedUseSelectorHook} from 'react-redux'
import { useDispatch as useReduxDispatch, useSelector } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import userLibrarySlice from '@features/user-library/store/user-library-slice'

import { api } from '@shared/api/base-api'

export const store = configureStore({
    reducer: {
        main: userLibrarySlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(api.middleware)
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useReduxDispatch<AppDispatch>()
