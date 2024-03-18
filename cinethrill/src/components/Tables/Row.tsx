import Link from 'next/link';

export const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Link
        className="flex gap-4 p-2 items-center border-b border-white border-opacity-10 bg-white hover:bg-opacity-10 bg-opacity-0"
        href=""
      >
        {children}
      </Link>
    </div>
  );
};
