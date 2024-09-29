import LayoutStore from './_components/context/layout.store';
import LayoutTabs from './_components/navigation/employees.tabs';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutStore>
      <LayoutTabs />
      <section>{children}</section>
    </LayoutStore>
  );
}
