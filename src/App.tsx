import React, { useState } from 'react';
import { LeadList } from './components/LeadList';
import { LeadDetail } from './components/LeadDetail';
import { mockLeads } from './data/mockData';
import { Lead } from './types';
import { Plus, Bell, Settings, Search } from 'lucide-react';

function App() {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  
  const handleLeadSelect = (lead: Lead) => {
    setSelectedLead(lead);
  };
  
  const handleBackToList = () => {
    setSelectedLead(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 pt-4">
        <div className="max-w-[95%] mx-auto">
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
            <div className="flex items-center space-x-8">
              <img 
                src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Nexuses_logo_blue_(2)_3_721ee160-2cac-429c-af66-f55b7233f6ed.png" 
                alt="Nexuses Logo" 
                className="h-10"
              />
              <nav className="hidden md:flex space-x-4">
                <a href="#" className="px-3 py-2 text-base font-medium text-gray-900">Dashboard</a>
                <a href="#" className="px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900">Reports</a>
                <a href="#" className="px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900">Analytics</a>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <button className="flex items-center px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm hover:shadow">
                <Plus size={18} className="mr-2" />
                New Lead
              </button>
              <button className="relative p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-sm text-white">3</span>
                </span>
                <Bell size={22} />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings size={22} />
              </button>
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-base font-medium cursor-pointer hover:shadow-lg transition-shadow">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedLead ? (
          <LeadDetail lead={selectedLead} onBack={handleBackToList} />
        ) : (
          <LeadList leads={mockLeads} onSelectLead={handleLeadSelect} />
        )}
      </main>
    </div>
  );
}

export default App;