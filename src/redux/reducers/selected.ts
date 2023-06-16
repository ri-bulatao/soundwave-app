import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Selected, Frame, Size } from '../../common/types'

export interface SelectedState {
  selected: Selected
}

const initialState: SelectedState = {
  selected: {
    frame: {
      value: 'frame',
      image: 'src/assets/img/frame.png',
      title: 'Frame'
    },
    size: {
      inch: '8x10 inch',
      cm: '20.32 x 25.4 cm',
      title: 'Small'
    }
  }
}

export const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setFrame: (state: SelectedState, action: PayloadAction<Frame>) => {
      state.selected.frame = action.payload
    },
    setSize: (state: SelectedState, action: PayloadAction<Size>) => {
      state.selected.size = action.payload
    }
  }
})

export const { setFrame, setSize } = selectedSlice.actions

export default selectedSlice.reducer
