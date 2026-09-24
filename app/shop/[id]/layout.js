import { products as fallbackCatalog } from "../../../lib/productsData";

export function generateStaticParams() {
  return fallbackCatalog
    .map((product) => product.id ?? product.slug)
    .filter(Boolean)
    .map((id) => ({ id: String(id) }));
}

export default function ProductDetailLayout({ children }) {
  return children;
}