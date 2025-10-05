import { Link } from "react-router-dom"
import HorizonCard from "@/components/HorizonCard"
import rightArrow from "/src/assets/home/Double Alt Arrow Right.png";
import { Button } from '@/components/ui/button'
import DynamicTitle from "@/components/DynamicTitle";

const HomeLanding = () => {
    return (
        <div className="flex min-h-[80vh] md:min-h-0 pt-[80px] mb-[2%] md:flex-row flex-col w-full justify-center items-center md:py-[5%] z-20">
            {/* Main content wrapper: Centers content block, adds mobile padding */}
            <div className="flex flex-col md:flex-row w-full justify-center items-center max-w-[1200px] px-4 md:px-10">
                {/* Left Section: Text Content */}
                <div className="flex flex-col justify-center items-start text-left w-full md:w-1/2 mb-8 md:mb-0">
                    <DynamicTitle />
                    <p className="max-w-3xl font-outfit text-outfit md:text-2xl text-gray-300 mb-8">
                        Empowering tomorrow's finance leaders and consultants through hands-on projects, insights, and global exposure.
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5"> {/* Added flex-wrap for button responsiveness */}
                        <button
                            onClick={() => {
                                const to = "fcc@gymkhana.iith.ac.in";
                                const subject = encodeURIComponent("Collaboration with FCC IIT Hyderabad");
                                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}`;
                                window.open(gmailUrl, "_blank"); // opens gmail directly
                            }}
                            className="flex items-center gap-2 bg-[#4E56D3] text-white font-semibold font-outfit px-6 py-3 rounded-md transition duration-300"
                        >
                            Collaborate
                            <span className="text-white">→</span>
                        </button>

                        <a href="/events">
                            <button className="flex items-center gap-2 bg-[#CDFE64] hover:bg-blue-500 text-[#1F2E01] font-semibold font-outfit px-6 py-3 rounded-md transition duration-300">
                                Explore Horizon 2025
                                <span className="text-[#1F2E01]">→</span>
                            </button>
                        </a>
                        
                        {/* Brochure link fix is preserved */}
                        <a href="/collaboration-brochure.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center gap-2 bg-[#4E56D3] text-white font-semibold font-outfit px-6 py-3 rounded-md transition duration-300">
                                Collaboration Brochure
                                <span className="text-white">→</span>
                            </button>
                        </a>
                    </div>
                </div>
                {/* Right Section: HorizonCard */}
                <div className="w-full md:w-1/2 md:ml-10">
                    <HorizonCard />
                </div>
            </div>
        </div>)
}

export default HomeLanding;

