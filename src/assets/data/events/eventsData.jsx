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
        name: 'First Speaker',
        about: '...',
        gallery: [warikoo1, warikoo2, velumani1, velumani2, MBAS, MBAS2,breakingBrands, MDD],
        videoUrl: img5,
      },
      // ... rest of events
    ],
  },
  // rest of years
};

export default eventsData;
