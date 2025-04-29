import React, { useState } from 'react';
import { Lead } from '../types';
import { ChevronDown, Search, Filter, Briefcase, TrendingUp, Clock, AlertCircle, Eye, EyeOff } from 'lucide-react';

interface LeadListProps {
  leads: Lead[];
  onSelectLead: (lead: Lead) => void;
}

export const LeadList: React.FC<LeadListProps> = ({ leads, onSelectLead }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState('All Stages');
  const [showValue, setShowValue] = useState(false);
  
  const stages = ['All Stages', 'Prospect', 'Qualified', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'];
  
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase())
      || lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = selectedStage === 'All Stages' || lead.stage === selectedStage;
    return matchesSearch && matchesStage;
  });

  const totalValue = leads.reduce((sum, lead) => sum + lead.value, 0);

  return (
    <div>
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-blue-100">Total Pipeline Value</p>
                  <div className="flex items-center mt-1">
                    {showValue ? (
                      <p className="text-2xl font-semibold text-white">${totalValue.toLocaleString()}</p>
                    ) : (
                      <p className="text-2xl font-semibold text-white">●●●●●●</p>
                    )}
                    <button 
                      onClick={() => setShowValue(!showValue)}
                      className="ml-2 p-1 hover:bg-white/10 rounded-full transition-colors"
                    >
                      {showValue ? (
                        <EyeOff className="h-4 w-4 text-white" />
                      ) : (
                        <Eye className="h-4 w-4 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center">
                  <div className="text-white text-xl font-semibold">
                    {Math.round((leads.filter(l => l.status === 'Active').length / leads.length) * 100)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Active Leads</p>
                  <div className="flex items-center mt-1">
                    <p className="text-2xl font-semibold text-gray-900">{leads.length}</p>
                    <span className="ml-2 px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
                      +12% ↑
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Avg. Deal Cycle</p>
                  <div className="flex items-center mt-1">
                    <p className="text-2xl font-semibold text-gray-900">32 days</p>
                    <span className="ml-2 px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-full">
                      +5d ↑
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">Lead Pipeline</h2>
              <p className="mt-1 text-base text-gray-500">Manage and track your sales pipeline</p>
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
                High Value
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
                  Value
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
                    <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-50 text-blue-600">
                      {lead.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">{lead.lastActivity.type}</div>
                    <div className="text-sm text-gray-500">{lead.lastActivity.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      ${lead.value.toLocaleString()}
                    </div>
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
    default:
      return 'bg-gray-50 text-gray-600';
  }
}