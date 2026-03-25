import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingCart, Tag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { CartItem } from "../App";

const products = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "OTC Medicines",
    price: 25,
    originalPrice: 35,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Vitamin C 1000mg",
    category: "Vitamins & Supplements",
    price: 180,
    originalPrice: 220,
    badge: "Popular",
  },
  {
    id: 3,
    name: "Cough Syrup 100ml",
    category: "OTC Medicines",
    price: 85,
    originalPrice: 100,
    badge: null,
  },
  {
    id: 4,
    name: "Antacid Tablets",
    category: "OTC Medicines",
    price: 45,
    originalPrice: 60,
    badge: null,
  },
  {
    id: 5,
    name: "Band-Aid Pack (20)",
    category: "First Aid",
    price: 60,
    originalPrice: 75,
    badge: null,
  },
  {
    id: 6,
    name: "Baby Powder 200g",
    category: "Baby Care",
    price: 120,
    originalPrice: 140,
    badge: null,
  },
  {
    id: 7,
    name: "Daily Multivitamin",
    category: "Vitamins & Supplements",
    price: 250,
    originalPrice: 320,
    badge: "New",
  },
  {
    id: 8,
    name: "Ibuprofen 400mg",
    category: "OTC Medicines",
    price: 35,
    originalPrice: 45,
    badge: null,
  },
];

const ITEMS_PER_PAGE = 4;

interface FeaturedProductsProps {
  addToCart: (product: { id: number; name: string; price: number }) => void;
  cart: CartItem[];
}

export default function FeaturedProducts({
  addToCart,
  cart,
}: FeaturedProductsProps) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const visibleProducts = products.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE,
  );

  const handleAdd = (product: (typeof products)[0]) => {
    addToCart({ id: product.id, name: product.name, price: product.price });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 bg-accent/40"
      data-ocid="products.section"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="section-heading text-2xl md:text-3xl">
              Featured Products
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Top picks for you this week
            </p>
          </div>
          <a
            href="#categories"
            className="text-sm font-semibold text-primary hover:underline"
            data-ocid="products.link"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleProducts.map((product, i) => {
            const inCart = cart.find((c) => c.id === product.id);
            const discount = Math.round(
              ((product.originalPrice - product.price) /
                product.originalPrice) *
                100,
            );
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card-hover transition-shadow"
                data-ocid={`products.item.${i + 1}`}
              >
                {/* Product image area */}
                <div className="bg-gradient-to-br from-secondary to-accent h-36 flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Tag className="w-8 h-8 text-primary" />
                  </div>
                  {product.badge && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] font-bold">
                      {product.badge}
                    </Badge>
                  )}
                  {discount > 0 && (
                    <Badge className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold">
                      -{discount}%
                    </Badge>
                  )}
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <div className="text-[10px] font-semibold text-primary uppercase tracking-wide">
                      {product.category}
                    </div>
                    <div className="text-sm font-bold text-foreground mt-0.5 leading-tight">
                      {product.name}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-extrabold text-foreground">
                      ₹{product.price}
                    </span>
                    <span className="text-xs text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>

                  <Button
                    size="sm"
                    onClick={() => handleAdd(product)}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs"
                    data-ocid={`products.item.${i + 1}`}
                  >
                    <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                    {inCart ? `In Cart (${inCart.qty})` : "Add to Cart"}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-9 h-9 border-border"
            data-ocid="products.pagination_prev"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {page + 1} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-9 h-9 border-border"
            data-ocid="products.pagination_next"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
