import React, { useState } from 'react';
import { CalendarIcon, CheckmarkSquareIcon, DownloadIcon, FilterIcon, WarningTriangleIcon } from '../components/SVGIcons';
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

// --- ScanHistory Component ---
const ScanHistory = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredScans, setFilteredScans] = useState(mockScanHistory);

  const applyFilter = () => {
    const filtered = mockScanHistory.filter((scan) => {
      if (statusFilter !== "All" && scan.status !== statusFilter) return false;
      if (startDate && new Date(scan.scanDate) < new Date(startDate)) return false;
      if (endDate && new Date(scan.scanDate) > new Date(endDate)) return false;
      return true;
    });
    setFilteredScans(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-white truncate">Scan History</h1>
          <button className="flex w-full sm:w-auto items-center justify-center md:justify-start bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-3 sm:px-4 rounded-xl text-sm sm:text-base">
            <DownloadIcon className="w-5 h-5 mr-2" /> Download Overall Report
          </button>
        </div>

        {/* Filter Panel */}
        <div className="p-4 sm:p-6 bg-gray-800 rounded-2xl border border-gray-700 shadow-xl mb-8">
          <h3 className="flex items-center text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
            <FilterIcon className="w-5 h-5 mr-2 text-cyan-400" /> Filter Scans
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-end">
            {/* Status */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">Status</label>
              <select
                className="w-full p-2 rounded-xl bg-gray-700 border border-gray-600 text-white text-sm focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All</option>
                <option>Malicious</option>
                <option>Safe</option>
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">Start Date</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pick a date"
                  className="w-full p-2 pr-8 rounded-xl bg-gray-700 border border-gray-600 text-white text-sm focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }}
                />
                <CalendarIcon className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* End Date */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">End Date</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pick a date"
                  className="w-full p-2 pr-8 rounded-xl bg-gray-700 border border-gray-600 text-white text-sm focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }}
                />
                <CalendarIcon className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Apply Button */}
            <div className="flex items-end">
              <button
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-2 px-4 rounded-xl shadow-lg transition duration-150 text-sm sm:text-base"
                onClick={applyFilter}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-gray-700 shadow-xl bg-gray-800">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="text-gray-400 font-semibold">
                <th className="px-3 sm:px-6 py-2 text-left">Filename</th>
                <th className="px-3 sm:px-6 py-2 text-left hidden sm:table-cell">Scan Date</th>
                <th className="hidden md:table-cell px-3 sm:px-6 py-2 text-left">Status</th>
                <th className="px-3 sm:px-6 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredScans.map((scan) => (
                <tr key={scan.id} className="hover:bg-gray-700/40 transition duration-150">
                  <td className="px-3 sm:px-6 py-2 flex items-center space-x-2 sm:space-x-3">
                    <scan.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${scan.iconClass}`} />
                    <span className="truncate">{scan.filename}</span>
                  </td>
                  <td className="px-3 sm:px-6 py-2 text-gray-300 hidden sm:table-cell">{scan.scanDate}</td>
                  <td className="hidden md:table-cell px-3 sm:px-6 py-2">
                    <span className={`inline-flex items-center px-2 py-1 text-xs sm:text-sm font-semibold rounded-full ${scan.statusClass}`}>
                      {scan.status}
                    </span>
                  </td>

                  <td className="px-3 sm:px-6 py-2 text-right">
                    <button title="Download Report" className="text-gray-400 hover:text-cyan-400 p-1">
                      <DownloadIcon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

