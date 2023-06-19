import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Listing, Frame, Size, Color, Filter, FilterOption } from '../../common/types'

export interface ListingState {
  listing: Listing
}

const initialState: ListingState = {
  listing: {
    frames: [],
    sizes: [],
    colors: [],
    filters: [],
    selectedFilters: []
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
    },
    setColors: (state: ListingState, action: PayloadAction<Color[]>) => {
      state.listing.colors = action.payload
    },
    setFilters: (state: ListingState, action: PayloadAction<Filter[]>) => {
      state.listing.filters = action.payload
    },
    toggleOptionChecked: (state: ListingState, action: PayloadAction<any>) => {
      let data = action.payload
      let newVal: Filter[] = []

      state.listing.filters.map(filter => {
        if(filter.id === data.filterId) {
          filter.options.map(option => {
            if(option.id === data.optionId) {
              option.checked = !option.checked
            }
          })
        }
        newVal.push(filter)
      })

      state.listing.filters = newVal

      // Set selected filters
      let newOptions: FilterOption[] = []

      state.listing.filters.map(filter => {
        filter.options.map(option => {
          if(option.checked) {
            newOptions.push(option)
          }
        })
      })

      state.listing.selectedFilters = newOptions
    },
    removeSelectedFilter: (state: ListingState, action: PayloadAction<number>) => {
      let newArray: FilterOption[] = []

      state.listing.selectedFilters.map(filter => {
        if(filter.id !== action.payload) {
          newArray.push(filter)
        }
      })

      state.listing.selectedFilters = newArray

      let newFilters: Filter[] = []

      state.listing.filters.map(filter => {
        filter.options.map(option => {
          if(option.id === action.payload) {
            option.checked = false
          }
        })

        newFilters.push(filter)
      })

      state.listing.filters = newFilters
    },
    clearFilters: (state: ListingState) => {
      let newVal: Filter[] = []

      state.listing.filters.map(filter => {
        filter.options.map(option => {
          option.checked = false
        })

        newVal.push(filter)
      })

      state.listing.filters = newVal
      state.listing.selectedFilters = []
    }
  }
})

export const { setFrames, setSizes, setColors, setFilters, toggleOptionChecked, clearFilters, removeSelectedFilter } = listingSlice.actions

export default listingSlice.reducer
