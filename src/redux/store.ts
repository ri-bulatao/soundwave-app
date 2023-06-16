import { configureStore } from '@reduxjs/toolkit'
import templatesReducer from './reducers/templates'
import controlsReducer from './reducers/controls'
import customizerReducer from './reducers/customizer'
import listingReducer from './reducers/listing'
import selectedReducer from './reducers/selected'

export const store = configureStore({
  reducer: {
    templates: templatesReducer,
    controls: controlsReducer,
    customizer: customizerReducer,
    listing: listingReducer,
    selected: selectedReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
