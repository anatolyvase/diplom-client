import { Header } from "@/components/header";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
}
