'use client';

import { Menu as AntMenu } from 'antd';
import { items } from './menu.item';
import { useRouter, usePathname } from 'next/navigation';

export default function Menu() {
  const router = useRouter();
  const link = usePathname();

  return (
    <AntMenu
      onSelect={(e) => router.push(`/${e.key}`)}
      style={{ borderRight: 'none', fontWeight: 'normal' }}
      defaultSelectedKeys={[link.slice(1)]}
      defaultOpenKeys={[link.slice(1)]}
      mode='inline'
      items={items}
    />
  );
}
