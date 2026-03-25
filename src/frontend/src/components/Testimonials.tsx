import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Silchar, Assam",
    rating: 5,
    quote:
      "USTHI MEDICAL has been a blessing! The medicines are affordable and delivery is super fast. Saved so much compared to local pharmacies.",
    initials: "PS",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Rahul Das",
    location: "Cachar, Assam",
    rating: 5,
    quote:
      "Excellent service! I ordered Vitamin D supplements and got genuine products at almost 30% discount. The WhatsApp support is very responsive.",
    initials: "RD",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Anita Choudhury",
    location: "Silchar, Assam",
    rating: 5,
    quote:
      "Being a mother, I need baby care products regularly. USTHI MEDICAL makes it so convenient with doorstep delivery. Highly recommended!",
    initials: "AC",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-16 px-4 sm:px-6 bg-accent/40"
      data-ocid="testimonials.section"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading text-2xl md:text-3xl">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Trusted by thousands of families across Assam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-5">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }, (_, j) => (
                  <Star
                    key={`star-${t.name}-${j}`}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
