import { Table } from 'console-table-printer';

const p = new Table({
  columns: [{ name: 'name' }, { name: 'score' }],
  computedColumns: [
    // Using row: Get pass/fail status
    {
      name: 'status',
      function: (row) => (row.score >= 60 ? 'PASS' : 'FAIL'),
    },
    // Using index: Add row numbers
    {
      name: 'student_no',
      function: (row, index) => `Student #${index + 1}`,
    },
    // Using array: Compare with class average
    {
      name: 'vs_average',
      function: (row, index, array) => {
        console.log('array', array);
        const avg = array.reduce((sum, r) => sum + r.score, 0) / array.length;
        console.log('avg', avg);
        return row.score > avg ? 'Above Average' : 'Below Average';
      },
    },
  ],
});

// add rows
p.addRows([
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 55 },
  { name: 'Charlie', score: 70 },
  { name: 'David', score: 65 },
]);

// print
p.printTable();
