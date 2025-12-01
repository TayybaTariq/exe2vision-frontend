import React from 'react';

import AdminDashboard from '../components/AdminDashboard';
import Header from '../components/HeaderAdmin';


// Main App Component (Wrapper)
export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
       <Header />
       <AdminDashboard />
    </div>
  );
}