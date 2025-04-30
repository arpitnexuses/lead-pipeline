import React, { useState } from 'react';
import { Activity, Calendar, Mail, Phone, FileText, ChevronRight, Plus, MessageSquare } from 'lucide-react';
import { LeadActivity } from '../types';
import { AddActivityModal } from './AddActivityModal';

interface ActivityTimelineProps {
  activities: LeadActivity[];
  onAddActivity: (activity: Omit<LeadActivity, 'id'>) => void;
}

const getTypeIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'email':
      return <Mail className="h-4 w-4 text-white" />;
    case 'call':
      return <Phone className="h-4 w-4 text-white" />;
    case 'meeting':
      return <Calendar className="h-4 w-4 text-white" />;
    case 'note':
      return <MessageSquare className="h-4 w-4 text-white" />;
    default:
      return <Activity className="h-4 w-4 text-white" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case 'email':
      return 'bg-blue-600';
    case 'call':
      return 'bg-green-600';
    case 'meeting':
      return 'bg-purple-600';
    case 'note':
      return 'bg-orange-600';
    default:
      return 'bg-gray-600';
  }
};

const getStatusBadgeColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-50 text-green-700';
    case 'completed':
      return 'bg-blue-50 text-blue-700';
    case 'draft':
      return 'bg-gray-50 text-gray-700';
    case 'open':
      return 'bg-yellow-50 text-yellow-700';
    default:
      return 'bg-gray-50 text-gray-700';
  }
};

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activities, onAddActivity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddActivity = (activity: Omit<LeadActivity, 'id'>) => {
    onAddActivity(activity);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Activity</h2>
          <p className="text-sm text-gray-500 mt-1">Track all lead-related activities</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus size={16} className="mr-2" />
          Add Activity
        </button>
      </div>

      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {activities.map((activity, idx) => (
            <li key={idx}>
              <div className="relative pb-8">
                {idx !== activities.length - 1 && (
                  <span className="absolute left-3 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                )}
                <div className="relative flex items-start space-x-3">
                  <div className={`relative ${getTypeColor(activity.type)} rounded-full h-6 w-6 flex items-center justify-center ring-8 ring-white`}>
                    {getTypeIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm">
                      <div className="font-medium text-gray-900 mb-0.5">{activity.title}</div>
                      <p className="text-gray-500 text-sm">{activity.description}</p>
                    </div>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                        {activity.dateTime || activity.date}
                      </div>
                      {activity.user && (
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-xs font-medium text-gray-600">
                                {activity.user.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          </div>
                          <span className="ml-2 text-sm text-gray-500">{activity.user}</span>
                        </div>
                      )}
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(activity.status)}`}>
                        {activity.status}
                      </span>
                    </div>
                    {activity.documents && activity.documents.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {activity.documents.map((doc, docIdx) => (
                          <div
                            key={docIdx}
                            className="inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium bg-gray-50 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            <FileText size={12} className="mr-1.5" />
                            {doc}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <AddActivityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddActivity}
      />
    </div>
  );
};