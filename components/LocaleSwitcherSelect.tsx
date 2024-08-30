'use client';

import clsx from 'clsx';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { Locale } from '@/types';
import { Languages } from 'lucide-react';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
  
    // Remove the current locale from the pathname
    const currentLocale = pathname.split('/')[1];
    const newPathname = pathname.replace(`/${currentLocale}`, '');
  
    startTransition(() => {
      const url = `/${nextLocale}${newPathname}`;
      router.replace(url);
    });
  }

  return (
    <label
      className={clsx(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6 hover:cursor-pointer"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]"><Languages/></span>
    </label>
  );
}
