import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';
import Menu from './_componenets/menu/menu.component';
// import TokenValidationChecker from './token-validator';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if the user is logged in
  const token = cookies().get('access_token')?.value;
  if (!token) {
    redirect('/', RedirectType.replace);
  }

  return (
    <>
      <div className='flex h-screen flex-col lg:flex-row lg:gap-6 lg:bg-background lg:p-6'>
        <aside className='bg-background-light relative hidden max-w-[400px] flex-[0.40] flex-col overflow-hidden rounded-md p-4 pb-0 lg:flex'>
          <Menu />
        </aside>
        <main className='bg-background-light mt-20 flex-1 overflow-y-auto overflow-x-hidden p-2 lg:mt-0 lg:rounded-md lg:p-4'>
          {children}
        </main>
      </div>
    </>
  );
}
