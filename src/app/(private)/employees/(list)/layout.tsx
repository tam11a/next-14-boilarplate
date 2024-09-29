import TabsLayout from './layout.tabs';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <TabsLayout />
        <section>{children}</section>
      </main>
    </>
  );
}
