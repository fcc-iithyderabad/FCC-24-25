import hdfc_merger from "../assets/images/projects/hdfc-merger.png"
import ChallengeCard from "../components/ChallengeCard"
import { Link } from "react-router-dom"

const HdfcMerger = () => {
    const title = "HDFC Merger";
    const topics = ["Finance", "M & A", "Excel"];
    const startDate = "July 2025";
    const endDate = "August 2025";
    const team = [{ name: "Tejas Mundada" }]
    const overview = "The merger of HDFC Ltd. and HDFC Bank, completed on July 1, 2023, was one of the most significant events in India’s financial sector. This consolidation not only created the largest private-sector bank in India but also placed it among the top global banks by market capitalization.This project is a detailed study of the HDFC Ltd.–HDFC Bank merger. I explored the merger from multiple angles—share-swap valuation, market reaction, opportunities, challenges, and its impact on stakeholders. The work combines financial analysis with real-world market data to understand how such landmark deals reshape industries and investor sentiment.";
    const impact = "";
    const topicCovered = [
        { title: "Understanding M & A", desc: "Basics, types, and why companies opt for such decisions." },
        { title: "The Story of HDFC & HDFC Bank", desc: "How both institutions evolved and why they merged." },
        { title: "Share-Swap Ratio Verification", desc: "Checked the official ratio of 42:25 using both DCF analysis and market price comparisons." },
        { title: "Impact Assessment", desc: "Looked at what the merger means for shareholders, depositors, and borrowers." },
        { title: "Market Analysis", desc: "Studied shareholder reactions over [-10, +10] days around key merger events, including price movements, trade volumes, and investor sentiment." },
        { title: "Opportunities & Challenges", desc: "Identified how the merger strengthens market dominance but also the cultural and regulatory challenges it faces." },
    ]
    const learning = [
        "Valuation methods like Discounted Cash Flow (DCF).",
        "Analysing stock market reactions to the merger.",
        "Interpreting shareholder sentiment and understanding the balance between growth opportunities and regulatory challenges.",
        "Working with real-world data in Excel, and turning raw numbers into meaningful insights."
    ]
    return (
        <div className='w-full min-h-screen flex flex-col gap-[10px]'>
            <div className="w-full flex flex-col gap-8 sm:gap-[62px] py-6 sm:py-10 md:py-[80px] md:gap-[62px] px-4 sm:px-8 md:px-[124px]">
                {/* Breadcrumb */}
                <div id="breadcrumb" className="h-[26px] w-full flex items-center gap-3 sm:gap-[12px]">
                    <Link to={'/projects'} className="cursor-pointer">
                        <span className="font-Body-3-fontFamily font-Weights-Regular text-sm sm:text-Body-2-fontSize text-[#A2A2A2] cursor-pointer">Projects</span>
                    </Link>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L7 7L1 1" stroke="#EBEBEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                    <p className="font-Body-3-fontFamily font-Weights-Regular text-sm sm:text-Body-2-fontSize text-[#EBEBEB]">{title}</p>
                </div>

                {/* Title */}
                <p id="title" className="w-full sm:w-3/4 font-Family-primary font-semibold text-3xl sm:text-5xl md:text-[60px] leading-tight sm:leading-[66px] text-[#EBEBEB]">
                    {title}
                </p>

                {/* Project Info */}
                <div id="project info" className="bg-[#1B1A1A] border-[#414141] w-full rounded-[10px] p-4 sm:p-[20px] flex flex-col md:flex-row gap-6 md:gap-[10%]">
                    {/* Project Type */}
                    <div id="project type container" className="w-full md:w-1/3 flex flex-col gap-4 sm:gap-[26px]">
                        <p className="w-full font-Heading-H3-fontFamily text-base sm:text-Heading-H4-fontSize font-Weights-Medium">Project Type</p>
                        <div id="Topics" className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-2">
                            {topics.map((item, index) => (
                                <div key={index} className="rounded-[10px] border border-[#4E56D3] bg-[#121649] px-2 sm:px-3 py-1.5 flex justify-center items-center">
                                    <p className="font-schibsted text-[#EBEBEB] font-Weights-Medium text-xs sm:text-sm leading-normal tracking-normal whitespace-nowrap">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Timeline */}
                    <div id="timeline container" className="w-full md:w-1/3 flex flex-col justify-around gap-4 sm:gap-[26px] mt-4 md:mt-0">
                        <p className="w-full font-Heading-H3-fontFamily text-base sm:text-Heading-H4-fontSize font-Weights-Medium text-[#A2A2A2]">Timeline</p>
                        <p className="font-Body-3-fontFamily font-Weights-Regular text-sm sm:text-Body-2-fontSize text-[#EBEBEB]">{startDate + " - " + endDate}</p>
                    </div>
                    {/* Team */}
                    <div id="team container" className="w-full md:w-1/3 flex flex-col justify-around gap-4 sm:gap-[26px] mt-4 md:mt-0">
                        <p className="w-full font-Heading-H3-fontFamily text-base sm:text-Heading-H4-fontSize font-Weights-Medium text-[#A2A2A2]">Team</p>
                        <div id="team value container" className="w-full flex flex-wrap gap-2 sm:gap-[14px]">
                            {team.map((member, index) => (
                                <div key={index} className="flex items-center gap-2 sm:gap-[8px]">
                                    <p className="font-Body-3-fontFamily font-Weights-Regular text-sm sm:text-Body-2-fontSize text-[#EBEBEB]">{member.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Overview */}
                <div id="project overviw" className="flex flex-col gap-4 sm:gap-[32px]">
                    <p className="text-[#EBEBEB] font-Family-primary text-xl sm:text-Title-Title-3-fontSize font-Weights-Bold">Overview</p>
                    <p className="font-Family-secondary text-base text-[20px] leading-relaxed sm:leading-[32px] font-light">{overview}</p>
                </div>
                {/* Responsive Image */}
                <div className="flex gap-1 items-center justify-center">
                    <img src={hdfc_merger} alt="overview image" className={`w-3/4 max-w-full h-auto rounded-lg`} />
                </div>
                    <div className="flex flex-col gap-2">

                        <h1 className="text-[40px] font-bold font-Family-primary ">Why I chose This Project</h1>
                        <p className="text-base text-[20px] font-Family-secondary ">Mergers and acquisitions are not only financial transactions but also strategic moves that reshape
                            industries. The HDFC merger was particularly interesting because it was a reverse merger, different
                            from the conventional cases where larger banks absorb smaller financial institutions. It was a
                            strategic, mutual decision, not one forced by financial distress. That made it an ideal case to study
                            from both financial and strategic perspectives.</p>
                    </div>

                {/* Key Challenges */}
                <div id="key challenges container" className="flex flex-col gap-4 sm:gap-[32px]">
                    <div className="h-full flex flex-col gap-2 sm:gap-[32px]">
                        <p className="text-[#EBEBEB] font-Family-primary text-[40px] font-Weights-Bold">What Project Covers</p>
                        <p className="font-Family-secondary text-base text-[20px] leading-relaxed sm:leading-[32px] font-light">
                            These are some of the key concepts this project covers
                        </p>
                    </div>
                    <div className="w-full border border-[#111111] flex flex-col md:flex-row gap-4 md:gap-[62px] flex-wrap">
                        {topicCovered.map((challenge, index) => (
                            <ChallengeCard key={index} title={challenge.title} desc={challenge.desc} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-full flex flex-col gap-2 sm:gap-[32px]">
                        <p className="text-[#EBEBEB] font-Family-primary text-[40px] font-Weights-Bold">What I learnt</p>
                        <p className="font-Family-secondary text-base text-[24px] leading-relaxed sm:leading-[32px] font-light">
                            This project gave me practical exposure to:
                        </p>
                    </div>
                    <div className="w-full border border-[#111111] flex flex-col gap-4">
                        {learning.map((text, index) => (
                            <div className="rounded-[10px] border border-[#414141] bg-[#1B1A1A] p-5 flex flex-col md:flex-1 gap-5">
                                <p className="text-[#BBBBBB] font-Family-secondary text-[20px] leading-[32px]">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact */}
            </div>
            {/*download links*/}
            <div className="flex justify-start mx-7 mb-5 gap-5">
                <a
                    href="/reports/HDFC-Merger_Report.pdf"
                    download="HDFC-Merger-Report"
                    className="text-xl text-blue-300">
                    Download Report
                </a>
                <a
                    href="/reports/HDFC-Merger.xlsx"
                    download="HDFC-Merger-Sheet"
                    className="text-xl text-blue-300">
                    Download Excel Sheet
                </a>
            </div>
        </div>
    )
}

export default HdfcMerger
