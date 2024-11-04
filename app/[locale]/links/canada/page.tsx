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
        <h1 className="mb-8 text-3xl font-bold">Explore Canada</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href={`/${locale}/links/canada/visitor-visa`}
            className="rounded-lg border border-gray-200 p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-blue-500">Visitor Visa</h2>
            <p className="mt-2 text-gray-600">
              Learn about the requirements and application process for visiting Canada.
            </p>
          </Link>

          <Link
            href={`/${locale}/links/canada/job-opportunities`}
            className="rounded-lg border border-gray-200 p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-blue-500">Job Opportunities</h2>
            <p className="mt-2 text-gray-600">
              Discover employment prospects and career options in Canada.
            </p>
          </Link>

          <Link
            href={`/${locale}/links/canada/study-in-canada`}
            className="rounded-lg border border-gray-200 p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-blue-500">Study in Canada</h2>
            <p className="mt-2 text-gray-600">
              Explore educational opportunities and academic institutions in Canada.
            </p>
          </Link>

          <Link
            href={`/${locale}/links/canada/start-up-visa`}
            className="rounded-lg border border-gray-200 p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-blue-500">Start-Up Visa</h2>
            <p className="mt-2 text-gray-600">
              Find out how to start your business journey with the Start-Up Visa program.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
