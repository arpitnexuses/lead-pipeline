import React from 'react';
import { ArrowLeft, MapPin, Calendar, ChevronRight, FileText, Phone, Mail, MessageSquare } from 'lucide-react';
import { Lead } from '../types';
import { ContactInfo } from './ContactInfo';
import { ActivityTimeline } from './ActivityTimeline';

interface LeadDetailProps {
  lead: Lead;
  onBack: () => void;
}

export const LeadDetail: React.FC<LeadDetailProps> = ({ lead, onBack }) => {
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-8">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-xl font-semibold">
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-white">{lead.name}</h2>
                  <p className="text-blue-100">{lead.position} at {lead.company}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors">
                  <Phone size={16} className="mr-2" />
                  Call
                </button>
                <button className="flex items-center justify-center px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors">
                  <Mail size={16} className="mr-2" />
                  Email
                </button>
              </div>
            </div>
            
            <ContactInfo lead={lead} />
            
            <div className="px-6 py-4 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Location</h3>
              <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200">
                <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-gray-400 mx-auto" />
                    <p className="mt-1 text-sm text-gray-500">{lead.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">Deal Information</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Deal Value</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">${lead.value.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Probability</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">{lead.probability || 0}%</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Stage</p>
                  <p className="mt-1">
                    <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-blue-50 text-blue-600">
                      {lead.stage}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p className="mt-1">
                    <span className={`px-3 py-1.5 text-sm font-medium rounded-lg ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="h-2 bg-gray-100 rounded-full">
                  <div 
                    className="h-2 bg-blue-500 rounded-full" 
                    style={{ width: `${lead.probability || 0}%` }}
                  ></div>
                </div>
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>Progress</span>
                  <span>{lead.probability || 0}% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Activity Timeline</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  View All
                </button>
              </div>
            </div>
            <ActivityTimeline activities={lead.activities} />
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Notes</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  View All Notes
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <textarea 
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Add a note about this lead..."
                ></textarea>
                <div className="mt-3 flex justify-end">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    Add Note
                  </button>
                </div>
              </div>
              
              {lead.notes && lead.notes.length > 0 ? (
                <div className="space-y-4">
                  {lead.notes.map((note, index) => (
                    <div key={index} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-medium">
                          JD
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">John Doe</p>
                          <span className="text-xs text-gray-500">2 days ago</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <MessageSquare className="h-8 w-8 text-gray-400 mx-auto" />
                  <p className="mt-2 text-sm text-gray-500">No notes yet</p>
                </div>
              )}
            </div>
          </div>
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