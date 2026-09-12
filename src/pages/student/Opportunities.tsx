import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { mockOpportunities } from '@/src/data/mockData';
import { Search, MapPin, DollarSign, Calendar, Building, Sparkles } from 'lucide-react';

export function StudentOpportunities() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOpportunities = mockOpportunities.filter(opp => 
    opp.role.toLowerCase().includes(searchTerm.toLowerCase()) || 
    opp.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Career Opportunities</h1>
          <p className="text-slate-500">Discover internships and full-time roles matched to your skills.</p>
        </div>
      </div>

      <Card className="bg-white p-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by role or company..." 
            className="w-full pl-10 pr-4 py-2 border-none bg-transparent focus:ring-0 outline-none text-slate-900"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {filteredOpportunities.map((opp) => (
          <Card key={opp.id} className={`overflow-hidden transition-all hover:shadow-md ${opp.matchScore && opp.matchScore > 80 ? 'border-blue-200' : ''}`}>
            <CardContent className="p-0">
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  <Building className="w-8 h-8 text-slate-400" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{opp.role}</h3>
                      <p className="text-slate-600 font-medium">{opp.companyName}</p>
                    </div>
                    {opp.matchScore && opp.matchScore > 80 && (
                      <Badge variant="success" className="bg-blue-50 text-blue-700 border-blue-200 self-start">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {opp.matchScore}% Strong Match
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {opp.location}</div>
                    <div className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {opp.salary}</div>
                    <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Deadline: {opp.deadline}</div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {opp.requiredSkills.map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-end gap-2 shrink-0 md:w-32">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                  <Button variant="outline" className="w-full">Save</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No opportunities found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
