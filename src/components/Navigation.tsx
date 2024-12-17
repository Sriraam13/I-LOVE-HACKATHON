import { BookOpen, TestTube, Award, CreditCard, Briefcase, ScrollText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: BookOpen, label: "Smart Learning", href: "#learning" },
  { icon: TestTube, label: "MCQ Test", href: "#mcq" },
  { icon: Award, label: "Reward Hub", href: "#rewards" },
  { icon: CreditCard, label: "Transactions", href: "#transactions" },
  { icon: Briefcase, label: "Internships", href: "#internships" },
  { icon: ScrollText, label: "Certificates", href: "#certificates" },
];

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold text-primary">EduPath</span>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};