import React, { useState } from 'react';
import { ArrowRight, CalendarIcon, CheckmarkSquareIcon, DownloadIcon, FilterIcon, WarningTriangleIcon } from '../components/SVGIcons';
import Header from '../components/Header';
import HeaderLogin from '../components/HeaderAfterLogin';


// --- Mock Data ---
const mockScanHistory = [
  {
    id: 1,
    filename: "setup_installer.exe",
    scanDate: "2025-10-28 14:32",
    status: "Malicious",
    confidence: "94.7%",
    icon: WarningTriangleIcon,
    statusClass: "bg-red-400/20 text-red-400",
    iconClass: "text-red-500",
  },
  {
    id: 2,
    filename: "notepad_clone.exe",
    scanDate: "2025-10-27 09:15",
    status: "Safe",
    confidence: "98.2%",
    icon: CheckmarkSquareIcon,
    statusClass: "bg-green-400/20 text-green-400",
    iconClass: "text-green-500",
  },
  {
    id: 3,
    filename: "system_updater.exe",
    scanDate: "2025-10-25 16:45",
    status: "Malicious",
    confidence: "91.3%",
    icon: WarningTriangleIcon,
    statusClass: "bg-red-400/20 text-red-400",
    iconClass: "text-red-500",
  },
];


// --- Component Definitions ---


const ScanHistory = () => {
  // --- Filter states ---
  const [statusFilter, setStatusFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredScans, setFilteredScans] = useState(mockScanHistory);

  // --- Filter function ---
  const applyFilter = () => {
    const filtered = mockScanHistory.filter((scan) => {
      // Status filter
      if (statusFilter !== "All" && scan.status !== statusFilter) return false;

      // Start date filter
      if (startDate && new Date(scan.scanDate) < new Date(startDate)) return false;

      // End date filter
      if (endDate && new Date(scan.scanDate) > new Date(endDate)) return false;

      return true;
    });

    setFilteredScans(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        {/* Header and Actions */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white">Scan History</h1>
          </div>

          <button className="flex items-center bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-4 rounded-xl">
            <DownloadIcon className="w-5 h-5 mr-2" /> Download Overall Report
          </button>


        </div>

        {/* Filter Panel */}
        <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700 shadow-xl mb-10">
          <h3 className="flex items-center text-xl font-semibold text-white mb-6">
            <FilterIcon className="w-5 h-5 mr-2 text-cyan-400" /> Filter Scans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Status */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
              <select
                className="w-full p-2.5 appearance-none rounded-xl bg-gray-700 border border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All</option>
                <option>Malicious</option>
                <option>Safe</option>
              </select>
            </div>

            {/* Start Date */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">Start Date</label>
              {/* Updated to use a div for custom styling and icon placement */}
              <div className="relative">
                <input
                  type="text" // Use text or a custom date picker component for better styling control
                  placeholder="Pick a date"
                  className="w-full p-2.5 pr-10 rounded-xl bg-gray-700 border border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  onFocus={(e) => e.target.type = 'date'} // Optional: Change to date type on focus to open native picker
                  onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }} // Optional: Reset if empty
                />
                {/* Calendar Icon positioned absolutely inside the input field */}
                <CalendarIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* End Date */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">End Date</label>
              {/* Updated to use a div for custom styling and icon placement */}
              <div className="relative">
                <input
                  type="text" // Use text or a custom date picker component for better styling control
                  placeholder="Pick a date"
                  className="w-full p-2.5 pr-10 rounded-xl bg-gray-700 border border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  onFocus={(e) => e.target.type = 'date'} // Optional: Change to date type on focus to open native picker
                  onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }} // Optional: Reset if empty
                />
                {/* Calendar Icon positioned absolutely inside the input field */}
                <CalendarIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Apply Button */}
            <div className="col-span-1 flex items-end">
              <button
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-2.5 px-6 rounded-xl shadow-lg transition duration-150"
                onClick={applyFilter}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4 bg-gray-800 py-3 rounded-2xl border border-gray-700 shadow-xl">

          {/* Table Header Wrapper - Applies horizontal padding (px-4/px-6) to align with content */}
          <div className="px-6">
            <div className="grid grid-cols-12 text-gray-400 font-semibold text-sm border-b border-gray-700 pb-3">
              <div className="col-span-5">Filename</div>
              <div className="col-span-3">Scan Date</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>
          </div>

          {/* Table Rows (Iterating over filteredScans) */}
          {filteredScans.map((scan) => (
            <div
              key={scan.id}
              // Added px-6 to the row to create the side padding/gutter
              className="grid grid-cols-12 items-center py-3 px-6 hover:bg-gray-800/50 transition duration-150"
            >

              {/* Filename Column */}
              <div className="col-span-5 flex items-center">
                {/* Assumes scan.icon and scan.iconClass are configured */}
                <scan.icon className={`w-6 h-6 mr-3 ${scan.iconClass}`} />
                <span className="font-medium truncate text-white">{scan.filename}</span>
              </div>

              {/* Scan Date Column */}
              <div className="col-span-3 text-sm text-gray-300">{scan.scanDate}</div>

              {/* Status Column */}
             <div className="col-span-2">

                <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${scan.statusClass}`}>

                  {scan.status}

                </span>

              </div>

              {/* Actions Column */}
              <div className="col-span-2 flex justify-end">
                <button
                  title="Download Report"
                  className="text-gray-400 hover:text-cyan-400 p-1" // Added p-1 for subtle hit area
                >
                  <DownloadIcon className="w-5 h-5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function ScanHistoryComponent() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
      <HeaderLogin />
      <ScanHistory />
    </div>
  );
}