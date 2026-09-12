import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { mockStudent } from '@/src/data/mockData';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

const skillData = [
  { subject: 'React', A: 90, B: 95, fullMark: 100 },
  { subject: 'Node.js', A: 65, B: 85, fullMark: 100 },
  { subject: 'DSA', A: 85, B: 90, fullMark: 100 },
  { subject: 'SQL', A: 30, B: 80, fullMark: 100 },
  { subject: 'Cloud', A: 10, B: 75, fullMark: 100 },
  { subject: 'System Design', A: 40, B: 70, fullMark: 100 },
];

const trendData = [
  { name: 'Jan', problems: 10, hours: 5 },
  { name: 'Feb', problems: 25, hours: 12 },
  { name: 'Mar', problems: 45, hours: 20 },
  { name: 'Apr', problems: 60, hours: 25 },
  { name: 'May', problems: 85, hours: 35 },
  { name: 'Jun', problems: 120, hours: 45 },
];

export function StudentPerformance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Skill & Performance Dashboard</h1>
        <p className="text-slate-500">Track your coding activity and compare your skills against market demand.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Problems Solved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">387</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUpIcon className="w-3 h-3 mr-1" />
              <span>+12% this month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Platform Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2/4</div>
            <p className="text-xs text-slate-500 mt-1">LeetCode, GitHub connected</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Consistency Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-500">7.5<span className="text-lg text-slate-400">/10</span></div>
            <p className="text-xs text-slate-500 mt-1">Keep it up to reach 9.0</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-600 text-white border-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-100">Market Readiness</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">68%</div>
            <p className="text-xs text-blue-100 mt-1">Your skills match 68% of targeted roles</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Skill Gap Analysis</CardTitle>
            <CardDescription>Your skills (Blue) vs. Market Demand (Indigo)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skillData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar name="Your Proficiency" dataKey="A" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={24} />
                  <Bar name="Market Demand" dataKey="B" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                 <div className="flex items-center gap-2 mb-1">
                   <AlertCircle className="w-4 h-4 text-red-600" />
                   <span className="text-sm font-semibold text-red-900">Critical Gaps</span>
                 </div>
                 <p className="text-xs text-red-700">Cloud (AWS/GCP), SQL</p>
               </div>
               <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                 <div className="flex items-center gap-2 mb-1">
                   <CheckCircle2 className="w-4 h-4 text-green-600" />
                   <span className="text-sm font-semibold text-green-900">Strong Matches</span>
                 </div>
                 <p className="text-xs text-green-700">React, Data Structures</p>
               </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Coding Activity Trend</CardTitle>
            <CardDescription>Problems solved over time across all platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="left" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
                  <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Line yAxisId="left" type="monotone" name="Problems Solved" dataKey="problems" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                  <Line yAxisId="right" type="monotone" name="Hours Spent" dataKey="hours" stroke="#94a3b8" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-blue-600 font-bold">!</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Actionable Insight</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Your target roles require <span className="font-semibold text-slate-900">SQL</span> and <span className="font-semibold text-slate-900">Cloud</span> skills. 
                  Your current activity in these areas is low. Consider allocating 30% of your practice time to Database problems next week.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
