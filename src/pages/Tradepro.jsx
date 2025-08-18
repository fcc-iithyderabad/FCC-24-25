import ProjectDetails from "../components/ProjectDetails";
import tradepro from "../assets/images/projects/tradepro.jpg";
import Collaborate from "../components/Collaborate";

function Tradepro(){
    return(
         <div className="w-full min-h-screen flex flex-col gap-[10px]">
      <ProjectDetails title="Trade Pro: Financial Theory" 
      topics={["Python","finance","Machine Learning"]} 
      startDate={"June 2025"} endDate={"July 2025"}
      overview={"TradePro is a trading system that combines portfolio theory with advanced analytics to balance risk and reward. It builds optimized stock portfolios by analyzing past performance and correlations. Trade decisions are driven by both technical indicators (like RSI, MACD, and Bollinger Bands) and machine learning models (such as Prophet, ARIMA, LSTM, and Random Forest) to identify patterns and trends. For risk management, it uses adaptive stop-losses, the Kelly formula for position sizing, and limits exposure to sectors or correlated assets. Key metrics like Value at Risk, Sharpe ratio, and drawdowns are monitored to ensure returns are achieved with controlled risk. This multi-layered approach helps TradePro generate reliable trading signals while safeguarding capital. By blending human strategies with AI insights, it aims to deliver consistent, risk-adjusted returns."}
      image={tradepro} team={[{name: "Guddeti Sreeteja"}]} 
      impact={"The TradePro platform makes advanced trading tools available to everyday investors, not just Wall Street professionals. Its easy-to-read charts and real-time data help people make smarter investment choices without needing years of experience. The risk management features help prevent panic selling and buying by encouraging planned trading decisions. This makes stock market investing more accessible to beginners, allowing more people to participate in financial markets who might have been intimidated before."}
      challenges={[{title: "yfinance API integration", desc: "Connecting to the Yahoo Finance API was difficult due to frequent \"No data available\" errors when trying to get stock data. To solve this, I added fallback time periods and better error handling. These changes helped make sure the dashboard could still show market data even when some requests failed. Portfolio Performance Calculation"},
      {title: "Portfolio Performance Calculation", desc: "Calculating profit and loss for stocks in different currencies was tricky. Changes in exchange rates made it hard to show accurate results in one currency. I had to include extra steps to convert values properly and make sure the performance shown was correct and consistent.Dashboard Responsiveness"},
      {title: "Dashboard optimization", desc: "The trading dashboard became slow when displaying several charts and indicators at the same time. This made it harder to quickly check market trends, especially during testing. I had to work on improving performance to make the dashboard run more smoothly and respond faster."}]}
      />
      <Collaborate />
    </div>
    )
}
export default Tradepro;