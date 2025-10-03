'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';

interface ProjectsFilterProps {
  categories: Array<{ key: string; label: string }>;
  onFilterChange: (filter: string) => void;
  activeFilter: string;
  filterByText: string;
}

export default function ProjectsFilter({ 
  categories, 
  onFilterChange, 
  activeFilter, 
  filterByText 
}: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="flex items-center mr-6">
        <Filter size={20} className="text-slate-600 mr-2" />
        <span className="text-slate-600 font-medium">{filterByText}</span>
      </div>
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => onFilterChange(category.key)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeFilter === category.key
              ? 'bg-black text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}