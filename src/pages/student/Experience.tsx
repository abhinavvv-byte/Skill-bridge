import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { mockStudent } from '@/src/data/mockData';
import { Briefcase, Code, Plus, Github, ExternalLink, Award, Calendar, Building2 } from 'lucide-react';

export function StudentExperience() {
  const [activeTab, setActiveTab] = useState<'experience' | 'projects' | 'achievements'>('experience');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Experience & Projects</h1>
          <p className="text-slate-500">Manage your verified work history, projects, and achievements.</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" /> Add New
          </Button>
        </div>
      </div>

      <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg w-fit">
        <button 
          onClick={() => setActiveTab('experience')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'experience' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
        >
          Work Experience
        </button>
        <button 
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'projects' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
        >
          Projects
        </button>
        <button 
          onClick={() => setActiveTab('achievements')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'achievements' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
        >
          Achievements
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {activeTab === 'experience' && (
          <div className="space-y-4">
            {mockStudent.experience.map((exp, idx) => (
              <Card key={idx} className="overflow-hidden border-slate-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{exp.title}</h3>
                          <div className="flex items-center gap-4 mt-1 text-sm text-slate-600">
                            <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> {exp.organization}</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {exp.duration}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 self-start">Verified</Badge>
                      </div>
                      <p className="text-slate-600 mt-4 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-4">
            {/* GitHub Sync Banner */}
            <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <Github className="w-6 h-6 text-slate-300" />
                <div>
                  <h4 className="font-semibold text-sm">GitHub Connected</h4>
                  <p className="text-xs text-slate-400">Your repositories are automatically synced to your profile.</p>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent border-slate-700 text-white hover:bg-slate-800">Sync Now</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockStudent.projects.map((proj, idx) => (
                <Card key={idx} className="flex flex-col border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center mb-3">
                        <Code className="w-5 h-5 text-indigo-600" />
                      </div>
                      <a href={`https://${proj.link}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <CardTitle className="text-lg">{proj.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-slate-600 mb-6 flex-1">{proj.description}</p>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.techStack.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-xl border-dashed">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No Achievements Yet</h3>
            <p className="text-slate-500 max-w-sm mx-auto mb-6">
              Add your hackathon wins, certifications, and awards to boost your profile readiness score.
            </p>
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              <Plus className="w-4 h-4 mr-2" /> Add Achievement
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
