import { Benne, Cinzel, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap'
})

export const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400','600','800'],
    variable: '--font-cinzel'
})

export const benne = Benne({
    subsets: ['latin'],
    weight : '400'
})