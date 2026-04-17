import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { useTimeline } from "../context/TimelineContext";

const Stats = () => {
  const { timeline } = useTimeline();

  const typeCounts = timeline.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  let chartData = Object.keys(typeCounts).map((key) => ({
    name: key,
    value: typeCounts[key],
  }));

  if (chartData.length === 0) {
    chartData = [
      { name: "Text", value: 45 },
      { name: "Call", value: 35 },
      { name: "Video", value: 20 },
    ];
  }

  const COLORS = {
    Text: "#8B5CF6",
    Call: "#244D3F",
    Video: "#22C55E",
    Meetup: "#F59E0B",
  };

  const renderColorfulLegendText = (value) => {
    return (
      <span className="text-[#64748B] text-sm font-medium ml-1 mr-4">
        {value}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-[40px] font-extrabold text-[#111827] mb-8 tracking-tight">
          Friendship Analytics
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8">
            <h3 className="text-[#244D3F] font-medium text-lg mb-6">
              By Interaction Type
            </h3>

            <div className="w-full relative">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    paddingAngle={8}
                    dataKey="value"
                    cornerRadius={10}
                    stroke="none"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[entry.name] || "#CBD5E1"}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                    itemStyle={{ color: "#1F2937", fontWeight: "bold" }}
                  />
                  <Legend
                    iconType="circle"
                    formatter={renderColorfulLegendText}
                    verticalAlign="bottom"
                    height={36}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
