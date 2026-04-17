import React, { useState } from 'react';
import { FiUsers, FiMessageSquare, FiVideo, FiPhone } from 'react-icons/fi';
import { useTimeline } from '../context/TimelineContext'; 

const iconConfig = {
  'Meetup': { icon: FiUsers, textColor: 'text-amber-600', bgColor: 'bg-amber-100' },
  'Text': { icon: FiMessageSquare, textColor: 'text-blue-500', bgColor: 'bg-blue-100' },
  'Video': { icon: FiVideo, textColor: 'text-purple-600', bgColor: 'bg-purple-100' },
  'Call': { icon: FiPhone, textColor: 'text-emerald-600', bgColor: 'bg-emerald-100' }
};

const Timeline = () => {
  const [filter, setFilter] = useState('All');
  
  const { timeline } = useTimeline();

  const filteredData = filter === 'All' 
    ? timeline 
    : timeline.filter(item => item.type === filter);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        
        
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl sm:text-[40px] font-extrabold text-[#111827] tracking-tight">
            Timeline
          </h1>
          
          
          <div className="w-full sm:w-auto">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="select select-bordered w-full sm:w-[200px] bg-white focus:outline-none focus:border-[#244D3F]"
            >
              <option value="All">Filter timeline</option>
              <option value="Meetup">Meetup</option>
              <option value="Call">Call</option>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
            </select>
          </div>
        </div>
        

        
        <div className="flex flex-col gap-3.5">
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              const IconComponent = iconConfig[item.type].icon;
              const { textColor, bgColor } = iconConfig[item.type];

              return (
                <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${bgColor}`}>
                    <IconComponent className={`w-5 h-5 ${textColor}`} />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <p className="truncate text-[15px] sm:text-[16px]">
                      <span className="font-bold text-[#1F2937]">{item.type}</span>
                      <span className="text-[#6B7280] ml-1">with {item.friend}</span>
                    </p>
                    <p className="text-[13px] sm:text-[14px] font-medium text-[#9CA3AF] mt-0.5">
                      {item.date} at {item.time}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white border border-gray-100 rounded-xl">
              <p className="text-[#6B7280]">No timeline events yet! Go to a friend's profile to log a check-in.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Timeline;