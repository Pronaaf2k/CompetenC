'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/ui/button';
import { challengeTypes, mockTestimonials } from '../data/mockData';
import { ArrowRight, Target, Trophy, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
// import heroImage from '/hero-image.jpg';

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 gradient-subtle opacity-50" />
                <div className="container mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                                Hire through{' '}
                                <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                                    competition
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Host, Compete, and Hire – all in one platform
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="gradient-primary text-white text-lg px-8">
                                    <Link href="/company">
                                        Launch a Challenge
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                                    <Link href="/student">
                                        Join as Solver
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="glass rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/hero-image.jpg"
                                    alt="Students collaborating on challenges"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-lg">
                                <p className="text-sm text-black">Active Challenges</p>
                                <p className="text-3xl font-heading font-bold text-primary">1,200+</p>
                            </div>
                            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-lg">
                                <p className="text-sm text-black">Success Rate</p>
                                <p className="text-3xl font-heading font-bold text-secondary">94%</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                            How It Works
                        </h2>
                        <p className="text-lg text-gray-600">
                            Three simple steps to connect talent with opportunity
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Target, title: 'Host', desc: 'Companies create real-world challenges' },
                            { icon: Trophy, title: 'Compete', desc: 'Students showcase their skills in action' },
                            { icon: Users, title: 'Hire', desc: 'Find proven talent, not just resumes' }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                <GlassCard className="text-center h-full">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-heading font-semibold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.desc}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenge Types */}
            <section className="py-20 px-6 bg-muted/30">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                            Challenge Types
                        </h2>
                        <p className="text-lg text-gray-600">
                            Choose the format that fits your hiring needs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {challengeTypes.map((type, idx) => (
                            <motion.div
                                key={type.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <GlassCard className="text-center h-full">
                                    <div className="text-5xl mb-4">{type.icon}</div>
                                    <h3 className="text-xl font-heading font-semibold mb-2">{type.name}</h3>
                                    <p className="text-sm text-gray-600">{type.description}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                            What People Say
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {mockTestimonials.map((testimonial, idx) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                <GlassCard>
                                    <div className="text-4xl mb-4">{testimonial.avatar}</div>
                                    <p className="text-gray-600 mb-4 italic">
                                        "{testimonial.text}"
                                    </p>
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
