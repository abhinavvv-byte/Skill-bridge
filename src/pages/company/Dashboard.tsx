import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { mockOpportunities, mockStudent } from '@/src/data/mockData';
import { Search, Briefcase, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CompanyDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Company Dashboard</h1>
          <p className="text-slate-500">Discover verified talent and manage your hiring pipeline.</p>
        </div>
        <Link to="/company/post">
          <Button className="bg-indigo-600 hover:bg-indigo-700">Post Opportunity</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Active Postings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <div className="flex items-center text-xs text-slate-500 mt-1">
              <Briefcase className="w-3 h-3 mr-1" />
              <span>3 Internships, 9 Full-time</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Applicants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,492</div>
            <p className="text-xs text-slate-500 mt-1">Across all active postings</p>
          </CardContent>
        </Card>
        <Card className="bg-indigo-50 border-indigo-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-indigo-700">High-Match Candidates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-indigo-700">84</div>
            <p className="text-xs text-indigo-600 mt-1">Candidates with &gt;90% Match Score</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Consolidated Candidate Profiles</CardTitle>
                <CardDescription>Engine found these matches based on GitHub, assessments & skills</CardDescription>
              </div>
              <Link to="/company/search"><Button variant="ghost" size="sm">Search All</Button></Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start justify-between p-4 border border-indigo-100 bg-indigo-50/30 rounded-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-lg">
                  {mockStudent.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-slate-900">{mockStudent.name}</h4>
                    <Badge variant="success" className="h-5 text-[10px]">96% Overall Match</Badge>
                  </div>
                  <p className="text-sm text-slate-600">{mockStudent.university} • {mockStudent.year}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <Badge variant="secondary" className="text-[10px]">React: Proven (GitHub)</Badge>
                    <Badge variant="secondary" className="text-[10px]">DSA: High (HackerRank)</Badge>
                    <Badge variant="outline" className="text-[10px] bg-white border-blue-200 text-blue-700">Institution Verified</Badge>
                  </div>
                </div>
              </div>
              <Button size="icon" variant="ghost" className="text-indigo-600"><ArrowRight className="w-4 h-4" /></Button>
            </div>
            
            <div className="flex items-start justify-between p-4 border border-slate-100 rounded-lg hover:bg-slate-50">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-lg">
                  SJ
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-slate-900">Sarah Jenkins</h4>
                    <Badge variant="success" className="h-5 text-[10px] bg-green-100 text-green-700">92% Match</Badge>
                  </div>
                  <p className="text-sm text-slate-600">State College • 4th Year</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <Badge variant="secondary" className="text-[10px]">React: Strong</Badge>
                    <Badge variant="secondary" className="text-[10px]">UI/UX: Strong</Badge>
                  </div>
                </div>
              </div>
              <Button size="icon" variant="ghost" className="text-slate-400"><ArrowRight className="w-4 h-4" /></Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Opportunities</CardTitle>
                <CardDescription>Performance of your active postings</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockOpportunities.slice(0, 2).map((opp) => (
              <div key={opp.id} className="p-4 border border-slate-100 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">{opp.role}</h4>
                    <p className="text-sm text-slate-500">{opp.type} • {opp.location}</p>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center border-t border-slate-100 pt-3">
                  <div>
                    <p className="text-xl font-bold text-slate-900">245</p>
                    <p className="text-xs text-slate-500">Applicants</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-indigo-600">42</p>
                    <p className="text-xs text-slate-500">Strong Matches</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">5</p>
                    <p className="text-xs text-slate-500">Interviewing</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
