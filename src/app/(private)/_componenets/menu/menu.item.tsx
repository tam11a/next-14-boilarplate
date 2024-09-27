import { MenuProps } from 'antd';

//Icons import
import { LuLayoutDashboard } from 'react-icons/lu';

type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   disabled?: boolean
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     disabled,
//   } as MenuItem;
// }

export const items: MenuItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <LuLayoutDashboard />,
    // children: [],
  },
  {
    key: 'employees',
    label: 'Employee',
    children: [
      { key: 'all', label: 'All Employees', icon: <LuLayoutDashboard /> },
      { key: 'active', label: 'Active Employees' },
    ],
  },
];
