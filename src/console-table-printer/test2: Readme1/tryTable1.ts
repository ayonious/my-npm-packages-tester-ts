import { printTable } from 'console-table-printer';

const testCases = [
  { index: 3, text: 'I would like some gelb bananen bitte', value: 100 },
  { index: 4, text: 'I hope batch update is working', value: 300 },
];

//print
printTable(testCases);
