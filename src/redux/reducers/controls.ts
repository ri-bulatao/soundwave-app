import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Controls } from '../../common/types'

export interface ControlsState {
  controls: Controls
}

const initialState: ControlsState = {
  controls: {
    // Side editor controls
    showTemplates: false,
    showTitleEditor: false,
    showSubtitleEditor: false,

    // General controls
    editBackground: false,
    showFilterDropdown: false
  }
}

export const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    toggleShowTemplates: (state: ControlsState, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.controls.showTitleEditor = false
        state.controls.showSubtitleEditor = false
      }

      state.controls.showTemplates = action.payload
    },
    toggleTitleEditor: (state: ControlsState, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.controls.showTemplates = false
        state.controls.showSubtitleEditor = false
      }

      state.controls.showTitleEditor = action.payload
    },
    toggleSubtitleEditor: (state: ControlsState, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.controls.showTemplates = false
        state.controls.showTitleEditor = false
      }

      state.controls.showSubtitleEditor = action.payload
    },
    toggleEditBackground: (state: ControlsState, action: PayloadAction<boolean>) => {
      state.controls.editBackground = action.payload
    },
    toggleShowFilterDropdown: (state: ControlsState, action: PayloadAction<boolean>) => {
      state.controls.showFilterDropdown = action.payload
    }
  }
})

export const { toggleShowTemplates, toggleTitleEditor, toggleSubtitleEditor, toggleEditBackground, toggleShowFilterDropdown } = controlsSlice.actions

export default controlsSlice.reducer
