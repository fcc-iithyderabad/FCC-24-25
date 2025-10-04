// const Collaborate = () => {

//     return(
//         <div class="flex justify-center w-full px-4 sm:px-6 md:px-8 py-8">
//             <div
//                 class="w-full sm:w-11/12 md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 flex flex-col items-center justify-center text-center px-6 py-16 rounded-xl bg-gradient-to-r from-[#0f172a] to-[#3b5e14] text-white shadow-lg"
//             >

//         <h2 className="text-4xl md:text-6xl font-Family-primary font-extrabold text-lime-400 mb-4">
//             Ready to Collaborate?
//         </h2>

//         <p className="max-w-3xl font-Body-3-fontFamily font-Weights-Medium text-Body-1-fontSize md:text-xl text-gray-300 mb-8">
// Partner with FCC to turn complex problems into shippable outcomes. We co-build with finance and consulting, product and quant-finance teams on data, AI, product, and strategy - fast, measurable, and production-minded.
//         </p>
        
//         <a href="/fcc_collaborae_brochure.pdf" target="_blank">
//             <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold font-Body-3-fontFamily text-Body-2-fontSize px-6 py-3 rounded-md transition duration-300">
//                 Download Brochure
//                 <span className="text-xl">→</span>
//             </button>
//         </a>
//         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fcc@gymkhana.iith.ac.in&su=Collaboration+with+FCC" target="_blank">
//             <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold font-Body-3-fontFamily text-Body-2-fontSize px-6 py-3 rounded-md transition duration-300">
//                 Partner with us
//                 <span className="text-xl">→</span>
//             </button>
//         </a>
//         <p className="text-Label-Label-3-fontSize font-Label-Label-3-fontFamily font-Weights-Regular text-gray-400 mt-4">
//             Join 25+ industry partners already collaborating with FCC
//         </p>
//         </div>
//         </div>
//     )
// }

// export default Collaborate

const Collaborate = () => {
  return (
    <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 py-8">
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 flex flex-col items-center justify-center text-center px-6 py-16 rounded-xl bg-gradient-to-r from-[#0f172a] to-[#3b5e14] text-white shadow-lg">
        
        <h2 className="text-4xl md:text-6xl font-Family-primary font-extrabold text-lime-400 mb-4">
          Ready to Collaborate?
        </h2>

        <p className="max-w-3xl font-Body-3-fontFamily font-Weights-Medium text-Body-1-fontSize md:text-xl text-gray-300 mb-8">
          Partner with FCC to turn complex problems into shippable outcomes. We co-build with finance and consulting, product and quant-finance teams on data, AI, product, and strategy - fast, measurable, and production-minded.
        </p>

        {/* Button container */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="/fcc_collaborate_brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold font-Body-3-fontFamily text-Body-2-fontSize px-6 py-3 rounded-md transition duration-300">
              Download Brochure
              <span className="text-xl">→</span>
            </button>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fcc@gymkhana.iith.ac.in&su=Collaboration+with+FCC"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold font-Body-3-fontFamily text-Body-2-fontSize px-6 py-3 rounded-md transition duration-300">
              Partner with us
              <span className="text-xl">→</span>
            </button>
          </a>
        </div>

        <p className="text-Label-Label-3-fontSize font-Label-Label-3-fontFamily font-Weights-Regular text-gray-400 mt-6">
          Join 25+ industry partners already collaborating with FCC
        </p>
      </div>
    </div>
  );
};

export default Collaborate;
