'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { Calendar, Users, Phone, Mail, MapPin, MessageSquare, RefreshCw, Edit, Trash2, Save, X } from 'lucide-react';

interface Booking {
  id: number;
  name: string;
  email: string;
  phone: string;
  tour_slug: string;
  travel_dates: string;
  group_size: number;
  special_requests: string;
  created_at: string;
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({ total: 0, thisMonth: 0, pending: 0 });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Booking>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        const bookingData = data || [];
        setBookings(bookingData);

        // Calculate stats
        const now = new Date();
        const thisMonth = bookingData.filter(booking => {
          const bookingDate = new Date(booking.created_at);
          return bookingDate.getMonth() === now.getMonth() &&
                 bookingDate.getFullYear() === now.getFullYear();
        }).length;

        setStats({
          total: bookingData.length,
          thisMonth,
          pending: bookingData.length // All are pending for now
        });
      }
    } catch (err) {
      setError('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTourName = (slug: string) => {
    return slug.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const handleEdit = (booking: Booking) => {
    setEditingId(booking.id);
    setEditForm(booking);
  };

  const handleSave = async () => {
    if (!editingId) return;
    try {
      const { error } = await supabase
        .from('bookings')
        .update(editForm)
        .eq('id', editingId);
      if (error) throw error;
      setBookings(bookings.map(b => b.id === editingId ? { ...b, ...editForm } : b));
      setEditingId(null);
      setEditForm({});
      setSuccessMessage('Booking updated successfully!');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      setError('Failed to update booking');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    try {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', id);
      if (error) throw error;
      setBookings(bookings.filter(b => b.id !== id));
    } catch (err) {
      setError('Failed to delete booking');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 font-medium">Loading bookings...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 max-w-md mx-auto">
              <div className="text-red-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Bookings</h3>
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={fetchBookings}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <RefreshCw size={18} />
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Success Message */}
        {successMessage && (
          <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-xl p-4 max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <div className="text-green-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-800 font-medium">{successMessage}</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-8 text-center">
  <h1 className="text-4xl font-bold text-gray-900 mb-2">
    Admin Dashboard
  </h1>
  <p className="text-lg text-gray-600">
    Manage and track all tour bookings
  </p>
</div>


        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">This Month</p>
                <p className="text-3xl font-bold text-gray-900">{stats.thisMonth}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Pending</p>
                <p className="text-3xl font-bold text-gray-900">{stats.pending}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Bookings</h2>
            <p className="mt-1 text-sm text-gray-600">All customer booking requests</p>
          </div>

          {bookings.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Calendar className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
              <p className="text-gray-600">Booking requests will appear here once customers start submitting forms.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {bookings.map((booking, index) => (
                <div key={booking.id} className="p-6 hover:bg-gray-50 transition-colors">
                  {editingId === booking.id ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-900">Edit Booking</h3>
                        <div className="flex gap-2">
                          <button
                            onClick={handleSave}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Save changes"
                          >
                            <Save size={16} />
                          </button>
                          <button
                            onClick={handleCancel}
                            className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            title="Cancel editing"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            value={editForm.name || ''}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            value={editForm.email || ''}
                            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            value={editForm.phone || ''}
                            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Tour Slug</label>
                          <input
                            type="text"
                            value={editForm.tour_slug || ''}
                            onChange={(e) => setEditForm({ ...editForm, tour_slug: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Travel Dates</label>
                          <input
                            type="text"
                            value={editForm.travel_dates || ''}
                            onChange={(e) => setEditForm({ ...editForm, travel_dates: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Group Size</label>
                          <input
                            type="number"
                            value={editForm.group_size || ''}
                            onChange={(e) => setEditForm({ ...editForm, group_size: parseInt(e.target.value) || undefined })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                          <textarea
                            value={editForm.special_requests || ''}
                            onChange={(e) => setEditForm({ ...editForm, special_requests: e.target.value })}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

                      {/* Customer Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {booking.name}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {booking.email}
                              </div>
                              {booking.phone && (
                                <div className="flex items-center gap-1">
                                  <Phone className="w-4 h-4" />
                                  {booking.phone}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 mb-2">
                              <button
                                onClick={() => handleEdit(booking)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Edit booking"
                              >
                                <Edit size={16} />
                              </button>
                              <button
                                onClick={() => handleDelete(booking.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete booking"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              New Booking
                            </span>
                            <p className="text-sm text-gray-500 mt-1">
                              {formatDate(booking.created_at)}
                            </p>
                          </div>
                        </div>

                        {/* Booking Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="w-4 h-4 text-orange-600" />
                              <span className="text-sm font-medium text-gray-900">Tour</span>
                            </div>
                            <p className="text-sm text-gray-700">{formatTourName(booking.tour_slug)}</p>
                          </div>

                          {booking.travel_dates && (
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Calendar className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium text-gray-900">Travel Dates</span>
                              </div>
                              <p className="text-sm text-gray-700">{booking.travel_dates}</p>
                            </div>
                          )}

                          {booking.group_size && (
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Users className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-gray-900">Group Size</span>
                              </div>
                              <p className="text-sm text-gray-700">{booking.group_size} people</p>
                            </div>
                          )}

                          {booking.special_requests && (
                            <div className="bg-gray-50 rounded-lg p-4 md:col-span-2 lg:col-span-4">
                              <div className="flex items-center gap-2 mb-2">
                                <MessageSquare className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-medium text-gray-900">Special Requests</span>
                              </div>
                              <p className="text-sm text-gray-700">{booking.special_requests}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
