import './styles/main.scss'
import { Customizer } from './pages/customizer/customizer'
import React, { useEffect } from 'react'
import fontsData from './data/fonts.json'

const App: React.FC = () => {

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Promise.all(fontsData.map(font => {
          const fontFace = new FontFace(font.code, `url(${font.path})`)
          fontFace.load().then(() => {
            document.fonts.add(fontFace)
          })
        }))
      } catch (error) {
        console.error('Failed to load fonts:', error)
      }
    };
    loadFonts()
  }, [])
  return (
    <>
      <Customizer />
    </>
  )
}
export default App
