import { Table } from "console-table-printer";

// Example 4: Basic Row Divider
console.log("\n=== Example 4: Basic Row Divider ===\n");
const table4 = new Table();

table4.addRow({ amount: 1, name: "Apple" });
table4.addRow({ amount: 2, name: "Pear" });
table4.addRow({ amount: 3, name: "Banana" }, { separator: true });
table4.addRow({ amount: 6, name: "Total" });
table4.printTable();

// Example 5: Multiple Sections with Dividers
console.log("\n=== Example 5: Multiple Sections with Dividers ===\n");
const table5 = new Table();

// Fruits section
table5.addRow({ category: "Fruits", item: "Apple", price: 1.0 });
table5.addRow({ category: "Fruits", item: "Banana", price: 0.5 });
table5.addRow({ category: "Fruits", item: "Orange", price: 0.75 }, { separator: true });

// Vegetables section
table5.addRow({ category: "Vegetables", item: "Carrot", price: 0.3 });
table5.addRow({ category: "Vegetables", item: "Potato", price: 0.4 });
table5.addRow({ category: "Vegetables", item: "Tomato", price: 0.6 }, { separator: true });

// Summary section
table5.addRow({ category: "Total Items", item: "6", price: 3.55 });
table5.printTable();

// Example 6: Computed Values with Dividers
console.log("\n=== Example 6: Computed Values with Dividers ===\n");
const table6 = new Table();

// Sales data
table6.addRow({ quarter: "Q1", sales: 1000, profit: 200 });
table6.addRow({ quarter: "Q2", sales: 1500, profit: 350 });
table6.addRow({ quarter: "Q3", sales: 1200, profit: 280 });
table6.addRow({ quarter: "Q4", sales: 2000, profit: 500 }, { separator: true });

// Yearly summary
table6.addRow({ 
  quarter: "Total", 
  sales: 5700, 
  profit: 1330 
});
table6.printTable();