import { BookOpen, TestTube, Award, CreditCard, Briefcase, ScrollText, MessageSquare } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

const Index = () => {
  // External website URLs
  const externalLinks = {
    learning: "https://q7yk0cprqyza37zu.vercel.app/",
    mcq: "https://ai-watchdog-snap.lovable.app/",
    rewards: "https://scintillating-chimera-1fc49b.netlify.app/",
    transactions: "https://wonderful-pothos-abaf9c.netlify.app/",
    internships: "https://hw0adale7fpniin2.vercel.app/",
    certificates: "https://certifiblock.lovable.app/",
    feedback: "file:///E:/hackathon/index.html"
  };

  const handleExternalRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8 pt-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Your Complete Learning Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slideUp">
            From learning to certification, we guide you through every step of your educational path.
          </p>
          <Button 
            size="lg" 
            className="animate-slideUp bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            onClick={() => handleExternalRedirect(externalLinks.learning)}
          >
            Start Learning
          </Button>
        </div>
      </section>

      {/* Learning Section */}
      <Section
        id="learning"
        title="Smart Learning"
        description="Engage with interactive content and AI-powered learning materials tailored to your pace."
        icon={BookOpen}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 cursor-pointer transform transition-transform hover:scale-105"
        onClick={() => handleExternalRedirect(externalLinks.learning)}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Adaptive Learning</h3>
            <p className="text-gray-600">Personalized content that adapts to your learning style and progress.</p>
          </div>
          <div className="p-6 bg-white/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Interactive Lessons</h3>
            <p className="text-gray-600">Engage with multimedia content and real-time feedback.</p>
          </div>
        </div>
      </Section>

      {/* MCQ Test Section */}
      <Section
        id="mcq"
        title="AI-Powered MCQ Tests"
        description="Test your knowledge with our advanced assessment system."
        icon={TestTube}
        className="bg-gradient-to-r from-purple-50 to-pink-50 cursor-pointer transform transition-transform hover:scale-105"
        onClick={() => handleExternalRedirect(externalLinks.mcq)}
      >
        <div className="bg-white/80 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Sample Questions</h3>
          <div className="space-y-4">
            <Button variant="outline" className="w-full text-left justify-start hover:bg-purple-50">A) Sample Answer 1</Button>
            <Button variant="outline" className="w-full text-left justify-start hover:bg-purple-50">B) Sample Answer 2</Button>
            <Button variant="outline" className="w-full text-left justify-start hover:bg-purple-50">C) Sample Answer 3</Button>
          </div>
        </div>
      </Section>

      {/* Rewards Section */}
      <Section
        id="rewards"
        title="Student Reward Hub"
        description="Earn rewards and recognition for your achievements."
        icon={Award}
        className="bg-gradient-to-r from-yellow-50 to-orange-50 cursor-pointer transform transition-transform hover:scale-105"
        onClick={() => handleExternalRedirect(externalLinks.rewards)}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {["Bronze", "Silver", "Gold"].map((tier) => (
            <div 
              key={tier} 
              className="p-6 bg-white/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">{tier} Tier</h3>
              <p className="text-gray-600">Unlock special benefits</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Transactions Section */}
      <Section
        id="transactions"
        title="Coin Transactions"
        description="Manage your educational rewards and transactions."
        icon={CreditCard}
        className="bg-gradient-to-r from-green-50 to-teal-50 cursor-pointer transform transition-transform hover:scale-105"
        onClick={() => handleExternalRedirect(externalLinks.transactions)}
      >
        <div 
          className="bg-white/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-teal-600">Current Balance</span>
            <span className="text-2xl font-bold text-teal-600">1000 Coins</span>
          </div>
          <Button className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600">
            View Transaction History
          </Button>
        </div>
      </Section>

      {/* Internships Section */}
      <Section
        id="internships"
        title="SAR Internship Platform"
        description="Connect with leading companies for internship opportunities."
        icon={Briefcase}
        className="bg-gradient-to-r from-blue-50 to-cyan-50 cursor-pointer transform transition-transform hover:scale-105"
        onClick={() => handleExternalRedirect(externalLinks.internships)}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-cyan-600">Available Internships</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-cyan-500" />
                <span>Software Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-cyan-500" />
                <span>Data Analysis</span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-cyan-600">Application Status</h3>
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
              Check Status
            </Button>
          </div>
        </div>
      </Section>

      {/* Certificates Section */}
      <Section
        id="certificates"
        title="Certificates"
        description="Showcase your achievements with verified certificates."
        icon={ScrollText}
        className="bg-gradient-to-r from-violet-50 to-purple-50 cursor-pointer transform transition-transform hover:scale-105"
        onClick={() => handleExternalRedirect(externalLinks.certificates)}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
            <ScrollText className="w-12 h-12 mx-auto mb-4 text-violet-500" />
            <h3 className="text-xl font-semibold mb-4 text-violet-600">Course Completion</h3>
            <Button className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600">
              View Certificate
            </Button>
          </div>
          <div className="bg-white/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
            <ScrollText className="w-12 h-12 mx-auto mb-4 text-violet-500" />
            <h3 className="text-xl font-semibold mb-4 text-violet-600">Skill Assessment</h3>
            <Button className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600">
              View Certificate
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Index;