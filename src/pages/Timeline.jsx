import React, { useState } from 'react';
import { FiUsers, FiMessageSquare, FiVideo, FiPhone } from 'react-icons/fi';


const iconConfig = {
  'Meetup': { 
    icon: FiUsers, 
    textColor: 'text-amber-600', 
    bgColor: 'bg-amber-100' 
  },
  'Text': { 
    icon: FiMessageSquare, 
    textColor: 'text-blue-500', 
    bgColor: 'bg-blue-100' 
  },
  'Video': { 
    icon: FiVideo, 
    textColor: 'text-purple-600', 
    bgColor: 'bg-purple-100' 
  },
  'Call': { 
    icon: FiPhone, 
    textColor: 'text-emerald-600', 
    bgColor: 'bg-emerald-100' 
  }
};

const Timeline = () => {
  const [filter, setFilter] = useState('All');

  const timelineData = [
    { id: 1, type: "Meetup", friend: "Tom Baker", date: "March 29, 2026" },
    { id: 2, type: "Text", friend: "Sarah Chen", date: "March 28, 2026" },
    { id: 4, type: "Video", friend: "Aisha Patel", date: "March 23, 2026" },
    
  ];

  const filteredData = filter === 'All' 
    ? timelineData 
    : timelineData.filter(item => item.type === filter);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        
        
        <div className="mb-8">
          <h1 className="text-[32px] sm:text-[40px] font-extrabold text-[#111827] mb-6 tracking-tight">
            Timeline
          </h1>
          
          <div className="relative inline-block w-48">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block w-full appearance-none bg-[#F8FAFC] border border-gray-200 text-[#4B5563] text-sm py-2.5 pl-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#244D3F]/20 focus:border-[#244D3F] transition-colors cursor-pointer"
            >
              <option value="All">Filter timeline</option>
              <option value="Meetup">Meetup</option>
              <option value="Call">Call</option>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
            </select>
            
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

       
        <div className="flex flex-col gap-3.5">
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              
              const IconComponent = iconConfig[item.type].icon;
              const { textColor, bgColor } = iconConfig[item.type];

              return (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-100 rounded-xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  
                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${bgColor}`}>
                    <IconComponent className={`w-5 h-5 ${textColor}`} />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <p className="truncate text-[15px] sm:text-[16px]">
                      <span className="font-bold text-[#1F2937]">{item.type}</span>
                      <span className="text-[#6B7280] ml-1">with {item.friend}</span>
                    </p>
                    <p className="text-[13px] sm:text-[14px] font-medium text-[#9CA3AF] mt-0.5">
                      {item.date}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white border border-gray-100 rounded-xl">
              <p className="text-[#6B7280]">No timeline events found for this filter.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Timeline;