import { Headphones, Lock, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Trusted Products",
    desc: "100% genuine medicines",
  },
  { icon: Zap, title: "Fast Delivery", desc: "Same-day in Silchar" },
  { icon: Lock, title: "Secure Payments", desc: "Safe & encrypted" },
  { icon: Headphones, title: "24/7 Support", desc: "Always here to help" },
];

export default function TrustBadges() {
  return (
    <div className="relative z-10 -mt-6 px-4 sm:px-6" data-ocid="trust.section">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-card rounded-2xl shadow-card-hover border border-border grid grid-cols-2 md:grid-cols-4 gap-0">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`flex items-center gap-3 px-5 py-4 ${
                i < badges.length - 1
                  ? "border-r border-b md:border-b-0 border-border"
                  : ""
              }`}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">
                  {badge.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {badge.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
