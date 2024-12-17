import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Section = ({ id, title, description, icon: Icon, className, children, onClick }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex items-center justify-center p-8",
        "animate-fadeIn scroll-mt-16",
        className
      )}
      onClick={onClick}
    >
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-slideUp">
          <Icon className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
};