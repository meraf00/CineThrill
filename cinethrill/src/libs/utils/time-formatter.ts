export const yyyyMMdd = (date: Date) => {
  return date.toISOString().split('T')[0];
};

export const hhmm = (date: Date) => {
  return date.toISOString().split('T')[1].split('.')[0];
};
