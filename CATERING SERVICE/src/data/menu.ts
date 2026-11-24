export type MenuCategory = {
  id: string;
  name: string;
  blurb: string;
  items: MenuItem[];
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number; // per person USD
  tags: string[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'canapes',
    name: 'Canapés & Hors d\u2019oeuvres',
    blurb: 'Bite-size beginnings, passed or stationed.',
    items: [
      { id: 'c1', name: 'Smoked Salmon Blinis', description: 'Crème fraîche, dill, citrus pearls', price: 8, tags: ['pescatarian'] },
      { id: 'c2', name: 'Beef Tartare Toast', description: 'Shallot, capers, cured yolk, brioche', price: 9, tags: [] },
      { id: 'c3', name: 'Heirloom Tomato Bruschetta', description: 'Basil, aged balsamic, sourdough', price: 6, tags: ['vegetarian', 'vegan'] },
      { id: 'c4', name: 'Truffle Arancini', description: 'Saffron risotto, parmesan, black truffle', price: 7, tags: ['vegetarian'] },
      { id: 'c5', name: 'Cucumber Mint Cups', description: 'Chilled cucumber gazpacho, mint oil', price: 5, tags: ['vegan', 'gluten-free'] },
      { id: 'c6', name: 'Spiced Lamb Skewers', description: 'Harissa yogurt, pomegranate, herbs', price: 9, tags: ['gluten-free'] },
    ],
  },
  {
    id: 'mains',
    name: 'Main Courses',
    blurb: 'Plated or buffet — chosen for the table.',
    items: [
      { id: 'm1', name: 'Braised Short Rib', description: 'Red wine jus, celeriac purée, gremolata', price: 42, tags: ['gluten-free'] },
      { id: 'm2', name: 'Seared Sea Bass', description: 'Fennel confit, saffron beurre blanc', price: 44, tags: ['pescatarian', 'gluten-free'] },
      { id: 'm3', name: 'Duck Breast à l\u2019Orange', description: 'Caramelized endive, orange gastrique', price: 43, tags: ['gluten-free'] },
      { id: 'm4', name: 'Wild Mushroom Risotto', description: 'Aged parmesan, thyme, truffle butter', price: 34, tags: ['vegetarian', 'gluten-free'] },
      { id: 'm5', name: 'Roasted Cauliflower Steak', description: 'Tahini, sumac, pomegranate, almonds', price: 30, tags: ['vegan', 'gluten-free'] },
      { id: 'm6', name: 'Herb-Crusted Lamb Rack', description: 'Ruby jus, pommes anna, mint salsa verde', price: 48, tags: ['gluten-free'] },
    ],
  },
  {
    id: 'sides',
    name: 'Garden Sides',
    blurb: 'Family-style accompaniments.',
    items: [
      { id: 's1', name: 'Charred Asparagus', description: 'Lemon, olive oil, shaved parmesan', price: 9, tags: ['vegetarian', 'gluten-free'] },
      { id: 's2', name: 'Herb Pommes Anna', description: 'Layered potato, butter, thyme', price: 8, tags: ['vegetarian', 'gluten-free'] },
      { id: 's3', name: 'Shaved Fennel Salad', description: 'Citrus, olive, mint, chili', price: 8, tags: ['vegan', 'gluten-free'] },
      { id: 's4', name: 'Honey-Glazed Carrots', description: 'Harissa, dill, pistachio', price: 7, tags: ['vegetarian', 'gluten-free'] },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    blurb: 'A sweet close — individual or buffet.',
    items: [
      { id: 'd1', name: 'Vanilla Bean Tart', description: 'Crème pâtissière, seasonal berries', price: 12, tags: ['vegetarian'] },
      { id: 'd2', name: 'Dark Chocolate Fondant', description: 'Molten center, salted caramel', price: 13, tags: ['vegetarian'] },
      { id: 'd3', name: 'Pistachio Olive Oil Cake', description: 'Citrus syrup, rose cream', price: 11, tags: ['vegetarian'] },
      { id: 'd4', name: 'Poached Pear', description: 'Mulled wine, vanilla mascarpone', price: 10, tags: ['vegetarian', 'gluten-free'] },
    ],
  },
];

export const eventTypes = [
  { id: 'wedding', name: 'Wedding', note: 'Receptions, rehearsal dinners, brunches' },
  { id: 'corporate', name: 'Corporate', note: 'Lunches, launches, holiday parties' },
  { id: 'private', name: 'Private', note: 'Anniversaries, milestones, gatherings' },
  { id: 'cocktail', name: 'Cocktail', note: 'Stand-up receptions, art openings' },
];

export const serviceStyles = [
  { id: 'plated', name: 'Plated', note: 'Course-by-course, served to the table' },
  { id: 'buffet', name: 'Buffet', note: 'Abundant stations, guests serve themselves' },
  { id: 'family', name: 'Family-Style', note: 'Shared platters passed at the table' },
  { id: 'cocktail', name: 'Cocktail', note: 'Passed canapés & small plates' },
];

export const guestTiers = [
  { id: 'intimate', label: 'Intimate', range: '10–30 guests' },
  { id: 'small', label: 'Small', range: '30–60 guests' },
  { id: 'medium', label: 'Medium', range: '60–120 guests' },
  { id: 'large', label: 'Large', range: '120–250 guests' },
  { id: 'grand', label: 'Grand', range: '250+ guests' },
];

export const budgetRanges = [
  'Under $75 / guest',
  '$75–125 / guest',
  '$125–200 / guest',
  '$200+ / guest',
  'Not sure yet',
];
