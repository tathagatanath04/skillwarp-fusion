
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
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
            <p className="text-muted-foreground mb-4">
              AI-powered personalized learning platform for mastering new skills efficiently.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-eduforge-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-eduforge-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-eduforge-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-eduforge-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase mb-4 text-muted-foreground">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-foreground hover:text-eduforge-600">Dashboard</Link></li>
              <li><Link to="/learning-paths" className="text-foreground hover:text-eduforge-600">Learning Paths</Link></li>
              <li><Link to="/playground" className="text-foreground hover:text-eduforge-600">Code Playground</Link></li>
              <li><Link to="/resources" className="text-foreground hover:text-eduforge-600">Resources</Link></li>
              <li><Link to="/community" className="text-foreground hover:text-eduforge-600">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase mb-4 text-muted-foreground">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-foreground hover:text-eduforge-600">About Us</Link></li>
              <li><Link to="/careers" className="text-foreground hover:text-eduforge-600">Careers</Link></li>
              <li><Link to="/blog" className="text-foreground hover:text-eduforge-600">Blog</Link></li>
              <li><Link to="/testimonials" className="text-foreground hover:text-eduforge-600">Testimonials</Link></li>
              <li><Link to="/contact" className="text-foreground hover:text-eduforge-600">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase mb-4 text-muted-foreground">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-foreground hover:text-eduforge-600">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-foreground hover:text-eduforge-600">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-foreground hover:text-eduforge-600">Cookie Policy</Link></li>
              <li><Link to="/security" className="text-foreground hover:text-eduforge-600">Security</Link></li>
              <li><Link to="/accessibility" className="text-foreground hover:text-eduforge-600">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2023 EduForge. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-eduforge-600">Terms</Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-eduforge-600">Privacy</Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-eduforge-600">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
