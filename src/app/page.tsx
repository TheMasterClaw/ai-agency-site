"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Zap, TrendingUp, Clock, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem / Solution Section */}
      <ProblemSolutionSection />
      
      {/* Services Grid */}
      <ServicesSection />
      
      {/* Results / Stats Section */}
      <ResultsSection />
      
      {/* Case Studies Preview */}
      <CaseStudiesPreview />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-neutral-300">Now accepting new clients for Q1</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            We Build <span className="text-gradient">AI Agents</span>
            <br />
            That Work 24/7
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Automate your customer support, lead generation, and business workflows 
            with custom AI solutions that never sleep, never call in sick, and 
            deliver results on autopilot.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 glow-primary flex items-center gap-2"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 text-lg font-medium text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>

          {/* Trusted By */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20"
          >
            <p className="text-sm text-neutral-500 mb-8">Trusted by innovative companies</p>
            <div className="flex items-center justify-center gap-12 opacity-50">
              {["TechCorp", "StartupX", "CloudNine", "DataFlow", "NexGen"].map((company) => (
                <div key={company} className="text-xl font-semibold text-neutral-400">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  const problems = [
    "Customer support tickets piling up",
    "Leads falling through the cracks",
    "Manual tasks eating up your team's time",
    "Scaling feels impossible with current staff",
  ];

  const solutions = [
    "AI agents handle 80% of support automatically",
    "Never miss a lead with 24/7 response systems",
    "Workflow automation saves 20+ hours per week",
    "Scale infinitely without adding headcount",
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The Problem Is <span className="text-gradient">Real</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Growing businesses are drowning in manual work. Your team is overwhelmed, 
            and traditional hiring can't scale fast enough.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </span>
              Without AI Automation
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-400">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  </span>
                  {problem}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 border-indigo-500/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              With Nexus AI
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </span>
                  {solution}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "Customer Support AI",
      description: "Intelligent chatbots and ticket automation that handle inquiries 24/7, learning from your knowledge base to provide accurate responses.",
      features: ["24/7 Availability", "Multi-language Support", "Knowledge Base Integration"],
    },
    {
      icon: Zap,
      title: "Lead Generation Automation",
      description: "AI-powered systems that capture, qualify, and nurture leads automatically - turning website visitors into sales opportunities.",
      features: ["Instant Lead Response", "Smart Qualification", "CRM Integration"],
    },
    {
      icon: TrendingUp,
      title: "Workflow Automation",
      description: "Connect your tools and automate repetitive tasks. From data entry to report generation, eliminate manual busywork.",
      features: ["Cross-platform Integration", "Custom Triggers", "Error Handling"],
    },
    {
      icon: Clock,
      title: "Custom AI Development",
      description: "Bespoke AI solutions tailored to your unique business challenges. From document processing to predictive analytics.",
      features: ["Custom LLM Training", "API Development", "Enterprise Security"],
    },
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            End-to-end AI automation solutions designed to transform how your business operates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-indigo-400" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-neutral-400 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const stats = [
    { value: "80%", label: "Support Tickets Automated" },
    { value: "24/7", label: "Availability" },
    { value: "3x", label: "Faster Response Time" },
    { value: "$500K+", label: "Client Savings" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesPreview() {
  const cases = [
    {
      company: "SaaS Startup",
      result: "Reduced support costs by 65%",
      description: "Implemented AI chatbot handling 2,000+ conversations monthly",
    },
    {
      company: "E-commerce Brand",
      result: "40% increase in lead conversion",
      description: "Automated lead qualification and follow-up sequences",
    },
    {
      company: "Consulting Firm",
      result: "30 hours saved per week",
      description: "End-to-end workflow automation for client onboarding",
    },
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Client <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Real outcomes from real businesses that invested in AI automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="text-sm text-indigo-400 font-medium mb-2">{case_.company}</div>
              <div className="text-2xl font-bold text-white mb-3">{case_.result}</div>
              <p className="text-neutral-400">{case_.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Custom <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-12">
            Every business is unique. We build custom AI solutions tailored to your specific needs and budget.
          </p>

          <div className="glass rounded-2xl p-12 border-indigo-500/20">
            <div className="text-6xl font-bold text-white mb-4">$5K+</div>
            <p className="text-neutral-400 mb-8">Starting investment for custom AI automation projects</p>
            
            <ul className="text-left max-w-md mx-auto space-y-3 mb-10">
              {[
                "Custom AI agent development",
                "Integration with your existing tools",
                "Training and knowledge transfer",
                "Ongoing support & maintenance",
                "Performance monitoring & optimization",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 glow-primary"
            >
              Get a Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We'll analyze your current processes 
            and show you exactly how AI can transform your operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 text-lg font-medium text-[#0a0a0a] bg-white rounded-xl hover:bg-neutral-200 transition-all duration-300"
            >
              Book Your Free Call
            </Link>
            <p className="text-sm text-neutral-500">
              No commitment required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
