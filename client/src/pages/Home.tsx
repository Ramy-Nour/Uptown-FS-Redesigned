import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, X, Bell, User, LogOut, Calculator, BarChart3, Users, FileText, Settings, 
  ChevronRight, CheckCircle2, Zap, Layout, TrendingUp, Shield, Layers, Sparkles,
  ArrowUpRight, ArrowDownRight
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const navigationItems = [
    { id: "calculator", label: "Calculator", icon: Calculator, badge: null },
    { id: "deals", label: "Deals", icon: BarChart3, badge: "3" },
    { id: "users", label: "Users", icon: Users, badge: null },
    { id: "pricing", label: "Pricing", icon: Settings, badge: null },
  ];

  const kpiCards = [
    { title: "Total Portfolio", value: "$2,850,750", change: "+2.45%", trend: "up", icon: TrendingUp },
    { title: "Active Deals", value: "24", change: "+3 this week", trend: "up", icon: BarChart3 },
    { title: "Team Members", value: "12", change: "2 new", trend: "up", icon: Users },
    { title: "Pending Approvals", value: "8", change: "-2 since yesterday", trend: "down", icon: CheckCircle2 },
  ];

  const recentDeals = [
    { id: 1, name: "Downtown Plaza", status: "approved", amount: "$450,000", date: "2024-01-08" },
    { id: 2, name: "Riverside Complex", status: "pending", amount: "$320,000", date: "2024-01-07" },
    { id: 3, name: "Tech Hub Tower", status: "review", amount: "$680,000", date: "2024-01-06" },
    { id: 4, name: "Green Valley", status: "approved", amount: "$275,000", date: "2024-01-05" },
  ];

  const features = [
    {
      icon: Layout,
      title: "Intuitive Dashboard",
      description: "Real-time KPIs and deal tracking with visual data hierarchy",
    },
    {
      icon: Zap,
      title: "Fast Operations",
      description: "Streamlined workflows for deal creation and approvals",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with role-based access control",
    },
    {
      icon: Layers,
      title: "Modular Design",
      description: "Reusable components for consistent user experience",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and performance insights",
    },
    {
      icon: Sparkles,
      title: "Modern Interface",
      description: "Premium design with smooth interactions and animations",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-emerald-100 text-emerald-800";
      case "pending":
        return "bg-amber-100 text-amber-800";
      case "review":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              {sidebarOpen ? <Menu size={24} /> : <X size={24} />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold text-lg">U</div>
              <div>
                <h1 className="font-bold text-lg">Uptown Financial</h1>
                <p className="text-xs text-white/80">System</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-400 rounded-full animate-pulse"></span>
            </button>
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-72 bg-white border-r-2 border-slate-200 shadow-lg overflow-y-auto">
            <nav className="p-6 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-l-4 border-amber-600 shadow-md"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} />
                      <span className="font-semibold">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Sidebar Footer */}
            <div className="p-6 border-t-2 border-slate-200 mt-auto">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
                <p className="text-sm font-semibold text-slate-900 mb-2">Need Help?</p>
                <p className="text-xs text-slate-600 mb-3">Check our documentation or contact support</p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm">
                  Get Support
                </Button>
              </div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {activeTab === "dashboard" && (
            <div>
              {/* Page Header */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-900 mb-2">Dashboard</h2>
                <p className="text-slate-600">Welcome back! Here's your financial overview.</p>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {kpiCards.map((card, idx) => {
                  const Icon = card.icon;
                  const isPositive = card.trend === "up";
                  return (
                    <div key={idx} className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center">
                          <Icon className="text-amber-600" size={24} />
                        </div>
                        <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? "text-emerald-600" : "text-red-600"}`}>
                          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                          {card.change}
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm font-medium mb-2">{card.title}</p>
                      <p className="text-3xl font-bold text-slate-900">{card.value}</p>
                    </div>
                  );
                })}
              </div>

              {/* Recent Deals Section */}
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="px-8 py-6 border-b-2 border-slate-100 bg-gradient-to-r from-slate-50 to-white">
                  <h3 className="text-2xl font-bold text-slate-900">Recent Deals</h3>
                  <p className="text-slate-600 text-sm mt-1">Latest transactions and approvals</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b-2 border-slate-200">
                      <tr>
                        <th className="px-8 py-4 text-left text-sm font-semibold text-slate-700">Deal Name</th>
                        <th className="px-8 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
                        <th className="px-8 py-4 text-left text-sm font-semibold text-slate-700">Amount</th>
                        <th className="px-8 py-4 text-left text-sm font-semibold text-slate-700">Date</th>
                        <th className="px-8 py-4 text-left text-sm font-semibold text-slate-700">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentDeals.map((deal, idx) => (
                        <tr key={idx} className="border-b border-slate-100 hover:bg-amber-50 transition-colors duration-200">
                          <td className="px-8 py-4">
                            <p className="font-semibold text-slate-900">{deal.name}</p>
                          </td>
                          <td className="px-8 py-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(deal.status)}`}>
                              {getStatusLabel(deal.status)}
                            </span>
                          </td>
                          <td className="px-8 py-4">
                            <p className="font-semibold text-slate-900">{deal.amount}</p>
                          </td>
                          <td className="px-8 py-4">
                            <p className="text-slate-600 text-sm">{deal.date}</p>
                          </td>
                          <td className="px-8 py-4">
                            <button className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center gap-1">
                              View <ChevronRight size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab !== "dashboard" && (
            <div className="text-center py-16">
              <p className="text-2xl font-bold text-slate-900 mb-2">
                {navigationItems.find(i => i.id === activeTab)?.label} Page
              </p>
              <p className="text-slate-600">Coming soon with full redesign</p>
            </div>
          )}
        </main>
      </div>

      {/* Features Section */}
      <section className="bg-white border-t-2 border-slate-200 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Redesign Highlights</h2>
            <p className="text-xl text-slate-600">Modern interface with enhanced usability and professional aesthetics</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-amber-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design System Info */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Corporate Premium Design System</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 size={24} />
                Visual Design
              </h3>
              <ul className="space-y-3 text-white/90">
                <li>• Amber primary color (#A97E34) with navy accents</li>
                <li>• Gradient headers and premium shadows</li>
                <li>• Consistent spacing and typography</li>
                <li>• Smooth transitions and micro-interactions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 size={24} />
                User Experience
              </h3>
              <ul className="space-y-3 text-white/90">
                <li>• Intuitive navigation and clear hierarchy</li>
                <li>• Real-time data visualization</li>
                <li>• Responsive design for all devices</li>
                <li>• Accessible and keyboard-friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">© 2024 Uptown Financial System. Redesigned with Corporate Premium Design System.</p>
          <p className="text-slate-500 text-sm mt-2">Built with React, Tailwind CSS, and modern UI principles</p>
        </div>
      </footer>
    </div>
  );
}
