export const initialState = {
  defaultLayoutBackgroundImage: 'src/assets/img/layout-background.jpeg',
  waveHeight: 20,
  canvasWidth: 350,
  canvasHeight: 170,
  mainTitlePosition: {
    x: 0,
    y: 0
  },
  frameOptions: [
    { value: 'frame', image: 'src/assets/img/frame.png', title: 'Frame' },
    { value: 'canvas', image: 'src/assets/img/canvas.png', title: 'Canvas' },
    { value: 'raw-art-work', image: 'src/assets/img/raw-art-work.png', title: 'Raw at work' }
  ],
  sizingOptions: [
    { size_inc: '8x10 inch', size_cm: '20.32 x 25.4 cm', title: 'Small' },
    { size_inc: '12x16 inch', size_cm: '30.48 x 40.64 cm', title: 'Medium' },
    { size_inc: '16x20 inch', size_cm: '40.64 x 50.8 cm', title: 'Large' },
    { size_inc: '24x36 inch', size_cm: '60.96 x 91.44 cm', title: 'Extra Large' }
  ],
  colorOptions: [
    { key: 'option_0', image: 'src/assets/img/first.png', view: 'desktop' },
    { key: 'option_1', image: 'src/assets/img/second.png', view: 'desktop' },
    { key: 'option_2', image: 'src/assets/img/third.png', view: 'desktop' },
    { key: 'option_3', image: 'src/assets/img/forth.png', view: 'desktop' }
  ],
  colorOptionsMobile: [
    { key: 'option_1', image: '/src/assets/icons/first_mobile.png', view: 'mobile' },
    { key: 'option_2', image: '/src/assets/icons/second_mobile.png', view: 'mobile' },
    { key: 'option_3', image: '/src/assets/icons/third_mobile.png', view: 'mobile' }
  ],
  layoutOptions: [
    {
      layout: '1',
      template: [
        {
          key: 1,
          fontOptions: [
            {
              name: 'Josefin sans',
              file: 'JosefinSans-Regular.ttf'
            }
          ]
        }, {
          key: 2,
          fontOptions: [
            {
              name: 'Nickainley',
              file: 'Nickainley-Normal.otf'
            }, {
              name: 'Glacial Indifference',
              file: 'GlacialIndifference-Regular.otf'
            }
          ]
        }, {
          key: 3,
          fontOptions: [
            {
              name: 'Lato',
              file: 'Lato-Regular.ttf'
            }, {
              name: 'Kollektif',
              file: 'Kollektif.ttf'
            }
          ]
        }, {
          key: 4,
          fontOptions: [
            {
              name: 'DM Sans',
              file: 'DMSerifDisplay-Regular.ttf'
            }
          ]
        }, {
          key: 5,
          fontOptions: [
            {
              name: 'Alta',
              file: 'Alta_regular.otf'
            }, {
              name: 'Open Sans',
              file: 'OpenSans-Regular.ttf'
            }
          ]
        }, {
          key: 6,
          fontOptions: [
            {
              name: 'YellowTail',
              file: 'Yellowtail-Regular.ttf'
            }, {
              name: 'Blinker',
              file: 'Blinker-Regular.ttf'
            }
          ]
        }, {
          key: 7,
          fontOptions: [
            {
              name: 'YellowTail',
              file: 'Yellowtail-Regular.ttf'
            }, {
              name: 'Open Sans',
              file: 'OpenSans-Regular.ttf'
            }
          ]
        }, {
          key: 8,
          fontOptions: [
            {
              name: 'Gloria Hallelujah',
              file: 'GloriaHallelujah-Regular.ttf'
            }
          ]
        }, {
          key: 9,
          fontOptions: [
            {
              name: 'Montserrat',
              file: 'Montserrat-Regular.ttf'
            }
          ]
        }, {
          key: 10,
          fontOptions: [
            {
              name: 'Montserrat',
              file: 'Montserrat-Regular.ttf'
            }
          ]
        }, {
          key: 11,
          fontOptions: [
            {
              name: 'Montserrat',
              file: 'Montserrat-Regular.ttf'
            }, {
              name: 'Aileron',
              file: 'Aileron-Regular.otf'
            }
          ]
        }, {
          key: 12,
          fontOptions: [
            {
              name: 'Montserrat',
              file: 'Montserrat-Regular.ttf'
            }, {
              name: 'Aileron',
              file: 'Aileron-Regular.otf'
            }
          ]
        }, {
          key: 13,
          fontOptions: [
            {
              name: 'Montserrat',
              file: 'Montserrat-Regular.ttf'
            }, {
              name: 'Noto Serif Display',
              file: 'NotoSerifDisplay_SemiCondensed-Italic.ttf'
            }
          ]
        }, {
          key: 14,
          fontOptions: [
            {
              name: 'EB Garamond',
              file: 'EBGaramond-Regular.ttf'
            }, {
              name: 'Kalam',
              file: 'Kalam-Light.ttf'
            }
          ]
        }, {
          key: 15,
          fontOptions: [
            {
              name: 'Playfair',
              file: 'Playfair-VariableFont_opsz,wdth,wght.ttf'
            }, {
              name: 'Noto Serif',
              file: 'NotoSerifDisplay_SemiCondensed-Light.ttf'
            }
          ]
        }, {
          key: 16,
          fontOptions: [
            {
              name: 'Josefin Sans',
              file: 'JosefinSans-Regular.ttf'
            }
          ]
        }, {
          key: 17,
          fontOptions: [
            {
              name: 'Playfair',
              file: 'PlayfairDisplay-Italic.ttf'
            }, {
              name: 'Montserrat',
              file: 'Montserrat-Regular.ttf'
            }
          ]
        }, {
          key: 18,
          fontOptions: [
            {
              name: 'Edo',
              file: 'edosz.ttf'
            }, {
              name: 'Montserrat',
              file: 'Montserrat-Regular.ttf'
            }
          ]
        }, {
          key: 19,
          fontOptions: [
            {
              name: 'League Spartan',
              file: 'LeagueSpartan-ExtraBold.ttf'
            }, {
              name: 'Montserrat',
              file: 'Montserrat-Regular.ttf'
            }
          ]
        }
      ]
    }, {
      layout: '2',
      template: [
        {
          key: 1,
          fontOptions: [
            {
              name: 'Playfair',
              file: 'PlayfairDisplay-Regular.ttf'
            }, {
              name: 'Quicksand',
              file: 'Quicksand-Regular.ttf'
            },
          ]
        }, {
          key: 2,
          fontOptions: [
            {
              name: 'Dream Avenue',
              file: 'FontsFree-Net-Dream-Avenue.ttf'
            }, {
              name: 'Roca Black',
              file: 'Roca Black.ttf'
            },
          ]
        }, {
          key: 3,
          fontOptions: [
            {
              name: 'Blueberry',
              file: 'Blueberry .ttf'
            }, {
              name: 'Aileron',
              file: 'Aileron-Regular.otf'
            }
          ]
        }, {
          key: 4,
          fontOptions: [
            {
              name: 'Shrikhand',
              file: 'Shrikhand-Regular.ttf'
            }
          ]
        }, {
          key: 5,
          fontOptions: [
            {
              name: 'Brightwall',
              file: 'Brightwall.ttf'
            }, {
              name: 'Aileron',
              file: 'Aileron-Regular.otf'
            }
          ]
        }, {
          key: 6,
          fontOptions: [
            {
              name: 'DM Serif Sans',
              file: 'DMSerifDisplay-Regular.ttf'
            }, {
              name: 'Josefin sans',
              file: 'JosefinSans-Regular.ttf'
            }
          ]
        }, {
          key: 7,
          fontOptions: [
            {
              name: 'Hatton',
              file: 'PP Hatton Bold 700.otf'
            }, {
              name: 'Tenor sans',
              file: 'TenorSans-Regular.ttf'
            }
          ]
        }, {
          key: 7,
          fontOptions: [
            {
              name: 'Abril fatface',
              file: 'AbrilFatface-Regular.ttf'
            }, {
              name: 'Cormorant Garamond',
              file: 'CormorantGaramond-Regular.ttf'
            }
          ]
        }, {
          key: 8,
          fontOptions: [
            {
              name: 'Abril fatface',
              file: 'AbrilFatface-Regular.ttf'
            }, {
              name: 'Cormorant Garamond',
              file: 'CormorantGaramond-Regular.ttf'
            }
          ]
        }, {
          key: 9,
          fontOptions: [
            {
              name: 'The Seasons',
              file: 'AbrilFatface-Regular.ttf'
            }, {
              name: 'Garet',
              file: 'Garet-Book.ttf'
            }
          ]
        }, {
          key: 10,
          fontOptions: [
            {
              name: 'Marline',
              file: 'Marline.otf'
            }, {
              name: 'Garet',
              file: 'Garet-Book.ttf'
            }
          ]
        }, {
          key: 11,
          fontOptions: [
            {
              name: 'RoxboroughCF',
              file: 'Roxborough CF.ttf'
            }, {
              name: 'Sorts Mill Goudy',
              file: 'SortsMillGoudy-Regular.ttf'
            }
          ]
        }, {
          key: 12,
          fontOptions: [
            {
              name: 'Nectarine',
              file: 'Nectarine DEMO.ttf'
            }
          ]
        }, {
          key: 12,
          fontOptions: [
            {
              name: 'Nectarine',
              file: 'Nectarine DEMO.ttf'
            }
          ]
        }
      ]
    }
  ]
}
