import { Table } from 'console-table-printer';

/*
const p = new Table({
  columns: [
    { name: 'index', alignment: 'left', color: 'blue' },
    { name: 'text', alignment: 'right' },
  ],
  colorMap: {
    // highlight-next-line
    custom_green_bold: '\x1b[1m\x1b[32m', // define customized color
  },
});

p.addRow({ index: 1, text: 'normal green wine' }, { color: 'green' }).addRow(
  { index: 2, text: 'Bold green gemuse'},
  // highlight-next-line
  { color: 'custom_green_bold' } // your green
).addRow(
  { index: 3, text: 'gelb bananen'},
  { color: 'yellow' }
).addRow(
  { index: 3, text: 'cyan hemd wie immer'},
  { color: 'cyan' }
);

p.printTable();
*/

const p = new Table();

p.addRow({ index: 1, text: 'red wine', value: 10.212 })
  .addRow({ index: 2, text: 'green gemuse', value: 20.0 })
  .addRow({
    index: 3,
    text: 'gelb bananen',
    value: 100,
    is_priority_today: 'Y',
  })
  .addRow({ index: 3, text: 'rosa hemd wie immer', value: 100 });
p.printTable();
