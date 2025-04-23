import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../components/AdminLayout'; // Create this component for admin layout

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    status: '',
    preferredRole: '',
    search: ''
  });
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [updateStatus, setUpdateStatus] = useState('');
  const [adminNotes, setAdminNotes] = useState('');

  const fetchApplications = async () => {
    setLoading(true);
    try {
      let queryParams = `?page=${currentPage}&limit=10`;
      if (filters.status) queryParams += `&status=${filters.status}`;
      if (filters.preferredRole) queryParams += `&preferredRole=${filters.preferredRole}`;
      if (filters.search) queryParams += `&search=${filters.search}`;
      
      const response = await axios.get(`/api/internship-applications${queryParams}`);
      
      if (response.data.success) {
        setApplications(response.data.data);
        setTotalPages(response.data.pagination.totalPages);
      } else {
        setError('Failed to fetch applications');
      }
    } catch (err) {
      setError(err.message || 'Error fetching applications');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [currentPage, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const viewApplicationDetails = async (id) => {
    try {
      const response = await axios.get(`/api/internship-applications/${id}`);
      if (response.data.success) {
        setSelectedApplication(response.data.data);
        setUpdateStatus(response.data.data.status);
        setAdminNotes(response.data.data.adminNotes || '');
      }
    } catch (err) {
      console.error('Error fetching application details:', err);
    }
  };

  const handleStatusUpdate = async () => {
    try {
      const response = await axios.patch(
        `/api/internship-applications/${selectedApplication._id}/status`,
        { status: updateStatus, adminNotes }
      );
      
      if (response.data.success) {
        // Update the application in the list
        setApplications(applications.map(app => 
          app._id === selectedApplication._id ? response.data.data : app
        ));
        
        // Update the selected application
        setSelectedApplication(response.data.data);
        
        alert('Status updated successfully');
      }
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update status');
    }
  };

  const closeModal = () => {
    setSelectedApplication(null);
    setUpdateStatus('');
    setAdminNotes('');
  };

  // Status color mapping
  const getStatusColor = (status) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      review: 'bg-purple-100 text-purple-800',
      shortlisted: 'bg-green-100 text-green-800',
      interview: 'bg-yellow-100 text-yellow-800',
      selected: 'bg-emerald-100 text-emerald-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Internship Applications</h1>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">All Statuses</option>
                <option value="new">New</option>
                <option value="review">Review</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="interview">Interview</option>
                <option value="selected">Selected</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select
                name="preferredRole"
                value={filters.preferredRole}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">All Roles</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="QA Tester">QA Tester</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search by name or email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        
        {/* Applications Table */}
        {loading ? (
          <div className="text-center py-10">
            <div className="spinner"></div>
            <p className="mt-2">Loading applications...</p>
          </div>
        ) : error ? (
          <div className="bg-red-100 text-red-800 p-4 rounded-lg">
            Error: {error}
          </div>
        ) : applications.length === 0 ? (
          <div className="bg-gray-50 text-center py-10 rounded-lg">
            No applications found matching your filters.
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Applied
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((application) => (
                  <tr key={application._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{application.fullName}</div>
                      <div className="text-sm text-gray-500">{application.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {application.preferredRole}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {application.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(application.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(application.status)}`}>
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => viewApplicationDetails(application._id)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Pagination */}
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`${
                    currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'
                  } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={`${
                    currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'
                  } ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md`}
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                <p className="text-sm text-gray-700">
                    Showing page <span className="font-medium">{currentPage}</span> of{' '}
                    <span className="font-medium">{totalPages}</span>
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className={`${
                        currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-500 hover:bg-gray-50'
                      } relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium`}
                    >
                      &laquo; Previous
                    </button>
                    
                    {/* Page number buttons - show max 5 pages */}
                    {[...Array(Math.min(5, totalPages))].map((_, idx) => {
                      // Calculate page number to show based on current page
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = idx + 1;
                      } else if (currentPage <= 3) {
                        pageNum = idx + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + idx;
                      } else {
                        pageNum = currentPage - 2 + idx;
                      }
                      
                      return (
                        <button
                          key={idx}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`${
                            currentPage === pageNum
                              ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                              : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                          } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className={`${
                        currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-500 hover:bg-gray-50'
                      } relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium`}
                    >
                      Next &raquo;
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Application Details Modal */}
        {selectedApplication && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              {/* Background overlay */}
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              
              {/* Modal content */}
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Application Details
                        </h3>
                        <button
                          onClick={closeModal}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Close</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Personal Information */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Personal Information</h4>
                          <div className="space-y-2">
                            <p><span className="text-gray-600">Name:</span> {selectedApplication.fullName}</p>
                            <p><span className="text-gray-600">Email:</span> {selectedApplication.email}</p>
                            <p><span className="text-gray-600">Mobile:</span> {selectedApplication.mobile}</p>
                            <p><span className="text-gray-600">Location:</span> {selectedApplication.location}</p>
                            <p><span className="text-gray-600">Date of Birth:</span> {new Date(selectedApplication.dob).toLocaleDateString()}</p>
                          </div>
                        </div>
                        
                        {/* Education Details */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Education Details</h4>
                          <div className="space-y-2">
                            <p><span className="text-gray-600">College/University:</span> {selectedApplication.college}</p>
                            <p><span className="text-gray-600">Degree/Course:</span> {selectedApplication.degree}</p>
                            <p><span className="text-gray-600">Year:</span> {selectedApplication.year}</p>
                            <p><span className="text-gray-600">Available Full-Time:</span> {selectedApplication.availableFullTime}</p>
                          </div>
                        </div>
                        
                        {/* Internship Preferences */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Internship Preferences</h4>
                          <div className="space-y-2">
                            <p><span className="text-gray-600">Preferred Role:</span> {selectedApplication.preferredRole}</p>
                            <p><span className="text-gray-600">Duration:</span> {selectedApplication.duration}</p>
                            <p><span className="text-gray-600">Prior Experience:</span> {selectedApplication.liveProjects}</p>
                            <p><span className="text-gray-600">Resume:</span> <a href={selectedApplication.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Resume</a></p>
                          </div>
                        </div>
                        
                        {/* Application Details */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Application Details</h4>
                          <div className="space-y-2">
                            <p><span className="text-gray-600">Submitted:</span> {new Date(selectedApplication.submittedAt).toLocaleString()}</p>
                            <p><span className="text-gray-600">Status:</span> <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedApplication.status)}`}>{selectedApplication.status}</span></p>
                            <p><span className="text-gray-600">Agreed to Fee Terms:</span> {selectedApplication.feeAgreement ? 'Yes' : 'No'}</p>
                            <p><span className="text-gray-600">Signed Declaration:</span> {selectedApplication.declaration ? 'Yes' : 'No'}</p>
                          </div>
                        </div>
                        
                        {/* Reason for Applying */}
                        <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                          <h4 className="font-semibold mb-2">Why They Want to Join</h4>
                          <p className="text-gray-700">{selectedApplication.reason}</p>
                        </div>
                        
                        {/* Project Experience */}
                        {selectedApplication.liveProjects === 'Yes' && selectedApplication.projectDescription && (
                          <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                            <h4 className="font-semibold mb-2">Previous Project Experience</h4>
                            <p className="text-gray-700">{selectedApplication.projectDescription}</p>
                          </div>
                        )}
                        
                        {/* Admin Update Section */}
                        <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                          <h4 className="font-semibold mb-3">Update Application Status</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="md:col-span-1">
                              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                              <select
                                value={updateStatus}
                                onChange={(e) => setUpdateStatus(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              >
                                <option value="new">New</option>
                                <option value="review">Review</option>
                                <option value="shortlisted">Shortlisted</option>
                                <option value="interview">Interview</option>
                                <option value="selected">Selected</option>
                                <option value="rejected">Rejected</option>
                              </select>
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-1">Admin Notes</label>
                              <textarea
                                value={adminNotes}
                                onChange={(e) => setAdminNotes(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                rows="3"
                                placeholder="Add notes about this application"
                              ></textarea>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <button
                              onClick={handleStatusUpdate}
                              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            >
                              Update Status
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminApplications;