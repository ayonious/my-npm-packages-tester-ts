import { Table } from 'console-table-printer';
const bundle = new Table({
  title: 'Bundle (BUNDLENAME)',
  columns: [
    { name: 'Weapon' },
    { name: 'Chroma' },
    { name: 'Quality' },
    { name: 'Price' },
  ],
  charLength: { '👍': 2, '✅': 2 },
});

bundle.addRows([
  {
    Weapon: '👍',
    Chroma: '✅',
    Quality: 'Deluxe',
    Price: '1 775 VP',
  },
]);

bundle.printTable();
