import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { StudentLayout } from './components/layout/StudentLayout';
import { InstitutionLayout } from './components/layout/InstitutionLayout';
import { CompanyLayout } from './components/layout/CompanyLayout';
import { StudentDashboard } from './pages/student/Dashboard';
import { StudentPerformance } from './pages/student/Performance';
import { StudentConnects } from './pages/student/Connects';
import { StudentResume } from './pages/student/Resume';
import { StudentOpportunities } from './pages/student/Opportunities';
import { StudentExperience } from './pages/student/Experience';

import { InstitutionDashboard } from './pages/institution/Dashboard';
import { CompanyDashboard } from './pages/company/Dashboard';

import { Button } from './components/ui/Button';

// Mock simple pages for now, will create real ones
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-full">
    <h2 className="text-2xl font-bold text-slate-400">{title}</h2>
  </div>
);

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="max-w-5xl w-full text-center space-y-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm">
            Welcome to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Skill Bridge
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
            A unified platform connecting students, institutions, and companies for continuous career development.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8"
        >
          <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-white p-8 rounded-3xl shadow-lg shadow-blue-900/5 border border-slate-100 flex flex-col items-center text-center transition-all h-full">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold">🎓</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Student Portal</h3>
            <p className="text-slate-500 mb-8 flex-1">Build your verified profile, track your skills, and get matched with relevant opportunities automatically.</p>
            <Link to="/student" className="w-full mt-auto">
              <Button className="w-full h-12 text-md bg-blue-600 hover:bg-blue-700 rounded-xl">Enter as Student</Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-white p-8 rounded-3xl shadow-lg shadow-blue-900/5 border border-slate-100 flex flex-col items-center text-center transition-all h-full">
            <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold">🏫</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Institution Portal</h3>
            <p className="text-slate-500 mb-8 flex-1">Monitor student progress, assign activities, and analyze academic skill gaps across your organization.</p>
            <Link to="/institution" className="w-full mt-auto">
              <Button variant="default" className="w-full h-12 text-md bg-slate-900 hover:bg-slate-800 rounded-xl">Enter as Institution</Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-white p-8 rounded-3xl shadow-lg shadow-blue-900/5 border border-slate-100 flex flex-col items-center text-center transition-all h-full">
            <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold">🏢</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Company Portal</h3>
            <p className="text-slate-500 mb-8 flex-1">Discover verified talent, post opportunities, and find your perfect matches using smart intelligence.</p>
            <Link to="/company" className="w-full mt-auto">
              <Button variant="default" className="w-full h-12 text-md bg-indigo-600 hover:bg-indigo-700 rounded-xl">Enter as Company</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="opportunities" element={<StudentOpportunities />} />
          <Route path="programs" element={<Placeholder title="Programs" />} />
          <Route path="performance" element={<StudentPerformance />} />
          <Route path="experience" element={<StudentExperience />} />
          <Route path="resume" element={<StudentResume />} />
          <Route path="connects" element={<StudentConnects />} />
        </Route>

        {/* Institution Routes */}
        <Route path="/institution" element={<InstitutionLayout />}>
          <Route index element={<InstitutionDashboard />} />
          <Route path="students" element={<Placeholder title="Student Management" />} />
          <Route path="warnings" element={<Placeholder title="Early Warning System" />} />
          <Route path="programs" element={<Placeholder title="Programs & Activities" />} />
          <Route path="gap-analysis" element={<Placeholder title="Market Skills Gap" />} />
          <Route path="connects" element={<Placeholder title="Connects" />} />
        </Route>

        {/* Company Routes */}
        <Route path="/company" element={<CompanyLayout />}>
          <Route index element={<CompanyDashboard />} />
          <Route path="post" element={<Placeholder title="Post Opportunity" />} />
          <Route path="search" element={<Placeholder title="Talent Search" />} />
          <Route path="pipeline" element={<Placeholder title="Pipeline & Matching" />} />
          <Route path="connects" element={<Placeholder title="Connects" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
