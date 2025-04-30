import React from 'react';
import { Lead } from '../types';
import { ChevronDown, Users, MapPin } from 'lucide-react';

interface PipelineViewProps {
  leads: Lead[];
  onSelectLead: (lead: Lead) => void;
  selectedStage: string;
  selectedGeoCompany: string;
  searchTerm: string;
}

export const PipelineView: React.FC<PipelineViewProps> = ({
  leads,
  onSelectLead,
  selectedStage,
  selectedGeoCompany,
  searchTerm,
}) => {
  const stages = [
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

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase())
      || lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = selectedStage === 'All Stages' || lead.stage === selectedStage;
    const matchesGeo = selectedGeoCompany === 'All Clients' || lead.geoCompany === selectedGeoCompany;
    return matchesSearch && matchesStage && matchesGeo;
  });

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Hot Lead':
        return 'bg-red-50 border-red-200';
      case 'Warm Leads':
        return 'bg-orange-50 border-orange-200';
      case 'Meeting scheduled':
        return 'bg-green-50 border-green-200';
      case 'Meeting Done':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {stages.map(stage => {
        const stageLeads = filteredLeads.filter(lead => lead.stage === stage);
        const stageColor = getStageColor(stage);

        return (
          <div
            key={stage}
            className="flex-none w-80"
          >
            <div className={`p-4 rounded-lg ${stageColor} border mb-4`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{stage}</h3>
                <span className="px-2 py-1 text-sm bg-white rounded-full text-gray-600 border border-gray-200">
                  {stageLeads.length}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {stageLeads.map(lead => (
                <div
                  key={lead.id}
                  onClick={() => onSelectLead(lead)}
                  className="bg-white p-4 rounded-lg border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{lead.name}</h4>
                      <p className="text-sm text-gray-500">{lead.company}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                        {lead.probability ? `${lead.probability}%` : 'N/A'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <Users size={14} className="mr-1" />
                    <span className="mr-3">{lead.associatedContact || 'No contact'}</span>
                    <MapPin size={14} className="mr-1" />
                    <span>{lead.geoCompany}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}; 