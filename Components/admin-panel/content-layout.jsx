import { Navbar } from "@/components/admin-panel/navbar";

export function ContentLayout({
  pathname,
  children
}) {
  return (
    (<div>
      <Navbar pathname={pathname} />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>)
  );
}
