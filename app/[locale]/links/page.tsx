import ResidentCountries from "@/components/countries";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <section className="mt-28">
      <ResidentCountries />
    </section>
  );
}
