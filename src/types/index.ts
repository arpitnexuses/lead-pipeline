export interface Lead {
  id: string;
  leadDate: string;
  name: string;
  fullName: string;
  month: string;
  status: string;
  dueDate: string;
  clientFollowup: string;
  pitch: string;
  meetingDate: string;
  position: string;
  email: string;
  linkedinUrl: string;
  phone: string;
  mobilePhone?: string;
  company: string;
  website: string;
  companyLinkedin: string;
  companyDetails: string;
  companySize: string;
  industry: string;
  headquarter: string;
  geoCompany: string;
  address: string;
  stage: string;
  probability?: number;
  nextTask?: string;
  country?: string;
  associatedContact?: string;
  lastActivity: {
    type: string;
    date: string;
    description: string;
  };
  activities: LeadActivity[];
  notes?: string[];
}

export interface LeadActivity {
  type: string;
  title: string;
  description: string;
  date: string;
  dateTime?: string;
  user?: string;
  status: string;
  documents?: string[];
}