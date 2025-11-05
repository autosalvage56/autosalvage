import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Wrench, Target, Heart, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: CheckCircle2,
      title: 'Quality First',
      description: 'Every part meets OE standards or better. We source from trusted manufacturers only.',
    },
    {
      icon: Award,
      title: 'Warranty Backed',
      description: '6-12 month warranties on all parts. We stand behind every product we sell.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our team helps you find the right part. Expert advice to guide your purchase.',
    },
    {
      icon: Wrench,
      title: 'Fast Service',
      description: 'Most parts ship same day. We know downtime costs you money.',
    },
  ];

  const stats = [
    { number: '50,000+', label: 'Parts in Stock' },
    { number: '25,000+', label: 'Happy Customers' },
    { number: '12+', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction Rate' },
  ];

  const missionVision = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide high-quality auto parts at competitive prices, making vehicle maintenance accessible to everyone while maintaining the highest standards of customer service and product reliability.',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To become the most trusted name in automotive parts, known for our commitment to quality, innovation, and customer satisfaction. We envision a future where every vehicle owner has access to reliable, affordable parts.',
    },
  ];

  const commitments = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks before shipping to ensure it meets our strict standards.',
    },
    {
      icon: Award,
      title: 'Certified Products',
      description: 'We only stock parts from certified manufacturers and authorized distributors.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Same-day shipping available on most items with reliable tracking and secure packaging.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our dedicated support team is here to help you find exactly what you need.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AutoSalvage</h1>
            <p className="text-lg text-secondary-foreground/80">
              Since 2012, we've been a trusted source for genuine auto parts. 
              With over 25,000 satisfied customers worldwide, we deliver quality parts with 
              expert support and fast, reliable shipping.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                AutoSalvage began with a simple mission: make genuine auto parts 
                accessible to every vehicle owner. What started as a small parts shop has 
                grown into one of the most trusted auto parts suppliers in the industry.
              </p>
              <p className="text-muted-foreground mb-4">
                We work directly with OE manufacturers and authorized distributors to ensure 
                every part meets strict quality standards. Our team of automotive experts 
                helps customers find exactly what they need, whether it's a brake pad for a 
                compact car or an alternator for a full-size SUV.
              </p>
              <p className="text-muted-foreground">
                Today, we serve thousands of customers worldwide, from individual car 
                owners to professional mechanics. Our commitment remains unchanged: genuine 
                parts, expert support, and fast delivery at competitive prices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose AutoSalvage?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're more than just a parts supplier. We're your partner in keeping 
              your vehicle running at its best.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg text-center"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {missionVision.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <item.icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Commitments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to providing you with the best experience possible through these core commitments
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <commitment.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{commitment.title}</h3>
                    <p className="text-sm text-muted-foreground">{commitment.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team of automotive experts is here to help you find the perfect parts for your vehicle
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground text-center leading-relaxed mb-6">
                  At AutoSalvage, we believe that exceptional service begins with passionate people. Our team consists of experienced automotive professionals who understand the importance of quality parts and reliable service. From our knowledgeable sales staff to our efficient warehouse team, everyone at AutoSalvage is committed to ensuring your complete satisfaction.
                </p>
                <p className="text-muted-foreground text-center leading-relaxed">
                  We invest in ongoing training and development to ensure our team stays current with the latest automotive technologies and industry trends. This commitment to excellence means you can trust our recommendations and rely on our expertise for all your auto parts needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
