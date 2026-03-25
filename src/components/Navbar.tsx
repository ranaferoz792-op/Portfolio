import { motion } from "framer-motion";

const navItems = ["about", "skills", "projects", "contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-2 py-2 flex items-center gap-1"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <motion.span
        className="font-semibold text-sm px-4 text-gradient cursor-default"
        whileHover={{ scale: 1.1 }}
      >
        AF
      </motion.span>
      <div className="w-px h-5 bg-border" />
      {navItems.map((item) => (
        <motion.button
          key={item}
          onClick={() => scrollTo(item)}
          className="text-sm text-muted-foreground hover:text-primary px-4 py-1.5 rounded-full hover:bg-primary/10 transition-all capitalize"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.button>
      ))}
      <div className="w-px h-5 bg-border" />
      <motion.a
        href="mailto:hello@johndoe.dev"
        className="text-sm font-medium bg-primary text-primary-foreground px-5 py-1.5 rounded-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Hire Me
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;
