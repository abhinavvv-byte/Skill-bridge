import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { mockStudent } from '@/src/data/mockData';
import { Download, FileText, Settings2, Edit, Loader2, Github, Terminal } from 'lucide-react';
import { fetchGithubStats, GithubStats } from '@/src/services/githubService';
import { fetchHackerRankStats, HackerRankStats } from '@/src/services/hackerrankService';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export function StudentResume() {
  const [githubStats, setGithubStats] = useState<GithubStats | null>(null);
  const [hackerRankStats, setHackerRankStats] = useState<HackerRankStats | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const githubHandle = mockStudent.codingProfiles.find(p => p.platform === 'GitHub')?.handle;
      if (githubHandle) {
        const stats = await fetchGithubStats(githubHandle);
        setGithubStats(stats);
      }
      
      const hrHandle = mockStudent.codingProfiles.find(p => p.platform === 'HackerRank')?.handle;
      if (hrHandle) {
        const hrStats = await fetchHackerRankStats(hrHandle);
        setHackerRankStats(hrStats);
      }
    };
    fetchStats();
  }, []);

  const downloadPDF = async () => {
    if (!resumeRef.current) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(resumeRef.current, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${mockStudent.name.replace(/\s+/g, '_')}_Resume.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Auto-Resume Generator</h1>
          <p className="text-slate-500">Your profile is automatically converted into a professional resume.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Settings2 className="w-4 h-4 mr-2" /> Templates</Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={downloadPDF} disabled={isDownloading}>
            {isDownloading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Download className="w-4 h-4 mr-2" />}
            {isDownloading ? 'Generating...' : 'Export PDF'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Resume Preview */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8 md:p-12 aspect-[1/1.4] overflow-y-auto print:shadow-none print:border-none print:p-0 print:m-0 print:aspect-auto print:overflow-visible">
            <div ref={resumeRef} className="max-w-2xl mx-auto space-y-8 text-slate-900 bg-white p-6">
              
              <div className="text-center space-y-2 border-b border-slate-200 pb-6">
                <h2 className="text-3xl font-bold uppercase tracking-wider">{mockStudent.name}</h2>
                <p className="text-sm text-slate-600">
                  {mockStudent.university} • {mockStudent.department} • {mockStudent.year}
                </p>
                <div className="flex items-center justify-center gap-4 text-xs mt-2 text-slate-500">
                  <span>alex@example.com</span>
                  <span>•</span>
                  <span>github.com/alex-codes</span>
                  <span>•</span>
                  <span>leetcode.com/alexj</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1 text-slate-800">Skills & Competencies</h3>
                <div className="flex gap-2 flex-wrap text-sm">
                  <span className="font-semibold w-24">Strong:</span>
                  <span>{mockStudent.skills.filter(s => s.level === 'Strong').map(s => s.skill).join(', ')}</span>
                </div>
                <div className="flex gap-2 flex-wrap text-sm">
                  <span className="font-semibold w-24">Developing:</span>
                  <span>{mockStudent.skills.filter(s => s.level === 'Developing').map(s => s.skill).join(', ')}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1 text-slate-800">Coding Profile (Verified)</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {mockStudent.codingProfiles.map((cp, i) => (
                     <div key={i}>
                       <p className="font-semibold flex items-center gap-2">
                         {cp.platform === 'GitHub' ? <Github className="w-4 h-4" /> : null}
                         {cp.platform === 'HackerRank' ? <Terminal className="w-4 h-4" /> : null}
                         {cp.platform}
                       </p>
                       <p className="text-slate-600">{cp.problemsSolved} problems solved • Rating: {cp.rating}</p>
                       
                       {/* Inject dynamic GitHub stats if available */}
                       {cp.platform === 'GitHub' && githubStats ? (
                         <div className="mt-1 pt-1 border-t border-slate-100 text-xs text-slate-500">
                           <p><span className="font-medium text-slate-700">{githubStats.publicRepos}</span> public repositories</p>
                           <p><span className="font-medium text-slate-700">{githubStats.commitsThisYear}</span> commits this year</p>
                           <p>Top: {githubStats.topLanguages.join(', ')}</p>
                         </div>
                       ) : cp.platform === 'GitHub' && !githubStats ? (
                         <div className="mt-1 text-xs text-slate-400 flex items-center"><Loader2 className="w-3 h-3 mr-1 animate-spin" /> Fetching live stats...</div>
                       ) : null}

                       {/* Inject dynamic HackerRank stats if available */}
                       {cp.platform === 'HackerRank' && hackerRankStats ? (
                         <div className="mt-1 pt-1 border-t border-slate-100 text-xs text-slate-500">
                           <p><span className="font-medium text-slate-700">Rank:</span> #{hackerRankStats.globalRank.toLocaleString()}</p>
                           <p><span className="font-medium text-slate-700">Badges:</span> {hackerRankStats.badges.join(', ')}</p>
                           <p><span className="font-medium text-slate-700">Certs:</span> {hackerRankStats.certifications.join(', ')}</p>
                         </div>
                       ) : cp.platform === 'HackerRank' && !hackerRankStats ? (
                         <div className="mt-1 text-xs text-slate-400 flex items-center"><Loader2 className="w-3 h-3 mr-1 animate-spin" /> Fetching live stats...</div>
                       ) : null}
                     </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1 text-slate-800">Projects</h3>
                {mockStudent.projects.map((proj, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <p className="font-bold text-sm">{proj.title}</p>
                      <p className="text-xs text-blue-600">{proj.link}</p>
                    </div>
                    <p className="text-sm text-slate-600">{proj.description}</p>
                    <p className="text-xs text-slate-500 italic">Tech: {proj.techStack.join(', ')}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1 text-slate-800">Experience</h3>
                {mockStudent.experience.map((exp, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <p className="font-bold text-sm">{exp.title}</p>
                      <p className="text-xs font-medium text-slate-600">{exp.duration}</p>
                    </div>
                    <p className="text-sm font-medium text-slate-700">{exp.organization}</p>
                    <p className="text-sm text-slate-600">{exp.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resume Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <FileText className="w-5 h-5 text-green-600" />
                <span>Sync with profile: <strong className="text-green-600">Active</strong></span>
              </div>
              <p className="text-xs text-slate-500">Your resume automatically updates when you solve a problem on LeetCode or complete a program.</p>
              <Button className="w-full mt-4" variant="outline"><Edit className="w-4 h-4 mr-2"/> Edit Sections</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
