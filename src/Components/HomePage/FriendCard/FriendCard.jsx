import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const statusConfig = {
    "on-track": { label: "On-Track", color: "bg-emerald-900 text-white" },
    "almost due": { label: "Almost Due", color: "bg-amber-500 text-white" },
    overdue: { label: "Overdue", color: "bg-red-500 text-white" },
  };
  const statusStyle = statusConfig[friend.status] || {
    label: friend.status,
    color: "bg-gray-200 text-gray-800",
  };
  return (
    
      <Link to={`/friendsDetails/${friend.id}`}
        className="bg-white h-full rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center"
      >
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-bold text-gray-900 mb-1">{friend.name}</h3>
        <span className="text-sm font-medium text-gray-400 mb-4">
          {friend.days_since_contact}d ago
        </span>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="bg-green-50 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* status */}
        <div className="mt-auto">
          <span
            className={`text-xs font-bold px-4 py-1.5 rounded-full ${statusStyle.color}`}
          >
            {statusStyle.label}
          </span>
        </div>
      </Link>
    
  );
};

export default FriendCard;
