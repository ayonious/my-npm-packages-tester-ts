import { Table } from 'console-table-printer';

const p = new Table({
  columns: [
    { name: 'index', alignment: 'left', color: 'blue' }, // with alignment and color
    { name: 'text', alignment: 'right' },
  ],
  colorMap: {
    custom_green: '\x1b[32m', // define customized color
  },
});

p.addRow({ index: 1, text: 'red wine' }, { color: 'green' });
p.addRow(
  { index: 2, text: 'green gemuse' },
  { color: 'custom_green' } // your green
);
p.addRow({ index: 3, text: 'gelb bananen' }, { color: 'yellow' });
p.addRow({ index: 3, text: 'rosa hemd wie immer' }, { color: 'cyan' });
p.printTable();
