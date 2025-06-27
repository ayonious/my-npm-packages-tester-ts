import { Table, printTable } from 'console-table-printer';

const t = new Table({
  columns: [{ name: 'bob' }, { name: 'fred' }],
});

t.addRow({
  bob: 'sjfkls jfkl fklsj fkls jfkls jklf sklfj sklf jskld fj',
  fred: 'dfjskldf jklsdjf klsdj fklsd jfkl',
});
t.printTable();

const data = [
  {
    model: 'All',
    ruleset: '--',
    rule: '--',
    test: '--',
    passed: 1,
    error: 0,
    warning: 0,
    pedantic: 0,
    info: 0,
    skipped: 1,
    filtered: 0,
    ignored: 0,
  },
  {
    model: 'decade',
    ruleset: 'MST',
    rule: '--',
    test: '--',
    passed: 0,
    error: 0,
    warning: 0,
    pedantic: 0,
    info: 0,
    skipped: 1,
    filtered: 0,
    ignored: 0,
  },
  {
    model: 'month',
    ruleset: 'MST',
    rule: '--',
    test: '--',
    passed: 1,
    error: 0,
    warning: 0,
    pedantic: 0,
    info: 0,
    skipped: 0,
    filtered: 0,
    ignored: 0,
  },
  {
    model: 'month',
    ruleset: 'MST',
    rule: 'MST-01',
    test: '--',
    passed: 1,
    error: 0,
    warning: 0,
    pedantic: 0,
    info: 0,
    skipped: 0,
    filtered: 0,
    ignored: 0,
  },
  {
    model: 'month',
    ruleset: 'MST',
    rule: 'MST-01',
    test: 'MST-01-001',
    passed: 1,
    error: 0,
    warning: 0,
    pedantic: 0,
    info: 0,
    skipped: 0,
    filtered: 0,
    ignored: 0,
  },
];

printTable(data);

const data2 = [
  {
    code: 'DBT-02-001',
    message: 'There should be a properly named sql file in each leaf directory',
    path: 'refined_zone/core/real_estate/aggregations/econ_markets/reference_data/market_grouping',
    expected: 'market_grouping.sql',
  },
  {
    code: 'DBT-02-002',
    message:
      'There should be a properly named yaml file in each leaf directory',
    path: 'refined_zone/core/real_estate/aggregations/econ_markets/reference_data/market_grouping',
    expected: 'market_grouping.yml',
  },
  {
    code: 'DBT-02-001',
    message: 'There should be a properly named sql file in each leaf directory',
    path: 'refined_zone/core/real_estate/aggregations/econ_markets/reference_data/sector',
    expected: 'sector.sql',
  },
  {
    code: 'DBT-02-002',
    message:
      'There should be a properly named yaml file in each leaf directory',
    path: 'refined_zone/core/real_estate/aggregations/econ_markets/reference_data/sector',
    expected: 'sector.yml',
  },
  {
    code: 'DBT-02-001',
    message: 'There should be a properly named sql file in each leaf directory',
    path: 'refined_zone/core/real_estate/loans',
    expected: 'loans.sql',
  },
  {
    code: 'DBT-02-002',
    message:
      'There should be a properly named yaml file in each leaf directory',
    path: 'refined_zone/core/real_estate/loans',
    expected: 'loans.yml',
  },
  {
    code: 'DBT-02-001',
    message: 'There should be a properly named sql file in each leaf directory',
    path: 'refined_zone/core/real_estate/properties',
    expected: 'properties.sql',
  },
  {
    code: 'DBT-02-002',
    message:
      'There should be a properly named yaml file in each leaf directory',
    path: 'refined_zone/core/real_estate/properties',
    expected: 'properties.yml',
  },
  {
    code: 'DBT-02-001',
    message: 'There should be a properly named sql file in each leaf directory',
    path: 'refined_zone/satellites/cre_web_components',
    expected: 'cre_web_components.sql',
  },
  {
    code: 'DBT-02-002',
    message:
      'There should be a properly named yaml file in each leaf directory',
    path: 'refined_zone/satellites/cre_web_components',
    expected: 'cre_web_components.yml',
  },
  {
    code: 'DBT-02-001',
    message: 'There should be a properly named sql file in each leaf directory',
    path: 'staging',
    expected: 'staging.sql',
  },
  {
    code: 'DBT-02-002',
    message:
      'There should be a properly named yaml file in each leaf directory',
    path: 'staging',
    expected: 'staging.yml',
  },
  {
    code: 'DBT-02-001',
    message: 'There should be a properly named sql file in each leaf directory',
    path: 'trusted_zone',
    expected: 'trusted_zone.sql',
  },
  {
    code: 'DBT-02-002',
    message:
      'There should be a properly named yaml file in each leaf directory',
    path: 'trusted_zone',
    expected: 'trusted_zone.yml',
  },
];

printTable(data2);
