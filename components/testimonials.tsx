'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const testimonials = [
  {
    quote: "Delta ISP has completely transformed our work-from-home experience. The speeds are incredible and the connection is rock solid.",
    author: 'Md. Mohsin',
    role: 'Software Engineer',
    initials: 'MM',
  },
  {
    quote: "We switched our business to Delta ISP and couldn't be happier. Their support team is responsive and the uptime guarantee gives us peace of mind.",
    author: 'Nahidul Islam',
    role: 'Manager',
    initials: 'NI',
  },
  {
    quote: "Finally, an ISP that delivers on its promises. No throttling, no hidden fees, just fast and reliable internet.",
    author: 'Konok Hossain',
    role: 'Graphics Designer',
    initials: 'KH',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Loved by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            See what our happy customers have to say about Delta ISP.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:border-primary/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 italic">
                {`"${testimonial.quote}"`}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 bg-gradient-to-br from-primary to-secondary">
                  <AvatarFallback className="text-white font-bold">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
