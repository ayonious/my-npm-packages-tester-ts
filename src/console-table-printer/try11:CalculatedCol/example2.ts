import { Table } from 'console-table-printer';

const p = new Table({
  title: 'Multiline Text Examples',
  columns: [
    { name: 'col1', title: 'Product', alignment: 'left' },
    { name: 'col2', title: 'Description', alignment: 'left', minLen: 30 },
    { name: 'col3', title: 'Price', alignment: 'right' },
  ],
});

// Simple multiline
p.addRow({
  col1: 'Laptop',
  col2: 'Line 1\nLine 2', // Basic multiline
  col3: '$999.99',
});

// Product description with features
p.addRow({
  col1: 'Smartphone',
  col2: '- 6.7" Display\n- 256GB Storage\n- 5G Ready', // Bullet points
  col3: '$799.99',
});

// Long text wrapping
p.addRow({
  col1: 'Headphones',
  col2: 'Wireless noise cancelling\nBluetooth 5.0\n40h battery life',
  col3: '$249.99',
});

// Technical specifications
p.addRow({
  col1: 'Camera',
  col2: 'Resolution: 48MP\nZoom: 10x Optical\nISO: 100-6400',
  col3: '$1,299.99',
});

// Product warning
p.addRow({
  col1: 'Battery Pack',
  col2: 'WARNING:\nDo not expose to heat\nKeep away from water',
  col3: '$79.99',
});

p.printTable();
