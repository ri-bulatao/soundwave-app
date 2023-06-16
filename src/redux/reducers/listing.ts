import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Listing, Frame, Size } from '../../common/types'

export interface ListingState {
  listing: Listing
}

const initialState: ListingState = {
  listing: {
    frames: [],
    sizes: []
  }
}

export const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    setFrames: (state: ListingState, action: PayloadAction<Frame[]>) => {
      state.listing.frames = action.payload
    },
    setSizes: (state: ListingState, action: PayloadAction<Size[]>) => {
      state.listing.sizes = action.payload
    }
  }
})

export const { setFrames, setSizes } = listingSlice.actions

export default listingSlice.reducer
