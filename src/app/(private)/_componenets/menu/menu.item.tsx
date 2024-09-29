import { MenuProps } from 'antd';

//Icons import
import {
  LuBarChart4,
  LuLogOut,
  LuSettings,
  LuTags,
  LuUsers,
} from 'react-icons/lu';
import { PiPackage } from 'react-icons/pi';
import { TbCategory2, TbReportAnalytics } from 'react-icons/tb';
import { FaRegIdBadge } from 'react-icons/fa6';

type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
  {
    key: 'overview',
    label: 'Overview',
    type: 'group',
    children: [
      {
        key: 'dashboard',
        label: 'Dashboard',
        icon: <LuBarChart4 style={{ fontSize: '20px' }} />,
      },
    ],
  },
  {
    key: 'inventory',
    label: 'Inventory',
    type: 'group',
    children: [
      {
        key: 'products',
        label: 'Products',
        icon: <PiPackage style={{ fontSize: '20px' }} />,
      },
      {
        key: 'category',
        label: 'Category',
        icon: <TbCategory2 style={{ fontSize: '20px' }} />,
      },
      {
        key: 'brand',
        label: 'Brand',
        icon: <LuTags style={{ fontSize: '20px' }} />,
      },
    ],
  },
  {
    key: 'organization',
    label: 'Organization',
    type: 'group',
    children: [
      {
        key: 'employees',
        label: 'Employees',
        icon: <LuUsers style={{ fontSize: '18px' }} />,
      },
      {
        key: 'roles',
        label: 'Roles',
        icon: <FaRegIdBadge style={{ fontSize: '18px' }} />,
      },
      {
        key: 'reports',
        label: 'Reports',
        icon: <TbReportAnalytics style={{ fontSize: '20px' }} />,
      },
    ],
  },

  {
    key: 'user',
    label: 'User',
    type: 'group',
    children: [
      {
        key: 'settings',
        label: 'Settings',
        icon: <LuSettings style={{ fontSize: '20px' }} />,
      },
      {
        key: 'signout',
        label: 'Signout',
        danger: true,
        icon: <LuLogOut style={{ fontSize: '20px' }} />,
      },
    ],
  },
];
