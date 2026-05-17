import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { Popular } from '@shared/models/popular'

export interface IFavoriteAndWatchLater extends Popular {
  type: 'tvShow' | 'movie';
}

type UserLibrarySliceType = {
  favorites: IFavoriteAndWatchLater[];
  watchLater: IFavoriteAndWatchLater[];
};

const initialState: UserLibrarySliceType = {
  favorites: [],
  watchLater: [],
}

const userLibrarySlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<IFavoriteAndWatchLater[]>) => {
      state.favorites = action.payload
    },
    setWatchLater: (state, action: PayloadAction<IFavoriteAndWatchLater[]>) => {
      state.watchLater = action.payload
    },
  },
})

export const { setFavorites, setWatchLater } = userLibrarySlice.actions
export default userLibrarySlice.reducer
