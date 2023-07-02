import { Table } from 'console-table-printer';

describe('Example: Print a simple Table without table instance creation', () => {
  it(`simple print`, () => {
    //Create a table
    const table = new Table({
      title: 'Bundle (BUNDLENAME)',
      columns: [
        { name: 'Weapon', title: 'WEWWWW' },
        { name: 'Chroma', title: 'WEWWWW' },
        { name: 'Quality', title: '' },
        { name: 'Price' },
      ],
      charLength: { '👍': 2, '✅': 2 },
      style: {
        headerTop: {
          left: '',
          mid: '',
          right: '',
          other: '',
        },
        headerBottom: {
          left: '',
          mid: '',
          right: '',
          other: '',
        },
        tableBottom: {
          left: '',
          mid: '',
          right: '',
          other: '',
        },
        vertical: '',
      },
    });

    table.addRows([
      {
        Weapon: '👍',
        Chroma: '✅',
        Quality: 'Deluxe',
        Price: '1 11 VP',
      },
      {
        Weapon: 'thing',
        Chroma: 'some',
        Quality: 'Deluxe',
        Price: '1 123 VP',
      },
      {
        Weapon: 'asdfasdf',
        Chroma: 'asfasdf',
        Quality: 'Deluxe',
        Price: '1 1000 PP',
      },
    ]);

    expect(table.printTable()).toMatchSnapshot();
    expect(table.render()).toMatchSnapshot();
  });
});
