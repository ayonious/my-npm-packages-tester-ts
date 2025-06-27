import { expect } from '@jest/globals';
import { Table } from 'console-table-printer';

describe('Table with different styles', () => {
  it('should render table with title', () => {
    const table = new Table({
      title: 'Table with title',
      columns: [
        { name: 'id', alignment: 'left' },
        { name: 'name', alignment: 'center' },
        { name: 'score', alignment: 'right' },
      ],
    });

    table.addRows([
      { id: 1, name: 'Alice', score: 95 },
      { id: 2, name: 'Bob', score: 88 },
      { id: 3, name: 'Charlie', score: 92 },
    ]);

    expect(table.render()).toMatchSnapshot();
  });

  it('should render table with custom colors', () => {
    const table = new Table({
      title: 'Table with custom colors',
      columns: [
        { name: 'id', alignment: 'left', color: 'blue' },
        { name: 'name', alignment: 'center', color: 'green' },
        { name: 'score', alignment: 'right', color: 'yellow' },
      ],
    });

    table.addRows([
      { id: 1, name: 'Alice', score: 95 },
      { id: 2, name: 'Bob', score: 88 },
      { id: 3, name: 'Charlie', score: 92 },
    ]);

    expect(table.render()).toMatchSnapshot();
  });

  it('should render table with custom column titles', () => {
    const table = new Table({
      title: 'Table with custom column titles',
      columns: [
        { name: 'id', title: 'ID', alignment: 'left' },
        { name: 'name', title: 'Full Name', alignment: 'center' },
        { name: 'score', title: 'Test Score', alignment: 'right' },
      ],
    });

    table.addRows([
      { id: 1, name: 'Alice', score: 95 },
      { id: 2, name: 'Bob', score: 88 },
      { id: 3, name: 'Charlie', score: 92 },
    ]);

    expect(table.render()).toMatchSnapshot();
  });

  it('should render table with custom color map', () => {
    const table = new Table({
      title: 'Table with custom color map',
      columns: [
        { name: 'id', alignment: 'left' },
        { name: 'name', alignment: 'center' },
        { name: 'score', alignment: 'right' },
      ],
      colorMap: {
        custom_green_bold: '\x1b[1m\x1b[32m',
      },
    });

    table.addRows([{ id: 1, name: 'Alice', score: 95 }], {
      color: 'custom_green_bold',
    });

    table.addRows(
      [
        { id: 2, name: 'Bob', score: 88 },
        { id: 3, name: 'Charlie', score: 92 },
      ],
      { color: 'yellow' }
    );

    expect(table.render()).toMatchSnapshot();
  });
});
