import warikoo1 from '@/assets/images/events/EventArchive/warikoo1.jpg';
import warikoo2 from '@/assets/images/events/EventArchive/warikoo2.png';
import velumani1 from '@/assets/images/events/EventArchive/velumani1.jpg';
import velumani2 from '@/assets/images/events/EventArchive/velumani2.jpg';
import MBAS from '@/assets/images/events/EventArchive/MBAS.jpg';
import MBAS2 from '@/assets/images/events/EventArchive/MBAS2.jpg';
import breakingBrands from '@/assets/images/events/EventArchive/breakingBrands.jpg';
import MDD from '@/assets/images/events/EventArchive/MDD.jpg'

import img5 from '@/assets/images/events/EventArchive/img5.jpg';


const eventsData = {
  2025: {
    title: 'Events 2025',
    events: [
      {
        id: 'first-speaker',
        name: 'Horizon 2025',
        about: 'We lit up the stage with power-packed fireside chats featuring Ankur Warikoo, Dr. A. Velumani, and Pranjal Kamra, alongside a growing league of incredible sponsors. From MBA and finance deep-dives to high-energy games, pronites, and surprise events — this edition had it all. Horizon 2025 wasn’t just bigger, it was unforgettable!!',
        gallery: [warikoo1, warikoo2, velumani1, velumani2, MBAS, MBAS2,breakingBrands, MDD],
        videoUrl: img5,
      },
      // ... rest of events
    ],
  },
  2024: {
    title: 'Events 2024',
    events: [
      {
        id: 'first-speaker',
        name: 'Horizon 2024',
        about: 'We pushed boundaries with the intense ProdX case study competition, strategic M&A challenges, and the ultimate Trade Quests — all backed by attractive cash prizes. Industry leaders like Abhishek Kar, Arjun Beri, and Ashwini Bajaj inspired us, alongside renowned companies proudly sponsoring the event. Horizon 2024 took everything to the next level, raising the bar like never before.',
        // gallery: [warikoo1, warikoo2, velumani1, velumani2, MBAS, MBAS2,breakingBrands, MDD],
        // videoUrl: img5,
      },
      // ... rest of events
    ],
  },
  2023: {
    title: 'Events 2023',
    events: [
      {
        id: 'first-speaker',
        name: 'Horizon 2023',
        about: 'We ignited innovation with thrilling cash prize challenges, game-changing collaborations, and fierce equity competitions. Visionary leaders like Rishabh Jain, Akhil Sharma, Subba Perepa, and Gaurav Mahindra delivered powerful insights, while our seniors offered priceless mentorship. Horizon 2023 wasn’t just an event — it was an unforgettable movement.',
        // gallery: [warikoo1, warikoo2, velumani1, velumani2, MBAS, MBAS2,breakingBrands, MDD],
        // videoUrl: img5,
      },
      // ... rest of events
    ],
  },

  // rest of years
};

export default eventsData;
