import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { mockStudent, mockOpportunities, mockPrograms } from '@/src/data/mockData';
import { ArrowRight, BookOpen, Briefcase, TrendingUp, Target, PlayCircle, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StudentDashboard() {
  const topMatches = mockOpportunities.filter(o => o.matchScore && o.matchScore > 80);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Welcome back, {mockStudent.name.split(' ')[0]}</h1>
          <p className="text-slate-500">Here's what's happening on Skill Bridge today.</p>
        </div>
        <Button className="shrink-0 bg-blue-600 hover:bg-blue-700">Update Profile</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skill Gap Meter / Industry Readiness */}
        <Card className="md:col-span-2 border-blue-100 shadow-sm shadow-blue-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 blur-2xl z-0 pointer-events-none"></div>
          <CardHeader className="relative z-10 pb-2">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Target className="w-5 h-5 text-blue-600" />
              Industry Readiness & Skill Gap
            </CardTitle>
            <CardDescription>Target Role: Full Stack Developer</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 pt-4 flex flex-col md:flex-row items-center gap-8">
            {/* Circular Meter */}
            <div className="relative w-40 h-40 shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="12" fill="none" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 0.58)} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-slate-900">58%</span>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Ready</span>
              </div>
            </div>
            
            <div className="flex-1 space-y-5 w-full">
              <p className="text-sm text-slate-600">
                You have a <strong className="text-red-500">42% skill gap</strong> for your target industry roles. Based on your GitHub, assessments, and profile, here are your gap areas:
              </p>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-700">Cloud / AWS</span>
                    <span className="text-red-600">Missing (Critical)</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-red-400 w-[10%]"></div></div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-700">Advanced SQL</span>
                    <span className="text-amber-600">Developing</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-amber-400 w-[45%]"></div></div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">View Detailed Analysis</Button>
            </div>
          </CardContent>
        </Card>

        {/* Smart Matches summary */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Smart Job Matches
              <Briefcase className="h-4 w-4 text-slate-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-3xl font-bold text-slate-900">{topMatches.length}</div>
              <p className="text-xs text-slate-500 mt-1">Opportunities with &gt;70% Match Score</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-slate-100">
              {topMatches.slice(0, 2).map(opp => (
                <div key={opp.id} className="flex justify-between items-center text-sm p-2 bg-slate-50 rounded-md border border-slate-100">
                  <span className="font-medium text-slate-700 truncate mr-2">{opp.role}</span>
                  <Badge variant="success" className="shrink-0">{opp.matchScore}%</Badge>
                </div>
              ))}
            </div>
            <Link to="/student/opportunities"><Button className="w-full mt-2" size="sm">Explore Matches</Button></Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Path to Job Ready (Roadmap) */}
        <Card>
          <CardHeader>
            <CardTitle>Path to Job Ready</CardTitle>
            <CardDescription>Your personalized roadmap to close skill gaps</CardDescription>
          </CardHeader>
          <CardContent className="relative pl-6">
            <div className="absolute top-0 bottom-0 left-8 w-px bg-slate-200"></div>
            <div className="space-y-6">
              <div className="relative z-10 flex gap-4">
                <div className="w-5 h-5 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 line-through text-slate-500">React Fundamentals</h4>
                  <p className="text-xs text-slate-500">Completed via GitHub verification & Assessment</p>
                </div>
              </div>
              <div className="relative z-10 flex gap-4">
                <div className="w-5 h-5 rounded-full bg-blue-600 border-2 border-blue-600 shadow-sm shadow-blue-200 flex items-center justify-center shrink-0 mt-0.5 animate-pulse">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-semibold text-blue-900">Master Advanced SQL</h4>
                    <Badge variant="outline" className="text-[10px] bg-white text-blue-700 border-blue-200">Current Focus</Badge>
                  </div>
                  <p className="text-xs text-blue-800/70 mb-3">Closes 15% of your skill gap</p>
                  <Button size="sm" className="h-7 text-xs bg-blue-600 hover:bg-blue-700 w-full"><PlayCircle className="w-3 h-3 mr-1"/> Resume Course</Button>
                </div>
              </div>
              <div className="relative z-10 flex gap-4 opacity-50">
                <div className="w-5 h-5 rounded-full bg-white border-2 border-slate-300 shrink-0 mt-0.5"></div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">AWS Cloud Practitioner</h4>
                  <p className="text-xs text-slate-500">Next milestone • Closes 27% gap</p>
                </div>
              </div>
              <div className="relative z-10 flex gap-4 opacity-50">
                <div className="w-5 h-5 rounded-full bg-white border-2 border-slate-300 shrink-0 mt-0.5"></div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Build Final Cloud Project</h4>
                  <p className="text-xs text-slate-500">Verify skills through platform project</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Intelligent Learning Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended Learning</CardTitle>
            <CardDescription>Mapped directly to your current skill gaps</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-slate-200 rounded-lg flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200">Gap: SQL</Badge>
                    <span className="text-xs text-slate-500 flex items-center"><AlertCircle className="w-3 h-3 mr-1"/> Prevents 4 job matches</span>
                  </div>
                  <h4 className="font-semibold text-slate-900">Advanced SQL for Data Engineering</h4>
                </div>
              </div>
              <p className="text-sm text-slate-600">Provided by Coursera. Covers Joins, Aggregation, and Database Fundamentals.</p>
              <div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-100">
                <span className="text-xs font-medium text-blue-600">+15% Readiness on completion</span>
                <Button size="sm" variant="outline" className="h-8">Start Course <ChevronRight className="w-3 h-3 ml-1"/></Button>
              </div>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200">Gap: Cloud</Badge>
                    <span className="text-xs text-slate-500 flex items-center"><AlertCircle className="w-3 h-3 mr-1"/> Prevents 7 job matches</span>
                  </div>
                  <h4 className="font-semibold text-slate-900">AWS Certified Cloud Practitioner</h4>
                </div>
              </div>
              <p className="text-sm text-slate-600">Provided by Tech University. Covers Cloud Architecture & Deployment.</p>
              <div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-100">
                <span className="text-xs font-medium text-blue-600">+27% Readiness on completion</span>
                <Button size="sm" variant="outline" className="h-8">Start Course <ChevronRight className="w-3 h-3 ml-1"/></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
