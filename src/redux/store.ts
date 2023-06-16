import { configureStore } from '@reduxjs/toolkit'
import templatesReducer from './reducers/templates'
import controlsReducer from './reducers/controls'
import canvasReducer from './reducers/canvas'

export const store = configureStore({
  reducer: {
    templates: templatesReducer,
    controls: controlsReducer,
    canvas: canvasReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
