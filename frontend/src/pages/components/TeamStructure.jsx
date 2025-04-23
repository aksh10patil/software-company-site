import React from 'react';

const TeamStructure = () => {
  return (
    <div className="bg-white text-[#0f172a] rounded-lg shadow p-8 max-w-4xl mx-auto mb-10">
      <h2 className="text-2xl font-bold mb-8 text-center">Internship Structure</h2>
      
     
      
     
      
      {/* Total Team Size */}
      {/* <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 bg-yellow-100 p-3 rounded-lg">
          <span className="mr-2">🧑‍💻</span>Total Team Size (Internship Model)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Role Type</th>
                  <th className="py-3 px-4 text-left">No. of Interns</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Frontend Developers</td>
                  <td className="py-3 px-4">10</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Backend Developers</td>
                  <td className="py-3 px-4">12</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Full Stack (Mixed)</td>
                  <td className="py-3 px-4">4</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">QA Testers</td>
                  <td className="py-3 px-4">4</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">UI/UX Designers</td>
                  <td className="py-3 px-4">2</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Support/Operations</td>
                  <td className="py-3 px-4">2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col justify-center space-y-4 bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="text-green-600 text-4xl">🟢</span>
              <div>
                <p className="text-lg font-semibold">Total Interns:</p>
                <p className="text-2xl font-bold">34</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 text-4xl">🔵</span>
              <div>
                <p className="text-lg font-semibold">Mentors/Trainers/Leads Required:</p>
                <p className="text-2xl font-bold">8–10</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* Internship Weekly Plan */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 bg-blue-100 p-3 rounded-lg">Internship Weekly Plan (4 Months)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Week No</th>
                  <th className="py-3 px-4 text-left">Start Date</th>
                  <th className="py-3 px-4 text-left">Assigned Module</th>
                  <th className="py-3 px-4 text-left">Phase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">1</td>
                  <td className="py-3 px-4">01-May-2025</td>
                  <td className="py-3 px-4">CRM & Lead Management</td>
                  <td className="py-3 px-4">Training + UI Wireframe</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">2</td>
                  <td className="py-3 px-4">08-May-2025</td>
                  <td className="py-3 px-4">HR & Payroll</td>
                  <td className="py-3 px-4">Training + UI Wireframe</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">3</td>
                  <td className="py-3 px-4">15-May-2025</td>
                  <td className="py-3 px-4">Finance & Accounting</td>
                  <td className="py-3 px-4">Training + UI Wireframe</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">4</td>
                  <td className="py-3 px-4">22-May-2025</td>
                  <td className="py-3 px-4">Inventory & Warehouse</td>
                  <td className="py-3 px-4">Training + UI Wireframe</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">5</td>
                  <td className="py-3 px-4">29-May-2025</td>
                  <td className="py-3 px-4">Sales & Purchase</td>
                  <td className="py-3 px-4">Development & Testing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6</td>
                  <td className="py-3 px-4">05-Jun-2025</td>
                  <td className="py-3 px-4">Project & Task Management</td>
                  <td className="py-3 px-4">Development & Testing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">7</td>
                  <td className="py-3 px-4">12-Jun-2025</td>
                  <td className="py-3 px-4">Client Portal</td>
                  <td className="py-3 px-4">Development & Testing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Week No</th>
                  <th className="py-3 px-4 text-left">Start Date</th>
                  <th className="py-3 px-4 text-left">Assigned Module</th>
                  <th className="py-3 px-4 text-left">Phase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">8</td>
                  <td className="py-3 px-4">19-Jun-2025</td>
                  <td className="py-3 px-4">Reports & Analytics</td>
                  <td className="py-3 px-4">Development & Testing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">9</td>
                  <td className="py-3 px-4">26-Jun-2025</td>
                  <td className="py-3 px-4">Multi-tenancy Support</td>
                  <td className="py-3 px-4">Development & Testing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">10</td>
                  <td className="py-3 px-4">03-Jul-2025</td>
                  <td className="py-3 px-4">CRM & Lead Management</td>
                  <td className="py-3 px-4">Development & Testing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">11</td>
                  <td className="py-3 px-4">10-Jul-2025</td>
                  <td className="py-3 px-4">HR & Payroll</td>
                  <td className="py-3 px-4">Development & Testing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">12</td>
                  <td className="py-3 px-4">17-Jul-2025</td>
                  <td className="py-3 px-4">Finance & Accounting</td>
                  <td className="py-3 px-4">Development & Testing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">13</td>
                  <td className="py-3 px-4">24-Jul-2025</td>
                  <td className="py-3 px-4">Inventory & Warehouse</td>
                  <td className="py-3 px-4">Integration + QA + Final Testing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">14</td>
                  <td className="py-3 px-4">31-Jul-2025</td>
                  <td className="py-3 px-4">Sales & Purchase</td>
                  <td className="py-3 px-4">Integration + QA + Final Testing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">15</td>
                  <td className="py-3 px-4">07-Aug-2025</td>
                  <td className="py-3 px-4">Project & Task Management</td>
                  <td className="py-3 px-4">Integration + QA + Final Testing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">16</td>
                  <td className="py-3 px-4">14-Aug-2025</td>
                  <td className="py-3 px-4">Client Portal</td>
                  <td className="py-3 px-4">Integration + QA + Final Testing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Training Fees */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 bg-green-100 p-3 rounded-lg">
          <span className="mr-2">💰</span>Training Fees
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">Plan Tier</th>
                <th className="py-3 px-4 text-left">Duration</th>
                <th className="py-3 px-4 text-left">Fee (INR)</th>
                <th className="py-3 px-4 text-left">Eligibility / Focus</th>
                <th className="py-3 px-4 text-left">Inclusions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 font-medium">Free</td>
                <td className="py-3 px-4">0–1 Month</td>
                <td className="py-3 px-4">₹ 1000</td>
                <td className="py-3 px-4">Observers / Non-contributors</td>
                <td className="py-3 px-4">
                  <ul className="list-disc list-inside text-sm">
                    <li>Participation Certificate</li>
                    <li>Live Session Access (Limited)</li>
                    <li>No task assigned</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Basic</td>
                <td className="py-3 px-4">3 Months</td>
                <td className="py-3 px-4">₹ 5000</td>
                <td className="py-3 px-4">Beginners / Task-based learners</td>
                <td className="py-3 px-4">
                  <ul className="list-disc list-inside text-sm">
                    <li>Certificate of Completion</li>
                    <li>1–2 Modules Assigned</li>
                    <li>Code Access (Read-only)</li>
                    <li>Resume Review</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Pro</td>
                <td className="py-3 px-4">4 Months</td>
                <td className="py-3 px-4">₹ 8000</td>
                <td className="py-3 px-4">Hands-on Developers</td>
                <td className="py-3 px-4">
                  <ul className="list-disc list-inside text-sm">
                    <li>Certificate of Completion</li>
                    <li>Multiple Modules</li>
                    <li>Task Reviews</li>
                    <li>Live Product Access</li>
                    <li>LOR (based on performance)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Premium</td>
                <td className="py-3 px-4">4 Months</td>
                <td className="py-3 px-4">₹ 12000</td>
                <td className="py-3 px-4">Dedicated Interns with mentorship intent</td>
                <td className="py-3 px-4">
                  <ul className="list-disc list-inside text-sm">
                    <li>Certificate of Excellence</li>
                    <li>GitHub Contribution + Portfolio Assistance</li>
                    <li>Deployment Involvement</li>
                    <li>Mock Interviews + Resume Boost</li>
                    <li>Pre-Placement Offer (If eligible)</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamStructure;