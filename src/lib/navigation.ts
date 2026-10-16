export function getSection(path: string | undefined) {
  if (!path) return 'sec-1';
  const [dir] = path.split('/', 1);
  if (!dir) return 'sec-1';
  return (
    {
      '(sec-1)': 'sec-1',
      'sec-2': 'sec-2',
    }[dir] ?? 'sec-1'
  );
}
