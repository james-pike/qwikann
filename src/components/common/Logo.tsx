import { component$ } from "@builder.io/qwik";

// @ts-ignore
const logoSrc = "";

export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold whitespace-nowrap dark:text-white flex items-center">
    <img
      src={logoSrc}
      class="inline-block mr-2"
      width={32}
      height={32}
      alt="Qwind Logo"
    />
    
  </span>
));
