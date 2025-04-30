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
        {/* Left Side - Lead Details */}
        <div className="space-y-6">
          {/* Lead Overview Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-8">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-xl font-semibold">
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-white">{lead.fullName}</h2>
                  <p className="text-blue-100">{lead.position}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Basic Information in 2 columns */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Lead Date</p>
                        <p className="text-base text-gray-900">{lead.leadDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Month</p>
                        <p className="text-base text-gray-900">{lead.month}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Info className="w-5 h-5 text-gray-400 mt-1" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Status</p>
                        <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-50 text-blue-600">
                          {lead.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Due Date</p>
                        <p className="text-base text-gray-900">{lead.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Meeting Date</p>
                        <p className="text-base text-gray-900">{lead.meetingDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information in 2 columns */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-gray-400 mt-1" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Email</p>
                        <a href={`mailto:${lead.email}`} className="text-base text-blue-600 hover:text-blue-700">{lead.email}</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-gray-400 mt-1" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">LinkedIn</p>
                        <a href={lead.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-base text-blue-600 hover:text-blue-700">View Profile</a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-gray-400 mt-1" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Contact Number</p>
                        <p className="text-base text-gray-900">{lead.phone}</p>
                        {lead.mobilePhone && (
                          <p className="text-base text-gray-900">{lead.mobilePhone} (Mobile)</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Company Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-4">Basic Details</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Company Name</p>
                        <p className="text-base font-medium text-gray-900">{lead.company}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Website</p>
                        <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-base text-blue-600 hover:text-blue-700">{lead.website}</a>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Company LinkedIn</p>
                        <a href={lead.companyLinkedin} target="_blank" rel="noopener noreferrer" className="text-base text-blue-600 hover:text-blue-700">View Company Profile</a>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Company Size</p>
                        <p className="text-base text-gray-900">{lead.companySize}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Industry</p>
                        <p className="text-base text-gray-900">{lead.industry}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Headquarters</p>
                        <p className="text-base text-gray-900">{lead.headquarter}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Geo Company</p>
                        <p className="text-base text-gray-900">{lead.geoCompany}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Address</p>
                        <p className="text-base text-gray-900">{lead.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-4">Company Details</h4>
                  <p className="text-base text-gray-900 whitespace-pre-wrap">{lead.companyDetails}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Lead Details</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Client Followup</p>
                  <p className="mt-1 text-base text-gray-900">{lead.clientFollowup}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Pitch</p>
                  <p className="mt-1 text-base text-gray-900 whitespace-pre-wrap">{lead.pitch}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Activity Timeline and Notes */}
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
                  {lead.notes?.map((note, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="text-base text-gray-900">{note}</p>
                    </div>
                  ))}
                  {(!lead.notes || lead.notes.length === 0) && (
                    <div className="text-center py-8">
                      <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500">No notes yet</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};