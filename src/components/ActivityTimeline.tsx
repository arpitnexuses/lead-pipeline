import React, { useState } from 'react';
import { Activity, Calendar, Mail, Phone, FileText, ChevronRight, Plus } from 'lucide-react';
import { LeadActivity } from '../types';
import { AddActivityModal } from './AddActivityModal';

interface ActivityTimelineProps {
  activities: LeadActivity[];
  onAddActivity: (activity: Omit<LeadActivity, 'id'>) => void;
}

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activities, onAddActivity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddActivity = (activity: Omit<LeadActivity, 'id'>) => {
    onAddActivity(activity);
  };

  return (
    <div className="px-4 py-4 sm:px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Activity Timeline</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus size={16} className="mr-2" />
          Add Activity
        </button>
      </div>
      <ul className="space-y-6">
        {activities.map((activity, index) => (
          <li key={index} className="relative flex gap-x-4">
            {index < activities.length - 1 && (
              <div className="absolute left-3 top-6 -bottom-6 w-px bg-gray-200" aria-hidden="true" />
            )}
            <div className={`relative flex h-6 w-6 flex-none items-center justify-center rounded-full ${getTypeColor(activity.type)}`}>
              {getTypeIcon(activity.type)}
            </div>
            <div className="flex-auto rounded-md border border-gray-200 p-4">
              <div className="flex justify-between gap-x-4">
                <div className="flex-1">
                  <p className="text-lg font-medium text-gray-900">{activity.title}</p>
                </div>
                <p className="flex-none text-sm text-gray-500">
                  <time dateTime={activity.date}>{activity.date}</time>
                </p>
              </div>
              <p className="mt-2 text-base text-gray-600">{activity.description}</p>
              {activity.dateTime && (
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  <span>{activity.dateTime}</span>
                </div>
              )}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">JD</span>
                    </div>
                  </div>
                  <p className="ml-2 text-sm text-gray-600">{activity.user || 'John Doe'}</p>
                </div>
                <div className={`px-3 py-1.5 text-sm font-medium rounded-full ${getStatusBadgeColor(activity.status)}`}>
                  {activity.status}
                </div>
              </div>
              {activity.documents && (
                <div className="mt-3 border-t border-gray-100 pt-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-600">Documents</p>
                    <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                      View all <ChevronRight size={14} />
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {activity.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="inline-flex items-center px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700">
                        <FileText size={14} className="mr-1.5" />
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <AddActivityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddActivity}
      />
    </div>
  );
};

function getTypeIcon(type: string) {
  switch (type.toLowerCase()) {
    case 'email':
      return <Mail size={14} className="text-white" />;
    case 'call':
      return <Phone size={14} className="text-white" />;
    case 'meeting':
      return <Calendar size={14} className="text-white" />;
    default:
      return <Activity size={14} className="text-white" />;
  }
}

function getTypeColor(type: string) {
  switch (type.toLowerCase()) {
    case 'email':
      return 'bg-blue-500';
    case 'call':
      return 'bg-green-500';
    case 'meeting':
      return 'bg-purple-500';
    default:
      return 'bg-gray-500';
  }
}

function getStatusBadgeColor(status: string) {
  if (!status) return '';
  
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'open':
      return 'bg-blue-100 text-blue-800';
    case 'draft':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}