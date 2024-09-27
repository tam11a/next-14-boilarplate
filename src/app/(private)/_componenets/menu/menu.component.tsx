'use client';

import { Menu as AntMenu, MenuProps } from 'antd';
import { items } from './menu.item';
import { useRouter } from 'next/navigation';

export default function Menu() {
  const router = useRouter();

  return (
    <AntMenu
      onSelect={(e) => router.push(e.key)}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode='inline'
      items={items}
    />
  );
}
