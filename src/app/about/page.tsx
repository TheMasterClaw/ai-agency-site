"use client";

import { motion } from "framer-motion";
import { CheckCircle, Code2, Cpu, Globe, Shield, Sparkles, Target, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your current workflows, identify automation opportunities, and define success metrics.",
    duration: "1-2 weeks",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We design a custom AI solution architecture tailored to your specific needs and constraints.",
    duration: "1 week",
  },
  {
    step: "03",
    title: "Development",
    description: "Our engineers build your AI agents, integrations, and automation workflows with regular check-ins.",
    duration: "2-8 weeks",
  },
  {
    step: "04",
    title: "Deployment",
    description: "We launch your solution with monitoring, training, and optimization to ensure peak performance.",
    duration: "1 week",
  },
];

const techStack = [
  { name: "OpenAI", category: "LLM", icon: Sparkles },
  { name: "Anthropic", category: "LLM", icon: Brain },
  { name: "LangChain", category: "Framework", icon: Code2 },
  { name: "Python", category: "Language", icon: Code2 },
  { name: "Node.js", category: "Runtime", icon: Code2 },
  { name: "AWS", category: "Cloud", icon: Cloud },
  { name: "Docker", category: "DevOps", icon: Container },
  { name: "PostgreSQL", category: "Database", icon: Database },
];

const values = [
  {
    icon: Target,
    title: "Results First",
    description: "We measure success by your ROI, not just deliverables.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant processes and data handling.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Get to value fast with our proven methodology.",
  },
  {
    icon: Globe,
    title: "Scalable Solutions",
    description: "Built to grow with your business, not hold it back.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Building the Future of <span className="text-gradient">Work</span>
            </h1>
            <p className="text-xl text-neutral-400">
              We're a team of AI engineers and automation specialists passionate about 
              helping businesses work smarter, not harder. Our mission is to democratize 
              access to cutting-edge AI technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-400 mb-6">
                We believe AI should be accessible to every business, not just tech giants. 
                Our goal is to help 1,000 companies automate their operations by 2026.
              </p>
              <ul className="space-y-4">
                {[
                  "Democratize AI for businesses of all sizes",
                  "Deliver measurable ROI on every project",
                  "Build solutions that scale with your growth",
                  "Provide ongoing support and optimization",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "$5M+", label: "Client Savings" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              The principles that guide everything we build and every relationship we form.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-neutral-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A proven methodology that delivers results on time and on budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="text-5xl font-bold text-gradient opacity-30 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-400 mb-4">{step.description}</p>
                  <div className="text-sm text-indigo-400">{step.duration}</div>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-neutral-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Tech Stack</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              We use the best tools in the industry to build reliable, scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "OpenAI", category: "LLM" },
              { name: "Anthropic", category: "LLM" },
              { name: "LangChain", category: "Framework" },
              { name: "Python", category: "Language" },
              { name: "Node.js", category: "Runtime" },
              { name: "AWS", category: "Cloud" },
              { name: "Docker", category: "DevOps" },
              { name: "PostgreSQL", category: "Database" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass rounded-xl p-6 text-center hover:bg-white/5 transition-colors"
              >
                <div className="text-lg font-semibold text-white mb-1">{tech.name}</div>
                <div className="text-sm text-neutral-500">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-neutral-400 mb-10">
              Let's discuss how we can help automate your business and accelerate your growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 glow-primary"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Icon components for tech stack
function Brain({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function Cloud({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

function Container({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function Database({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  );
}
