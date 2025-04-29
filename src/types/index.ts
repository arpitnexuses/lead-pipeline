export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  mobilePhone?: string;
  company: string;
  position: string;
  address: string;
  stage: string;
  status: string;
  value: number;
  probability?: number;
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