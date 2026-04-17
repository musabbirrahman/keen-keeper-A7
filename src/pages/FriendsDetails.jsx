import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import {
  FiArrowLeft,
  FiBell,
  FiArchive,
  FiTrash2,
  FiPhone,
  FiMessageSquare,
  FiVideo,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";
import { useTimeline } from "../context/TimelineContext";

import { toast } from "react-toastify";

const FriendsDetails = () => {
  const allFriends = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const { timeline, logActivity } = useTimeline();

  const friend = allFriends.find((f) => f.id.toString() === id);

  if (!friend) return <div>Friend not found</div>;

  const handleCheckIn = (type) => {
    logActivity(type, friend.name);

    toast.success(`Logged: ${type} with ${friend.name}`);
  };

  const statusConfig = {
    "on-track": { label: "On-Track", color: "bg-[#244D3F] text-white" },
    "almost due": { label: "Almost Due", color: "bg-amber-500 text-white" },
    overdue: { label: "Overdue", color: "bg-[#EF4444] text-white" },
  };

  const statusStyle = statusConfig[friend.status] || {
    label: friend.status,
    color: "bg-gray-200 text-gray-800",
  };

  const formattedDate = new Date(friend.next_due_date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-6 font-sans relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center text-gray-500 hover:text-[#244D3F] transition-colors mb-6 font-medium text-sm"
        >
          <FiArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />{" "}
          Back to all friends
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-sm"
              />
              <h1 className="text-xl font-bold text-[#1F2937] mb-3">
                {friend.name}
              </h1>
              <div className="flex flex-col gap-2 mb-6 items-center">
                <span
                  className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase tracking-wide ${statusStyle.color}`}
                >
                  {statusStyle.label}
                </span>
                {friend.tags && friend.tags.length > 0 && (
                  <span className="bg-[#E8F7ED] text-[#24824D] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {friend.tags[0]}
                  </span>
                )}
              </div>
              <p className="italic text-[#64748B] text-sm mb-2">
                "{friend.bio}"
              </p>
              <p className="text-[#94A3B8] text-xs">Preferred: email</p>
            </div>

            <button className="w-full bg-white border border-gray-100 rounded-xl py-3.5 flex items-center justify-center gap-2 font-medium text-[#475569] shadow-sm hover:bg-gray-50 transition-colors">
              <FiBell className="w-4 h-4" /> Snooze 2 Weeks
            </button>
            <button className="w-full bg-white border border-gray-100 rounded-xl py-3.5 flex items-center justify-center gap-2 font-medium text-[#475569] shadow-sm hover:bg-gray-50 transition-colors">
              <FiArchive className="w-4 h-4" /> Archive
            </button>
            <button className="w-full bg-white border border-gray-100 rounded-xl py-3.5 flex items-center justify-center gap-2 font-medium text-[#EF4444] shadow-sm hover:bg-red-50 transition-colors">
              <FiTrash2 className="w-4 h-4" /> Delete
            </button>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-bold text-[#244D3F] mb-1">
                  {friend.days_since_contact}
                </h2>
                <p className="text-xs font-medium text-[#64748B]">
                  Days Since Contact
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-bold text-[#244D3F] mb-1">
                  {friend.goal}
                </h2>
                <p className="text-xs font-medium text-[#64748B]">
                  Goal (Days)
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold text-[#244D3F] mb-1">
                  {formattedDate}
                </h2>
                <p className="text-xs font-medium text-[#64748B]">Next Due</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#244D3F] font-semibold text-lg">
                  Relationship Goal
                </h3>
                <button className="px-4 py-1.5 bg-[#F8FAFC] border border-gray-200 rounded-lg text-xs font-semibold text-[#475569] hover:bg-gray-100 transition-colors">
                  Edit
                </button>
              </div>
              <p className="text-[#475569]">
                Connect every{" "}
                <span className="font-bold text-[#1F2937]">
                  {friend.goal} days
                </span>
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="text-[#244D3F] font-semibold text-lg mb-6">
                Quick Check-In
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <button
                  onClick={() => handleCheckIn("Call")}
                  className="flex flex-col items-center justify-center p-4 bg-[#F8FAFC] border border-gray-100 rounded-xl hover:bg-[#E8F7ED] hover:text-[#244D3F] transition-all gap-3 group"
                >
                  <FiPhone className="w-5 h-5 text-[#334155] group-hover:text-[#244D3F]" />
                  <span className="text-sm font-medium">Call</span>
                </button>
                <button
                  onClick={() => handleCheckIn("Text")}
                  className="flex flex-col items-center justify-center p-4 bg-[#F8FAFC] border border-gray-100 rounded-xl hover:bg-[#E8F7ED] hover:text-[#244D3F] transition-all gap-3 group"
                >
                  <FiMessageSquare className="w-5 h-5 text-[#334155] group-hover:text-[#244D3F]" />
                  <span className="text-sm font-medium">Text</span>
                </button>
                <button
                  onClick={() => handleCheckIn("Video")}
                  className="flex flex-col items-center justify-center p-4 bg-[#F8FAFC] border border-gray-100 rounded-xl hover:bg-[#E8F7ED] hover:text-[#244D3F] transition-all gap-3 group"
                >
                  <FiVideo className="w-5 h-5 text-[#334155] group-hover:text-[#244D3F]" />
                  <span className="text-sm font-medium">Video</span>
                </button>
                <button
                  onClick={() => handleCheckIn("Meetup")}
                  className="flex flex-col items-center justify-center p-4 bg-[#F8FAFC] border border-gray-100 rounded-xl hover:bg-[#E8F7ED] hover:text-[#244D3F] transition-all gap-3 group"
                >
                  <FiUsers className="w-5 h-5 text-[#334155] group-hover:text-[#244D3F]" />
                  <span className="text-sm font-medium">Meetup</span>
                </button>
              </div>
            </div>

            {timeline.filter((entry) => entry.friend === friend.name).length >
              0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-[#244D3F] font-semibold text-lg mb-6">
                  Recent Activity
                </h3>
                <div className="flex flex-col gap-4">
                  {timeline
                    .filter((entry) => entry.friend === friend.name)
                    .map((entry) => (
                      <div
                        key={entry.id}
                        className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
                      >
                        <div className="p-2 bg-white rounded-full shadow-sm mt-1 border border-slate-200">
                          <FiCheckCircle className="w-4 h-4 text-[#244D3F]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#1F2937]">
                            {entry.type} logged
                          </p>
                          <p className="text-sm text-[#64748B] mt-1">
                            {entry.date} at {entry.time}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
