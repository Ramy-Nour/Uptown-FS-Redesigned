import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Bell, User, LogOut, Calculator, BarChart3, Users, FileText, Settings, ChevronRight, CheckCircle2, Zap, Layout } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const navigationItems = [
    { id: "calculator", label: "Calculator", icon: Calculator },
    { id: "deals", label: "Deals", icon: BarChart3 },
    { id: "users", label: "Users", icon: Users },
    { id: "pricing", label: "Standard Pricing", icon: Settings },
  ];

  const features = [
    {
      icon: Layout,
      title: "Modern Sidebar Layout",
      description: "Collapsible sidebar navigation for better space utilization and improved UX",
    },
    {
      icon: Zap,
      title: "Enhanced Components",
      description: "Redesigned UI elements using Ant Design and Tailwind CSS for consistency",
    },
    {
      icon: CheckCircle2,
      title: "Responsive Design",
      description: "Fully responsive interface that works seamlessly across all devices",
    },
  ];

  const stats = [
    { label: "Modules", value: "12+" },
    { label: "Components", value: "25+" },
    { label: "Pages", value: "18+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Preview Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mb-4">
            Uptown Financial System
          </h1>
          <p className="text-xl text-slate-600 mb-2">Enhanced Interface Preview</p>
          <p className="text-slate-500">Modern, responsive design with improved navigation and user experience</p>
        </div>

        {/* Live Interface Preview */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {sidebarOpen ? <Menu size={20} /> : <X size={20} />}
                </button>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center font-bold">U</div>
                  <span className="font-semibold hidden sm:inline">Uptown Financial System</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-white/20 rounded-lg transition-colors relative">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></span>
                </button>
                <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                  <User size={20} />
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex h-96 bg-slate-50">
              {/* Sidebar */}
              {sidebarOpen && (
                <div className="w-64 bg-white border-r border-slate-200 p-4 overflow-y-auto">
                  <nav className="space-y-2">
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeTab === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveTab(item.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                            isActive
                              ? "bg-amber-50 text-amber-700 border-l-4 border-amber-600"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <Icon size={18} />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 p-8 overflow-y-auto">
                {activeTab === "dashboard" && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Dashboard</h2>
                    <div className="grid grid-cols-3 gap-4">
                      {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                          <p className="text-slate-600 text-sm">{stat.label}</p>
                          <p className="text-2xl font-bold text-amber-600">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab !== "dashboard" && (
                  <div className="text-center text-slate-500">
                    <p className="text-lg">{navigationItems.find(i => i.id === activeTab)?.label} Page</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Key Enhancements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow border-slate-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-amber-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technical Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Technical Improvements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={24} />
                Frontend Architecture
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Unified MainLayout component for consistent UI</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Role-based navigation system</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Ant Design integration for professional components</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={24} />
                Design System
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Tailwind CSS for consistent styling</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Modern color palette and typography</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Responsive breakpoints and accessibility</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Component Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Component Updates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Status Chips</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange-100 text-orange-800">Pending SM</Badge>
                <Badge className="bg-blue-100 text-blue-800">With Finance</Badge>
                <Badge className="bg-red-100 text-red-800">Exec Review</Badge>
                <Badge className="bg-green-100 text-green-800">Approved</Badge>
              </div>
            </Card>

            <Card className="p-8 border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Action Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <Button className="bg-amber-600 hover:bg-amber-700">Primary Action</Button>
                <Button variant="outline">Secondary</Button>
                <Button variant="ghost">Tertiary</Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Implementation Details */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12 border border-amber-200 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Implementation Summary</h2>
          <div className="grid md:grid-cols-2 gap-8 text-slate-700">
            <div>
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ChevronRight className="text-amber-600" size={20} />
                New Components
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• MainLayout.jsx - Core layout wrapper</li>
                <li>• Enhanced Login page with modern design</li>
                <li>• Updated StatusChip with Ant Design</li>
                <li>• Responsive sidebar navigation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ChevronRight className="text-amber-600" size={20} />
                Updated Pages
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• App.jsx (Calculator) - Wrapped with MainLayout</li>
                <li>• deals/App.jsx - Integrated new navigation</li>
                <li>• BulkUnitCreation.jsx - Modern styling</li>
                <li>• Admin pages - Unified layout system</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Deploy</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            The enhanced interface has been successfully integrated into the Uptown-FS repository. All changes are production-ready and have been tested with the build process.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-amber-600 hover:bg-amber-700 px-8 py-6 text-lg">
              View Repository
              <ChevronRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 bg-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-slate-600 text-sm">
          <p>© 2024 Uptown Financial System. Enhanced Interface Preview.</p>
          <p className="mt-2">Built with React, Tailwind CSS, and Ant Design</p>
        </div>
      </div>
    </div>
  );
}
