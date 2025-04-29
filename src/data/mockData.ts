import { Lead } from '../types';

export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'David Cole',
    email: 'david.cole@email.com',
    phone: '(555) 123-4567',
    mobilePhone: '(555) 987-6543',
    company: 'Acme Corporation',
    position: 'CTO',
    address: 'Bhopal, India',
    stage: 'Proposal',
    status: 'Active',
    value: 50000,
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
      'Follow up next week to discuss implementation timeline.'
    ]
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '(555) 234-5678',
    company: 'Globex Inc',
    position: 'Marketing Director',
    address: 'New York, NY',
    stage: 'Qualified',
    status: 'Open',
    value: 35000,
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
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '(555) 345-6789',
    company: 'Initech LLC',
    position: 'CEO',
    address: 'Austin, TX',
    stage: 'Negotiation',
    status: 'Active',
    value: 120000,
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
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '(555) 456-7890',
    company: 'Umbrella Corp',
    position: 'Procurement Manager',
    address: 'Seattle, WA',
    stage: 'Closed Won',
    status: 'Open',
    value: 75000,
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
    name: 'Robert Wilson',
    email: 'robert.wilson@example.com',
    phone: '(555) 567-8901',
    company: 'Massive Dynamics',
    position: 'IT Director',
    address: 'Boston, MA',
    stage: 'Prospect',
    status: 'Draft',
    value: 25000,
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
      },
      {
        type: 'email',
        title: 'Follow-up Materials',
        description: 'Sent product brochure and case studies as requested',
        date: '5 days ago',
        dateTime: '2:30 PM GMT',
        status: 'Open',
        documents: ['Brochure.pdf', 'CaseStudies.pdf']
      },
      {
        type: 'meeting',
        title: 'Solution Overview',
        description: 'Virtual meeting to present high-level solution architecture',
        date: '2 days ago',
        dateTime: '11:00 AM GMT',
        status: 'Active',
        user: 'Sarah Johnson'
      }
    ]
  }
];