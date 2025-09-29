import ProjectCard from "../components/ProjectCard"
import Particles from "../components/ParticleBackground"
import Collaborate from "../components/Collaborate"
import m_and_a from "../assets/images/projects/m_and_a.png"
import portfolio_optimizer from "../assets/images/projects/portfolio_optimizer.png"
import Arima from "../assets/images/projects/Arima.png"
import tradepro from "../assets/images/projects/tradepro.jpg"
import hdfc_merger from "../assets/images/projects/hdfc-merger.png"
import { SlideIn, RotateZoom } from "../components/ui/Animations"
import sellSideImage from '../assets/images/projects/sellSideImage.png'
import { motion } from 'framer-motion'


function Projects() {
  let topics1 = ['Python', 'Machine Learning', 'Finance'];
  let topics2 = ["Finance", "Python", "Excel"]
  let topics3 = ["Python", "Finance", "Modern Portfolio Theory"]
  let topics4 = ["Finance", "M & A", "Excel"]
  const TypingText = ({
    text,
    delay = 0,
    duration = 1,
    className = "",
    cursor = false,
    cursorBlink = true
  }) => {
    const letters = text.split("");

    return (
      <span className={`inline-block ${className}`}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-schibsted text-transparent bg-clip-text bg-gradient-to-r from-[#7fa4fa] via-[#7fa4fa] to-[#7fa4fa]"

            transition={{
              delay: delay + index * (duration / letters.length),
              duration: 0.1
            }}
          >
            {letter}
          </motion.span>
        ))}
        {cursor && (
          <motion.span
            className="inline-block w-1 h-8 bg-current -mb-1 ml-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: cursorBlink ? [0, 1, 0] : 1 }}
            transition={{
              delay: delay + duration,
              duration: 0.8,
              repeat: cursorBlink ? Infinity : 0,
              repeatDelay: 0.4
            }}
          />
        )}
      </span>
    );
  };

  const MagneticTitle = ({ text }) => {
    const letters = text.split("");

    // Animation for each letter
    const letterVariants = {
      hidden: { y: -50, opacity: 0 },
      visible: (i) => ({
        y: [-50, 10, -5, 0], // overshoot & settle
        opacity: 1,
        transition: {
          delay: i * 0.08, // stagger
          duration: 0.6,
          ease: "easeOut",
        },
      }),
    };

    return (

      <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}
        className="bg-gradient-to-r text-Title-Title-2-fontSize from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8] bg-clip-text text-transparent"
      >
        {letters.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            // initial="hidden"
            // animate="visible"
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    );
  };

  const ProjectCardWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        transition:{duration:0.2},
        boxShadow: "0px 28px 35px rgba(79, 70, 255, 0.3)", // bluish glow
      }}
      className="rounded-xl bg-transparent transition-all"
    >
      {children}
    </motion.div>
  );
};


  return (
    <div className="w-full min-h-screen mx-auto max-w-screen-2xl flex flex-col gap-2.5">

      {/* Hero Section */}
      {/* This div also uses `w-full` for full width. */}
      {/* Padding is now responsive: `px-4` for small screens, increasing to `lg:px-24` for larger screens. */}
      {/* `py-16` provides vertical padding, adjusting on larger screens. */}
      {/* `flex flex-col items-center justify-center` can be used to center content within this section. */}
      <div
        id="Hero Section"
        className="w-full min-h-[800px] relative
                   py-16 md:py-24 lg:py-32
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24
                   flex flex-col items-center justify-center
                   gap-12 rounded-lg shadow-md"
      >
        <div id="Hero Background Container" className="w-[1557px] min-h-[800px] absolute inset-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

          <motion.div 
            id="Hero Container" 
            className="w-full max-w-[1200px] mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div id="Hero text container" className="w-full text-center gap-6">
              <div id="Hero title" className="font-Family-secondary font-semibold text-5xl md:text-6xl leading-tight tracking-normal">
                <TypingText
                  text={"Real-World Projects"}
                />
              </div>
              
              {/* Main tagline */}
              <div id="Hero tagline" className="font-Body-3-fontFamily text-xl md:text-2xl leading-relaxed text-center mt-6">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7fa4fa] via-[#A3ACD9] to-[#F3FFD8] font-semibold"
                >
                  Student-run. Industry-grade. We solve live problems in finance, consulting, product, and quant—then ship outcomes, not slideware.
                </motion.span>
              </div>

              {/* What we do section */}
              <div id="What we do section" className="mt-8 max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1 }}
                  className="mb-6"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8] mb-4">
                    What we do
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, amount: 0.6 }} 
                    transition={{ duration: 0.8 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20"
                  >
                    <h4 className="text-lg font-semibold text-[#7fa4fa] mb-2">Consulting</h4>
                    <p className="text-[#BBBBBB] text-sm">Market entry, pricing, growth audits, ops redesign.</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 30 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, amount: 0.6 }} 
                    transition={{ duration: 0.8 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
                  >
                    <h4 className="text-lg font-semibold text-[#A3ACD9] mb-2">Corporate/Startup Finance</h4>
                    <p className="text-[#BBBBBB] text-sm">Valuation, FP&A, deal memos, KPI dashboards.</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -30 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, amount: 0.6 }} 
                    transition={{ duration: 0.8 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20"
                  >
                    <h4 className="text-lg font-semibold text-[#F3FFD8] mb-2">Product Management</h4>
                    <p className="text-[#BBBBBB] text-sm">Discovery → MVP scoping, roadmap, metrics (AARRR/HEART), experiment design.</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 30 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, amount: 0.6 }} 
                    transition={{ duration: 0.8 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20"
                  >
                    <h4 className="text-lg font-semibold text-[#7fa4fa] mb-2">Quantitative Finance</h4>
                    <p className="text-[#BBBBBB] text-sm">Factor research, backtests, risk models, execution/alpha dashboards.</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true, amount: 0.6 }} 
                    transition={{ duration: 0.8 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-teal-900/20 to-blue-900/20 border border-teal-500/20 md:col-span-2"
                  >
                    <h4 className="text-lg font-semibold text-[#A3ACD9] mb-2">Analytics & Automation</h4>
                    <p className="text-[#BBBBBB] text-sm">Forecasting, cohorts/churn, ETL, reporting that runs itself.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
      </div>

      <div
        id="desktop-3"
        className="w-full min-h-screen py-10 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-start gap-8 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        {/* <SlideIn x_hidden={200} y_hidden={100} duration={1.2}> */}
        <div
          id="project header container"
          className="w-full max-w-screen-lg flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          <div
            id="Section title"
            className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            <span
                className="bg-gradient-to-r text-Title-Title-2-fontSize from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8] bg-clip-text text-transparent font-Family-secondary"
              >Our Projects</span>
          </div>
          <div
            id="Section subtitle"
            class="mt-4 text-center font-normal text-base sm:text-lg md:text-xl leading-relaxed"
          >
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1 }}
              className="text-[var(--Website-Neutral-3,#BBBBBB)] font-Family-secondary bg-clip-text "
            >Student-led initiatives solving real-world problems in finance and
              consulting.</motion.span>
          </div>
        </div>

        <ProjectCardWrapper>
          <ProjectCard Title="Portfolio Optimization Tool" Desc="A web-based portfolio optimization tool tailored for the Indian stock market,
built using the Markowitz Mean-Variance framework."
            Topics={topics3} Image={portfolio_optimizer}
            imageOnLeft={false} link="https://tanish-verma-portfolio-optimization-india-appapp-qt5s7u.streamlit.app/"
            staticPage="/projects/portfolio-optimizer"
            people={[{
              id: 1,
              name: "Tanish Verma",
              designation: "Student",
              image: "https://placehold.co/32x32/3498db/ffffff?text=TV",
              linkedIn: "https://www.linkedin.com/in/tanish-verma-363193327/",

            }]}>
          </ProjectCard>
        </ProjectCardWrapper>

        <ProjectCardWrapper>
          <ProjectCard Title="Trade Pro Financial Theory" Desc="A tool built on key fnancial ideas that guide how it trades and manages risk"
            Image={tradepro} imageOnLeft={true} link="https://trading-strategy-nttz.onrender.com/"
            staticPage="/projects/trade-pro" Topics={topics1}
            people={[{
              id: 1,
              name: "Sreeteja",
              designation: "Student",
              image: "https://placehold.co/32x32/3498db/ffffff?text=ST",
              linkedIn: "https://www.linkedin.com/in/guddeti-sreeteja"
            }]}
          ></ProjectCard>
        </ProjectCardWrapper>

        <ProjectCardWrapper>
          <ProjectCard Title="Side-sell M&A Deal" Desc="A comprehensive sell-side M&A deal simulation, focusing on Ola Electric, involving strategic narrative creation, DCF and LBO modeling, and valuation analysis."
            Topics={["Corporate Finance", "Sell-side M&A", "Excel"]}
            Image={sellSideImage} imageOnLeft={false}
            staticPage="/projects/sell-side-m-and-a"
            people={[{
              id: 1,
              name: "Vasishta Krishna",
              designation: "Student",
              image: "https://placehold.co/32x32/3498db/ffffff?text=VK",
              linkedIn: "https://www.linkedin.com/in/vasishta9999/"
            }]}>

          </ProjectCard>
        </ProjectCardWrapper>

        <ProjectCardWrapper>
          <ProjectCard Title="HDFC Merger" Desc="A study of the HDFC Ltd. HDFC Bank merger, analyzing the share-swap ratio, market reactions, and its impact on stakeholders. The project combines financial valuation with real market data to draw practical insights."
            Topics={topics4} Image={hdfc_merger} imageOnLeft={true}
            staticPage="/projects/hdfc-merger" people={[{
              id: 1,
              name: "Tejas Mundada",
              designation: "Student",
              image: "https://placehold.co/32x32/3498db/ffffff?text=TM",
              linkedIn: "https://www.linkedin.com/in/tejas-mundada-86329536b"
            },]} />
        </ProjectCardWrapper>
      </div>
      {/* <Collaborate/> */}
    </div>
  )
}

export default Projects