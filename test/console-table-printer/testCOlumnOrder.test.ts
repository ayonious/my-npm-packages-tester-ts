import { expect } from '@jest/globals';
import { Table } from 'console-table-printer';

describe('Example: Print a simple Table without table instance creation', () => {
  it(`simple print`, () => {
    //Create a table
    const p = new Table({
      columns: [
        { name: 'eighty' },
        { name: 'index', alignment: 'left', color: 'yellow' },
        { name: 'text', alignment: 'right' },
        { name: 'third' },
        { name: 'fourth' },
        { name: 'twelve' },
        { name: 'fifth' },
        { name: 'sixth' },
        { name: 'seventh' },
      ],
    });

    p.addRow({ index: 1, text: 'red wine', value: 10.212 }, { color: 'green' }); // row coloring

    p.addRow({ index: 2, text: 'green gemuse', value: 20.0 });
    p.addRow(
      {
        text: 'gelb bananen',
        value: 100,
        third: 3,
        fifth: 7,
        is_priority_today: 'Y',
        fourth: 4,
      },
      { color: 'yellow' }
    );
    p.addRow(
      {
        sixth: 6,
        seventh: 7,
        index: 3,
        text: 'rosa hemd wie immer',
        value: 100,
      },
      { color: 'cyan' }
    );
    p.addRow(
      {
        sixth: 6,
        seventh: 7,
        twelve: 3,
        eighty: 'rosa hemd wie immer',
      },
      { color: 'green' }
    );
    expect(p.render()).toMatchSnapshot();
  });
});
