import React from 'react';
import { Mail, Phone, Briefcase, MapPin, Calendar, User, File, UserCheck } from 'lucide-react';
import { Lead } from '../types';

interface ContactInfoProps {
  lead: Lead;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ lead }) => {
  const contactItems = [
    { icon: <Mail size={16} />, label: 'Email', value: lead.email },
    { icon: <Phone size={16} />, label: 'Business Phone', value: lead.phone },
    { icon: <Phone size={16} />, label: 'Mobile Phone', value: lead.mobilePhone },
    { icon: <Briefcase size={16} />, label: 'Company', value: lead.company },
    { icon: <User size={16} />, label: 'Position', value: lead.position },
    { icon: <UserCheck size={16} />, label: 'Account Owner', value: 'John Smith' },
    { icon: <Calendar size={16} />, label: 'Last Meeting', value: 'May 15, 2023' },
    { icon: <File size={16} />, label: 'Proposal Status', value: 'Draft' },
  ];

  return (
    <div className="px-6 py-4">
      <h3 className="text-sm font-medium text-gray-900 mb-4">Contact Information</h3>
      <dl className="grid grid-cols-1 gap-y-4">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center text-sm">
            <div className="flex-shrink-0 text-gray-400 mr-3">{item.icon}</div>
            <div className="min-w-0 flex-1">
              <dt className="text-xs text-gray-500">{item.label}</dt>
              <dd className="mt-1 font-medium text-gray-900 truncate">{item.value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
};