// import React from 'react';
// import {ThemeSwitch} from '@/components/ThemeSwitch/ThemeSwitch';
// import {Banner} from '@/modules/Landing/Components/Banner/Banner';
// import {Header} from '@/components/Header/Header';
// import {Description} from '@/modules/Landing/Components/Description/Description';
// import {Services} from '@/modules/Landing/Components/Services/Services';
// import {Marketplace} from '@/modules/Landing/Components/Marketplace/Marketplace';
// import {Faq} from '@/modules/Landing/Components/Faq/Faq';
// import {Consumers} from '@/modules/Landing/Components/Consumers/Consumers';
// import {Feedback} from '@/modules/Landing/Components/Feedback/Feedback';

// export default async function Page() {
//   return (
//     <>
//       <Banner />
//       <Description />
//       <Marketplace />
//       <Consumers />
//       <Services />
//       <Feedback />
//       {/* <Faq /> */}
//     </>
//   );
// }

import {Banner} from '@/modules/Agency/Components/Banner/Banner';
import {CalculatePrice} from '@/modules/Agency/Components/CalculatePrice/CalculatePrice';
import {Consumers} from '@/modules/Agency/Components/Consumers/Consumers';
import {Description} from '@/modules/Agency/Components/Description/Description';
import {Feedback} from '@/modules/Agency/Components/Feedback/Feedback';
import {Portfolio} from '@/modules/Agency/Components/Portfolio/Portfolio';
import {Services} from '@/modules/Agency/Components/Services/Services';
import React from 'react';

export default function Page() {
  return (
    <div>
      <Banner />
      <Description />
      {/* <Marketplace /> */}
      <Consumers />
      <Services />
      <Portfolio />
      <Feedback />

      <CalculatePrice />
    </div>
  );
}
