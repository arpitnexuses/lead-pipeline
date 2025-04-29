import React from 'react';
import { Activity, Calendar, Mail, Phone, FileText, ChevronRight } from 'lucide-react';
import { LeadActivity } from '../types';

interface ActivityTimelineProps {
  activities: LeadActivity[];
}

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activities }) => {
  return (
    <div className="px-4 py-4 sm:px-6">
      <ul className="space-y-6">
        {activities.map((activity, index) => (
          <li key={index} className="relative flex gap-x-4">
            {index < activities.length - 1 && (
              <div className="absolute left-3 top-6 -bottom-6 w-px bg-gray-200" aria-hidden="true" />
            )}
            <div className={`relative flex h-6 w-6 flex-none items-center justify-center rounded-full ${getTypeColor(activity.type)}`}>
              {getTypeIcon(activity.type)}
            </div>
            <div className="flex-auto rounded-md border border-gray-200 p-3">
              <div className="flex justify-between gap-x-4">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.title}</p>
                </div>
                <p className="flex-none text-xs text-gray-500">
                  <time dateTime={activity.date}>{activity.date}</time>
                </p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{activity.description}</p>
              {activity.dateTime && (
                <div className="mt-2 flex items-center text-xs text-gray-500">
                  <Calendar size={12} className="mr-1" />
                  <span>{activity.dateTime}</span>
                </div>
              )}
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-[10px] font-medium text-gray-600">JD</span>
                    </div>
                  </div>
                  <p className="ml-1 text-xs text-gray-500">{activity.user || 'John Doe'}</p>
                </div>
                <div className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeColor(activity.status)}`}>
                  {activity.status}
                </div>
              </div>
              {activity.documents && (
                <div className="mt-2 border-t border-gray-100 pt-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-gray-500">Documents</p>
                    <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center">
                      View all <ChevronRight size={12} />
                    </button>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {activity.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="inline-flex items-center px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                        <FileText size={12} className="mr-1" />
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
    </div>
  );
};

function getTypeIcon(type: string) {
  switch (type.toLowerCase()) {
    case 'email':
      return <Mail size={12} className="text-white" />;
    case 'call':
      return <Phone size={12} className="text-white" />;
    case 'meeting':
      return <Calendar size={12} className="text-white" />;
    default:
      return <Activity size={12} className="text-white" />;
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