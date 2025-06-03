import { Header } from "@/components/header";
import { NavMobile } from "@/components/navMobile"

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative font-[family-name:var(--font-geist-sans)]">
      <Header />
      {children}
      <NavMobile />
    </div>
  );
}
