import { expect } from '@jest/globals';
import { Table } from 'console-table-printer';

describe('Table with addColumns and addColumn', () => {
  it('should add a single column using addColumn', () => {
    const table = new Table();
    
    table.addColumn({ 
      name: 'id', 
      alignment: 'left',
      color: 'blue'
    });

    table.addRow({ id: 1 });
    table.addRow({ id: 2 });

    expect(table.render()).toMatchSnapshot();
  });

  it('should add multiple columns using addColumns', () => {
    const table = new Table();
    
    table.addColumns([
      { name: 'id', alignment: 'left' },
      { name: 'name', alignment: 'center' },
      { name: 'price', alignment: 'right', color: 'green' }
    ]);

    table.addRow({ id: 1, name: 'Product A', price: 99.99 });
    table.addRow({ id: 2, name: 'Product B', price: 149.99 });

    expect(table.render()).toMatchSnapshot();
  });

  it('should combine addColumn and addColumns', () => {
    const table = new Table();
    
    // Add first column individually
    table.addColumn({ 
      name: 'id', 
      alignment: 'left' 
    });

    // Add multiple columns at once
    table.addColumns([
      { name: 'name', alignment: 'center' },
      { name: 'category', alignment: 'center' }
    ]);

    // Add another single column
    table.addColumn({ 
      name: 'price', 
      alignment: 'right',
      color: 'yellow'
    });

    table.addRow({ id: 1, name: 'Product A', category: 'Electronics', price: 99.99 });
    table.addRow({ id: 2, name: 'Product B', category: 'Books', price: 149.99 });

    expect(table.render()).toMatchSnapshot();
  });
}); 