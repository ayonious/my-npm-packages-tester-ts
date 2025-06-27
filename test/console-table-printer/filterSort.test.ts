import { expect } from '@jest/globals';
import { Table } from 'console-table-printer';

describe('Table with data manipulation', () => {
  // Sample data for all tests
  const sampleData = [
    { id: 1, name: 'Alice', department: 'Engineering', salary: 95000 },
    { id: 2, name: 'Bob', department: 'Marketing', salary: 78000 },
    { id: 3, name: 'Charlie', department: 'Engineering', salary: 92000 },
    { id: 4, name: 'Diana', department: 'HR', salary: 67000 },
    { id: 5, name: 'Edward', department: 'Marketing', salary: 82000 },
    { id: 6, name: 'Fiona', department: 'Engineering', salary: 99000 },
  ];

  it('should display filtered data (Engineering department only)', () => {
    const table = new Table({
      title: 'Engineering Department',
      columns: [
        { name: 'id', alignment: 'left' },
        { name: 'name', alignment: 'left' },
        { name: 'department', alignment: 'left' },
        { name: 'salary', alignment: 'right' },
      ],
    });

    // Filter data before adding to table
    const engineeringOnly = sampleData.filter(
      (row) => row.department === 'Engineering'
    );
    table.addRows(engineeringOnly);

    expect(table.render()).toMatchSnapshot();
  });

  it('should display sorted data (salary ascending)', () => {
    const table = new Table({
      title: 'Employees Sorted by Salary (Ascending)',
      columns: [
        { name: 'id', alignment: 'left' },
        { name: 'name', alignment: 'left' },
        { name: 'department', alignment: 'left' },
        { name: 'salary', alignment: 'right' },
      ],
    });

    // Sort data before adding to table
    const sortedBySalary = [...sampleData].sort((a, b) => a.salary - b.salary);
    table.addRows(sortedBySalary);

    expect(table.render()).toMatchSnapshot();
  });

  it('should display sorted data (salary descending)', () => {
    const table = new Table({
      title: 'Employees Sorted by Salary (Descending)',
      columns: [
        { name: 'id', alignment: 'left' },
        { name: 'name', alignment: 'left' },
        { name: 'department', alignment: 'left' },
        { name: 'salary', alignment: 'right' },
      ],
    });

    // Sort data before adding to table
    const sortedBySalaryDesc = [...sampleData].sort(
      (a, b) => b.salary - a.salary
    );
    table.addRows(sortedBySalaryDesc);

    expect(table.render()).toMatchSnapshot();
  });

  it('should display filtered and sorted data (Marketing department, sorted by salary)', () => {
    const table = new Table({
      title: 'Marketing Department (Sorted by Salary)',
      columns: [
        { name: 'id', alignment: 'left' },
        { name: 'name', alignment: 'left' },
        { name: 'department', alignment: 'left' },
        { name: 'salary', alignment: 'right' },
      ],
    });

    // Filter and sort data before adding to table
    const marketingOnly = sampleData
      .filter((row) => row.department === 'Marketing')
      .sort((a, b) => b.salary - a.salary);

    table.addRows(marketingOnly);

    expect(table.render()).toMatchSnapshot();
  });
});
