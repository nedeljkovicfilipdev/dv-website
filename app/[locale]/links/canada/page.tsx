import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <section className="mt-20 p-2 md:p-4">
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-4 text-3xl font-bold">Explore Canada</h1>
        <ul className="mb-4 list-inside list-disc">
          <li>
            <Link
              href={`/${locale}/links/canada/visitor-visa`}
              className="text-blue-500 hover:underline"
            >
              Visitor Visa
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/links/canada/job-opportunities`}
              className="text-blue-500 hover:underline"
            >
              Job Opportunities
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/links/canada/study-in-canada`}
              className="text-blue-500 hover:underline"
            >
              Study in Canada
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/links/canada/start-up-visa`}
              className="text-blue-500 hover:underline"
            >
              Start-Up Visa
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
