import LoginForm from './components/login/form';
import { Button } from 'antd';

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
    </main>
  );
}
