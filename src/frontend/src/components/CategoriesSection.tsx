import { Button } from "@/components/ui/button";
import { Baby, Cross, Heart, Pill, ShoppingBag, Star } from "lucide-react";
import { motion } from "motion/react";

const categories = [
  {
    icon: Pill,
    label: "Prescription Medicines",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: ShoppingBag,
    label: "OTC Medicines",
    color: "bg-green-50 text-green-600",
  },
  { icon: Heart, label: "Personal Care", color: "bg-pink-50 text-pink-600" },
  { icon: Baby, label: "Baby Care", color: "bg-yellow-50 text-yellow-600" },
  {
    icon: Star,
    label: "Vitamins & Supplements",
    color: "bg-purple-50 text-purple-600",
  },
  { icon: Cross, label: "First Aid", color: "bg-red-50 text-red-600" },
];

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="py-16 px-4 sm:px-6"
      data-ocid="categories.section"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-heading text-2xl md:text-3xl">
            Popular Categories
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Find medicines and healthcare products by category
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card rounded-2xl border border-border p-5 flex flex-col items-center gap-3 text-center hover:shadow-card-hover cursor-pointer transition-shadow"
              data-ocid={`categories.item.${i + 1}`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.color}`}
              >
                <cat.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-foreground leading-tight">
                {cat.label}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-secondary"
            data-ocid="categories.secondary_button"
          >
            Show More Categories
          </Button>
        </div>
      </div>
    </section>
  );
}
