import LayoutStore from './layout.store';
import LayoutTabs from './layout.tabs';

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
