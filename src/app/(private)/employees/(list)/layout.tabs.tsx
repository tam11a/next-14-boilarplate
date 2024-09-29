'use client';
import { Tabs } from 'antd';
import { useLayout } from './layout.store';

export default function LayoutTabs() {
  const { tab, setTab } = useLayout();

  return (
    <>
      <Tabs
        activeKey={tab}
        defaultActiveKey='list'
        onChange={(key) => setTab(key)}
        items={[
          {
            key: 'list',
            tabKey: 'Employees',
            label: 'All Employees',
          },
          {
            key: 'trash',
            tabKey: 'Trash',
            label: 'Trash',
          },
        ]}
        centered
      />
    </>
  );
}
