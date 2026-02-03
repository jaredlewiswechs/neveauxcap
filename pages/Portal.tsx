import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { User, FileText, MessageSquare, Settings, LogOut, Home, Bell, Calendar, DollarSign } from 'lucide-react';

const PortalLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate credentials
    onLogin();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="bg-amber-500 p-1.5 rounded-sm">
              <div className="border-2 border-white text-white font-bold px-1 text-lg">NC</div>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Client Portal</h1>
          <p className="text-slate-500 mt-2">Sign in to access your project dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500" />
              <span className="text-sm text-slate-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-amber-600 hover:text-amber-700 font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-bold transition-all"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            New client?{' '}
            <Link to="/contact" className="text-amber-600 hover:text-amber-700 font-medium">
              Contact us
            </Link>{' '}
            to set up your account.
          </p>
        </div>
      </div>
    </div>
  );
};

const PortalDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/portal/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/portal/documents', icon: FileText, label: 'Documents' },
    { path: '/portal/messages', icon: MessageSquare, label: 'Messages' },
    { path: '/portal/settings', icon: Settings, label: 'Settings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-[80vh] bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Demo Client</div>
                  <div className="text-sm text-slate-500">demo@example.com</div>
                </div>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive(item.path)
                        ? 'bg-amber-100 text-amber-700'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>

              <button
                onClick={onLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all mt-4 w-full"
              >
                <LogOut size={20} />
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            <Routes>
              <Route path="dashboard" element={<DashboardHome />} />
              <Route path="documents" element={<DocumentsPage />} />
              <Route path="messages" element={<MessagesPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/portal/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardHome: React.FC = () => (
  <div className="space-y-8">
    {/* Welcome Banner */}
    <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white">
      <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
      <p className="text-amber-100">Here's an overview of your project status.</p>
    </div>

    {/* Stats Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { icon: Calendar, label: 'Project Timeline', value: 'On Track', color: 'text-green-600' },
        { icon: DollarSign, label: 'Budget Status', value: 'Within Budget', color: 'text-green-600' },
        { icon: Bell, label: 'Updates', value: '3 New', color: 'text-amber-600' },
        { icon: MessageSquare, label: 'Messages', value: '2 Unread', color: 'text-blue-600' },
      ].map((stat, i) => (
        <div key={i} className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <div className="text-sm text-slate-500">{stat.label}</div>
              <div className={`font-bold ${stat.color}`}>{stat.value}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Recent Activity */}
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {[
          { date: 'Today', title: 'Foundation inspection completed', status: 'Passed' },
          { date: 'Yesterday', title: 'Framing materials delivered', status: 'Completed' },
          { date: '2 days ago', title: 'Updated project timeline', status: 'Updated' },
          { date: '3 days ago', title: 'New document uploaded', status: 'View' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
            <div>
              <div className="font-medium text-slate-900">{item.title}</div>
              <div className="text-sm text-slate-500">{item.date}</div>
            </div>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DocumentsPage: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h1 className="text-2xl font-bold text-slate-900 mb-6">Documents</h1>
    <div className="space-y-4">
      {[
        { name: 'Project Contract.pdf', date: 'Jan 15, 2026', size: '2.4 MB' },
        { name: 'Floor Plans.pdf', date: 'Jan 18, 2026', size: '5.1 MB' },
        { name: 'Material Selections.pdf', date: 'Jan 22, 2026', size: '1.8 MB' },
        { name: 'Change Order #1.pdf', date: 'Feb 1, 2026', size: '340 KB' },
      ].map((doc, i) => (
        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
          <div className="flex items-center gap-4">
            <FileText className="w-8 h-8 text-amber-500" />
            <div>
              <div className="font-medium text-slate-900">{doc.name}</div>
              <div className="text-sm text-slate-500">{doc.date} • {doc.size}</div>
            </div>
          </div>
          <button className="text-amber-600 hover:text-amber-700 font-medium">Download</button>
        </div>
      ))}
    </div>
  </div>
);

const MessagesPage: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h1 className="text-2xl font-bold text-slate-900 mb-6">Messages</h1>
    <div className="space-y-4">
      {[
        { from: 'Project Manager', subject: 'Weekly update', preview: 'Great progress this week! The framing is now...', unread: true },
        { from: 'Accounts', subject: 'Invoice #1234', preview: 'Please find attached the invoice for...', unread: true },
        { from: 'Project Manager', subject: 'Material selection needed', preview: 'We need your decision on the flooring...', unread: false },
      ].map((msg, i) => (
        <div key={i} className={`p-4 rounded-lg cursor-pointer transition-colors ${msg.unread ? 'bg-amber-50 border border-amber-200' : 'bg-slate-50 hover:bg-slate-100'}`}>
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-slate-900">{msg.from}</div>
            {msg.unread && <span className="w-2 h-2 bg-amber-500 rounded-full" />}
          </div>
          <div className="font-medium text-slate-700">{msg.subject}</div>
          <div className="text-sm text-slate-500 truncate">{msg.preview}</div>
        </div>
      ))}
    </div>
  </div>
);

const SettingsPage: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h1 className="text-2xl font-bold text-slate-900 mb-6">Settings</h1>
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Notification Preferences</h2>
        <div className="space-y-3">
          {['Email notifications', 'SMS updates', 'Weekly progress reports'].map((item, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300 text-amber-600 focus:ring-amber-500" />
              <span className="text-slate-700">{item}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="pt-6 border-t border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Account Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" defaultValue="demo@example.com" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
            <input type="tel" defaultValue="(555) 123-4567" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
          </div>
        </div>
        <button className="mt-6 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

const PortalPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <PortalLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  return <PortalDashboard onLogout={() => setIsLoggedIn(false)} />;
};

export default PortalPage;
