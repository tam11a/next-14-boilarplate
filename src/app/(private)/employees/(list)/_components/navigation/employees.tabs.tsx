'use client';
import { Tabs } from 'antd';
import { useLayout } from '../context/layout.store';
import { LuList, LuTrash2 } from 'react-icons/lu';

export default function EmployeesTabs() {
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
            icon: <LuList className='inline' />,
          },
          {
            key: 'trash',
            tabKey: 'Trash',
            label: 'Trash',
            icon: <LuTrash2 className='inline' />,
          },
        ]}
        centered
      />
    </>
  );
}
