"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Users, DollarSign, BarChart3 } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    id: "saas-support",
    client: "CloudSync",
    industry: "SaaS",
    title: "Reducing Support Costs by 65% with AI Chatbots",
    description: "CloudSync was drowning in support tickets as they scaled. Their 5-person support team couldn't keep up with 10,000+ monthly users.",
    challenge: "Support ticket volume increased 300% in 6 months. Response times exceeded 24 hours. Customer satisfaction dropping.",
    solution: "Deployed a custom AI chatbot trained on their product documentation and 50,000 historical support conversations.",
    results: [
      { metric: "65%", label: "Reduction in support costs", icon: DollarSign },
      { metric: "2.3s", label: "Average response time", icon: Clock },
      { metric: "80%", label: "Tickets resolved automatically", icon: BarChart3 },
      { metric: "94%", label: "Customer satisfaction", icon: Users },
    ],
    testimonial: {
      quote: "The AI chatbot has been transformational. It handles routine questions instantly, and our team can focus on complex issues that actually need human attention.",
      author: "Sarah Chen",
      role: "VP of Customer Success",
    },
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "ecommerce-leads",
    client: "LuxeBrand",
    industry: "E-commerce",
    title: "40% Increase in Lead Conversion with AI Qualification",
    description: "LuxeBrand was generating thousands of leads monthly but struggled to identify and prioritize high-intent prospects.",
    challenge: "Only 12% of leads were qualified. Sales team wasted time on poor-fit prospects. Hot leads went cold before follow-up.",
    solution: "Implemented AI lead scoring and automated nurture sequences that qualify and warm up prospects before handoff to sales.",
    results: [
      { metric: "40%", label: "Increase in conversion rate", icon: TrendingUp },
      { metric: "3x", label: "Faster lead qualification", icon: Clock },
      { metric: "$2.4M", label: "Additional revenue", icon: DollarSign },
      { metric: "60%", label: "Sales team efficiency", icon: BarChart3 },
    ],
    testimonial: {
      quote: "Our sales team went from chasing cold leads to closing hot deals. The AI does the heavy lifting of qualification.",
      author: "Marcus Rodriguez",
      role: "Head of Sales",
    },
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "consulting-workflow",
    client: "StrategyPro",
    industry: "Consulting",
    title: "30 Hours Per Week Saved with Workflow Automation",
    description: "StrategyPro's consultants spent more time on admin than client work. Manual data entry and report creation was killing productivity.",
    challenge: "Each consultant spent 6+ hours weekly on non-billable admin work. Data was siloed across 8 different tools. Errors in client reports.",
    solution: "Built custom integrations and automated workflows connecting their CRM, project management, and reporting tools.",
    results: [
      { metric: "30h", label: "Saved per week", icon: Clock },
      { metric: "100%", label: "Elimination of data errors", icon: BarChart3 },
      { metric: "$180K", label: "Annual cost savings", icon: DollarSign },
      { metric: "25%", label: "More billable hours", icon: TrendingUp },
    ],
    testimonial: {
      quote: "We hired consultants for their expertise, not data entry. Now they can focus on what they do best.",
      author: "Jennifer Walsh",
      role: "Managing Partner",
    },
    color: "from-emerald-500 to-teal-500",
  },
];

export default function CaseStudiesPage() {
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
              Client <span className="text-gradient">Results</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Real outcomes from real businesses. See how AI automation transformed 
              their operations and bottom line.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Impact by the Numbers</h2>
            <p className="text-neutral-400">Average results across all client engagements</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "60%", label: "Cost Reduction" },
              { value: "5x", label: "Faster Processing" },
              { value: "24/7", label: "Availability" },
              { value: "$2M+", label: "Client Savings" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </motion.div>
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
              Ready to be our next success story?
            </h2>
            <p className="text-xl text-neutral-400 mb-10">
              Let's discuss how AI automation can transform your business operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 glow-primary"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  return (
    <motion.div
      id={study.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass rounded-3xl overflow-hidden"
    >
      <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
        <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${study.color}`}>
              {study.industry}
            </div>
            <span className="text-neutral-500">{study.client}</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">{study.title}</h2>
          
          <p className="text-neutral-400 mb-8">{study.description}</p>

          <div className="space-y-6 mb-8">
            <div>
              <h4 className="text-sm font-semibold text-red-400 mb-2">The Challenge</h4>
              <p className="text-neutral-400">{study.challenge}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-emerald-400 mb-2">Our Solution</h4>
              <p className="text-neutral-400">{study.solution}</p>
            </div>
          </div>

          <blockquote className="border-l-2 border-indigo-500 pl-6">
            <p className="text-neutral-300 italic mb-4">"{study.testimonial.quote}"</p>
            <div>
              <div className="font-medium text-white">{study.testimonial.author}</div>
              <div className="text-sm text-neutral-500">{study.testimonial.role}</div>
            </div>
          </blockquote>
        </div>

        <div className={`bg-gradient-to-br ${study.color} p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
          <h3 className="text-xl font-semibold text-white mb-8">The Results</h3>
          
          <div className="grid grid-cols-2 gap-6">
            {study.results.map((result, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <result.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{result.metric}</div>
                <div className="text-sm text-white/80">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
