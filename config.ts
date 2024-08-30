import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'ru', 'uk', 'sr'] as const;

export const pathnames = {
  '/': '/',
  '/blog': '/blog',
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = 'always';