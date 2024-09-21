import { SignForm } from './components/sign-form';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-row items-center justify-center'>
      <div className='mx-auto w-full max-w-sm'>
        <SignForm />
      </div>
    </main>
  );
}
