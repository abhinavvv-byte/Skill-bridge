import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { mockConnects } from '@/src/data/mockData';
import { Check, X, MessageSquare, Building2, GraduationCap } from 'lucide-react';

export function StudentConnects() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Connects</h1>
          <p className="text-slate-500">Manage interactions with institutions and companies.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockConnects.map((connect) => (
          <Card key={connect.id} className={connect.status === 'Pending' ? 'border-blue-200 shadow-sm' : ''}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {connect.fromType === 'Company' ? (
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
                      <Building2 className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-slate-900">
                          {connect.fromType === 'Company' ? 'Global Tech' : 'Tech University'}
                        </h3>
                        <Badge variant={connect.fromType === 'Company' ? 'default' : 'secondary'} className="text-[10px] h-5">
                          {connect.fromType}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-slate-600 mt-1">{connect.type}</p>
                    </div>
                    <Badge 
                      variant={connect.status === 'Pending' ? 'warning' : connect.status === 'Accepted' ? 'success' : 'outline'}
                    >
                      {connect.status}
                    </Badge>
                  </div>
                  
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-700 relative">
                    <MessageSquare className="w-4 h-4 text-slate-300 absolute -left-2 top-4 bg-white" />
                    <p>"{connect.message}"</p>
                  </div>

                  {connect.status === 'Pending' && (
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Check className="w-4 h-4 mr-2" />
                        Accept & Connect
                      </Button>
                      <Button size="sm" variant="outline" className="text-slate-600">
                        <X className="w-4 h-4 mr-2" />
                        Decline
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
