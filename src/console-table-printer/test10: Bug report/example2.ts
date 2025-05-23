import { Table } from "console-table-printer";

// Example 1: Adding columns one by one
const p1 = new Table({
  columns: [{ name: "Serial", alignment: "left" }],
});

p1.addColumn({ name: "Name", alignment: "center" }); // Adding a single column
p1.addColumn({ name: "Price", alignment: "right", color: "green" });

// Add some data
p1.addRow({ Serial: "A001", Name: "Laptop", Price: 999.99 });
p1.addRow({ Serial: "A002", Name: "Mouse", Price: 29.99 });
p1.printTable();

// Example 2: Adding multiple columns at once
const p2 = new Table();

p2.addColumns([
  // adding multiple columns
  { name: "Item", alignment: "left" },
  { name: "Description", alignment: "center" },
  { name: "Stock", alignment: "right", color: "yellow" }
]);

// Add some data
p2.addRows([
  { Item: "Phone", Description: "Latest model", Stock: 50 },
  { Item: "Tablet", Description: "10-inch display", Stock: 30 }
]);
p2.printTable();

// Example 3: Chaining addColumn calls
const p3 = new Table();

p3.addColumn({ name: "Weight", alignment: "left" })
  .addColumn({ name: "Color", alignment: "center" })
  .addColumn({ name: "Price", alignment: "right", color: "blue" });

// Add some data
p3.addRow({ Weight: "2.5kg", Color: "Black", Price: 199.99 });
p3.addRow({ Weight: "1.8kg", Color: "Silver", Price: 149.99 });
p3.printTable();

// Example 4: Mixing addColumn and addColumns
const p4 = new Table();

// Add first column individually
p4.addColumn({ 
  name: "ProductId", 
  alignment: "left",
  color: "cyan"
});

// Add multiple columns at once
p4.addColumns([
  { name: "Category", alignment: "center" },
  { name: "Quantity", alignment: "right" }
]);

// Add one more column
p4.addColumn({ 
  name: "Total", 
  alignment: "right",
  color: "green"
});

// Add some data
p4.addRows([
  { ProductId: "P100", Category: "Electronics", Quantity: 5, Total: 2499.95 },
  { ProductId: "P101", Category: "Accessories", Quantity: 10, Total: 299.90 }
]);
p4.printTable();
