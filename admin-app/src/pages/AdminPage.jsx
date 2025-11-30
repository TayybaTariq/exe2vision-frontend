import React from 'react';
import Header from '../components/Header';
import AdminDashboard from '../components/AdminDashboard';


// Main App Component (Wrapper)
export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
       <Header />
       <AdminDashboard />
    </div>
  );
}