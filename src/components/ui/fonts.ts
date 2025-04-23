import {
  Cormorant_Garamond,
  Marck_Script,
  Cormorant_Infant,
  Alegreya_SC,
} from 'next/font/google';

// Для заголовков — благородный шрифт с итальянскими корнями
export const cormorantInfant = Cormorant_Infant({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorantInfant',
  style: ['italic', 'normal'],
});

export const alegreya = Alegreya_SC({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700'],
  variable: '--font-alegreya',
  display: 'swap',
  style: ['normal', 'italic'],
});

// Для основного текста — элегантная читаемая антиква
export const cormorant = Cormorant_Garamond({
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

// Для акцентов — стилизованный "ресторанный" почерк
export const marckScript = Marck_Script({
  subsets: ['cyrillic', 'latin'],
  weight: ['400'],
  variable: '--font-marckScript',
  display: 'swap',
});
