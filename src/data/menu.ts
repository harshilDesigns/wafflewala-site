export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    category: "Classic Waffles",
    items: [
      { name: "Belgian Classic", description: "Plain waffle, maple syrup, butter", price: 89 },
      { name: "Nutella Waffle", description: "Waffle, Nutella drizzle", price: 119 },
      { name: "Honey Butter Waffle", description: "Waffle, honey, butter", price: 99 },
    ],
  },
  {
    category: "Loaded Waffles",
    items: [
      { name: "Choco Overload", description: "Waffle, chocolate sauce, choco chips, gems", price: 149 },
      { name: "Oreo Crush Waffle", description: "Crushed Oreo, whipped cream", price: 159 },
      { name: "Biscoff Waffle", description: "Biscoff spread, crumble", price: 169 },
    ],
  },
  {
    category: "Ice Cream Waffles",
    items: [
      { name: "Waffle Sundae", description: "Waffle, vanilla ice cream, chocolate sauce", price: 179 },
      { name: "Brownie Waffle", description: "Waffle, brownie chunk, ice cream", price: 199 },
    ],
  },
  {
    category: "Fruit Waffles",
    items: [
      { name: "Banana Nutella Waffle", description: "Banana, Nutella, waffle", price: 139 },
      { name: "Mixed Fruit Waffle", description: "Seasonal fruit, honey", price: 149 },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Cold Coffee", description: "Refreshing iced coffee", price: 79 },
      { name: "Chocolate Shake", description: "Rich chocolate milkshake", price: 99 },
      { name: "Masala Chai", description: "Spiced Indian tea", price: 29 },
    ],
  },
];
