import { Table } from 'console-table-printer';

//Create a table
const p = new Table();

//add rows with color
p.addRow({ index: 1, text: 'red wine please', value: 10.212 });
p.addRow({ index: 2, text: 'green gemuse please', value: 20.0 });
p.addRows([
  //adding multiple rows are possible
  { index: 3, text: 'gelb bananen bitte', value: 100 },
  { index: 4, text: 'update is working', value: 300 },
]);

//print
p.printTable();
