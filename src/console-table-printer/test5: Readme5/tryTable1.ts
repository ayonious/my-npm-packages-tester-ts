import { Table } from 'console-table-printer';

const p = new Table({
  columns: [
    { name: 'index', alignment: 'left', color: 'blue' }, // with alignment and color
    { name: 'text', alignment: 'right' },
    { name: 'is_priority_today', title: 'Is This Priority?' }, // with Title as separate Text
  ],
  colorMap: {
    custom_green: '\x1b[32m', // define customized color
  },
});

p.addRow({ index: 1, text: 'red wine', value: 10.212 }, { color: 'green' });
p.addRow(
  { index: 2, text: 'green gemuse', value: 20.0 },
  { color: 'custom_green' } // your green
);
p.addRow(
  { index: 3, text: 'gelb bananen', value: 100, is_priority_today: 'Y' },
  { color: 'yellow' }
);
p.addRow(
  { index: 3, text: 'rosa hemd wie immer', value: 100 },
  { color: 'cyan' }
);
p.printTable();
