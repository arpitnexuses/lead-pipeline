import React, { useState } from 'react';
import { Lead } from '../types';
import { ChevronDown, Search, Filter, Briefcase, TrendingUp, Clock, AlertCircle, Eye, EyeOff, ArrowUpRight, Users, MapPin } from 'lucide-react';

interface LeadListProps {
  leads: Lead[];
  onSelectLead: (lead: Lead) => void;
}

export const LeadList: React.FC<LeadListProps> = ({ leads, onSelectLead }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState('All Stages');
  const [selectedGeoCompany, setSelectedGeoCompany] = useState('All Locations');
  const [showValue, setShowValue] = useState(false);
  
  const stages = [
    'All Stages',
    'Not started',
    'PROPOSAL / NDA',
    'Warm Leads',
    'Hot Lead',
    'Meeting scheduled',
    'Meeting Reschedule',
    'Meeting Done',
    'Client Rejected',
    'Deal Lost'
  ];

  // Get unique geo companies
  const geoCompanies = ['All Locations', ...new Set(leads.map(lead => lead.geoCompany))];

  // Calculate stage counts
  const stageCounts = leads.reduce((acc, lead) => {
    acc[lead.stage] = (acc[lead.stage] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Get top 5 stages by count
  const topStages = Object.entries(stageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);
  
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase())
      || lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = selectedStage === 'All Stages' || lead.stage === selectedStage;
    const matchesGeo = selectedGeoCompany === 'All Locations' || lead.geoCompany === selectedGeoCompany;
    return matchesSearch && matchesStage && matchesGeo;
  });

  return (
    <div>
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {topStages.map(([stage, count]) => {
            const percentage = Math.round((count / leads.length) * 100);
            const isPositive = percentage > 20;
            
            return (
              <div key={stage} 
                className="relative overflow-hidden bg-white rounded-2xl p-6 group hover:shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #3b82f6, #60a5fa) border-box',
                  border: '2px solid transparent',
                  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
                }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50/40 to-blue-100/40 rounded-full -mr-12 -mt-12" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-50/40 to-blue-100/40 rounded-full -ml-8 -mb-8" />
                
                <div className="relative">
                  {/* Stage Icon and Title */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2.5 rounded-xl ${getStageIconBackground(stage)} bg-opacity-20 backdrop-blur-sm ring-2 ring-blue-500/20`}>
                      <Users size={20} className={`${getStageIconColor(stage)}`} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {stage}
                    </h3>
                  </div>

                  {/* Count and Percentage */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">{count}</span>
                      <span className="text-sm font-medium text-gray-500">Leads</span>
                    </div>
                    <div className={`flex items-center px-3 py-1.5 rounded-full backdrop-blur-sm ${
                      isPositive ? 'bg-blue-50/80 text-blue-600 ring-1 ring-blue-500/20' : 'bg-gray-50/80 text-gray-600 ring-1 ring-gray-500/20'
                    }`}>
                      <ArrowUpRight size={16} className="mr-1.5" />
                      <span className="text-sm font-semibold">{percentage}%</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative pt-2">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-medium text-gray-500">
                          Progress
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-gray-500">
                          {percentage}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded-full bg-blue-50/50 backdrop-blur-sm">
                      <div
                        style={{ 
                          width: `${percentage}%`,
                          background: 'linear-gradient(to right, #3b82f6, #60a5fa)',
                          boxShadow: '0 1px 2px 0 rgb(59 130 246 / 0.3)'
                        }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Lead Pipeline</h2>
              <p className="mt-2 text-base text-gray-500">Manage and track your sales pipeline</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative">
                <select
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-4 pr-10 text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                >
                  {stages.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>

              {/* New Geo Company Filter */}
              <div className="relative">
                <select
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-4 pr-10 text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedGeoCompany}
                  onChange={(e) => setSelectedGeoCompany(e.target.value)}
                >
                  {geoCompanies.map(geo => (
                    <option key={geo} value={geo}>{geo}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <MapPin size={16} className="text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-base text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center space-x-2">
            <Filter size={16} className="text-gray-400" />
            <span className="text-base text-gray-500">Quick Filters:</span>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1.5 text-sm font-medium rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                Recent Activity
              </button>
              <button className="px-3 py-1.5 text-sm font-medium rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">
                High Priority
              </button>
              <button className="px-3 py-1.5 text-sm font-medium rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition-colors">
                Needs Attention
              </button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead>
              <tr className="bg-gray-50">
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Lead
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Stage
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Last Activity
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Geo Company
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredLeads.map((lead) => (
                <tr 
                  key={lead.id} 
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => onSelectLead(lead)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">{lead.name}</div>
                        <div className="text-base text-gray-500">{lead.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base font-medium text-gray-900">{lead.company}</div>
                    <div className="text-base text-gray-500">{lead.position}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1.5 text-sm font-medium rounded-lg ${getStageBadgeColor(lead.stage)}`}>
                      {lead.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">{lead.lastActivity.type}</div>
                    <div className="text-sm text-gray-500">{lead.lastActivity.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1.5 text-sm font-medium rounded-lg ${getGeoCompanyColor(lead.geoCompany)}`}>
                      {lead.geoCompany}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1.5 text-xs font-medium rounded-lg ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-50 text-green-600';
    case 'open':
      return 'bg-blue-50 text-blue-600';
    case 'draft':
      return 'bg-gray-50 text-gray-600';
    case 'closed':
      return 'bg-red-50 text-red-600';
    default:
      return 'bg-gray-50 text-gray-600';
  }
}

function getStageBadgeColor(stage: string) {
  switch (stage.toLowerCase()) {
    case 'not started':
      return 'bg-gray-100 text-gray-800';
    case 'proposal / nda':
      return 'bg-blue-50 text-blue-700';
    case 'warm leads':
      return 'bg-yellow-50 text-yellow-700';
    case 'hot lead':
      return 'bg-orange-50 text-orange-700';
    case 'meeting scheduled':
      return 'bg-purple-50 text-purple-700';
    case 'meeting reschedule':
      return 'bg-indigo-50 text-indigo-700';
    case 'meeting done':
      return 'bg-green-50 text-green-700';
    case 'client rejected':
      return 'bg-red-50 text-red-700';
    case 'deal lost':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function getGeoCompanyColor(geoCompany: string) {
  switch (geoCompany.toLowerCase()) {
    case 'rsm saudi':
      return 'bg-emerald-50 text-emerald-700';
    case 'rsm uae':
      return 'bg-cyan-50 text-cyan-700';
    case 'rsm qatar':
      return 'bg-violet-50 text-violet-700';
    case 'rsm kuwait':
      return 'bg-amber-50 text-amber-700';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function getProgressBarColor(stage: string) {
  switch (stage.toLowerCase()) {
    case 'not started':
      return 'bg-gray-500';
    case 'proposal / nda':
      return 'bg-blue-500';
    case 'warm leads':
      return 'bg-yellow-500';
    case 'hot lead':
      return 'bg-orange-500';
    case 'meeting scheduled':
      return 'bg-purple-500';
    case 'meeting reschedule':
      return 'bg-indigo-500';
    case 'meeting done':
      return 'bg-green-500';
    case 'client rejected':
      return 'bg-red-500';
    case 'deal lost':
      return 'bg-gray-500';
    default:
      return 'bg-blue-500';
  }
}

function getStageIconBackground(stage: string) {
  switch (stage.toLowerCase()) {
    case 'not started':
      return 'bg-gray-500';
    case 'proposal / nda':
      return 'bg-blue-500';
    case 'warm leads':
      return 'bg-yellow-500';
    case 'hot lead':
      return 'bg-orange-500';
    case 'meeting scheduled':
      return 'bg-purple-500';
    case 'meeting reschedule':
      return 'bg-indigo-500';
    case 'meeting done':
      return 'bg-green-500';
    case 'client rejected':
      return 'bg-red-500';
    case 'deal lost':
      return 'bg-gray-500';
    default:
      return 'bg-blue-500';
  }
}

function getStageIconColor(stage: string) {
  switch (stage.toLowerCase()) {
    case 'not started':
      return 'text-gray-600';
    case 'proposal / nda':
      return 'text-blue-600';
    case 'warm leads':
      return 'text-yellow-600';
    case 'hot lead':
      return 'text-orange-600';
    case 'meeting scheduled':
      return 'text-purple-600';
    case 'meeting reschedule':
      return 'text-indigo-600';
    case 'meeting done':
      return 'text-green-600';
    case 'client rejected':
      return 'text-red-600';
    case 'deal lost':
      return 'text-gray-600';
    default:
      return 'text-blue-600';
  }
}