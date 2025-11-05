import { HashRouter, Routes, Route } from "react-router-dom";

// Simple test components
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary/90 to-muted p-8">
    <h1 className="text-4xl font-bold text-primary mb-4">AutoSalvage</h1>
    <p className="text-xl text-secondary-foreground">Your Auto Parts Specialist</p>
    <div className="mt-8">
      <a href="#/shop" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90">Shop Now</a>
    </div>
  </div>
);

const Shop = () => (
  <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary/90 to-muted p-8">
    <h1 className="text-4xl font-bold text-primary mb-4">Shop</h1>
    <p className="text-xl text-secondary-foreground">Browse our auto parts catalog</p>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary/90 to-muted p-8">
    <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
    <p className="text-xl text-secondary-foreground">Learn more about AutoSalvage</p>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary/90 to-muted p-8">
    <h1 className="text-4xl font-bold text-primary mb-4">Contact</h1>
    <p className="text-xl text-secondary-foreground">Get in touch with us</p>
  </div>
);

const NotFound = () => (
  <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary/90 to-muted p-8">
    <h1 className="text-4xl font-bold text-primary mb-4">404 - Page Not Found</h1>
    <p className="text-xl text-secondary-foreground">The page you're looking for doesn't exist.</p>
    <a href="#/" className="mt-4 inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90">Go Home</a>
  </div>
);

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
