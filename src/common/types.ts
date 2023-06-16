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

export interface Customizer {
  layout: string
  backgroundImage: string
}

export interface Listing {
  frames: Frame[]
  sizes: Size[]
}

export interface Size {
  inch: string
  cm: string
  title: string
}

export interface Frame {
  title: string
  value: string
  image: string
}

export interface Selected {
  frame: Frame
  size: Size
}