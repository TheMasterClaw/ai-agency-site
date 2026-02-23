"use client";

import { motion } from "framer-motion";
import { Bot, Zap, TrendingUp, Clock, CheckCircle, ArrowRight, MessageSquare, Users, Workflow, Brain } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "customer-support",
    icon: MessageSquare,
    title: "Customer Support AI",
    shortDescription: "Intelligent chatbots and ticket automation that handle inquiries 24/7.",
    fullDescription: "Transform your customer support with AI agents that understand context, learn from your knowledge base, and provide accurate responses around the clock. Our solutions integrate seamlessly with your existing helpdesk platforms.",
    benefits: [
      "Handle 80% of routine inquiries automatically",
      "Reduce average response time from hours to seconds",
      "Scale support without adding headcount",
      "Maintain consistent quality across all interactions",
    ],
    features: [
      { icon: Bot, title: "Smart Chatbots", desc: "NLP-powered conversations that understand intent" },
      { icon: Clock, title: "24/7 Availability", desc: "Never miss a customer inquiry" },
      { icon: Users, title: "Multi-language", desc: "Support customers in 50+ languages" },
      { icon: Workflow, title: "Auto-routing", desc: "Smart escalation to human agents" },
    ],
    pricing: "From $5,000",
    timeline: "2-4 weeks",
  },
  {
    id: "lead-generation",
    icon: Zap,
    title: "Lead Generation Automation",
    shortDescription: "AI-powered systems that capture, qualify, and nurture leads automatically.",
    fullDescription: "Never lose a lead again. Our AI systems capture prospects from every channel, instantly qualify them based on your criteria, and nurture them with personalized follow-up sequences until they're ready to buy.",
    benefits: [
      "Instant response to new leads 24/7",
      "Automatic lead qualification and scoring",
      "Personalized nurture sequences",
      "Seamless CRM integration",
    ],
    features: [
      { icon: MessageSquare, title: "Instant Response", desc: "Reply to leads in under 60 seconds" },
      { icon: TrendingUp, title: "Lead Scoring", desc: "AI-powered qualification" },
      { icon: Workflow, title: "Auto-followup", desc: "Multi-channel nurture sequences" },
      { icon: Users, title: "CRM Sync", desc: "Real-time data synchronization" },
    ],
    pricing: "From $7,500",
    timeline: "3-5 weeks",
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    shortDescription: "Connect your tools and automate repetitive tasks across your organization.",
    fullDescription: "Eliminate manual busywork with intelligent workflow automation. From data entry to report generation, invoice processing to employee onboarding - we automate the repetitive tasks eating up your team's time.",
    benefits: [
      "Save 20+ hours per week on manual tasks",
      "Eliminate human error in data processing",
      "Integrate disconnected systems",
      "Scale operations without adding staff",
    ],
    features: [
      { icon: Zap, title: "API Integrations", desc: "Connect 500+ tools and platforms" },
      { icon: Workflow, title: "Custom Triggers", desc: "Event-based automation" },
      { icon: Brain, title: "Smart Processing", desc: "AI-powered data extraction" },
      { icon: CheckCircle, title: "Error Handling", desc: "Robust retry and alert systems" },
    ],
    pricing: "From $8,000",
    timeline: "4-6 weeks",
  },
  {
    id: "custom-ai",
    icon: Brain,
    title: "Custom AI Development",
    shortDescription: "Bespoke AI solutions tailored to your unique business challenges.",
    fullDescription: "When off-the-shelf solutions won't cut it, we build custom AI systems designed specifically for your needs. From document processing to predictive analytics, computer vision to voice AI - if you can imagine it, we can build it.",
    benefits: [
      "Solutions built specifically for your workflows",
      "Proprietary technology that competitors can't copy",
      "Full ownership of the solution",
      "Ongoing optimization and support",
    ],
    features: [
      { icon: Brain, title: "Custom LLMs", desc: "Fine-tuned models for your domain" },
      { icon: Workflow, title: "API Development", desc: "Production-ready APIs" },
      { icon: CheckCircle, title: "Enterprise Security", desc: "SOC 2 compliant infrastructure" },
      { icon: Users, title: "Dedicated Support", desc: "White-glove service" },
    ],
    pricing: "From $15,000",
    timeline: "6-12 weeks",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              End-to-end AI automation solutions designed to transform how your business operates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <ServiceDetail key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Not sure which service you need?
            </h2>
            <p className="text-xl text-neutral-400 mb-10">
              Book a free consultation and we'll help you identify the highest-impact 
              automation opportunities for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 glow-primary"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceDetail({ service, index }: { service: typeof services[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
    >
      <div className={isEven ? "" : "lg:order-2"}>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-6">
          <service.icon className="w-8 h-8 text-indigo-400" />
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
        <p className="text-lg text-neutral-400 mb-8">{service.fullDescription}</p>

        <div className="space-y-4 mb-8">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Key Benefits</h4>
          <ul className="space-y-3">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-neutral-300">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-6 mb-8">
          <div className="glass rounded-xl px-6 py-3">
            <div className="text-sm text-neutral-500">Starting at</div>
            <div className="text-xl font-semibold text-white">{service.pricing}</div>
          </div>
          <div className="glass rounded-xl px-6 py-3">
            <div className="text-sm text-neutral-500">Timeline</div>
            <div className="text-xl font-semibold text-white">{service.timeline}</div>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className={isEven ? "" : "lg:order-1"}>
        <div className="glass rounded-2xl p-8">
          <h4 className="text-lg font-semibold text-white mb-6">What's Included</h4>
          <div className="grid gap-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <div className="font-medium text-white">{feature.title}</div>
                  <div className="text-sm text-neutral-400">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
