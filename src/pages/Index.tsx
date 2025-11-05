import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Truck, Wrench, Award, ChevronRight, Package, Clock, CheckCircle, Tag, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import productsData from '../../data/products.json';
import warehouseImg from '@/assets/warehouse.jpg';
import qualityCheckImg from '@/assets/quality-check.jpg';
import installationImg from '@/assets/installation.jpg';
import deliveryImg from '@/assets/delivery.jpg';

const Index = () => {
  const featuredProducts = productsData.slice(0, 12);

  const categories = [
    { name: 'Brakes', icon: '🛑' },
    { name: 'Filters', icon: '🔧' },
    { name: 'Electrical', icon: '⚡' },
    { name: 'Belts', icon: '🔗' },
    { name: 'Cooling', icon: '❄️' },
    { name: 'Suspension', icon: '🔩' },
    { name: 'Lighting', icon: '💡' },
    { name: 'Transmission', icon: '⚙️' },
  ];

  const brands = ['Maruti', 'Hyundai', 'Tata', 'Mahindra', 'Toyota', 'Honda', 'Ford', 'Kia'];

  const usps = [
    {
      icon: ShieldCheck,
      title: 'Genuine Quality',
      description: 'OE standard or better. Every part is verified.',
    },
    {
      icon: Truck,
      title: 'Fast Dispatch',
      description: 'Most orders ship same day from our warehouse.',
    },
    {
      icon: Wrench,
      title: 'Expert Fitment',
      description: 'Free phone support to ensure correct parts.',
    },
    {
      icon: Award,
      title: 'Warranty Support',
      description: '6-18 month warranties on all parts.',
    },
  ];

  const reviews = [
    {
      name: 'Rajesh Kumar',
      vehicle: 'Maruti Swift',
      rating: 5,
      comment: 'Great quality brake pads. Perfect fit and excellent customer service!',
    },
    {
      name: 'Priya Sharma',
      vehicle: 'Hyundai i20',
      rating: 5,
      comment: 'Fast delivery and genuine parts. Very helpful staff over the phone.',
    },
    {
      name: 'Amit Patel',
      vehicle: 'Tata Nexon',
      rating: 5,
      comment: 'Best prices for OE quality parts. Will order again!',
    },
  ];

  const faqs = [
    {
      question: 'Are these genuine OE parts?',
      answer: 'Yes, we source all parts from OE manufacturers or authorized aftermarket suppliers that meet or exceed OE standards.',
    },
    {
      question: 'Do you offer warranties?',
      answer: 'All parts come with manufacturer warranties ranging from 6 to 18 months depending on the product category.',
    },
    {
      question: 'How quickly do you ship?',
      answer: 'Most in-stock parts ship the same day if ordered before 3 PM. Delivery typically takes 2-5 business days depending on your location.',
    },
    {
      question: 'What if the part doesn\'t fit my vehicle?',
      answer: 'We provide detailed compatibility information and free fitment advice. If there\'s an issue, contact us immediately and we\'ll help resolve it.',
    },
    {
      question: 'Can I return a part?',
      answer: 'Unused parts in original packaging can be returned within 7 days. Installation labor and shipping costs are not covered.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  <section className="relative min-h-screen flex items-start justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://t3.ftcdn.net/jpg/06/42/15/52/360_F_642155259_wkEIRRSocT0VH4W8E7lneTiywgwJcvFc.jpg  "
            alt="Modern auto parts warehouse with automotive components"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Animated Background Elements - Hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-10 hidden md:block">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Floating Auto Parts Images - Hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none hidden lg:block">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Brake disc"
              className="w-12 h-12 object-cover rounded"
            />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Air filter"
              className="w-10 h-10 object-cover rounded"
            />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, delay: 2 }}
            className="absolute top-2/3 right-1/3 w-18 h-18 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Engine oil bottles"
              className="w-12 h-12 object-cover rounded"
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-screen pt-4 sm:pt-8 pb-16 sm:pb-20">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6 sm:space-y-8 mt-8 sm:mt-0"
            >
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                >
                  <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Trusted Since 2012 • 25,000+ Happy Customers</span>
                  <span className="sm:hidden">Trusted • 25K+ Customers</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                >
                  Premium
                  <span className="block text-primary font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Auto Parts
                  </span>
                  <span className="block text-lg sm:text-3xl lg:text-4xl font-normal text-white/90">
                    Delivered Fast
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-base sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl"
                >
                  Get genuine OE quality parts for all Indian car brands. 
                  <span className="text-accent font-semibold"> Same-day dispatch</span> with expert fitment support.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <Button asChild size="lg" className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-xl">
                  <Link to="/shop" className="flex items-center gap-2 sm:gap-3">
                    <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                    Browse Catalog
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm transform hover:scale-105 transition-all duration-200">
                  <Link to="/contact" className="flex items-center gap-2 sm:gap-3">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    Contact Us
                  </Link>
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">1000+</div>
                  <div className="text-xs sm:text-sm text-white/80">Parts in Stock</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">25K+</div>
                  <div className="text-xs sm:text-sm text-white/80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">13+</div>
                  <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Interactive Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 mt-8 lg:mt-0"
            >
              {/* Quick Search Card */}
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Find Your Part</h3>
                    <p className="text-sm sm:text-base text-gray-600">Quick search by vehicle or part</p>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <select className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base">
                      <option>Select Vehicle Brand</option>
                      <option>Maruti Suzuki</option>
                      <option>Hyundai</option>
                      <option>Tata</option>
                      <option>Mahindra</option>
                      <option>Toyota</option>
                      <option>Honda</option>
                    </select>
                    <select className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base">
                      <option>Select Part Category</option>
                      <option>Brake Parts</option>
                      <option>Engine Parts</option>
                      <option>Filters</option>
                      <option>Electrical</option>
                      <option>Suspension</option>
                    </select>
                    <Button className="w-full h-10 sm:h-12 text-base sm:text-lg">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Get Quote Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Feature Highlights with Auto Parts Images */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-16 sm:h-20 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Brake discs and pads"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20"></div>
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-1 sm:mb-2" />
                    <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Genuine Quality</h4>
                    <p className="text-xs text-gray-600">OE Standard Parts</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-16 sm:h-20 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Auto parts delivery truck"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20"></div>
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-1 sm:mb-2" />
                    <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Fast Shipping</h4>
                    <p className="text-xs text-gray-600">Same Day Dispatch</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hidden sm:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/80 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-primary via-primary/90 to-accent/80 text-primary-foreground py-3 sm:py-4 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-center"
          >
            <Tag className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0" />
            <p className="text-sm sm:text-lg font-semibold leading-tight">
              <span className="hidden sm:inline">Limited Time Offer: Get 10% off on all brake parts! Shop now to order.</span>
              <span className="sm:hidden">10% off brake parts! Shop now.</span>
            </p>
            <Button asChild variant="secondary" size="sm" className="text-xs sm:text-sm">
              <Link to="/shop">
                <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Shop Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-4 sm:pt-6 p-3 sm:p-6">
                    <usp.icon className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-2 sm:mb-4" />
                    <h3 className="font-heading font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{usp.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{usp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Featured Products */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-sm sm:text-base">Popular auto parts for Indian vehicles</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/shop">View All Parts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-muted via-muted/90 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Compatible with Popular Brands</h2>
            <p className="text-muted-foreground text-sm sm:text-lg">Genuine parts for all major Indian automobile manufacturers</p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 cursor-pointer bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-2 sm:mb-4 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 p-1 sm:p-2">
                      <img
                        src={
                          brand === 'Maruti' ? 'https://i.pinimg.com/736x/7c/e0/5d/7ce05d694d74bd703c657018682cd2e6.jpg' :
                          brand === 'Hyundai' ? 'https://logos-world.net/wp-content/uploads/2021/03/Hyundai-Logo.png' :
                          brand === 'Tata' ? 'https://logos-world.net/wp-content/uploads/2021/03/Tata-Logo.png' :
                          brand === 'Mahindra' ? 'https://i.pinimg.com/736x/55/06/41/550641417b2581c308939400bd7a5467.jpg' :
                          brand === 'Toyota' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvGP-PIZvE-T76XKwaOg-1sOGBL1M3tPa5w&s' :
                          brand === 'Honda' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMhxMBC8BhlBy4OY1GluhrB_n8aooAajgY-3GktCxKqn3sGYQ5VXvBStHzkHm0lxAaUc&usqp=CAU' :
                          brand === 'Ford' ? 'https://static.vecteezy.com/system/resources/thumbnails/014/414/687/small_2x/ford-logo-on-transparent-background-free-vector.jpg' :
                          brand === 'Kia' ? 'https://logos-world.net/wp-content/uploads/2021/03/Kia-Logo.png' :
                          'https://via.placeholder.com/80x80?text=' + brand.charAt(0)
                        }
                        alt={`${brand} logo`}
                        className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/80x80/3B82F6/FFFFFF?text=${brand.charAt(0)}`;
                        }}
                      />
                    </div>
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                      {brand}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4 leading-relaxed">
                      {brand === 'Maruti' && (
                        <>
                          <span className="hidden sm:inline">Swift, Alto, Baleno, Dzire, Vitara</span>
                          <span className="sm:hidden">Swift, Alto, Baleno</span>
                        </>
                      )}
                      {brand === 'Hyundai' && (
                        <>
                          <span className="hidden sm:inline">i10, i20, Creta, Verna, Venue</span>
                          <span className="sm:hidden">i10, i20, Creta</span>
                        </>
                      )}
                      {brand === 'Tata' && (
                        <>
                          <span className="hidden sm:inline">Nexon, Harrier, Safari, Tigor, Altroz</span>
                          <span className="sm:hidden">Nexon, Harrier</span>
                        </>
                      )}
                      {brand === 'Mahindra' && (
                        <>
                          <span className="hidden sm:inline">Scorpio, XUV500, Bolero, KUV100</span>
                          <span className="sm:hidden">Scorpio, XUV500</span>
                        </>
                      )}
                      {brand === 'Toyota' && (
                        <>
                          <span className="hidden sm:inline">Innova, Fortuner, Corolla, Etios</span>
                          <span className="sm:hidden">Innova, Fortuner</span>
                        </>
                      )}
                      {brand === 'Honda' && (
                        <>
                          <span className="hidden sm:inline">City, Civic, CR-V, Amaze, Jazz</span>
                          <span className="sm:hidden">City, Civic, CR-V</span>
                        </>
                      )}
                      {brand === 'Ford' && (
                        <>
                          <span className="hidden sm:inline">EcoSport, Figo, Aspire, Endeavour</span>
                          <span className="sm:hidden">EcoSport, Figo</span>
                        </>
                      )}
                      {brand === 'Kia' && (
                        <>
                          <span className="hidden sm:inline">Seltos, Sonet, Carnival, Carens</span>
                          <span className="sm:hidden">Seltos, Sonet</span>
                        </>
                      )}
                    </p>
                    <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs text-primary font-medium">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Parts Available</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Brand Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
              <div className="p-4 sm:p-6 bg-white/50 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">8+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Major Brands Supported</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/50 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Vehicle Models Covered</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/50 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Compatible Parts Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-muted-foreground">Limited time deals on premium auto parts</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden hover:shadow-xl transition-all border-primary/20">
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">10% OFF</Badge>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-center">Brake Parts Special</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Get 10% discount on all brake pads, discs, and kits this month.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/shop">
                      <Package className="w-4 h-4 mr-2" />
                      Shop Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="relative overflow-hidden hover:shadow-xl transition-all border-primary/20">
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">FREE SHIPPING</Badge>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-center">Bulk Order Benefits</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Free shipping on orders over $100. Same-day dispatch guaranteed.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="relative overflow-hidden hover:shadow-xl transition-all border-primary/20">
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">EXTENDED</Badge>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-center">18-Month Warranty</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Extended warranty on select suspension and engine parts.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/shop">
                      <Package className="w-4 h-4 mr-2" />
                      View Products
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automotive Excellence Features */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Automotive Excellence</h2>
            <p className="text-gray-300 text-lg">Premium quality parts with cutting-edge technology</p>
          </motion.div>
          
          <div className="grid gap-10 max-w-7xl mx-auto">
            {/* First Row - Two Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://atozautopartsindia.com/cdn/shop/files/h4c2-sc-spotlight2-1_785x.jpg?v=1692558101"
                    alt="Advanced automotive technology"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">BLEEDING EDGE TECHNOLOGY</h3>
                    <p className="text-base md:text-lg text-gray-300">Advanced engineering for superior performance</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://atozautopartsindia.com/cdn/shop/files/h4c2-sc-spotlight2-2_785x.jpg?v=1692558101"
                    alt="Stylish automotive headlights"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">STYLISH HEADLIGHTS</h3>
                    <p className="text-base md:text-lg text-gray-300">Premium lighting solutions for enhanced visibility</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Second Row - Large Center Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="relative min-h-[26rem] md:min-h-[36rem] lg:min-h-[4rem] rounded-xl overflow-hidden">
                <img
                  src="https://atozautopartsindia.com/cdn/shop/files/front-view-black_1570x.jpg?v=1695814369"
                  alt="High-performance muscle car"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                  <h3 className="text-5xl md:text-6xl font-bold mb-4">FABRICATED MUSCLE</h3>
                  <p className="text-2xl md:text-3xl text-gray-300 mb-6">Precision-engineered performance parts for maximum power</p>
                  <Button className="bg-primary hover:bg-primary/90 text-xl h-14 px-10">
                    Explore Performance Parts
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Third Row - Two Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://atozautopartsindia.com/cdn/shop/files/h4c2-sc-spotlight2-4_785x.jpg?v=1692558102"
                    alt="Robust car engine components"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">ROBUST CAR ENGINE</h3>
                    <p className="text-base md:text-lg text-gray-300">High-performance engine parts & components</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://atozautopartsindia.com/cdn/shop/files/h4c2-sc-spotlight2-4_785x.jpg?v=1692558102"
                    alt="Carbon fiber exhaust system"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">CARBON FIBER EXHAUST</h3>
                    <p className="text-base md:text-lg text-gray-300">Lightweight, high-performance exhaust systems</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Simple process to get genuine auto parts</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">
                Call our experts with your vehicle details and part requirements
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Verify Fitment</h3>
              <p className="text-sm text-muted-foreground">
                We confirm the exact part for your vehicle model and year
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <Package className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Quick Dispatch</h3>
              <p className="text-sm text-muted-foreground">
                Same-day shipping from our warehouse for in-stock items
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Receive genuine parts at your doorstep within 2-5 business days
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facility</h2>
            <p className="text-muted-foreground">State-of-the-art warehouse and quality assurance</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={warehouseImg}
                alt="Modern auto parts warehouse with organized inventory"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <div className="text-secondary-foreground">
                  <h3 className="font-heading font-semibold text-xl mb-1">Modern Warehouse</h3>
                  <p className="text-sm text-secondary-foreground/80">1000+ parts in organized stock</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={qualityCheckImg}
                alt="Quality inspection of automotive parts"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <div className="text-secondary-foreground">
                  <h3 className="font-heading font-semibold text-xl mb-1">Quality Assurance</h3>
                  <p className="text-sm text-secondary-foreground/80">Every part verified before dispatch</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={installationImg}
                alt="Professional mechanic installing auto parts"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <div className="text-secondary-foreground">
                  <h3 className="font-heading font-semibold text-xl mb-1">Expert Installation</h3>
                  <p className="text-sm text-secondary-foreground/80">Free fitment advice from our team</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={deliveryImg}
                alt="Fast delivery of auto parts across India"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <div className="text-secondary-foreground">
                  <h3 className="font-heading font-semibold text-xl mb-1">Fast Delivery</h3>
                  <p className="text-sm text-secondary-foreground/80">Pan-India shipping in 2-5 days</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">
                Every part sourced from trusted OE manufacturers. No compromises on quality.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Ready Stock</h3>
              <p className="text-muted-foreground">
                1000+ parts in stock. Same-day dispatch for most orders placed before 3 PM.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Call us anytime during business hours. Our team helps you find the right part.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Customers Say</h2>
            <p className="text-muted-foreground">Trusted by thousands of vehicle owners</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-accent text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{review.comment}"</p>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.vehicle}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-semibold text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need help finding the right part?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Our experts are ready to assist you. Contact us for free fitment advice.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
