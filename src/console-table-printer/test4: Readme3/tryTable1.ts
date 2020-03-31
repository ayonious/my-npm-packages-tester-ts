import { Table } from 'console-table-printer';

const p = new Table();
p.addRow({ index: 1, text: 'red wine', value: 10.212 }, { color: 'red' });
p.addRow({ index: 2, text: 'green gemuse', value: 20.0 }, { color: 'green' });
p.addRow({ index: 3, text: 'gelb bananen', value: 100 }, { color: 'yellow' });
p.addRow({ index: 3, text: 'rosa hemd', value: 100 }, { color: 'cyan' });
p.printTable();
