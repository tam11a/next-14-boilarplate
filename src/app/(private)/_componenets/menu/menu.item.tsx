import { MenuProps } from 'antd';

//Icons import
import {
  LuBarChart4,
  LuLayoutDashboard,
  LuTags,
  LuUsers,
} from 'react-icons/lu';
import { PiPackage } from 'react-icons/pi';
import { MdInsertChartOutlined } from 'react-icons/md';
import { TbCategory2 } from 'react-icons/tb';

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
        icon: <LuUsers style={{ fontSize: '20px' }} />,
      },
      {
        key: 'roles',
        label: 'Roles',
        icon: <LuLayoutDashboard />,
      },
    ],
  },
];
