import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';
import AppDrawer from './_componenets/drawer/drawer.component';
import TokenValidationChecker from './token-validator';

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
    <TokenValidationChecker>
      <div className='flex h-screen flex-col lg:flex-row lg:gap-6 lg:bg-slate-200 lg:p-6'>
        <aside className='relative hidden max-w-[360px] flex-[0.40] flex-col overflow-hidden rounded-md bg-white p-4 pb-0 lg:flex'>
          <AppDrawer />
        </aside>

        <main className='mt-20 flex-1 overflow-y-auto overflow-x-hidden bg-white p-2 lg:mt-0 lg:rounded-md lg:p-4'>
          {children}
        </main>
      </div>
    </TokenValidationChecker>
  );
}
