import React, { useState } from "react";
import {
  WarningTriangleIcon,
  CheckmarkSquareIcon,
  TrashIcon,
} from "./SVGIcons"; // Your icon components

// --- Mock Data ---
const initialMockScans = [
  {
    id: 1,
    email: "user@example.com",
    filename: "setup_installer.exe",
    scanDate: "2025-10-28 14:32",
    status: "Malicious",
    confidence: "94.7%",
    icon: WarningTriangleIcon,
    statusClass: "bg-red-900/40 text-red-400 border border-red-700/50",
    iconClass: "text-red-500",
  },
  {
    id: 2,
    email: "user@example.com",
    filename: "notepad_clone.exe",
    scanDate: "2025-10-27 09:15",
    status: "Safe",
    confidence: "98.2%",
    icon: CheckmarkSquareIcon,
    statusClass: "bg-green-900/40 text-green-400 border border-green-700/50",
    iconClass: "text-green-500",
  },
  {
    id: 3,
    email: "admin@uet.edu.pk",
    filename: "system_updater.exe",
    scanDate: "2025-10-25 16:45",
    status: "Malicious",
    confidence: "91.3%",
    icon: WarningTriangleIcon,
    statusClass: "bg-red-900/40 text-red-400 border border-red-700/50",
    iconClass: "text-red-500",
  },
  {
    id: 4,
    email: "guest@scanner.io",
    filename: "holiday_photos.zip",
    scanDate: "2025-10-29 11:10",
    status: "Safe",
    confidence: "99.9%",
    icon: CheckmarkSquareIcon,
    statusClass: "bg-green-900/40 text-green-400 border border-green-700/50",
    iconClass: "text-green-500",
  },
];

const AdminDashboard = () => {
  const [scans, setScans] = useState(initialMockScans);
  const [selected, setSelected] = useState([]);

  // --- Selection Handlers ---
  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selected.length === scans.length && scans.length > 0) {
      setSelected([]);
    } else {
      setSelected(scans.map((scan) => scan.id));
    }
  };

  // --- Delete Handlers ---
  const deleteSelected = () => {
    setScans(scans.filter((scan) => !selected.includes(scan.id)));
    setSelected([]);
  };

  const deleteAll = () => {
    setScans([]);
    setSelected([]);
  };

  // --- Summary Counts ---
  const totalScans = scans.length;
  const malwareDetected = scans.filter((s) => s.status === "Malicious").length;
  const benignFiles = scans.filter((s) => s.status === "Safe").length;
  const activeUsers = [...new Set(scans.map((s) => s.email))].length;

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-700 pb-4">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-extrabold text-cyan-400">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">Monitor and manage all user scans across the platform</p>
          </div>
          <button
            onClick={deleteAll}
            className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-xl transition-transform transform hover:scale-105 shadow-lg shadow-red-900/50"
          >
            Delete All Records
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="p-5 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-xl">
            <span className="text-gray-400 text-sm">Total Scans</span>
            <span className="text-cyan-400 font-extrabold text-3xl mt-1">{totalScans}</span>
          </div>
          <div className="p-5 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-xl">
            <span className="text-gray-400 text-sm">Malware Detected</span>
            <span className="text-red-400 font-extrabold text-3xl mt-1">{malwareDetected}</span>
          </div>
          <div className="p-5 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-xl">
            <span className="text-gray-400 text-sm">Benign Files</span>
            <span className="text-green-400 font-extrabold text-3xl mt-1">{benignFiles}</span>
          </div>
          <div className="p-5 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-xl">
            <span className="text-gray-400 text-sm">Active Users</span>
            <span className="text-gray-300 font-extrabold text-3xl mt-1">{activeUsers}</span>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-2xl overflow-x-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 min-w-max">
            <h2 className="text-xl font-bold mb-3 sm:mb-0">All User Scans ({totalScans})</h2>
            {selected.length > 0 && (
              <button
                onClick={deleteSelected}
                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl text-white font-semibold transition-colors shadow-md"
              >
                Delete Selected ({selected.length})
              </button>
            )}
          </div>

          {/* Table Content */}
          <div className="min-w-[800px]"> {/* Ensures minimum width for mobile responsiveness */}
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 text-gray-400 font-semibold text-xs md:text-sm border-b border-gray-700 pb-3 mb-3 items-center">
              <div className="col-span-1">
                <input
                  type="checkbox"
                  checked={selected.length === scans.length && scans.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 rounded-md bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-500"
                />
              </div>
              <div className="col-span-2">User Email</div>
              <div className="col-span-3">Filename</div>
              <div className="col-span-2">Scan Date</div>
              <div className="col-span-1 text-center">Status</div>
              <div className="col-span-2">Confidence</div>
              <div className="col-span-1">Actions</div>
            </div>

            {/* Table Rows */}
            {scans.length > 0 ? (
              scans.map((scan) => (
                <div
                  key={scan.id}
                  className="grid grid-cols-12 gap-4 items-center py-3 rounded-lg hover:bg-gray-700/70 transition-colors border-b border-gray-700/50 last:border-b-0"
                >
                  <div className="col-span-1">
                    <input
                      type="checkbox"
                      checked={selected.includes(scan.id)}
                      onChange={() => toggleSelect(scan.id)}
                      className="w-4 h-4 rounded-md bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <div className="col-span-2 text-sm truncate">{scan.email}</div>
                  <div className="col-span-3 flex items-center text-sm font-medium">
                    <scan.icon className={`w-4 h-4 mr-2 ${scan.iconClass}`} />
                    <span className="truncate">{scan.filename}</span>
                  </div>
                  <div className="col-span-2 text-xs text-gray-400">{scan.scanDate}</div>
                  <div className="col-span-1 flex justify-center">
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${scan.statusClass} border`}>
                      {scan.status}
                    </span>
                  </div>
                  <div className="col-span-2 text-sm font-mono text-cyan-300">{scan.confidence}</div>
                  <div className="col-span-1">
                    <button
                      onClick={() => setScans(scans.filter((s) => s.id !== scan.id))}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-700"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No scan records found. The dashboard is clean!
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Header */}
    </div>
  );
};

export default AdminDashboard;
