export type Product = {
  id: string;
  slug: string;
  name: string;
  nameBn: string;
  category: string;
  description: string;
  authorizedDealer?: string;
  image?: string;
  price?: number;
  featured?: boolean;
  visible: boolean;
};

import shopWideOne from "./images/20260912_204227.jpg";
import shopWideTwo from "./images/20260912_204230.jpg";
import shopWideThree from "./images/20260912_204235(0).jpg";
import toolShelfOne from "./images/20260913_194114.jpg";
import toolShelfTwo from "./images/20260913_194116.jpg";

export const shopDetails = {
  whatsappNumber: "8801331618902",
  whatsappDisplay: "+880 1331-618902",
  address: "Dhaka - Tangail Road, Opposite of Uttara bank, Konabari, Gazipur Sadar, Gazipur",
  paymentMethods: ["bKash", "Bank payment"],
};

export const categories = [
  { id: "paint", label: "Paint & Finishing", labelBn: "রং ও ফিনিশিং", icon: "01" },
  { id: "tools", label: "Tools & Hardware", labelBn: "টুলস ও হার্ডওয়্যার", icon: "02" },
  { id: "plumbing", label: "Plumbing", labelBn: "প্লাম্বিং", icon: "03" },
  { id: "electrical", label: "Electrical", labelBn: "ইলেকট্রিক্যাল", icon: "04" },
];

export const authorizedDealers = [
  { id: "dealer-rfl", name: "RFL", note: "Authorized dealer point", logo: "" },
  { id: "dealer-dong-cheng", name: "Dong Cheng", note: "Authorized dealer point", logo: "" },
  { id: "dealer-berger", name: "Berger", note: "Authorized dealer point", logo: "" },
];

export const galleryImages = [
  { src: shopWideOne.src, alt: "বিসমিল্লাহ হার্ডওয়্যার ও পেইন্ট দোকানের ভেতরের দৃশ্য" },
  { src: shopWideTwo.src, alt: "দোকানের সাজানো হার্ডওয়্যার ও পেইন্ট সামগ্রী" },
  { src: shopWideThree.src, alt: "বিসমিল্লাহ হার্ডওয়্যার ও পেইন্টের পণ্য প্রদর্শন" },
];

export const products: Product[] = [
  {
    id: "product-001",
    slug: "interior-wall-paint",
    name: "Interior Wall Paint",
    nameBn: "ইন্টেরিয়র ওয়াল পেইন্ট",
    category: "paint",
    description: "Smooth, durable colour solutions for rooms, offices, and everyday spaces.",
    authorizedDealer: "Berger",
    image: shopWideOne.src,
    featured: true,
    visible: true,
  },
  {
    id: "product-002",
    slug: "exterior-protective-coating",
    name: "Exterior Protective Coating",
    nameBn: "এক্সটেরিয়র প্রটেক্টিভ কোটিং",
    category: "paint",
    description: "Protective finishing options for walls, gates, and outdoor surfaces.",
    authorizedDealer: "RFL",
    image: shopWideTwo.src,
    featured: true,
    visible: true,
  },
  {
    id: "product-003",
    slug: "professional-hand-tools",
    name: "Professional Hand Tools",
    nameBn: "প্রফেশনাল হ্যান্ড টুলস",
    category: "tools",
    description: "Practical tools for repair work, construction, workshop, and home projects.",
    authorizedDealer: "Dong Cheng",
    image: toolShelfOne.src,
    featured: true,
    visible: true,
  },
  {
    id: "product-004",
    slug: "plumbing-fittings",
    name: "Plumbing Fittings",
    nameBn: "প্লাম্বিং ফিটিংস",
    category: "plumbing",
    description: "Everyday fittings and supplies for maintenance and installation work.",
    image: toolShelfTwo.src,
    visible: true,
  },
];

export const visibleProducts = products.filter((product) => product.visible);
export const featuredProducts = visibleProducts.filter((product) => product.featured);
