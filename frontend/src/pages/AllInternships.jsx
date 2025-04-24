import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const AllInternships = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [filter, setFilter] = useState({
    role: '',
    duration: ''
  });
  const navigate = useNavigate();



useEffect(() => {
  // Check if user is authenticated
  const checkAuth = async () => {
    try {
      // Get token from localStorage
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        // No token found, redirect to login
        navigate('/login', { state: { from: '/allinternships' } });
        return;
      }

    
      
      fetchInternships(token);
      
     
      
    } catch (err) {
      console.error('Authentication error:', err);
      localStorage.removeItem('authToken');
      navigate('/login', { state: { from: '/allinternships' } });
    }
  };

  checkAuth();
}, [navigate]);

  const fetchInternships = async (token) => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:4000/api/internships', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setInternships(response.data.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch internships');
      setLoading(false);
      console.error(err);

      // If the error is 401 (unauthorized), redirect to login
      if (err.response && err.response.status === 401) {
        localStorage.removeItem('authToken');
        navigate('/login', { state: { from: '/allinternships' } });
      }
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const filteredInternships = internships.filter(internship => {
    if (filter.role && internship.preferredRole !== filter.role) return false;
    if (filter.duration && internship.duration !== filter.duration) return false;
    return true;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">All Internship Applications</h1>
          
          {/* Filters */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Filter Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select 
                  name="role" 
                  value={filter.role} 
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <select 
                  name="duration" 
                  value={filter.duration} 
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Durations</option>
                  <option value="3 Months">3 Months</option>
                  <option value="4 Months">4 Months</option>
                </select>
              </div>

              <div className="flex items-end">
                <button 
                  onClick={() => setFilter({ role: '', duration: '' })}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}

          {/* Internships List */}
          {!loading && !error && (
            <>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Duration
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          College
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Applied On
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredInternships.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                            No internship applications found
                          </td>
                        </tr>
                      ) : (
                        filteredInternships.map((internship) => (
                          <tr key={internship._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{internship.fullName}</div>
                              <div className="text-sm text-gray-500">{internship.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                {internship.preferredRole}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {internship.duration}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {internship.college}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(internship.appliedDate)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => setSelectedInternship(internship)}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Total count */}
              <div className="mt-4 text-right text-sm text-gray-600">
                Total Applications: {filteredInternships.length}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedInternship && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-100 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Application Details</h3>
              <button 
                onClick={() => setSelectedInternship(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Basic Information</h4>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Name</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedInternship.fullName}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedInternship.email}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Mobile</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedInternship.mobile}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Location</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedInternship.location}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formatDate(selectedInternship.dob)}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Education Details</h4>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">College/University</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedInternship.college}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Degree/Course</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedInternship.degree}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Year of Study</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedInternship.year}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Available Full-Time</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedInternship.availableFullTime}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-2">Internship Details</h4>
                <dl className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Preferred Role</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedInternship.preferredRole}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Duration</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedInternship.duration}</dd>
                    </div>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Reason for Joining</dt>
                    <dd className="mt-1 text-sm text-gray-900 whitespace-pre-line">{selectedInternship.reason}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Live Projects Experience</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedInternship.liveProjects}</dd>
                  </div>
                  {selectedInternship.projectDescription && (
                   <div>
                   <dt className="text-sm font-medium text-gray-500">Project Description</dt>
                   <dd className="mt-1 text-sm text-gray-900 whitespace-pre-line">{selectedInternship.projectDescription}</dd>
                 </div>
               )}
               <div>
                 <dt className="text-sm font-medium text-gray-500">Resume Link</dt>
                 <dd className="mt-1 text-sm text-gray-900">
                   <a 
                     href={selectedInternship.resumeLink} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 hover:underline"
                   >
                     View Resume
                   </a>
                 </dd>
               </div>
             </dl>
           </div>
           
           <div className="mt-6">
             <h4 className="font-medium text-gray-900 mb-2">Agreements</h4>
             <dl className="space-y-2">
               <div>
                 <dt className="text-sm font-medium text-gray-500">Fee Agreement</dt>
                 <dd className="mt-1 text-sm text-gray-900">
                   {selectedInternship.feeAgreement ? 'Accepted' : 'Not Accepted'}
                 </dd>
               </div>
               <div>
                 <dt className="text-sm font-medium text-gray-500">Declaration</dt>
                 <dd className="mt-1 text-sm text-gray-900">
                   {selectedInternship.declaration ? 'Accepted' : 'Not Accepted'}
                 </dd>
               </div>
             </dl>
           </div>
           
           <div className="mt-6">
             <h4 className="font-medium text-gray-900 mb-2">Application Meta</h4>
             <dl className="space-y-2">
               <div>
                 <dt className="text-sm font-medium text-gray-500">Applied Date</dt>
                 <dd className="mt-1 text-sm text-gray-900">{formatDate(selectedInternship.appliedDate)}</dd>
               </div>
               <div>
                 <dt className="text-sm font-medium text-gray-500">Application ID</dt>
                 <dd className="mt-1 text-sm text-gray-900">{selectedInternship._id}</dd>
               </div>
             </dl>
           </div>
         </div>
         
         <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
           <button
             onClick={() => setSelectedInternship(null)}
             className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
           >
             Close
           </button>
         </div>
       </div>
     </div>
   )}
   
   <Footer />
 </>
);
};

export default AllInternships;