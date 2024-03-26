'use client';

import { AdminSidePanel } from '@/components/Navigation/admin/AdminSidePanel';
import { useUserStore } from '@/store/userStore';
import { redirect } from 'next/navigation';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useUserStore((state) => state.user);

  if (!user || !user.isAdmin) {
    return redirect('/login');
  }

  return (
    <div className="flex h-screen overflow-y-hidden gap-10">
      <AdminSidePanel />
      <div className="h-screen overflow-y-auto w-full">{children}</div>
    </div>
  );
}
