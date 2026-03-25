import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden hero-gradient"
      data-ocid="hero.section"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-3 py-1.5 rounded-full">
              <CheckCircle className="w-4 h-4" />
              Trusted by thousands in Assam
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Get Your Medicines at{" "}
              <span className="text-primary">Affordable Prices</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              USTHI MEDICAL brings genuine, quality medicines right to your
              doorstep. Order online, save more, and stay healthy — all from the
              comfort of your home in Silchar, Assam.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-md"
                data-ocid="hero.primary_button"
                asChild
              >
                <a href="#categories">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-secondary font-semibold"
                data-ocid="hero.secondary_button"
                asChild
              >
                <a
                  href="https://wa.me/919933138573"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Upload Prescription
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { value: "10,000+", label: "Happy Customers" },
                { value: "5,000+", label: "Medicines" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
              <img
                src="/assets/generated/hero-medical.dim_800x600.jpg"
                alt="Doctor with patient"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/10 pointer-events-none" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-card-hover border border-border flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">
                  100% Genuine
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Verified Products
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
