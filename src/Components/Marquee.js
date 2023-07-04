import React from 'react';

const Marquee = () => {
  return (
    <div class="relative flex overflow-x-hidden bg-black text-white">
  <div class="py-1 animate-marquee whitespace-nowrap">
    <span class="text-sm mx-60">Marquee Item 1</span>
    <span class="text-md mx-10">Marquee Item 2</span>
    <span class="text-sm mx-10"></span>
    <span class="text-sm mx-10">Marquee Item 4</span>
    <span class="text-sm mx-20"></span>
  </div>
</div>
  );
};

export default Marquee;
