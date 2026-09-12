import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, Activity, AlertTriangle, MessageSquare, Menu } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function InstitutionLayout() {
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/institution' },
    { icon: Users, label: 'Students', path: '/institution/students' },
    { icon: AlertTriangle, label: 'Early Warning', path: '/institution/warnings' },
    { icon: BookOpen, label: 'Programs & Activities', path: '/institution/programs' },
    { icon: Activity, label: 'Market Skills Gap', path: '/institution/gap-analysis' },
    { icon: MessageSquare, label: 'Connects', path: '/institution/connects' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold text-white">Skill Bridge</h1>
          <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Institution Portal</span>
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
                      active ? "bg-blue-600 text-white" : "hover:bg-slate-800 hover:text-white"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5", active ? "text-white" : "text-slate-400")} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-white font-bold">
              TU
            </div>
            <div>
              <p className="text-sm font-medium text-white">Tech University</p>
              <p className="text-xs text-slate-400">Admin</p>
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
