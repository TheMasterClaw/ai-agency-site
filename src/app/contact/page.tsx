"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Let's <span className="text-gradient">Talk</span>
            </h1>
            <p className="text-xl text-neutral-400">
              Ready to automate your business? Book a free 30-minute strategy call 
              and we'll show you exactly how AI can transform your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Left side - Info */}
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Schedule Your Free Strategy Call
                  </h2>
                  
                  <p className="text-neutral-400 mb-8">
                    During this 30-minute call, we'll:
                  </p>

                  <ul className="space-y-4 mb-8">
                    {[
                      "Analyze your current workflows",
                      "Identify automation opportunities",
                      "Discuss your goals and timeline",
                      "Provide a custom solution outline",
                      "Answer all your questions",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-neutral-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-neutral-400">
                      <Clock className="w-5 h-5" />
                      <span>30 minutes</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-400">
                      <Phone className="w-5 h-5" />
                      <span>Video call via Zoom</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-400">
                      <CheckCircle className="w-5 h-5" />
                      <span>No commitment required</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Calendly Embed */}
                <div className="lg:col-span-3">
                  <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden h-[600px]">
                    <iframe
                      src="https://calendly.com/d/30-min-strategy-call-nexus-ai"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Schedule a call"
                      className="rounded-2xl"
                    ></iframe>
                  </div>
                  
                  <p className="text-sm text-neutral-500 mt-4 text-center">
                    Or email us directly at{" "}
                    <a href="mailto:hello@nexusai.agency" className="text-indigo-400 hover:text-indigo-300">
                      hello@nexusai.agency
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Other Ways to Connect</h2>
            <p className="text-neutral-400">
              Prefer to reach out directly? Here's how to get in touch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "hello@nexusai.agency",
                href: "mailto:hello@nexusai.agency",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+1 (555) 123-4567",
                href: "tel:+15551234567",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "San Francisco, CA",
                href: "#",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="glass rounded-2xl p-8 text-center block hover:bg-white/5 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400">{item.content}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Common Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "How long does a typical project take?",
                a: "Most projects take 4-8 weeks from kickoff to deployment. The exact timeline depends on the complexity and scope of your requirements.",
              },
              {
                q: "What if I don't know exactly what I need?",
                a: "That's exactly why we offer free strategy calls. We'll analyze your workflows and identify the highest-impact automation opportunities.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes, all projects include 30 days of post-launch support. We also offer monthly maintenance and optimization packages.",
              },
              {
                q: "Can you integrate with our existing tools?",
                a: "Absolutely. We specialize in integrating AI solutions with existing tech stacks including CRMs, helpdesks, databases, and custom APIs.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-neutral-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
