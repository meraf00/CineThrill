export const TableHead = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white bg-opacity-5  border-b border-white border-opacity-10">
      <div className="flex gap-4 p-2 py-5">{children}</div>
    </div>
  );
};
