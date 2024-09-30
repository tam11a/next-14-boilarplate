import { Divider } from 'antd';
import LayoutStore from './_components/context/layout.store';
import LayoutTabs from './_components/navigation/employees.tabs';
import StatsComponent from './_components/stats/stats.component';
import ToolbarComponent from './_components/toolbar/toolbar.component';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutStore>
      <section>
        <div className='p-5 pb-0'>
          <h1 className='text-xl font-semibold'>Manage Employees</h1>
        </div>
        <Divider />
      </section>
      <StatsComponent />
      <LayoutTabs />
      <ToolbarComponent />
      <section>{children}</section>
    </LayoutStore>
  );
}
