import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Template } from '../../common/types'

export interface TemplatesState {
  templates: ReadonlyArray<Template>
}

const initialState: TemplatesState = {
    templates: [],
}

export const templatesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    load: (state: TemplatesState, action: PayloadAction<ReadonlyArray<Template>>) => {
        state.templates = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { load } = templatesSlice.actions

export default templatesSlice.reducer