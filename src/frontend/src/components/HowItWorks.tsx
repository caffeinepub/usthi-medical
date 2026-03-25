import { ClipboardList, Package, Search, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    num: 1,
    icon: Search,
    title: "Search Medicine",
    desc: "Browse thousands of medicines by name or category",
  },
  {
    num: 2,
    icon: ShoppingCart,
    title: "Add to Cart",
    desc: "Select your medicines and add them to the cart",
  },
  {
    num: 3,
    icon: ClipboardList,
    title: "Place Order",
    desc: "Fill in delivery details and confirm your order",
  },
  {
    num: 4,
    icon: Package,
    title: "Get Delivery",
    desc: "Receive genuine medicines at your doorstep",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 px-4 sm:px-6"
      data-ocid="how-it-works.section"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading text-2xl md:text-3xl">How It Works</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Ordering medicines online has never been easier
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-border z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center text-center gap-3"
              data-ocid={`how-it-works.item.${i + 1}`}
            >
              <div className="w-20 h-20 bg-card rounded-2xl border-2 border-primary/20 shadow-card flex items-center justify-center relative">
                <step.icon className="w-8 h-8 text-primary" />
                <div className="absolute -top-3 -right-3 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold shadow">
                  {step.num}
                </div>
              </div>
              <div>
                <div className="font-bold text-foreground text-sm">
                  {step.title}
                </div>
                <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {step.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
