import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Search, Users, MessageSquare } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function CompanyLayout() {
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/company' },
    { icon: PlusCircle, label: 'Post Opportunity', path: '/company/post' },
    { icon: Search, label: 'Talent Search', path: '/company/search' },
    { icon: Users, label: 'Pipeline & Matching', path: '/company/pipeline' },
    { icon: MessageSquare, label: 'Connects', path: '/company/connects' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-xl font-bold text-indigo-600">Skill Bridge</h1>
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Company Portal</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      active ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5", active ? "text-indigo-700" : "text-slate-400")} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
              GT
            </div>
            <div>
              <p className="text-sm font-medium">Global Tech</p>
              <p className="text-xs text-slate-500">Recruiting</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
