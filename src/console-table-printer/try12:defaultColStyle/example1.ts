import { printTable, Table } from 'console-table-printer';

const data = [
  { __name__: 'John', age: 20 },
  { __name__: 'Jane', age: 21 },
  { __name__: 'Jim', age: 2288989898 },
];

printTable(data, {
  defaultColumnOptions: {
    alignment: 'left',
    color: 'red',
  },
});

const table = new Table({
  columns: [{ name: '__name__' }, { name: 'age' }],
  defaultColumnOptions: {
    alignment: 'center',
    color: 'red',
  },
});

table.addRows(data);
table.printTable();
