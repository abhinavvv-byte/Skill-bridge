import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AlertTriangle, TrendingDown, Users, BookOpen, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const gapData = [
  { name: 'React', demand: 90, studentSupply: 75 },
  { name: 'Node.js', demand: 85, studentSupply: 60 },
  { name: 'Cloud/AWS', demand: 95, studentSupply: 30 },
  { name: 'SQL', demand: 80, studentSupply: 50 },
  { name: 'Python', demand: 70, studentSupply: 85 },
];

export function InstitutionDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Institution Dashboard</h1>
          <p className="text-slate-500">Monitor student progress and analyze academic skill gaps.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export Report</Button>
          <Button className="bg-slate-900 hover:bg-slate-800">Create Activity</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,248</div>
            <div className="flex items-center text-xs text-slate-500 mt-1">
              <Users className="w-3 h-3 mr-1" />
              <span>Registered in portal</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-red-200 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-red-600 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Early Warnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">42</div>
            <p className="text-xs text-red-500/80 mt-1">Students needing attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Placements / Matches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">312</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              <span>+24 this month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Active Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">18</div>
            <p className="text-xs text-slate-500 mt-1">8 Assessments, 10 Workshops</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Market Skills Gap Analysis</CardTitle>
                <CardDescription>Industry Demand vs. Student Proficiency</CardDescription>
              </div>
              <Link to="/institution/gap-analysis"><Button variant="ghost" size="sm">Full Report</Button></Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={gapData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar name="Industry Demand" dataKey="demand" fill="#0f172a" radius={[4, 4, 0, 0]} barSize={24} />
                  <Bar name="Student Supply" dataKey="studentSupply" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-red-900">Critical Curriculum Gap: Cloud / AWS</h4>
                <p className="text-sm text-red-800 mt-1">Industry demand is extremely high (95%), but student proficiency is very low (30%). Recommend organizing a Cloud Computing Bootcamp.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-red-600 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Student Progress Intelligence
                </CardTitle>
                <CardDescription>Identifying stagnant or declining progress</CardDescription>
              </div>
              <Link to="/institution/warnings"><Button variant="ghost" size="sm">View all</Button></Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start justify-between p-3 border border-red-100 rounded-lg bg-red-50/50">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-red-200">
                    <span className="text-red-700 font-semibold text-xs">S{i}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Student {i}</h4>
                    <p className="text-xs text-slate-600 line-clamp-1">Industry readiness plateaued at {40 + i * 5}% for 3 weeks</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="h-8 text-red-600 px-2 text-xs hover:bg-red-100 hover:text-red-700">Intervene</Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
