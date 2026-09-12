import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Briefcase, GraduationCap, Code2, FolderGit2, UserCircle, Bell, MessageSquare, Menu } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function StudentLayout() {
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/student' },
    { icon: Briefcase, label: 'Opportunities', path: '/student/opportunities' },
    { icon: GraduationCap, label: 'Programs', path: '/student/programs' },
    { icon: Code2, label: 'Performance', path: '/student/performance' },
    { icon: FolderGit2, label: 'Experience & Projects', path: '/student/experience' },
    { icon: UserCircle, label: 'Resume Gen', path: '/student/resume' },
    { icon: MessageSquare, label: 'Connects', path: '/student/connects' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-xl font-bold text-blue-600">Skill Bridge</h1>
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Student Portal</span>
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
                      active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5", active ? "text-blue-700" : "text-slate-400")} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
              AJ
            </div>
            <div>
              <p className="text-sm font-medium">Alex Johnson</p>
              <p className="text-xs text-slate-500">Tech University</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 lg:hidden">
          <div className="flex items-center space-x-3">
            <button className="text-slate-500 hover:text-slate-700">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-bold text-blue-600">Skill Bridge</h1>
          </div>
        </header>
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-end px-6 hidden lg:flex space-x-4">
           <button className="relative p-2 text-slate-400 hover:text-slate-500 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
           </button>
        </header>
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
