import { printTable } from 'console-table-printer';

describe('Example: Print a simple Table without table instance creation', () => {
  it(`simple print`, function() {
    printTable([
      {
        _count: 3,
        status: 'expired',
        reason: 'fraud',
        currency: 'GBP',
        amount_money: 4392.58,
      },
      {
        _count: 1,
        status: 'expired',
        reason: 'fraud',
        currency: 'CAD',
        amount_money: 1462.25,
      },
      {
        _count: 4,
        status: 'expired',
        reason: 'fraud',
        currency: 'USD',
        amount_money: 5622.29,
      },
      {
        _count: 1,
        status: 'open',
        reason: 'fraud',
        currency: 'EUR',
        amount_money: 1037.98,
      },
      {
        _count: 1,
        status: 'disputed',
        reason: 'fraud',
        currency: 'GBP',
        amount_money: 825.16,
      },
      {
        _count: 7,
        status: 'lost',
        reason: 'fraud',
        currency: 'EUR',
        amount_money: 8273,
      },
      {
        _count: 1,
        status: 'disputed',
        reason: 'fraud',
        currency: 'DKK',
        amount_money: 976.47,
      },
      {
        _count: 12,
        status: 'disputed',
        reason: 'fraud',
        currency: 'EUR',
        amount_money: 11118.2,
      },
      {
        _count: 10,
        status: 'won',
        reason: 'fraud',
        currency: 'EUR',
        amount_money: 9340,
      },
      {
        _count: 5,
        status: 'expired',
        reason: 'fraud',
        currency: 'DKK',
        amount_money: 8178.51,
      },
      {
        _count: 33,
        status: 'expired',
        reason: 'fraud',
        currency: 'EUR',
        amount_money: 46253.72,
      },
    ]);
  });
});
