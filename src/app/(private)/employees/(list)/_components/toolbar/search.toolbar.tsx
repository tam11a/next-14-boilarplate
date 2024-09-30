'use client';

import { Input } from 'antd';
import { LuSearch } from 'react-icons/lu';
import { useLayout } from '../context/layout.store';

export default function SearchToolbar() {
  const { search, setSearch } = useLayout();
  return (
    <Input
      placeholder='Search employees'
      className='max-w-xs'
      suffix={<LuSearch className='text-lg' />}
      value={search}
      allowClear
      size='large'
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
