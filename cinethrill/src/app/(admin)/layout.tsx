import { AdminSidePanel } from '@/components/Navigation/admin/AdminSidePanel';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-y-hidden gap-10">
      <AdminSidePanel />
      <div className="h-screen overflow-y-auto w-full">{children}</div>
    </div>
  );
}
