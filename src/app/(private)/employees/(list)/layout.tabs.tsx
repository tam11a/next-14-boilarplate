'use client';
import { Tabs } from 'antd';
import { useQueryState, parseAsString } from 'nuqs';

export default function TabsLayout() {
  const [tab, setTab] = useQueryState(
    'tab',
    parseAsString.withDefault('list').withOptions({
      clearOnDefault: true,
    })
  );

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
            label: 'Employees',
          },
          {
            key: 'trash',
            tabKey: 'Trash',
            label: 'Trash',
          },
          {
            key: 'create',
            tabKey: 'Create',
            label: 'Create',
          },
          {
            key: 'import',
            tabKey: 'Import',
            label: 'Import',
          },
        ]}
        className='[.ant-tabs-nav-wrap]:items-center'
      />
    </>
  );
}
