export type Category =
  | "new-arrivals"
  | "london-imports"
  | "wholesale"
  | "preloved"
  | "dresses"
  | "tops"
  | "bottoms"
  | "jackets";

export type Condition = "New" | "Preloved";

export interface Product {
  id: string;
  name: string;
  category: Category;
  image: string;
  sizes: string[];
  condition: Condition;
  description: string;
  featured?: boolean;
}

export interface CategoryInfo {
  id: Category;
  label: string;
  description: string;
  image: string;
}

export interface CollectionInfo {
  id: "london-imports" | "wholesale" | "preloved";
  label: string;
  shortLabel: string;
  description: string;
  image: string;
}

export const COLLECTIONS: CollectionInfo[] = [
  {
    id: "london-imports",
    label: "London Imports",
    shortLabel: "London Imports",
    description:
      "Quality branded clothing imported from London through imported clothing bales. Discover authentic international brands at affordable prices.",
    image:
      "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "wholesale",
    label: "Wholesale Clothing",
    shortLabel: "Wholesale",
    description:
      "Affordable clothing sourced in bulk from major clothing retailers — perfect for customers and resellers looking for great value.",
    image:
      "https://images.pexels.com/photos/8386668/pexels-photo-8386668.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "preloved",
    label: "Preloved Collection",
    shortLabel: "Preloved",
    description:
      "Carefully selected second-hand clothing in excellent condition. Stylish, affordable, and sustainable fashion that's kind to the planet.",
    image:
      "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "new-arrivals",
    label: "New Arrivals",
    description: "The latest pieces to join our collections.",
    image:
      "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "london-imports",
    label: "London Imports",
    description: "Branded clothing imported from London.",
    image:
      "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "wholesale",
    label: "Wholesale",
    description: "Affordable bulk-sourced clothing.",
    image:
      "https://images.pexels.com/photos/8386668/pexels-photo-8386668.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "preloved",
    label: "Preloved",
    description: "Selected second-hand clothing in excellent condition.",
    image:
      "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "dresses",
    label: "Dresses",
    description: "From day to evening, effortless elegance.",
    image:
      "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "tops",
    label: "Tops",
    description: "Blouses, knits and statement shirts.",
    image:
      "https://images.pexels.com/photos/8386668/pexels-photo-8386668.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "bottoms",
    label: "Bottoms",
    description: "Jeans, skirts and trousers for every silhouette.",
    image:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "jackets",
    label: "Jackets",
    description: "Layer up with style and warmth.",
    image:
      "https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Jackets & Coats",
    category: "jackets",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["S", "M", "L", "XL"],
    condition: "Preloved",
    description: "A stylish selection of preloved jackets and coats in excellent condition. Timeless layering pieces for every season, sustainably sourced.",
    featured: true,
  },
  {
    id: "p2",
    name: "Vintage Graphic Hoodie",
    category: "tops",
    image: "https://images.pexels.com/photos/8217415/pexels-photo-8217415.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["S", "M", "L", "XL"],
    condition: "Preloved",
    description: "A vintage graphic hoodie in excellent preloved condition. Cosy, characterful, and kind to the planet.",
    featured: true,
  },
  {
    id: "p3",
    name: "Everyday Sundress",
    category: "dresses",
    image: "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["XS", "S", "M", "L"],
    condition: "Preloved",
    description: "A breezy everyday sundress in excellent preloved condition. Affordable, stylish, and ready for sunny days.",
    featured: true,
  },
  {
    id: "p4",
    name: "Classic Straight-Leg Jeans",
    category: "bottoms",
    image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["26", "28", "30", "32", "34"],
    condition: "Preloved",
    description: "Classic straight-leg jeans in excellent preloved condition. A versatile wardrobe staple, sustainably sourced.",
    featured: true,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "How do I place an order?",
    answer:
      "Browse the shop, select an item, and click 'Order on WhatsApp'. A pre-filled message will open with your product details. Our team will confirm availability, pricing, and delivery with you.",
  },
  {
    question: "Why are there no prices on the website?",
    answer:
      "Pricing is discussed directly with you on WhatsApp. This allows us to give you the best possible price and confirm availability before you commit.",
  },
  {
    question: "What delivery options are available?",
    answer:
      "You can choose from three options: Collection (where arranged), Courier delivery anywhere in South Africa, or Uber Package / Bolt Package delivery within Cape Town. Let us know your preference when ordering.",
  },
  {
    question: "How do I pay for my order?",
    answer:
      "Payment is arranged through WhatsApp. We'll share payment details with you once your order is confirmed. Online payment is coming soon.",
  },
  {
    question: "What's the difference between New and Preloved items?",
    answer:
      "New items are brand new — either imported from London or sourced in bulk from retailers. Preloved items are carefully selected second-hand clothing in excellent condition, offering sustainable fashion at lower prices.",
  },
  {
    question: "Can I exchange or return an item?",
    answer:
      "Yes, items in original condition can be exchanged within 7 days. Please contact us on WhatsApp to arrange an exchange.",
  },
];

export const BUSINESS = {
  name: "YKK Clothing",
  tagline: "Affordable Fashion for Everyone",
  whatsapp: "27732557072",
  whatsappDisplay: "+27 73 255 7072",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  tiktok: "https://tiktok.com",
};

export const GALLERY_IMAGES = [
  "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8386668/pexels-photo-8386668.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6311624/pexels-photo-6311624.jpeg?auto=compress&cs=tinysrgb&w=600",
];
