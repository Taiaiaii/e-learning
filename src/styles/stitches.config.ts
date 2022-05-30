import { createStitches } from '@stitches/react'

export const { styled, theme, getCssText, globalCss } = createStitches({
    prefix: 'taiaiapp-theme',
    theme: {
        colors: {
            purple: '#6548A3',
            pink: '#FF6680',
            green: '#61C5BD',
            background: '#F0EDF5',
            principal: '#FFFFFF',
            titulo: '#3D3D4C',
            base: '#6C6C80',
            detalhes: '#A0A0B2',
            inputs: '#C4C4D1'
        },
        fonts: {
            rubik: 'Rubik, sans-serif'
        }
    }
})