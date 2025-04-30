import { Lead } from '../types';

export const mockLeads: Lead[] = [
  {
    id: '1',
    leadDate: '2024-03-15',
    name: 'David Cole',
    fullName: 'David Michael Cole',
    month: 'March 2024',
    email: 'david.cole@email.com',
    phone: '(555) 123-4567',
    mobilePhone: '(555) 987-6543',
    company: 'Acme Corporation',
    geoCompany: 'RSM Saudi',
    position: 'Chief Technology Officer',
    address: 'Riyadh, Saudi Arabia',
    stage: 'PROPOSAL / NDA',
    status: 'Active',
    dueDate: '2024-03-30',
    clientFollowup: 'Schedule follow-up meeting to discuss technical requirements',
    pitch: 'Enterprise-level digital transformation solution with focus on cloud migration and AI integration',
    meetingDate: '2024-03-20',
    linkedinUrl: 'https://linkedin.com/in/davidcole',
    website: 'https://acmecorp.com',
    companyLinkedin: 'https://linkedin.com/company/acmecorp',
    companyDetails: 'Leading technology solutions provider specializing in enterprise software and digital transformation. Founded in 2010, the company has shown consistent growth in the MENA region.',
    companySize: '1000-5000 employees',
    industry: 'Information Technology',
    headquarter: 'Riyadh, Saudi Arabia',
    probability: 75,
    lastActivity: {
      type: 'call',
      date: '2 days ago',
      description: 'Follow-up call about proposal'
    },
    activities: [
      {
        type: 'call',
        title: 'Client check-in',
        description: 'Final agreement is in review and looking good to be signed on Monday',
        date: 'Today',
        dateTime: '10:00 AM GMT',
        status: 'Open',
        user: 'John Smith'
      },
      {
        type: 'email',
        title: 'Sent Agreement Document',
        description: 'Sent out the agreement documents for the team\'s review - Mr. Shaw',
        date: 'Yesterday',
        dateTime: '2:00 PM GMT',
        status: 'Active',
        documents: ['Agreement.pdf', 'Terms.docx']
      },
      {
        type: 'meeting',
        title: 'Call Subject',
        description: "Follow-up call to discuss Team's Kickoff Project Plans",
        date: '3 days ago',
        dateTime: '11:00 AM GMT',
        status: 'Draft',
        user: 'Sarah Johnson'
      }
    ],
    notes: [
      'David expressed interest in our enterprise plan during our last call.',
      'Technical team requires detailed implementation timeline.',
      'Budget approval expected by end of month.',
      'Follow up next week to discuss implementation timeline.'
    ]
  },
  {
    id: '2',
    leadDate: '2024-03-10',
    name: 'Sarah Johnson',
    fullName: 'Sarah Elizabeth Johnson',
    month: 'March 2024',
    email: 'sarah.johnson@example.com',
    phone: '(555) 234-5678',
    company: 'Globex Inc',
    geoCompany: 'RSM UAE',
    position: 'Marketing Director',
    address: 'Dubai, UAE',
    stage: 'Warm Leads',
    status: 'Open',
    dueDate: '2024-03-25',
    clientFollowup: 'Present marketing automation proposal',
    pitch: 'Comprehensive marketing automation platform with advanced analytics and personalization features',
    meetingDate: '2024-03-18',
    linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
    website: 'https://globexinc.com',
    companyLinkedin: 'https://linkedin.com/company/globexinc',
    companyDetails: 'Global leader in digital marketing solutions and customer engagement platforms. Known for innovative approaches to market expansion.',
    companySize: '500-1000 employees',
    industry: 'Marketing and Advertising',
    headquarter: 'Dubai, UAE',
    probability: 60,
    lastActivity: {
      type: 'email',
      date: '1 day ago',
      description: 'Sent product spec sheet'
    },
    activities: [
      {
        type: 'email',
        title: 'Sent Product Information',
        description: 'Sent detailed product specifications and pricing information',
        date: 'Yesterday',
        dateTime: '3:30 PM GMT',
        status: 'Open',
        documents: ['Pricing.pdf', 'ProductDetails.pdf']
      },
      {
        type: 'call',
        title: 'Initial Discovery Call',
        description: 'Discussed current marketing challenges and potential solutions',
        date: '2 days ago',
        dateTime: '2:00 PM GMT',
        status: 'Active',
        user: 'Mike Thompson'
      },
      {
        type: 'meeting',
        title: 'Product Demo Session',
        description: 'Demonstrated key features to the marketing team',
        date: '4 days ago',
        dateTime: '11:00 AM GMT',
        status: 'Completed',
        user: 'John Smith'
      }
    ]
  },
  {
    id: '3',
    leadDate: '2024-03-08',
    name: 'Michael Brown',
    fullName: 'Michael James Brown',
    month: 'March 2024',
    email: 'michael.brown@example.com',
    phone: '(555) 345-6789',
    company: 'Initech LLC',
    geoCompany: 'RSM Kuwait',
    position: 'CEO',
    address: 'Kuwait City, Kuwait',
    stage: 'Hot Lead',
    status: 'Active',
    dueDate: '2024-03-22',
    clientFollowup: 'Executive team presentation scheduled',
    pitch: 'End-to-end business process automation solution with custom integration capabilities',
    meetingDate: '2024-03-16',
    linkedinUrl: 'https://linkedin.com/in/michaelbrown',
    website: 'https://initechllc.com',
    companyLinkedin: 'https://linkedin.com/company/initechllc',
    companyDetails: 'Leading business solutions provider in Kuwait, specializing in enterprise software and digital transformation services.',
    companySize: '200-500 employees',
    industry: 'Business Services',
    headquarter: 'Kuwait City, Kuwait',
    probability: 85,
    lastActivity: {
      type: 'meeting',
      date: '3 days ago',
      description: 'Demo and price negotiation'
    },
    activities: [
      {
        type: 'meeting',
        title: 'Product Demo',
        description: 'Conducted a comprehensive product demo with the executive team',
        date: '3 days ago',
        dateTime: '2:00 PM GMT',
        status: 'Active'
      },
      {
        type: 'email',
        title: 'Proposal Revision',
        description: 'Sent updated pricing proposal based on meeting feedback',
        date: '2 days ago',
        dateTime: '4:30 PM GMT',
        status: 'Open',
        documents: ['RevisedProposal.pdf']
      },
      {
        type: 'call',
        title: 'Budget Discussion',
        description: 'Call with CFO to discuss budget allocation and payment terms',
        date: 'Yesterday',
        dateTime: '1:00 PM GMT',
        status: 'Active',
        user: 'Sarah Johnson'
      }
    ]
  },
  {
    id: '4',
    leadDate: '2024-03-12',
    name: 'Emily Davis',
    fullName: 'Emily Rose Davis',
    month: 'March 2024',
    email: 'emily.davis@example.com',
    phone: '(555) 456-7890',
    company: 'Umbrella Corp',
    geoCompany: 'RSM Qatar',
    position: 'Procurement Manager',
    address: 'Doha, Qatar',
    stage: 'Meeting Done',
    status: 'Open',
    dueDate: '2024-03-28',
    clientFollowup: 'Send revised proposal with updated pricing',
    pitch: 'Streamlined procurement management system with AI-powered vendor optimization',
    meetingDate: '2024-03-14',
    linkedinUrl: 'https://linkedin.com/in/emilydavis',
    website: 'https://umbrellacorp.com',
    companyLinkedin: 'https://linkedin.com/company/umbrellacorp',
    companyDetails: 'Major player in Qatar\'s industrial sector, focusing on innovative procurement solutions and supply chain optimization.',
    companySize: '1000-2000 employees',
    industry: 'Industrial Manufacturing',
    headquarter: 'Doha, Qatar',
    probability: 90,
    lastActivity: {
      type: 'email',
      date: '5 days ago',
      description: 'Contract signed and returned'
    },
    activities: [
      {
        type: 'email',
        title: 'Contract Finalization',
        description: 'Received signed contract and payment details',
        date: '5 days ago',
        dateTime: '11:15 AM GMT',
        status: 'Open',
        documents: ['SignedContract.pdf']
      },
      {
        type: 'meeting',
        title: 'Implementation Kickoff',
        description: 'Initial meeting with technical team to plan implementation',
        date: '3 days ago',
        dateTime: '10:00 AM GMT',
        status: 'Active',
        user: 'John Smith'
      },
      {
        type: 'call',
        title: 'Technical Requirements',
        description: 'Detailed discussion about system requirements and integration points',
        date: 'Yesterday',
        dateTime: '3:00 PM GMT',
        status: 'Open',
        user: 'Mike Thompson'
      }
    ]
  },
  {
    id: '5',
    leadDate: '2024-03-14',
    name: 'Robert Wilson',
    fullName: 'Robert Alan Wilson',
    month: 'March 2024',
    email: 'robert.wilson@example.com',
    phone: '(555) 567-8901',
    company: 'Massive Dynamics',
    geoCompany: 'RSM Saudi',
    position: 'IT Director',
    address: 'Jeddah, Saudi Arabia',
    stage: 'Hot Lead',
    status: 'Draft',
    dueDate: '2024-03-31',
    clientFollowup: 'Initial requirements gathering meeting',
    pitch: 'IT infrastructure modernization with focus on security and scalability',
    meetingDate: '2024-03-21',
    linkedinUrl: 'https://linkedin.com/in/robertwilson',
    website: 'https://massivedynamics.com',
    companyLinkedin: 'https://linkedin.com/company/massivedynamics',
    companyDetails: 'Technology innovator in Saudi Arabia, specializing in IT infrastructure and cybersecurity solutions.',
    companySize: '500-1000 employees',
    industry: 'Information Technology',
    headquarter: 'Jeddah, Saudi Arabia',
    probability: 30,
    lastActivity: {
      type: 'call',
      date: '1 week ago',
      description: 'Initial discovery call'
    },
    activities: [
      {
        type: 'call',
        title: 'Initial Contact',
        description: 'First discovery call to understand requirements and pain points',
        date: '1 week ago',
        dateTime: '10:30 AM GMT',
        status: 'Draft'
      }
    ]
  },
  {
    id: '6',
    leadDate: '2024-03-13',
    name: 'Ahmed Al-Sayed',
    fullName: 'Ahmed Mohammed Al-Sayed',
    month: 'March 2024',
    email: 'ahmed.alsayed@example.com',
    phone: '(555) 678-9012',
    company: 'Tech Oasis',
    geoCompany: 'RSM UAE',
    position: 'Operations Director',
    address: 'Abu Dhabi, UAE',
    stage: 'Meeting scheduled',
    status: 'Active',
    dueDate: '2024-03-29',
    clientFollowup: 'Prepare detailed technical presentation',
    pitch: 'Operations optimization platform with real-time analytics and reporting',
    meetingDate: '2024-03-19',
    linkedinUrl: 'https://linkedin.com/in/ahmedalsayed',
    website: 'https://techoasis.ae',
    companyLinkedin: 'https://linkedin.com/company/techoasis',
    companyDetails: 'Leading technology solutions provider in UAE, focusing on operational excellence and digital innovation.',
    companySize: '200-500 employees',
    industry: 'Technology Services',
    headquarter: 'Abu Dhabi, UAE',
    probability: 70,
    lastActivity: {
      type: 'email',
      date: '1 day ago',
      description: 'Scheduled demo meeting'
    },
    activities: [
      {
        type: 'email',
        title: 'Demo Meeting Setup',
        description: 'Confirmed demo meeting with the operations team',
        date: '1 day ago',
        dateTime: '2:00 PM GMT',
        status: 'Open'
      }
    ]
  },
  {
    id: '7',
    leadDate: '2024-03-11',
    name: 'Fatima Al-Kuwari',
    fullName: 'Fatima Hassan Al-Kuwari',
    month: 'March 2024',
    email: 'fatima.alkuwari@example.com',
    phone: '(555) 789-0123',
    company: 'Digital Solutions Co',
    geoCompany: 'RSM Qatar',
    position: 'Innovation Lead',
    address: 'Doha, Qatar',
    stage: 'Meeting Reschedule',
    status: 'Active',
    dueDate: '2024-03-27',
    clientFollowup: 'Reschedule product presentation',
    pitch: 'Digital innovation platform with emerging technology integration',
    meetingDate: '2024-03-23',
    linkedinUrl: 'https://linkedin.com/in/fatimakuwari',
    website: 'https://digitalsolutions.qa',
    companyLinkedin: 'https://linkedin.com/company/digitalsolutions',
    companyDetails: 'Qatar\'s premier digital solutions provider, specializing in innovative technology solutions and digital transformation.',
    companySize: '100-200 employees',
    industry: 'Technology',
    headquarter: 'Doha, Qatar',
    probability: 65,
    lastActivity: {
      type: 'call',
      date: '2 days ago',
      description: 'Rescheduled product presentation'
    },
    activities: [
      {
        type: 'call',
        title: 'Meeting Rescheduling',
        description: 'Rescheduled the product presentation due to client request',
        date: '2 days ago',
        dateTime: '11:00 AM GMT',
        status: 'Open'
      }
    ]
  },
  {
    id: '8',
    leadDate: '2024-03-09',
    name: 'Mohammed Al-Rashid',
    fullName: 'Mohammed Abdullah Al-Rashid',
    month: 'March 2024',
    email: 'mohammed.alrashid@example.com',
    phone: '(555) 890-1234',
    company: 'Future Group',
    geoCompany: 'RSM Kuwait',
    position: 'Technical Director',
    address: 'Kuwait City, Kuwait',
    stage: 'Client Rejected',
    status: 'Closed',
    dueDate: '2024-03-24',
    clientFollowup: 'Close and document feedback',
    pitch: 'Enterprise software solution with custom development options',
    meetingDate: '2024-03-15',
    linkedinUrl: 'https://linkedin.com/in/mohammedalrashid',
    website: 'https://futuregroup.kw',
    companyLinkedin: 'https://linkedin.com/company/futuregroup',
    companyDetails: 'Kuwait-based technology group focusing on enterprise software solutions and digital services.',
    companySize: '200-500 employees',
    industry: 'Information Technology',
    headquarter: 'Kuwait City, Kuwait',
    probability: 0,
    lastActivity: {
      type: 'email',
      date: '3 days ago',
      description: 'Received rejection notification'
    },
    activities: [
      {
        type: 'email',
        title: 'Proposal Rejection',
        description: 'Client decided to go with another solution',
        date: '3 days ago',
        dateTime: '4:00 PM GMT',
        status: 'Closed'
      }
    ]
  },
  {
    id: '9',
    leadDate: '2024-03-07',
    name: 'Abdullah Al-Hamad',
    fullName: 'Abdullah Khalid Al-Hamad',
    month: 'March 2024',
    email: 'abdullah.alhamad@example.com',
    phone: '(555) 901-2345',
    company: 'Smart Systems',
    geoCompany: 'RSM Saudi',
    position: 'CEO',
    address: 'Dammam, Saudi Arabia',
    stage: 'Warm Leads',
    status: 'Closed',
    dueDate: '2024-03-20',
    clientFollowup: 'Document loss reasons and maintain relationship',
    pitch: 'Smart city solutions with IoT integration',
    meetingDate: '2024-03-13',
    linkedinUrl: 'https://linkedin.com/in/abdullahalhamad',
    website: 'https://smartsystems.sa',
    companyLinkedin: 'https://linkedin.com/company/smartsystems',
    companyDetails: 'Saudi Arabian smart systems provider specializing in IoT and smart city solutions.',
    companySize: '100-200 employees',
    industry: 'Smart Technologies',
    headquarter: 'Dammam, Saudi Arabia',
    probability: 0,
    lastActivity: {
      type: 'meeting',
      date: '4 days ago',
      description: 'Final meeting - deal not proceeding'
    },
    activities: [
      {
        type: 'meeting',
        title: 'Final Discussion',
        description: 'Met to discuss final concerns, but could not reach agreement',
        date: '4 days ago',
        dateTime: '1:00 PM GMT',
        status: 'Closed'
      }
    ]
  },
  {
    id: '10',
    leadDate: '2024-03-06',
    name: 'Noura Al-Kaabi',
    fullName: 'Noura Ahmed Al-Kaabi',
    month: 'March 2024',
    email: 'noura.alkaabi@example.com',
    phone: '(555) 012-3456',
    company: 'Innovation Hub',
    geoCompany: 'RSM UAE',
    position: 'Strategy Director',
    address: 'Sharjah, UAE',
    stage: 'PROPOSAL / NDA',
    status: 'Active',
    dueDate: '2024-03-26',
    clientFollowup: 'Review and finalize proposal',
    pitch: 'Innovation management platform with collaboration features',
    meetingDate: '2024-03-17',
    linkedinUrl: 'https://linkedin.com/in/nouraalkaabi',
    website: 'https://innovationhub.ae',
    companyLinkedin: 'https://linkedin.com/company/innovationhub',
    companyDetails: 'UAE\'s leading innovation management company, providing cutting-edge solutions for enterprise collaboration.',
    companySize: '50-100 employees',
    industry: 'Technology Innovation',
    headquarter: 'Sharjah, UAE',
    probability: 80,
    lastActivity: {
      type: 'email',
      date: 'Today',
      description: 'Sent revised proposal'
    },
    activities: [
      {
        type: 'email',
        title: 'Proposal Revision',
        description: 'Sent updated proposal based on client feedback',
        date: 'Today',
        dateTime: '9:00 AM GMT',
        status: 'Open',
        documents: ['RevisedProposal.pdf']
      }
    ]
  }
];