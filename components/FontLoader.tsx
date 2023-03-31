'use client';

import { League_Spartan } from '@next/font/google';

const leagueSpartan = League_Spartan({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

function FontLoader() {
  return (
    <style jsx global>
      {`
        :root {
          --league-spartan-font: ${leagueSpartan.style.fontFamily};
        }
      `}
    </style>
  );
}

export default FontLoader;
