import { Table } from 'console-table-printer';

const p5 = new Table({
  title: 'Title of the Table', // A text showsup on top of table (optoinal)
  columns: [
    { name: 'column1', alignment: 'left', color: 'red' }, // with alignment and color
    { name: 'column2', alignment: 'right', maxLen: 30 }, // lines bigger than this will be splitted in multiple lines
    { name: 'column3', title: 'Column3' }, // Title is what will be shown while printing, by default title = name
  ],
  rows: [{ column1: 'row1' }, { column2: 'row2' }, { column3: 'row3' }],
  defaultColumnOptions: {
    alignment: 'center',
    color: 'red',
    maxLen: 40,
    minLen: 20,
  },
});

p5.printTable();
