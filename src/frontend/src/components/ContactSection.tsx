import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6"
      data-ocid="contact.section"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading text-2xl md:text-3xl">Get in Touch</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            We're here to help you with all your medicine needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-foreground">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Address
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    USTHI MEDICAL
                    <br />
                    Silchar, Assam — 788001
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Phone
                  </div>
                  <a
                    href="tel:9933138573"
                    className="text-sm text-primary hover:underline font-medium mt-0.5 block"
                  >
                    +91 9933138573
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Email
                  </div>
                  <a
                    href="mailto:usthi.medical@gmail.com"
                    className="text-sm text-primary hover:underline font-medium mt-0.5 block"
                  >
                    usthi.medical@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="rounded-2xl overflow-hidden">
              <a
                href="https://wa.me/919933138573"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 whatsapp-btn rounded-2xl font-bold text-base transition-colors"
                data-ocid="contact.primary_button"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order via WhatsApp — +91 9933138573
              </a>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border p-6 space-y-4 shadow-card"
              data-ocid="contact.panel"
            >
              <h3 className="text-lg font-bold text-foreground">
                Send us a Message
              </h3>

              <div className="space-y-1">
                <Label htmlFor="contact-name" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  required
                  data-ocid="contact.input"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="contact-email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  required
                  data-ocid="contact.input"
                />
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="contact-message"
                  className="text-sm font-medium"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us how we can help..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  required
                  data-ocid="contact.textarea"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                data-ocid="contact.submit_button"
              >
                <Send className="w-4 h-4 mr-2" />
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
