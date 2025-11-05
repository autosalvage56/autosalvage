import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ShoppingBag, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const suggestions = [
    {
      icon: Home,
      title: "Go Home",
      description: "Return to our homepage",
      path: "/",
      variant: "default" as const
    },
    {
      icon: ShoppingBag,
      title: "Browse Parts",
      description: "Explore our auto parts catalog",
      path: "/shop",
      variant: "outline" as const
    },
    {
      icon: Search,
      title: "Search",
      description: "Find what you're looking for",
      path: "/shop",
      variant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary/90 to-muted flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Error Code */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-primary mb-4 sm:mb-6"
          >
            404
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-foreground mb-3 sm:mb-4">
              Page Not Found
            </h1>
            <p className="text-base sm:text-lg text-secondary-foreground/80 max-w-md mx-auto leading-relaxed">
              Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
            </p>
          </motion.div>

          {/* Current Path Info */}
          {location.pathname !== "/" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-3 sm:p-4">
                  <p className="text-sm text-secondary-foreground/70">
                    Requested path: <code className="bg-black/20 px-2 py-1 rounded text-xs sm:text-sm">{location.pathname}</code>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                <Button
                  asChild
                  variant={suggestion.variant}
                  size="lg"
                  className="w-full h-auto p-4 sm:p-6 flex-col gap-2 hover:scale-105 transition-all duration-200"
                >
                  <Link to={suggestion.path}>
                    <suggestion.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    <div className="text-center">
                      <div className="font-semibold text-sm sm:text-base">{suggestion.title}</div>
                      <div className="text-xs sm:text-sm opacity-80">{suggestion.description}</div>
                    </div>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="text-secondary-foreground/70 hover:text-secondary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
