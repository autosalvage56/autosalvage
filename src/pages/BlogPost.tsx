import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import blogsData from '../../data/blogs.json';

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogsData.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Blog content based on the blog topic
  const blogContent: Record<string, any> = {
    'essential-car-maintenance-tips': {
      intro: "Regular car maintenance isn't just about keeping your vehicle looking good—it's about ensuring safety, reliability, and longevity. Many drivers overlook simple maintenance tasks that can prevent major problems down the road. In this comprehensive guide, we'll explore ten essential maintenance tips that every car owner should implement to keep their vehicle running smoothly for years to come.",
      sections: [
        {
          title: "1. Regular Oil Changes",
          content: "Engine oil is the lifeblood of your vehicle. It lubricates moving parts, reduces friction, and helps regulate temperature. Most manufacturers recommend changing your oil every 3,000 to 5,000 miles, though modern synthetic oils can last up to 7,500 miles or more. Always check your owner's manual for specific recommendations. Neglecting oil changes can lead to engine wear, reduced fuel efficiency, and eventually, complete engine failure."
        },
        {
          title: "2. Check and Maintain Tire Pressure",
          content: "Proper tire pressure is crucial for safety, fuel efficiency, and tire longevity. Under-inflated tires can reduce fuel economy by up to 3% and cause uneven wear. Check your tire pressure monthly using a reliable gauge, and always check when tires are cold. The recommended pressure is usually found on a sticker inside the driver's door jamb. Don't forget to check your spare tire as well—you'll be grateful you did if you ever need it."
        },
        {
          title: "3. Replace Air Filters",
          content: "Your engine air filter prevents dirt, debris, and contaminants from entering your engine. A clogged filter can reduce engine performance and fuel efficiency by up to 10%. Most air filters should be replaced every 12,000 to 15,000 miles, but check more frequently if you drive in dusty conditions. It's an inexpensive part that's easy to replace yourself, potentially saving you money on mechanic fees."
        },
        {
          title: "4. Inspect and Rotate Tires",
          content: "Rotating your tires every 5,000 to 7,500 miles ensures even wear and extends their lifespan. Different positions on your vehicle cause tires to wear differently—front tires typically wear faster due to steering and braking forces. Regular rotation can add thousands of miles to your tire life and improve handling. While rotating, inspect for unusual wear patterns that might indicate alignment or suspension issues."
        },
        {
          title: "5. Test Your Battery",
          content: "Car batteries typically last three to five years, but extreme temperatures and short trips can shorten their lifespan. Have your battery tested at least twice a year, especially before winter and summer. Look for corrosion on terminals—a white, powdery substance that can interfere with electrical connections. Clean terminals with a wire brush and baking soda solution. Keep in mind that batteries often fail without warning, so preventive testing is essential."
        }
      ],
      conclusion: "Regular maintenance is an investment that pays dividends in reliability, safety, and resale value. By following these essential tips, you'll avoid costly repairs and ensure your vehicle remains dependable. Create a maintenance schedule based on your owner's manual and stick to it. Remember, the cost of prevention is always less than the cost of repair. Your vehicle is a significant investment—treat it with the care it deserves, and it will serve you well for many miles to come."
    },
    'brake-system-warning-signs': {
      intro: "Your vehicle's braking system is arguably its most critical safety feature. Every year, brake failure contributes to thousands of accidents that could have been prevented with proper maintenance and attention to warning signs. Understanding when your brakes need attention can mean the difference between a simple repair and a major safety hazard. Let's explore the five most common warning signs that indicate your brake system requires immediate professional attention.",
      sections: [
        {
          title: "1. Squealing or Grinding Noises",
          content: "High-pitched squealing when applying brakes often indicates worn brake pads. Many brake pads have built-in wear indicators—small metal tabs designed to make noise when pads are too thin. Ignoring this warning can lead to metal-on-metal grinding, which damages rotors and significantly increases repair costs. If you hear grinding, your brake pads are likely completely worn, and you're damaging your rotors with every stop. This is a safety emergency that requires immediate attention."
        },
        {
          title: "2. Vibration or Pulsating Brake Pedal",
          content: "If your brake pedal pulsates or vibrates when you apply pressure, it typically indicates warped rotors. This warping occurs from excessive heat due to aggressive driving or worn brake components. Warped rotors prevent proper contact between brake pads and rotors, reducing braking effectiveness and increasing stopping distances. Sometimes rotors can be resurfaced, but severely warped rotors must be replaced. This issue worsens over time and significantly compromises your vehicle's stopping power."
        },
        {
          title: "3. Soft or Spongy Brake Pedal",
          content: "A brake pedal that feels soft or sinks to the floor indicates air in the brake lines or a brake fluid leak. Your braking system relies on hydraulic pressure, and any air in the lines compromises this pressure. This is a serious safety issue that requires immediate professional inspection. Never continue driving if your brake pedal feels spongy—it could indicate imminent brake failure. Brake fluid leaks can also be dangerous as the fluid is corrosive and flammable."
        },
        {
          title: "4. Vehicle Pulling to One Side",
          content: "If your car pulls to one side when braking, it suggests uneven brake wear, a stuck caliper, or contaminated brake fluid. This uneven braking makes your vehicle harder to control and increases accident risk, especially in emergency situations. The problem could be as simple as a stuck caliper or as complex as worn suspension components affecting brake performance. Either way, it requires professional diagnosis and repair to restore safe, balanced braking."
        },
        {
          title: "5. Dashboard Warning Light",
          content: "Modern vehicles have sophisticated brake monitoring systems that illuminate dashboard warning lights when problems are detected. Never ignore your brake warning light—it could indicate low brake fluid, worn brake pads, ABS system malfunction, or other serious issues. Some vehicles have separate ABS warning lights. Even if your brakes seem to work fine, get your system checked immediately when these lights appear. Today's brake systems are complex, and diagnostic equipment is often needed to identify the exact problem."
        }
      ],
      conclusion: "Your brakes are your vehicle's primary safety system, and maintaining them should be a top priority. Don't wait for complete brake failure to address these warning signs. Regular brake inspections, typically every 12,000 miles or annually, can catch problems early. Quality brake components and professional installation ensure optimal performance and longevity. Remember, the cost of brake maintenance is minimal compared to the cost of an accident. If you notice any of these warning signs, schedule an inspection immediately. Your safety and the safety of others on the road depends on properly functioning brakes."
    },
    'choosing-right-engine-oil': {
      intro: "Walk into any auto parts store, and you'll face dozens of engine oil options with varying numbers, letters, and claims. Understanding engine oil isn't just about following your manual's recommendation—it's about comprehending how oil protects your engine and why choosing the right type matters. Modern engines are precision-engineered machines requiring specific lubrication properties. Using the wrong oil can reduce fuel efficiency, increase engine wear, and potentially void your warranty. Let's demystify engine oil selection and help you make informed decisions.",
      sections: [
        {
          title: "Understanding Viscosity Ratings",
          content: "The numbers on oil bottles (like 5W-30) indicate viscosity—oil's resistance to flow. The 'W' stands for winter, and the first number represents cold-weather viscosity. Lower numbers mean the oil flows better in cold temperatures, crucial for engine protection during cold starts. The second number indicates hot-weather viscosity. Your engine requires specific viscosity for proper lubrication under various temperatures. Using the wrong viscosity can lead to increased engine wear, reduced fuel economy, and potential engine damage. Always consult your owner's manual for the manufacturer's recommended viscosity grade."
        },
        {
          title: "Conventional vs. Synthetic Oil",
          content: "Conventional oil, refined from crude petroleum, has served vehicles for decades but has limitations. Synthetic oil, engineered in laboratories, offers superior performance across temperature extremes, better engine protection, and longer change intervals. Full synthetic oil costs more upfront but can save money through extended change intervals and better fuel economy. Synthetic blend oil offers a middle ground, combining conventional and synthetic oils for improved performance at a moderate price. High-mileage engines might benefit from high-mileage formulations that include seal conditioners to reduce leaks."
        },
        {
          title: "API and ILSAC Certifications",
          content: "The American Petroleum Institute (API) and International Lubricant Standardization and Approval Committee (ILSAC) establish oil standards. Look for the API 'donut' symbol on oil containers, which displays the oil's service rating and viscosity grade. Current API ratings include SN, SP for gasoline engines, and CK-4 for diesel engines. ILSAC's 'starburst' symbol indicates the oil meets current standards for fuel economy and emission system protection. Using certified oils ensures compatibility with your engine's requirements and helps maintain warranty coverage."
        },
        {
          title: "Change Intervals and Monitoring",
          content: "While the traditional 3,000-mile oil change is deeply ingrained in automotive culture, modern oils and engines often allow longer intervals. Many manufacturers now recommend 5,000 to 7,500 miles for conventional oil and up to 15,000 miles for synthetic oil. However, severe driving conditions—frequent short trips, extreme temperatures, towing, or dusty environments—may require more frequent changes. Monitor your oil level monthly and watch for color changes. Dark, dirty oil indicates it's time for a change, regardless of mileage. Some modern vehicles have oil life monitoring systems that calculate optimal change intervals based on actual driving conditions."
        },
        {
          title: "Special Considerations",
          content: "Certain vehicles require specialized oils. Turbocharged engines often need synthetic oil due to extreme temperatures and pressures. High-performance vehicles may require specific formulations with additional additives. Diesel engines need oil with higher detergent levels to handle soot and combustion byproducts. Older vehicles with high mileage benefit from high-mileage formulations containing seal conditioners and additives that help reduce oil consumption. Hybrid vehicles may have unique requirements due to engine start-stop cycles. Always verify your vehicle's specific requirements before selecting oil."
        }
      ],
      conclusion: "Choosing the right engine oil involves understanding your vehicle's requirements, driving conditions, and the various oil types available. While it might seem complex, following your manufacturer's recommendations is the best starting point. Premium oils and synthetic formulations offer benefits that often justify their higher cost through better protection and longer change intervals. Regular oil changes with quality oil are the single most important maintenance task for engine longevity. Keep records of oil changes, monitor your oil level regularly, and address any leaks or consumption issues promptly. Your engine is a sophisticated, expensive component—protecting it with the right oil is a wise investment in your vehicle's future."
    },
    'battery-maintenance-winter': {
      intro: "Winter's arrival brings not just colder weather, but also increased stress on your vehicle's electrical system. Car batteries are particularly vulnerable to temperature extremes, with cold weather reducing their capacity by up to 50%. Yet ironically, your engine requires more power to start in cold conditions due to thickened oil and increased electrical demands from heaters, defrosters, and lights. Understanding how to maintain your battery during winter months can prevent the frustration and danger of being stranded in freezing conditions. Let's explore essential strategies for keeping your battery healthy through winter.",
      sections: [
        {
          title: "Understanding Cold Weather Effects",
          content: "Battery chemistry slows dramatically as temperatures drop. At 32°F, a typical battery loses about 35% of its strength, and at 0°F, it loses up to 60%. Simultaneously, engines require up to twice as much power to start in cold weather because motor oil thickens and creates more resistance. This double impact explains why batteries that perform fine in summer fail on cold winter mornings. Additionally, batteries naturally lose charge over time, and this loss accelerates in extreme temperatures. Understanding these challenges helps you prepare appropriately and recognize when preventive maintenance is needed."
        },
        {
          title: "Pre-Winter Battery Testing",
          content: "Before winter arrives, have your battery professionally tested to assess its current condition and remaining capacity. Most auto parts stores offer free testing that measures cranking amps, voltage under load, and overall battery health. A battery that tests marginal in fall will likely fail during winter's first cold snap. If your battery is more than three years old, testing is especially important. Consider replacing batteries testing below 75% capacity, as they're unlikely to survive a harsh winter. This small investment in testing can prevent costly emergency replacements and dangerous situations."
        },
        {
          title: "Keeping Connections Clean and Tight",
          content: "Corroded or loose battery terminals significantly reduce electrical flow, making starting difficult even with a healthy battery. That white, crusty buildup on terminals is corrosion caused by acid fumes and moisture. Clean terminals using a wire brush and a mixture of baking soda and water, which neutralizes acid and removes corrosion. Rinse thoroughly and dry completely before reconnecting cables. Ensure connections are tight—loose cables cause voltage drops and poor electrical contact. Apply a thin layer of petroleum jelly or specialized battery terminal protector to slow future corrosion. This simple maintenance can dramatically improve starting reliability."
        },
        {
          title: "Reducing Electrical Load",
          content: "Every electrical component in your vehicle draws power from the battery. During winter, minimize this load to preserve battery capacity. Turn off all accessories—radio, heater, lights, heated seats—before starting your engine. These components draw significant current that could make the difference between successful starting and a dead battery. Once your engine is running and the alternator begins charging, you can safely activate other systems. For short trips, consider whether you truly need heated seats and other comfort features, as they increase electrical demand without giving the alternator sufficient time to fully recharge the battery."
        },
        {
          title: "Parking and Storage Strategies",
          content: "Where and how you park affects battery performance and longevity. Garaging your vehicle protects it from extreme cold, significantly improving starting reliability. If garaging isn't possible, parking in sunny locations during the day can provide modest warming benefits. For vehicles stored for extended periods, consider a battery maintainer or trickle charger that keeps the battery fully charged without overcharging. These devices are inexpensive and can extend battery life while ensuring your vehicle starts after storage. For daily drivers, ensure your alternator has adequate time to recharge the battery—frequent short trips where the engine barely warms up can drain batteries over time. Longer drives occasionally help maintain proper charge levels."
        }
      ],
      conclusion: "Winter battery maintenance requires awareness, preparation, and sometimes small investments that prevent major problems. A failed battery isn't just inconvenient—it can leave you stranded in dangerous conditions. Regular testing, maintaining clean connections, minimizing electrical load, and smart parking strategies work together to ensure reliable winter starting. If your battery is more than three years old or shows signs of weakness, consider replacement before winter arrives. Quality batteries with higher cold cranking amp ratings perform better in extreme cold. Remember that jump-starting repeatedly stresses both batteries and alternators—it's better to replace a weak battery than risk damage to other electrical components. With proper maintenance and attention, your battery will reliably start your vehicle throughout the coldest weather, keeping you safe and mobile all winter long."
    },
    'understanding-suspension-system': {
      intro: "Most drivers take their vehicle's suspension system for granted, only noticing it when something goes wrong. Yet this sophisticated system does far more than provide a comfortable ride—it's crucial for vehicle handling, tire wear, braking effectiveness, and overall safety. The suspension system connects your vehicle's body to its wheels, managing forces from road imperfections while maintaining tire contact with the pavement. Understanding how your suspension works and recognizing signs of wear can help you maintain this critical system and avoid expensive repairs. Let's explore the components, functions, and maintenance requirements of your vehicle's suspension system.",
      sections: [
        {
          title: "Core Components and Functions",
          content: "Your suspension system consists of several key components working together. Springs—whether coil, leaf, or torsion bar—support the vehicle's weight and absorb major impacts from road irregularities. Shock absorbers control spring oscillation, preventing your vehicle from continuing to bounce after hitting bumps. Control arms connect the steering knuckle to the vehicle frame, allowing wheels to move up and down while maintaining proper alignment. Ball joints provide pivot points, letting wheels turn while moving vertically. Stabilizer bars reduce body roll during cornering. Together, these components balance comfort and control, ensuring your tires maintain optimal road contact for braking, steering, and acceleration."
        },
        {
          title: "Warning Signs of Suspension Problems",
          content: "Several symptoms indicate suspension issues requiring attention. Excessive bouncing after hitting bumps suggests worn shocks or struts—healthy dampers should stop bouncing within one or two cycles. If your vehicle 'nose dives' during braking or 'squats' during acceleration, dampers are likely failing. Uneven tire wear patterns often indicate alignment problems or worn suspension components. Pulling to one side while driving might suggest alignment issues, worn bushings, or a stuck caliper. Strange noises—clunking over bumps, creaking when turning, or squeaking when going over speed bumps—typically indicate worn bushings, ball joints, or other failing components. A rough, uncomfortable ride that wasn't previously present suggests component wear. Don't ignore these signs; suspension problems worsen rapidly and compromise safety."
        },
        {
          title: "Impact on Safety and Performance",
          content: "Well-maintained suspension is essential for safe vehicle operation. Worn shocks can increase stopping distances by up to 20%, a potentially life-threatening difference in emergency situations. Poor suspension control reduces tire contact with the road, decreasing traction for steering, braking, and acceleration. This is especially dangerous in wet or slippery conditions where maintaining tire contact is critical. Vehicle stability suffers with worn suspension, making emergency maneuvers more difficult and increasing rollover risk. Worn components can also cause driver fatigue through excessive vibration and harsh ride quality. Additionally, suspension problems accelerate tire wear—a set of tires can wear out twice as fast with misalignment or worn shock absorbers, adding significant cost to neglected maintenance."
        },
        {
          title: "Regular Maintenance Requirements",
          content: "Proper suspension maintenance extends component life and ensures safe operation. Have your suspension inspected at least annually or every 12,000 miles, with particular attention to ball joints, bushings, tie rod ends, and shock absorbers. Many components show visual wear before complete failure—look for cracked bushings, leaking shock absorbers, or torn ball joint boots during oil changes. Alignment should be checked annually and whenever you notice pulling, uneven tire wear, or after significant impact like hitting a deep pothole. Rotating tires regularly helps identify suspension-related wear patterns early. If you frequently carry heavy loads or drive on rough roads, increase inspection frequency. Some components like bushings gradually deteriorate and may not show obvious symptoms until they're quite worn."
        },
        {
          title: "Replacement Considerations",
          content: "When suspension components require replacement, several factors deserve consideration. Shocks and struts should typically be replaced in pairs—mixing worn and new dampers creates handling imbalance. While aftermarket components may be cheaper, OEM (original equipment manufacturer) parts often provide better fit and longevity, especially for critical components like ball joints and control arms. For performance enthusiasts, upgraded suspension components can improve handling, but ensure they're appropriate for your vehicle and driving style—overly stiff suspension can actually reduce tire contact on rough roads. If alignment has been compromised, address all worn components before alignment adjustment; otherwise, the alignment won't hold. Consider that some suspension work requires special tools and knowledge—attempting DIY repairs on safety-critical components can be dangerous if you lack proper equipment and expertise."
        }
      ],
      conclusion: "Your suspension system is a complex assembly of components that work together to provide safe, comfortable transportation. Understanding its functions and maintaining it properly ensures optimal vehicle performance, safety, and component longevity. Don't dismiss unusual noises, handling changes, or ride quality degradation—these are your vehicle communicating that something needs attention. Regular inspections by qualified technicians can catch problems early when repairs are less expensive and before safety is compromised. Quality suspension components and proper installation are investments in your safety, comfort, and vehicle value. Remember that suspension and steering systems are interconnected—problems in one area often affect the other. Treat your suspension system with the respect it deserves, and it will reward you with thousands of miles of safe, comfortable driving."
    },
    'saving-money-auto-parts': {
      intro: "Quality auto parts are essential for vehicle reliability and safety, but they can also strain your budget if you're not strategic about purchasing. The automotive aftermarket offers countless options from OEM parts to economy alternatives, making it challenging to find the right balance between quality and cost. However, with informed decision-making and smart shopping strategies, you can significantly reduce parts costs without compromising on reliability or safety. This guide explores proven methods to save money on auto parts while ensuring you're getting components that will serve you well. Let's discover how to be a savvy auto parts shopper.",
      sections: [
        {
          title: "Understanding Part Quality Levels",
          content: "Auto parts are generally available in three quality tiers: OEM (Original Equipment Manufacturer), aftermarket premium, and economy. OEM parts are made by your vehicle manufacturer, offering guaranteed fit and quality but at premium prices. Aftermarket premium parts from reputable manufacturers often match or exceed OEM quality at lower prices—brands like Bosch, Denso, and NGK have excellent reputations. Economy parts are cheaper but vary widely in quality and longevity. For critical safety components like brakes, suspension parts, and steering components, premium quality is essential. For less critical items like interior trim or certain exterior accessories, economy options might suffice. Learning which parts justify premium investment and which don't is key to smart spending."
        },
        {
          title: "Timing Your Purchases Strategically",
          content: "Auto parts retailers regularly offer sales, promotions, and rebates that can save significant money. Holiday weekends often bring discounts, particularly Labor Day, Memorial Day, and Black Friday. Sign up for email lists from your preferred retailers to receive exclusive offers and advance sale notifications. Many stores offer loyalty programs with points, discounts, and special pricing. End-of-season sales are excellent for items like batteries, tires, and air conditioning components. Manufacturer rebates on popular items can save $10-50 per part—the paperwork may be tedious, but the savings are worth it. Planning ahead for known maintenance items lets you buy during sales rather than at full price during emergencies. Bulk purchasing certain consumables like oil filters, air filters, and spark plugs when on sale reduces long-term costs."
        },
        {
          title: "Comparing Prices and Shopping Smart",
          content: "Never assume one retailer has the best price. Online price comparison tools make it easy to check multiple sources quickly. Local auto parts stores, online retailers like RockAuto or Amazon, manufacturer websites, and salvage yards all offer different advantages. Local stores provide immediate availability and often free testing and installation advice. Online retailers typically offer lower prices but require waiting for shipping. Salvage yards provide significant savings on non-safety-critical parts like body panels, mirrors, and interior components. When comparing prices, factor in shipping costs, return policies, and warranty coverage. Some retailers price match competitors, so always ask. Don't overlook professional repair shops' parts departments—they sometimes have competitive pricing and immediate availability. For expensive parts like alternators or starters, consider remanufactured options from reputable rebuilders, which often carry warranty coverage and cost 30-50% less than new."
        },
        {
          title: "DIY Installation When Appropriate",
          content: "Labor costs often exceed parts costs, making DIY installation highly cost-effective when you have the skills, tools, and confidence. Many maintenance tasks like replacing air filters, batteries, wiper blades, light bulbs, and cabin filters require minimal tools and expertise. Online resources including YouTube tutorials, forum discussions, and manufacturer service manuals provide detailed guidance for various repairs. However, know your limits—safety-critical systems like brakes, suspension, and steering require expertise and proper tools. Complex modern systems with electronic components may need diagnostic equipment and specialized knowledge. Consider the cost of tools required—sometimes professional installation is more economical than buying specialized tools for one-time use. If attempting DIY repairs, never compromise safety, and if you encounter unexpected complications, don't hesitate to seek professional help rather than risk improper installation."
        },
        {
          title: "Building Relationships with Suppliers",
          content: "Developing relationships with parts suppliers can lead to significant savings and better service. Regular customers often receive preferred pricing, advance notice of sales, and sometimes loyalty discounts. Parts counter employees become familiar with your vehicle and can offer better advice on appropriate parts and alternatives. They may inform you of cheaper alternatives or upcoming promotions. Supporting local businesses builds community relationships that can benefit you in emergencies—they might stay open a few minutes past closing or expedite special orders. Professional mechanics often have trade accounts with suppliers offering substantial discounts—if you're friendly with a mechanic, they might be willing to order parts for you at their discount rate. Join enthusiast forums for your vehicle make—members often share part numbers, suppliers, and group buy opportunities that provide significant savings. Online communities also offer invaluable advice on which aftermarket parts offer best value and which to avoid."
        }
      ],
      conclusion: "Saving money on auto parts requires knowledge, patience, and strategic thinking. Understanding part quality levels helps you make informed decisions about when to invest in premium parts and when economy options suffice. Strategic timing, thorough price comparison, and smart shopping across multiple sources can reduce costs by 30-50% compared to impulsive purchases. DIY installation of appropriate repairs multiplies savings, though it's crucial to recognize when professional expertise is necessary. Building relationships with suppliers and fellow enthusiasts creates opportunities for ongoing savings and valuable advice. Remember that the cheapest option isn't always the best value—a part that fails prematurely costs more in the long run than a quality part that lasts. Balance cost savings with quality, safety, and your own capabilities. With these strategies, you'll find that maintaining your vehicle doesn't have to drain your wallet. Smart shopping combined with preventive maintenance keeps your vehicle reliable while your budget healthy."
    }
  };

  const content = blogContent[slug] || blogContent['essential-car-maintenance-tips'];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="border-b border-border py-4">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <div className="aspect-[21/9] bg-muted rounded-lg overflow-hidden my-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge className="mb-4">{blog.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="lead text-xl text-muted-foreground mb-8">
                {content.intro}
              </p>

              {content.sections.map((section: any, index: number) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}

              <div className="mt-12 p-6 bg-muted rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {content.conclusion}
                </p>
              </div>
            </motion.div>

            {/* Related Posts */}
            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blogsData
                  .filter(b => b.id !== blog.id)
                  .slice(0, 2)
                  .map(relatedBlog => (
                    <Card key={relatedBlog.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                          <img
                            src={relatedBlog.image}
                            alt={relatedBlog.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Badge className="mb-2">{relatedBlog.category}</Badge>
                        <h4 className="font-bold text-lg mb-2 line-clamp-2">{relatedBlog.title}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{relatedBlog.excerpt}</p>
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/blog/${relatedBlog.slug}`}>Read More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
