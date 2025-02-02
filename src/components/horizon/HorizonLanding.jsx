import { Button } from '@/components/ui/button'
import { Link } from "react-router-dom"
import rightArrow from "/src/assets/home/Double Alt Arrow Right.png";
import { ArrowUpRight } from 'lucide-react';

const HorizonLanding = () => {
    return (
        <div className='relative md:min-h-[80vh] px-6 py-12 my-12 md:my-[6rem] text-center  z-50 '>
            <div className='absolute left-0 top-[20vh] w-[200px] h-[200px] blur-[250px] bg-[#1270ED] '></div>
            <div className='absolute right-0 top-[90vh] w-[200px] h-[200px] blur-[250px] bg-[#1270ED] '></div>
            <p className=' text-lg md:text-[2.2vw] font-light font-rosario text-custom-blue pb-6 md-1:pb-4 '>
                FCC IIT-HYDERABAD  Presents
            </p>
            <div className='mx-auto w-full flex-col gap-0 m-6 md-1:mb-6 mt-0'>
                <p className='w-full font-semibold text-5xl md:text-[7rem] text-white  md-1:leading-normal'>HORIZON 25&apos;</p>
            </div>

            {/* Schedule Button */}
            <div className="gap-2 flex justify-center py-8 md-1:py-2 ">
                <Link
                    to="/horizon/schedule"
                    className="flex items-start my-5"
                >
                    <Button className='text-xl p-6 relative overflow-hidden' cursor='not-allowed'>
                        VIEW FULL SCHEDULE
                        
                        <div className='w-3 h-3 bg-white absolute top-0 right-0 blur-[1rem]' ></div>
                        <div className='w-3 h-3 bg-white absolute bottom-0 left-0 blur-[1rem]' ></div>

                    </Button>
                </Link>
            </div>

        </div>)
}

export default HorizonLanding