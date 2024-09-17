import { Button } from 'antd';
import LoginForm from './components/login/form';
import DataTable from './components/table/data-table';

export default function Home() {
  return (
    <main>
      <div className='m-4 flex flex-row flex-wrap gap-2'>
        <Button type='primary'>Hello World</Button>
        <Button type='dashed'>Hello World</Button>
        <Button type='default'>Hello World</Button>
        <Button type='link'>Hello World</Button>
        <Button type='text'>Hello World</Button>
      </div>
      <LoginForm />
      <DataTable />
    </main>
  );
}
