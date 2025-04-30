import React, { useState } from 'react';
import { Lead } from '../types';
import { ChevronDown, Search, Filter, Briefcase, TrendingUp, Clock, AlertCircle, Eye, EyeOff, ArrowUpRight, Users, MapPin, CheckCircle, Calendar, PieChart } from 'lucide-react';
import { ViewSwitcher } from './ViewSwitcher';
import { PipelineView } from './PipelineView';

interface LeadListProps {
  leads: Lead[];
  onSelectLead: (lead: Lead) => void;
}

export const LeadList: React.FC<LeadListProps> = ({ leads, onSelectLead }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState('All Stages');
  const [selectedGeoCompany, setSelectedGeoCompany] = useState('All Clients');
  const [showValue, setShowValue] = useState(false);
  const [currentView, setCurrentView] = useState<'table' | 'pipeline'>('table');
  
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

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Hot Lead':
        return 'border-red-200';
      case 'Warm Leads':
        return 'border-orange-200';
      case 'Meeting scheduled':
        return 'border-green-200';
      case 'Meeting Done':
        return 'border-blue-200';
      case 'Client Rejected':
        return 'border-gray-300';
      case 'Deal Lost':
        return 'border-gray-300';
      default:
        return 'border-gray-200';
    }
  };

  // Calculate counts for specific stages
  const totalLeads = leads.length;
  const hotLeads = leads.filter(lead => lead.stage === 'Hot Lead').length;
  const meetingDone = leads.filter(lead => lead.stage === 'Meeting Done').length;
  const meetingScheduled = leads.filter(lead => lead.stage === 'Meeting scheduled').length;

  const cardData = [
    { title: 'Total Leads', count: totalLeads, stage: 'Total Leads', icon: <Users size={20} /> },
    { title: 'Hot Lead', count: hotLeads, stage: 'Hot Lead', icon: <TrendingUp size={20} /> },
    { title: 'Meeting Done', count: meetingDone, stage: 'Meeting Done', icon: <CheckCircle size={20} /> },
    { title: 'Meeting Scheduled', count: meetingScheduled, stage: 'Meeting scheduled', icon: <Calendar size={20} /> }
  ];

  // Get unique geo companies
  const geoCompanies = ['All Clients', ...new Set(leads.map(lead => lead.geoCompany))];

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
    const matchesGeo = selectedGeoCompany === 'All Clients' || lead.geoCompany === selectedGeoCompany;
    return matchesSearch && matchesStage && matchesGeo;
  });

  // Calculate pipeline metrics
  const totalValue = leads.reduce((sum, lead) => sum + (lead.probability || 0), 0);
  const avgProbability = Math.round(totalValue / leads.length);
  const stageDistribution = stages
    .filter(stage => stage !== 'All Stages')
    .map(stage => {
      const count = leads.filter(lead => lead.stage === stage).length;
      return {
        stage,
        count,
        percentage: Math.round((count / leads.length) * 100)
      };
    });

  return (
    <div>
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cardData.map((card) => {
            const percentage = Math.round((card.count / totalLeads) * 100);
            const isPositive = percentage > 20;
            
            return (
              <div key={card.stage} 
                className="bg-white border border-gray-200 p-5"
              >
                <div className="relative">
                  {/* Stage Icon and Title */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gray-50 border border-gray-200">
                      {card.icon}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {card.title}
                    </h3>
                  </div>

                  {/* Count and Percentage */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-blue-600">{card.count}</span>
                      <span className="text-sm text-gray-500">Leads</span>
                    </div>
                    <div className="flex items-center px-2 py-1 bg-gray-50 border border-gray-200">
                      <ArrowUpRight size={16} className="mr-1.5 text-gray-500" />
                      <span className="text-sm text-gray-600">{percentage}%</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500">
                          Progress
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500">
                          {percentage}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-1.5 bg-gray-100">
                      <div
                        style={{ width: `${percentage}%` }}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 h-1.5"
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
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Lead Pipeline</h2>
                  <p className="mt-1.5 text-sm text-gray-500">Manage and track your sales pipeline</p>
                  <div className="mt-4">
                    <ViewSwitcher
                      currentView={currentView}
                      onViewChange={setCurrentView}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-white border border-gray-200 py-2 pl-4 pr-10 text-base text-gray-600 focus:outline-none focus:border-gray-400"
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

                {/* Geo Company Filter */}
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-white border border-gray-200 py-2 pl-4 pr-10 text-base text-gray-600 focus:outline-none focus:border-gray-400"
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

                <div className="relative w-64">
                  <input
                    type="text"
                    placeholder="Search leads..."
                    className="w-full bg-white border border-gray-200 pl-10 pr-4 py-2 text-base text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {currentView === 'pipeline' ? (
          <PipelineView
            leads={leads}
            onSelectLead={onSelectLead}
            selectedStage={selectedStage}
            selectedGeoCompany={selectedGeoCompany}
            searchTerm={searchTerm}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200 bg-gray-50">
                    Deals
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200 bg-gray-50">
                    Deal stage
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200 bg-gray-50">
                    Last Activity
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200 bg-gray-50">
                    Client Name
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200 bg-gray-50">
                    Associated Person
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200 bg-gray-50">
                    Associated Contact
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredLeads.map((lead) => (
                  <tr 
                    key={lead.id} 
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => onSelectLead(lead)}
                  >
                    <td className="px-4 py-2.5 whitespace-nowrap border border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-5 w-5">
                          <div className="h-5 w-5 rounded bg-gray-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-gray-600">
                              {lead.company.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-2">
                          <div className="text-base font-medium text-gray-900">{lead.company}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap border border-gray-200">
                      <div className="flex items-center">
                        <div className={`h-2 w-2 rounded-full mr-2 ${getLeadStatusDot(lead.stage)}`}></div>
                        <span className="text-base text-gray-900">{lead.stage}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap border border-gray-200">
                      <div className="text-base text-gray-900">
                        <span className="inline-flex px-3 py-1 text-sm rounded-full bg-white text-gray-900 border border-gray-200">
                          {lead.lastActivity ? `${lead.lastActivity.type.charAt(0).toUpperCase() + lead.lastActivity.type.slice(1)} - ${lead.lastActivity.description} (${lead.lastActivity.date})` : 'No activity'}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap border border-gray-200">
                      <div className="text-base text-gray-900">
                        {`RSM ${lead.geoCompany.replace('RSM ', '')}`}
                      </div>
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap border border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-7 w-7">
                          <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-sm font-medium text-blue-600">
                              {lead.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium text-gray-900">{lead.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap border border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-5 w-5">
                          <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-gray-600">
                              {lead.associatedContact?.charAt(0) || '-'}
                            </span>
                          </div>
                        </div>
                        <div className="ml-2">
                          <div className="text-base font-medium text-gray-900">
                            {lead.associatedContact || 'Not assigned'}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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

function getLeadStatusDot(stage: string) {
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
    case 'lead':
      return 'bg-blue-500';
    default:
      return 'bg-gray-500';
  }
}

function getLeadStatusText(stage: string) {
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
    case 'lead':
      return 'text-blue-600';
    default:
      return 'text-gray-600';
  }
}
