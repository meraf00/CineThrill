export const TableHead = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-4 px-2 py-5 bg-white bg-opacity-5  border-b border-white border-opacity-10">
      {children}
    </div>
  );
};
