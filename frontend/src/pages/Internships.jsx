import React, { useState } from 'react';
import Header from '../pages/components/Header'
import Footer from '../pages/components/Footer'
import TeamStrucutre from '../pages/components/TeamStructure'
import onemonth from '../assets/onemonth.png';
import threemonth from '../assets/threemonths.png';
import fourmonth from '../assets/fourmonths.png';

const Internships = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // in Internships.jsx, update the handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    // Set default status as "new" for all applications
    const applicationData = {
      ...formData,
      status: "new",
      submittedAt: new Date()
    };
    
    const response = await axios.post('/api/internship-applications', applicationData);
    
    if (response.data.success) {
      // Show success message
      alert('Application submitted successfully!');
      // Reset form
      setFormData({});
      e.target.reset();
    } else {
      alert('Error submitting application. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting application:', error);
    alert('Error submitting application. Please try again.');
  }
};

  return (
    <>
    
    <Header />

    {/* Banner with images  */}
    <div>
    <div className="bg-white py-8 px-4">
  <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
    {[onemonth, threemonth, fourmonth].map((img, index) => (
      <div key={index} className="w-[200px] h-[120px] rounded-lg shadow-lg overflow-hidden bg-white">
        <img src={img} alt={`Banner ${index + 1}`} className="w-full h-full object-contain" />
      </div>
    ))}
  </div>
</div>




    </div>
    
    <div className="min-h-screen bg-dark-blue text-white py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white text-[#0f172a] rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Live Project Internship  (3-4 Months)</h1>
        <p className="text-center mb-8">Learn. Build. Launch – with a Real B2B ERP Product.</p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Basic Info */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">👤 Basic Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="fullName" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange} />
              <input type="text" name="mobile" placeholder="Mobile Number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange} />
              <input type="text" name="location" placeholder="Location (City & State)" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange} />
              <input type="date" name="dob" placeholder="Date of Birth" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange} />
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">🎓 Education Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="college" placeholder="College/University Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange} />
              <input type="text" name="degree" placeholder="Degree/Course" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange} />
              <input type="text" name="year" placeholder="Year of Study / Graduation Year" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange} />
              <select name="availableFullTime" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange}>
                <option value="">Available Full-Time?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {/* Internship Details */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">💼 Internship Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select name="preferredRole" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange}>
                <option value="">Preferred Role</option>
                <option value="Frontend Developer">Frontend Developer (React.js)</option>
                <option value="Backend Developer">Backend Developer (Node.js)</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="QA Tester">QA Tester</option>
              </select>
              <select name="duration" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange}>
                <option value="">Duration</option>
                <option value="3 Months">3 Months (Basic)</option>
                <option value="4 Months">4 Months (Pro / Premium)</option>
              </select>
            </div>
            <div className="space-y-4">
              <textarea name="reason" placeholder="Why do you want to join this internship?" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" rows="4" onChange={handleChange}></textarea>
              <select name="liveProjects" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange}>
                <option value="">Have you worked on live projects before?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <textarea name="projectDescription" placeholder="If yes, describe briefly." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" rows="3" onChange={handleChange}></textarea>
              <input type="url" name="resumeLink" placeholder="Resume Link (Google Drive or Upload URL)" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" onChange={handleChange} />
            </div>
          </div>

          {/* Fees Acknowledgment */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">💰 Training Fees Acknowledgment</h2>
            <label className="flex items-start">
              <input type="checkbox" name="feeAgreement" className="mt-1 mr-2" onChange={handleChange} />
              <span className="text-sm">I understand that this is a paid training-cum-internship program and I am willing to pay the applicable training fee upon selection.</span>
            </label>
          </div>

          {/* Declaration */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">📌 Declaration</h2>
            <label className="flex items-start">
              <input type="checkbox" name="declaration" className="mt-1 mr-2" onChange={handleChange} />
              <span className="text-sm">I declare that all the information provided is true to the best of my knowledge and I'm applying for the internship voluntarily.</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0f172a] text-white py-3 rounded-lg hover:bg-blue-900 transition font-medium"
          >
            ✅ Submit Application
          </button>
        </form>
      </div>
    </div>
    <TeamStrucutre />
    <Footer />
    </>
  );
};

export default Internships;