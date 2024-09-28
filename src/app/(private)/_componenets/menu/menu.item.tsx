import { MenuProps } from 'antd';

//Icons import
import { LuLayoutDashboard } from 'react-icons/lu';

type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <LuLayoutDashboard style={{ fontSize: '20px' }} />,
    // children: [],
  },
  {
    key: 'employee',
    label: 'Employee',
    children: [
      {
        key: 'employees',
        label: 'All Employees',
        icon: <LuLayoutDashboard />,
      },
      { key: 'active', label: 'Active Employees' },
    ],
  },
];
