import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';
// import TokenValidationChecker from './token-validator';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if the user is logged in
  const token = cookies().get('access_token')?.value;
  if (false) {
    redirect('/', RedirectType.replace);
  }

  return <>{children}</>;
}
