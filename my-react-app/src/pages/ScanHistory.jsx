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
        statusClass: "bg-red-900/40 text-red-400 border-red-700",
        iconClass: "text-red-500",
    },
    {
        id: 2,
        filename: "notepad_clone.exe",
        scanDate: "2025-10-27 09:15",
        status: "Safe",
        confidence: "98.2%",
        icon: CheckmarkSquareIcon,
        statusClass: "bg-green-900/40 text-green-400 border-green-700",
        iconClass: "text-green-500",
    },
    {
        id: 3,
        filename: "system_updater.exe",
        scanDate: "2025-10-25 16:45",
        status: "Malicious",
        confidence: "91.3%",
        icon: WarningTriangleIcon,
        statusClass: "bg-red-900/40 text-red-400 border-red-700",
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
          <div className="flex space-x-3">
            <button className="flex items-center bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-4 rounded-xl">
              <DownloadIcon className="w-5 h-5 mr-2" /> Download Overall Report
            </button>
            <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-xl">
              <ArrowRight className="w-5 h-5 transform rotate-180 mr-2" /> New Scan
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700 shadow-xl mb-10">
          <h3 className="flex items-center text-xl font-semibold text-white mb-6">
            <FilterIcon className="w-5 h-5 mr-2 text-cyan-400" /> Filter Scans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Status */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
              <select
                className="w-full p-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white"
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
              <input
                type="date"
                className="w-full p-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* End Date */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">End Date</label>
              <input
                type="date"
                className="w-full p-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            {/* Apply Button */}
            <div className="col-span-1 md:col-span-2">
              <button
                className="w-full md:w-auto mt-7 md:mt-0 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-2.5 px-6 rounded-xl"
                onClick={applyFilter}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        {/* Scan Results Table */}
        <div className="space-y-4">
          {filteredScans.map((scan) => (
            <div
              key={scan.id}
              className="grid grid-cols-1 sm:grid-cols-6 gap-2 sm:gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700 items-center"
            >
              <div className="col-span-2 flex items-center">
                <scan.icon className={`w-5 h-5 mr-3 ${scan.iconClass}`} />
                <span className="font-medium truncate text-white">{scan.filename}</span>
              </div>
              <div className="col-span-1 text-sm text-gray-300">{scan.scanDate}</div>
              <div className="col-span-1">
                <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${scan.statusClass}`}>
                  {scan.status}
                </span>
              </div>
              <div className="col-span-1 text-sm text-gray-300">{scan.confidence}</div>
              <div className="col-span-1 flex justify-end sm:justify-start">
                <button title="Download Report" className="text-gray-400 hover:text-cyan-400 p-2 rounded-full">
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