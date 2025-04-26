import { Link } from 'react-router-dom'


export default function Banner () {
    return (
 

                <div className="bg-yellow-400 to-black text-white py-6 px-4 rounded-none shadow-lg my-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-2xl text-black font-bold">🚀 We're Hiring Interns!</h2>
                    <p className="mt-1 text-sm text-black">
                        Work on real-world projects and sharpen your skills with hands-on experience in a live environment.
                    </p>
                    </div>
                    <Link
                        to="/internships"
                        className="inline-block bg-white text-[#0f172a] font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition"
                        >
                        Learn More
                        </Link>

                </div>
                </div>
    )
}