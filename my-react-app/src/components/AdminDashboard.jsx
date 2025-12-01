// import React, { useState } from "react";
// import {
//   TrashIcon,CheckCircleIcon, ShieldCheckIcon, ExclamationIcon, UserGroupIcon,WarningTriangleIcon,CheckmarkSquareIcon
// } from "./SVGIconsAdmin"; // Your icon components

// // --- Mock Data ---
// const initialMockScans = [
//   {
//     id: 1,
//     email: "user@example.com",
//     filename: "setup_installer.exe",
//     scanDate: "2025-10-28 14:32",
//     status: "Malicious",
//     confidence: "94.7%",
//     icon: WarningTriangleIcon,
//     statusClass: "bg-red-900/40 text-red-400 border border-red-700/50",
//     iconClass: "text-red-500",
//   },
//   {
//     id: 2,
//     email: "user@example.com",
//     filename: "notepad_clone.exe",
//     scanDate: "2025-10-27 09:15",
//     status: "Safe",
//     confidence: "98.2%",
//     icon: CheckmarkSquareIcon,
//     statusClass: "bg-green-900/40 text-green-400 border border-green-700/50",
//     iconClass: "text-green-500",
//   },
//   {
//     id: 3,
//     email: "admin@uet.edu.pk",
//     filename: "system_updater.exe",
//     scanDate: "2025-10-25 16:45",
//     status: "Malicious",
//     confidence: "91.3%",
//     icon: WarningTriangleIcon,
//     statusClass: "bg-red-900/40 text-red-400 border border-red-700/50",
//     iconClass: "text-red-500",
//   },
//   {
//     id: 4,
//     email: "guest@scanner.io",
//     filename: "holiday_photos.zip",
//     scanDate: "2025-10-29 11:10",
//     status: "Safe",
//     confidence: "99.9%",
//     icon: CheckmarkSquareIcon,
//     statusClass: "bg-green-900/40 text-green-400 border border-green-700/50",
//     iconClass: "text-green-500",
//   },
// ];

// const AdminDashboard = () => {
//   const [scans, setScans] = useState(initialMockScans);
//   const [selected, setSelected] = useState([]);

//   // --- Selection Handlers ---
//   const toggleSelect = (id) => {
//     if (selected.includes(id)) {
//       setSelected(selected.filter((s) => s !== id));
//     } else {
//       setSelected([...selected, id]);
//     }
//   };

//   const toggleSelectAll = () => {
//     if (selected.length === scans.length && scans.length > 0) {
//       setSelected([]);
//     } else {
//       setSelected(scans.map((scan) => scan.id));
//     }
//   };

//   // --- Delete Handlers ---
//   const deleteSelected = () => {
//     setScans(scans.filter((scan) => !selected.includes(scan.id)));
//     setSelected([]);
//   };

//   const deleteAll = () => {
//     setScans([]);
//     setSelected([]);
//   };

//   // --- Summary Counts ---
//   const totalScans = scans.length;
//   const malwareDetected = scans.filter((s) => s.status === "Malicious").length;
//   const benignFiles = scans.filter((s) => s.status === "Safe").length;
//   const activeUsers = [...new Set(scans.map((s) => s.email))].length;

//   return (
//     <div className="min-h-screen bg-gray-900 text-white font-sans pt-32 pb-10">
//       <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

//         {/* --- Admin Dashboard Header & Delete Button --- */}
//         {/* Removed border-b and unnecessary padding from the container */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//           <div className="mb-4 md:mb-0">
//             {/* Updated title styling to match the image: less bold, dark text */}
//             <h1 className="text-3xl font-semibold text-white">Admin Dashboard</h1>
//             <p className="text-gray-400 text-sm">Monitor and manage all user scans across the platform</p>
//           </div>

//           {/* Updated Delete All Records Button to match the red border/transparent style */}
//           <button
//             onClick={deleteAll}
//             className="flex items-center bg-transparent border border-red-500 hover:bg-red-500/10 text-red-500 font-medium py-1.5 px-4 rounded-xl transition duration-150"
//           >
//             {/* Using a ClockIcon to match the image's icon */}
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
//             Delete All Records
//           </button>
//         </div>

//         {/* --- Summary Cards --- */}
//         {/* Adjusted gap and bottom margin */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

//           {/* Total Scans Card */}
//           <div className="p-4 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-lg relative overflow-hidden">
//             <span className="text-gray-400 text-sm">Total Scans</span>
//             {/* Icon position changed to top right, matching the image */}
//             <ShieldCheckIcon className="w-7 h-7 absolute top-4 right-4 text-cyan-500 opacity-70" />
//             {/* Text styling updated to match image colors/size */}
//             <span className="text-cyan-400 font-bold text-3xl mt-2">{totalScans}</span>
//           </div>

//           {/* Malware Detected Card */}
//           <div className="p-4 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-lg relative overflow-hidden">
//             <span className="text-gray-400 text-sm">Malware Detected</span>
//             {/* Icon position changed to top right, matching the image */}
//             <ExclamationIcon className="w-7 h-7 absolute top-4 right-4 text-red-500 opacity-70" />
//             {/* Text styling updated to match image colors/size */}
//             <span className="text-red-400 font-bold text-3xl mt-2">{malwareDetected}</span>
//           </div>

//           {/* Benign Files Card */}
//           <div className="p-4 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-lg relative overflow-hidden">
//             <span className="text-gray-400 text-sm">Benign Files</span>
//             {/* Icon position changed to top right, matching the image */}
//             <CheckCircleIcon className="w-7 h-7 absolute top-4 right-4 text-green-500 opacity-70" />
//             {/* Text styling updated to match image colors/size */}
//             <span className="text-green-400 font-bold text-3xl mt-2">{benignFiles}</span>
//           </div>

//           {/* Active Users Card */}
//           <div className="p-4 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-lg relative overflow-hidden">
//             <span className="text-gray-400 text-sm">Active Users</span>
//             {/* Icon position changed to top right, matching the image */}
//             <UserGroupIcon className="w-7 h-7 absolute top-4 right-4 text-gray-500 opacity-70" />
//             {/* Text styling updated to match image colors/size */}
//             <span className="text-gray-300 font-bold text-3xl mt-2">{activeUsers}</span>
//           </div>

//         </div>

//         {/* Table Container */}
//         <div className="bg-gray-800 rounded-xl p-6 shadow-2xl overflow-x-auto">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 min-w-max">
//             <h2 className="text-xl font-bold mb-3 sm:mb-0">All User Scans ({totalScans})</h2>
//             {selected.length > 0 && (
//               <button
//                 onClick={deleteSelected}
//                 className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl text-white font-semibold transition-colors shadow-md"
//               >
//                 Delete Selected ({selected.length})
//               </button>
//             )}
//           </div>

//           {/* Table Content */}
//           <div className="min-w-[800px]"> {/* Ensures minimum width for mobile responsiveness */}
//             {/* Table Header */}
//             <div className="grid grid-cols-12 gap-4 text-gray-400 font-semibold text-xs md:text-sm border-b border-gray-700 pb-3 mb-3 items-center">
//               <div className="col-span-1">
//                 <input
//                   type="checkbox"
//                   checked={selected.length === scans.length && scans.length > 0}
//                   onChange={toggleSelectAll}
//                   className="w-4 h-4 rounded-md bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-500"
//                 />
//               </div>
//               <div className="col-span-2">User Email</div>
//               <div className="col-span-3">Filename</div>
//               <div className="col-span-2">Scan Date</div>
//               <div className="col-span-3 text-center">Status</div>

//               <div className="col-span-1">Actions</div>
//             </div>

//             {/* Table Rows */}
//             {scans.length > 0 ? (
//               scans.map((scan) => (
//                 <div
//                   key={scan.id}
//                   className="grid grid-cols-12 gap-4 items-center py-3 rounded-lg hover:bg-gray-700/70 transition-colors border-b border-gray-700/50 last:border-b-0"
//                 >
//                   <div className="col-span-1">
//                     <input
//                       type="checkbox"
//                       checked={selected.includes(scan.id)}
//                       onChange={() => toggleSelect(scan.id)}
//                       className="w-4 h-4 rounded-md bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-500"
//                     />
//                   </div>
//                   <div className="col-span-2 text-sm truncate">{scan.email}</div>
//                   <div className="col-span-3 flex items-center text-sm font-medium">
//                     <scan.icon className={`w-4 h-4 mr-2 ${scan.iconClass}`} />
//                     <span className="truncate">{scan.filename}</span>
//                   </div>
//                   <div className="col-span-2 text-xs text-gray-400">{scan.scanDate}</div>
//                   <div className="col-span-3 flex justify-center">
//                     <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${scan.statusClass} border`}>
//                       {scan.status}
//                     </span>
//                   </div>

//                   <div className="col-span-1">
//                     <button
//                       onClick={() => setScans(scans.filter((s) => s.id !== scan.id))}
//                       className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-700"
//                     >
//                       <TrashIcon className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="text-center py-8 text-gray-500">
//                 No scan records found. The dashboard is clean!
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* Header */}
//     </div>
//   );
// };

// export default AdminDashboard;import React, { useState } from "react";
import { useState } from "react";
import {
  TrashIcon, CheckCircleIcon, ShieldCheckIcon, ExclamationIcon, UserGroupIcon, WarningTriangleIcon, CheckmarkSquareIcon
} from "./SVGIconsAdmin";

// --- Delete Confirmation Modal Component (Add this above AdminDashboard or in its own file) ---
const DeleteConfirmationModal = ({ show, onClose, onConfirm, title, message }) => {
  if (!show) return null;

  return (
    // Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 transition-opacity">
      {/* Modal Box (Matches image_08ecdf.png styling) */}
      <div className="bg-gray-800 rounded-xl p-6 md:p-8 w-11/12 max-w-md shadow-2xl transform transition-all duration-300 scale-100 border border-gray-700">
        {/* Modal Header */}
        <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-3">{title}</h3>

        {/* Modal Body */}
        <p className="text-gray-400 mb-8">{message}</p>

        {/* Modal Footer (Buttons) */}
        <div className="flex justify-end space-x-4">
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold rounded-xl text-gray-400 bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          {/* Delete Button (Danger) */}
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-semibold rounded-xl text-white bg-red-600 hover:bg-red-500 transition-colors shadow-lg shadow-red-900/50"
          >
            {title.includes("All Records") ? "Delete All" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

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

  // --- MODAL STATE ---
  const [showModal, setShowModal] = useState(false);
  // Stores the function to execute on confirmation (e.g., deleteAll, deleteSelected, deleteSingle)
  const [confirmAction, setConfirmAction] = useState(() => () => { });
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

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

  // --- Delete Logic (called AFTER modal confirmation) ---
  const executeDeleteAll = () => {
    setScans([]);
    setSelected([]);
    setShowModal(false);
  };

  const executeDeleteSelected = () => {
    setScans(scans.filter((scan) => !selected.includes(scan.id)));
    setSelected([]);
    setShowModal(false);
  };

  const executeDeleteSingle = (id) => {
    setScans(scans.filter((scan) => scan.id !== id));
    setShowModal(false);
  }

  // --- MODAL TRIGGER FUNCTIONS ---
  const triggerDeleteAll = () => {
    const total = scans.length;
    setModalContent({
      title: "Delete All Records",
      message: `Are you sure you want to delete ALL ${total} scan record${total === 1 ? '' : 's'}? This action cannot be undone and will permanently remove all user scan data from the system.`,
    });
    setConfirmAction(() => executeDeleteAll);
    setShowModal(true);
  };

  const triggerDeleteSelected = () => {
    const count = selected.length;
    if (count === 0) return; // Should be disabled, but for safety
    setModalContent({
      title: "Delete Selected Records",
      message: `Are you sure you want to delete the ${count} selected scan record${count === 1 ? '' : 's'}? This action cannot be undone.`,
    });
    setConfirmAction(() => executeDeleteSelected);
    setShowModal(true);
  };

  const triggerDeleteSingle = (id, filename) => {
    setModalContent({
      title: "Delete Scan Record",
      message: `Are you sure you want to delete the scan record for "${filename}"? This action cannot be undone.`,
    });
    // Set the confirm action with the specific ID closure
    setConfirmAction(() => () => executeDeleteSingle(id));
    setShowModal(true);
  }

  // --- Summary Counts ---
  const totalScans = scans.length;
  const malwareDetected = scans.filter((s) => s.status === "Malicious").length;
  const benignFiles = scans.filter((s) => s.status === "Safe").length;
  const activeUsers = [...new Set(scans.map((s) => s.email))].length;

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

        {/* --- Admin Dashboard Header & Delete Button --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-semibold text-white">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">Monitor and manage all user scans across the platform</p>
          </div>

          {/* Delete All Records Button - NOW TRIGGERS MODAL */}
          <button
            onClick={triggerDeleteAll}
            disabled={totalScans === 0}
            className={`flex items-center bg-transparent border border-red-500 hover:bg-red-500/10 text-red-500 font-medium py-1.5 px-4 rounded-xl transition duration-150 ${totalScans === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Delete All Records
          </button>
        </div>

        {/* --- Summary Cards --- (Unchanged) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-lg relative overflow-hidden">
            <span className="text-gray-400 text-sm">Total Scans</span>
            <ShieldCheckIcon className="w-7 h-7 absolute top-4 right-4 text-cyan-500 opacity-70" />
            <span className="text-cyan-400 font-bold text-3xl mt-2">{totalScans}</span>
          </div>
          <div className="p-4 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-lg relative overflow-hidden">
            <span className="text-gray-400 text-sm">Malware Detected</span>
            <ExclamationIcon className="w-7 h-7 absolute top-4 right-4 text-red-500 opacity-70" />
            <span className="text-red-400 font-bold text-3xl mt-2">{malwareDetected}</span>
          </div>
          <div className="p-4 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-lg relative overflow-hidden">
            <span className="text-gray-400 text-sm">Benign Files</span>
            <CheckCircleIcon className="w-7 h-7 absolute top-4 right-4 text-green-500 opacity-70" />
            <span className="text-green-400 font-bold text-3xl mt-2">{benignFiles}</span>
          </div>
          <div className="p-4 bg-gray-800 rounded-xl flex flex-col items-start border border-gray-700 shadow-lg relative overflow-hidden">
            <span className="text-gray-400 text-sm">Active Users</span>
            <UserGroupIcon className="w-7 h-7 absolute top-4 right-4 text-gray-500 opacity-70" />
            <span className="text-gray-300 font-bold text-3xl mt-2">{activeUsers}</span>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-2xl overflow-x-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 min-w-max">
            <h2 className="text-xl font-bold mb-3 sm:mb-0">All User Scans ({totalScans})</h2>
            {selected.length > 0 && (

              <button
                onClick={triggerDeleteSelected}
                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl text-white font-semibold transition-colors shadow-md"
              >
                Delete Selected ({selected.length})
              </button>
            )}
          </div>

          {/* Table Content */}
          <div className="min-w-[800px]">
            {/* Table Header (Unchanged) */}
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
              <div className="col-span-3 text-center">Status</div>

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
                  <div className="col-span-3 flex justify-center">
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${scan.statusClass} border`}>
                      {scan.status}
                    </span>
                  </div>

                  <div className="col-span-1">
                    {/* Single Delete Button - NOW TRIGGERS MODAL */}
                    <button
                      onClick={() => triggerDeleteSingle(scan.id, scan.filename)}
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

      {/* --- MODAL RENDERING --- */}
      <DeleteConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmAction}
        title={modalContent.title}
        message={modalContent.message}
      />

    </div >
  );
};

export default AdminDashboard;
