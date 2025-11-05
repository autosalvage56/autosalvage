import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                When you contact us through our website, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name and contact information (phone number, email address)</li>
                <li>Vehicle information (make, model, year)</li>
                <li>Inquiry details and messages you send us</li>
                <li>Technical information collected through analytics (IP address, browser type, pages visited)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process your orders and deliver the parts you need</li>
                <li>Send service updates and important notifications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies & Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to analyze website traffic and 
                improve user experience. You can control cookie settings through your browser 
                preferences. Some features of our website may not function properly if cookies 
                are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may use third-party services for analytics, communication, and other business 
                purposes. These third parties have access to your information only to perform 
                specific tasks on our behalf and are obligated to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Protection Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing of your data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or how we handle your data, 
                please contact us:
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

export default PrivacyPolicy;
