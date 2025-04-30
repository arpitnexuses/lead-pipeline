import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, ChevronRight, FileText, Phone, Mail, MessageSquare, Globe, Briefcase, Building2, Users, Info, Plus } from 'lucide-react';
import { Lead, LeadActivity } from '../types';
import { ActivityTimeline } from './ActivityTimeline';

interface LeadDetailProps {
  lead: Lead;
  onBack: () => void;
  onUpdateLead?: (updatedLead: Lead) => void;
}

export const LeadDetail: React.FC<LeadDetailProps> = ({ lead, onBack, onUpdateLead }) => {
  const [noteText, setNoteText] = useState('');
  const [currentLead, setCurrentLead] = useState<Lead>(lead);

  const handleAddActivity = (activity: Omit<LeadActivity, 'id'>) => {
    const newActivity = {
      ...activity,
      id: Date.now().toString(), // Simple way to generate unique ID
    };
    
    const updatedLead = {
      ...currentLead,
      activities: [newActivity, ...currentLead.activities]
    };
    
    setCurrentLead(updatedLead);
    onUpdateLead?.(updatedLead);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={18} className="mr-1" />
          <span>Back to Leads</span>
        </button>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Edit Lead
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule Meeting
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Activity Timeline */}
        <div className="space-y-6">
          {/* Combined Activity Timeline and Notes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-6">
            <div className="p-6">
              <div className="text-base mb-8">
                <ActivityTimeline 
                  activities={currentLead.activities} 
                  onAddActivity={handleAddActivity}
                />
              </div>

              {/* Notes Section */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Notes</h3>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All Notes
                  </button>
                </div>
                
                {/* Add Note Input */}
                <div className="mb-6">
                  <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Add a note about this lead..."
                    className="w-full h-24 px-4 py-3 text-base text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  <div className="mt-2 flex justify-end">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      <Plus size={16} className="mr-2" />
                      Add Note
                    </button>
                  </div>
                </div>

                {/* Notes List */}
                <div className="space-y-4">
                  {currentLead.notes?.map((note, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Lead Details */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Header Section */}
            {/* <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Record Details</h2>
                <div className="flex items-center space-x-3">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Edit Lead
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    Schedule Meeting
                  </button>
                </div>
              </div>
            </div> */}

            {/* Details Content */}
            <div className="px-6 py-4 space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-700">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{lead.fullName}</h3>
                    <p className="text-sm text-gray-500">{lead.position} at {lead.company}</p>
                  </div>
                </div>

                {/* Lead Status Section */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Deal Stage</p>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <p className="text-sm font-medium text-gray-900">{lead.status}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Deal Owner</p>
                    <div className="flex items-center space-x-2">
                      <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-700">AN</span>
                      </div>
                      <p className="text-sm font-medium text-gray-900">Account Owner</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dates */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Lead Date</p>
                    <p className="text-sm text-gray-900">{lead.leadDate}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Due Date</p>
                    <p className="text-sm text-gray-900">{lead.dueDate}</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <a href={`mailto:${lead.email}`} className="text-sm text-blue-600 hover:text-blue-700">{lead.email}</a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">LinkedIn</p>
                      <a href={lead.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-700">View Profile</a>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Contact Numbers</p>
                    <p className="text-sm text-gray-900 mt-1">{lead.phone}</p>
                    {lead.mobilePhone && (
                      <p className="text-sm text-gray-900 mt-1">{lead.mobilePhone} (Mobile)</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Company Information</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Company Name</p>
                        <p className="text-sm text-gray-900">{lead.company}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Website</p>
                        <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-700">{lead.website}</a>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Company Size</p>
                        <p className="text-sm text-gray-900">{lead.companySize}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Industry</p>
                        <p className="text-sm text-gray-900">{lead.industry}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Headquarters</p>
                        <p className="text-sm text-gray-900">{lead.headquarter}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Address</p>
                        <p className="text-sm text-gray-900">{lead.address}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Company Details</p>
                    <p className="text-sm text-gray-900 mt-1 whitespace-pre-wrap">{lead.companyDetails}</p>
                  </div>
                </div>
              </div>

              {/* Lead Details */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Lead Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Client Followup</p>
                    <p className="text-sm text-gray-900 mt-1">{lead.clientFollowup}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Pitch</p>
                    <p className="text-sm text-gray-900 mt-1 whitespace-pre-wrap">{lead.pitch}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};