import React, {useState} from 'react'

import psimg from '../assets/images/pastspeakers/s1.png'
import psimg1 from '../assets/images/pastspeakers/gauravmahindra.svg'
import YearTile from './YearTile';

function Speakers() {
    const ps_images_2022 = [
        { img_id: psimg }, { img_id: psimg },{ img_id: psimg },{ img_id: psimg },
    ];
    const ps_images_2023 = [
      { img_id: psimg1 }, { img_id: psimg },{ img_id: psimg },
    ];
    const ps_images_2024 = [
      { img_id: psimg }, { img_id: psimg1 },{ img_id: psimg },{ img_id: psimg },{ img_id: psimg },
    ];
    
    const [year, setYear] = useState(localStorage.getItem("year") || "2024");

    const handleYearChange = (selectedYear) => {
      setYear(selectedYear);
      localStorage.setItem("year", selectedYear);
    };
    

  return (
    <div>
        <div className='flex flex-col h-auto w-full items-center justify-center my-6'>
        <div className='flex items-center justify-center w-90p my-6'>
          <p className='font-rosario mt-0 mb-4 text-7xl md-1:text-5xl md-1:w-full md-1:text-center'>Speakers</p>
        </div>
        <div className='px-5 my-6 flex flex-row w-full'>
					<div className='w-1/4 h-full mr-8 flex flex-col items-center justify-between gap-3'>
						<YearTile year= "2022" setYearChange={handleYearChange}/>
						<YearTile year= "2023" setYearChange={handleYearChange}/>
						<YearTile year= "2024" setYearChange={handleYearChange}/>
						{/* <YearTile />
						<YearTile /> */}
					</div>
          {year === "2022" && (
            <div className='w-3/4'>
              <div className='flex justify-evenly flex-wrap gap-3 md-1:gap-3'>
                {ps_images_2022.map((image,index)=>(
                  <img className='h-auto p-4 flex-wrap w-1/4 md-1:w-2/5 md-1:flex-wrap ' src= {image.img_id} key={index} alt={`Image ${index + 1}`}></img>
                ))}
              </div>             
            </div>
          )}
          {year === "2023" && (
            <div className='w-3/4'>
              <div className='flex justify-evenly flex-wrap gap-3 md-1:gap-3'>
                {ps_images_2023.map((image,index)=>(
                  <img className=' h-auto p-4 flex-wrap w-1/4 md-1:w-2/5 md-1:flex-wrap ' src= {image.img_id} key={index} alt={`Image ${index + 1}`}></img>
                ))}
              </div>             
            </div>
          )}
          {year === "2024" && (
            <div className='w-3/4'>
              <div className='flex justify-evenly flex-wrap gap-3 md-1:gap-3'>
                {ps_images_2024.map((image,index)=>(
                  <img className=' h-auto p-4 flex-wrap w-1/4 md-1:w-2/5 md-1:flex-wrap ' src= {image.img_id} key={index} alt={`Image ${index + 1}`}></img>
                ))}
              </div>             
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Speakers