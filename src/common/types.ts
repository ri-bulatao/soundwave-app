export interface Template {
  id: number
  image: string
  title: {
    text: string
    fontSize: string
    fontFamily: string
    fontWeight: string
    fontColor: string
  }
  subTitle: {
    text: string
    fontSize: string
    fontFamily: string
    fontWeight: string
    fontColor: string
  }
  colors: any[]
}

export interface Controls {
  showTemplates: boolean
}

export interface CustomCanvas {
  target: {
    classList: any[]
  }
}

export interface Canvas {
  id: string
  orientation: string
  frameType: string
  size: string
  totalPrice: number
  content: {
    title: string
    subtitle: string
  }
  specifications: {
    audioBuffer: AudioBuffer | null
    waveHeight: number
    width: number
    height: number
  }
}
