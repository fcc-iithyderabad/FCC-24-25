import Collaborate from "../components/Collaborate";
import ProjectDetails from "../components/ProjectDetails";
import sellSideImage from '../assets/images/projects/sellSideImage.png'

function SellSide(){
    return (
        <div className="w-full min-h-screen flex flex-col gap-[10px]">
            <ProjectDetails title="Sell-side M&A Deal by Investment Bankers"
            startDate="June 2025" endDate="July 2025"
            team={[{name:"Vasishta Krishna"}]}
            image={sellSideImage}
            topics={["Corporate Finance","Sell-side M&A","Excel"]}
            overview="This project replicates a sell-side M&A deal process from the perspective of an investment banking analyst, focusing on Ola Electric. It targets two types of acquirers: a strategic buyer (Tata Motors) and a financial sponsor (Private Equity fund).
The first step involved creating a strategic narrative using Ola Electric’s DRHP, similar to a Confidential Information Memorandum (CIM), to form a compelling investment thesis.
A detailed bottom-up Discounted Cash Flow (DCF) model was developed to assess the intrinsic value of the company, including scenario-based sensitivity analysis.
For the Private Equity buyer, a comprehensive Leveraged Buyout (LBO) model was built, focusing on debt structuring and operating projections.
The analysis evaluated the feasibility of acquisition under leveraged financing conditions and IRR targets.
The valuation findings from all methods were visually compared using a “Football Field” chart.
This helped contrast the valuation perspectives of strategic vs. financial buyers.
Public comps and precedent transaction multiples were also considered to support valuation assumptions.
Financial modeling was performed using Excel with detailed schedules for revenue, cost drivers, and working capital.
The project combined qualitative storytelling with quantitative modeling to build a complete sell-side investment case."
            impact="This project strengthened my financial modeling, valuation, and strategic analysis skills within a real-world M&A context. It enhanced my ability to think like both a strategic acquirer and a financial investor. I gained hands-on experience in creating CIMs, running DCF and LBO models, and synthesizing results into actionable insights. Overall, it developed my readiness for investment banking roles involving deal execution and valuation advisory."
             challenges={[{title: "yfinance API integration", desc: "Connecting to the Yahoo Finance API was difficult due to frequent \"No data available\" errors when trying to get stock data. To solve this, I added fallback time periods and better error handling. These changes helped make sure the dashboard could still show market data even when some requests failed. Portfolio Performance Calculation"},
      {title: "Portfolio Performance Calculation", desc: "Calculating profit and loss for stocks in different currencies was tricky. Changes in exchange rates made it hard to show accurate results in one currency. I had to include extra steps to convert values properly and make sure the performance shown was correct and consistent.Dashboard Responsiveness"},
      {title: "Dashboard optimization", desc: "The trading dashboard became slow when displaying several charts and indicators at the same time. This made it harder to quickly check market trends, especially during testing. I had to work on improving performance to make the dashboard run more smoothly and respond faster."}]}
            ></ProjectDetails>
        </div>
    );
}
export default SellSide;