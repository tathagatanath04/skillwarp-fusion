
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, Lightbulb, Code, BookOpen, LayoutDashboard, UserCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="mr-2 h-4 w-4" /> },
    { title: "Learning Paths", href: "/learning-paths", icon: <Lightbulb className="mr-2 h-4 w-4" /> },
    { title: "Code Playground", href: "/playground", icon: <Code className="mr-2 h-4 w-4" /> },
    { title: "Resources", href: "/resources", icon: <BookOpen className="mr-2 h-4 w-4" /> },
    { title: "Profile", href: "/profile", icon: <UserCircle className="mr-2 h-4 w-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-1">
          <div className="hidden sm:flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-eduforge-600"
            >
              <path d="M12 22v-5.5" />
              <path d="m9 8 3-4 3 4" />
              <path d="M9.27 12a2 2 0 0 0-1.5 3.3l4.5 4.5a2 2 0 0 0 2.83 0l4.5-4.5a2 2 0 0 0-1.5-3.3H9.27Z" />
            </svg>
            <span className="font-display text-xl font-bold">EduForge</span>
          </div>
          <div className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-eduforge-600"
            >
              <path d="M12 22v-5.5" />
              <path d="m9 8 3-4 3 4" />
              <path d="M9.27 12a2 2 0 0 0-1.5 3.3l4.5 4.5a2 2 0 0 0 2.83 0l4.5-4.5a2 2 0 0 0-1.5-3.3H9.27Z" />
            </svg>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className="text-sm font-medium transition-colors hover:text-eduforge-600 flex items-center"
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button variant="ghost" className="mr-2">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-eduforge-600 hover:bg-eduforge-700">
              Sign up
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex items-center justify-between px-4">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-eduforge-600"
                  >
                    <path d="M12 22v-5.5" />
                    <path d="m9 8 3-4 3 4" />
                    <path d="M9.27 12a2 2 0 0 0-1.5 3.3l4.5 4.5a2 2 0 0 0 2.83 0l4.5-4.5a2 2 0 0 0-1.5-3.3H9.27Z" />
                  </svg>
                  <span className="font-display text-xl font-bold">EduForge</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.href}
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-eduforge-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 space-y-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-eduforge-600 hover:bg-eduforge-700">
                    Sign up
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
