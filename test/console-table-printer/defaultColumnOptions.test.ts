import { expect } from '@jest/globals';
import { Table } from 'console-table-printer';

describe('Table with defaultColumnOptions', () => {
  it('should apply default column options to all columns', () => {
    const table = new Table({
      defaultColumnOptions: {
        alignment: 'right',
        color: 'green'
      },
      columns: [
        { name: 'id' },
        { name: 'name' },
        { name: 'value' }
      ]
    });

    table.addRow({ id: 1, name: 'Item 1', value: 100 });
    table.addRow({ id: 2, name: 'Item 2', value: 200 });

    expect(table.render()).toMatchSnapshot();
  });

  it('should allow column-specific options to override defaults', () => {
    const table = new Table({
      defaultColumnOptions: {
        alignment: 'right',
        color: 'green'
      },
      columns: [
        { name: 'id', alignment: 'left' },
        { name: 'name', color: 'blue' },
        { name: 'value' }
      ]
    });

    table.addRow({ id: 1, name: 'Item 1', value: 100 });
    table.addRow({ id: 2, name: 'Item 2', value: 200 });

    expect(table.render()).toMatchSnapshot();
  });

  it('should work with no column definitions', () => {
    const table = new Table({
      defaultColumnOptions: {
        alignment: 'right',
        color: 'yellow'
      }
    });

    table.addRow({ id: 1, name: 'Item 1', value: 100 });
    table.addRow({ id: 2, name: 'Item 2', value: 200 });

    expect(table.render()).toMatchSnapshot();
  });
});
