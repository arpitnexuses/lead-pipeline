import React from 'react';
import { LayoutGrid, Table } from 'lucide-react';

type ViewType = 'table' | 'pipeline';

interface ViewSwitcherProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg">
      <button
        onClick={() => onViewChange('table')}
        className={`inline-flex items-center px-3.5 py-1.5 rounded ${
          currentView === 'table'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <Table size={18} className="mr-2" />
        <span className="text-base font-medium">Table</span>
      </button>
      <button
        onClick={() => onViewChange('pipeline')}
        className={`inline-flex items-center px-3.5 py-1.5 rounded ${
          currentView === 'pipeline'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <LayoutGrid size={18} className="mr-2" />
        <span className="text-base font-medium">Pipeline</span>
      </button>
    </div>
  );
}; 