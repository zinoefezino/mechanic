import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteShell({
  children,
  mainClassName = "",
}: {
  children: React.ReactNode;
  mainClassName?: string;
}) {
  return (
    <>
      <Header />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </>
  );
}