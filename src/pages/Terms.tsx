import { motion } from 'framer-motion';

const Terms = () => {
  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using AutoSalvage website and services, you accept and 
                agree to be bound by these Terms and Conditions. If you do not agree with any 
                part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Products & Descriptions</h2>
              <p className="text-muted-foreground mb-4">
                We strive to provide accurate product descriptions and specifications. However:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Product images are for illustration purposes and may vary slightly from actual items</li>
                <li>Specifications are subject to change by manufacturers without notice</li>
                <li>Vehicle compatibility information is provided as a guide only</li>
                <li>Always confirm fitment with your mechanic or contact us before ordering</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                AutoSalvage shall not be liable for any indirect, incidental, or 
                consequential damages arising from the use of our products or services. Our 
                liability is limited to the replacement or refund of defective products within 
                the warranty period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Warranty & Returns</h2>
              <p className="text-muted-foreground mb-4">
                All products come with manufacturer warranties as specified:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Warranty periods range from 6 to 18 months depending on the product</li>
                <li>Warranty covers manufacturing defects only</li>
                <li>Damage from improper installation or use is not covered</li>
                <li>Contact us immediately if you receive a defective product</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website, including text, graphics, logos, and images, is the 
                property of AutoSalvage and is protected by copyright laws. You may not 
                reproduce, distribute, or use any content without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">External Links & Third-Party Sites</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. We are not responsible 
                for the content, privacy practices, or terms of service of these external sites. 
                Visiting them is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Modifications to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms and Conditions at any time. Changes 
                will be effective immediately upon posting to this page. Continued use of our 
                services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact for Queries</h2>
              <p className="text-muted-foreground mb-4">
                For any questions regarding these Terms and Conditions, please contact us:
              </p>
              <div className="text-muted-foreground">
                <p>Email: <a href="mailto:hello@autosalvage.com" className="text-primary hover:underline">hello@autosalvage.com</a></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
