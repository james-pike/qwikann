import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { SITE } from "~/config.mjs";

 

export default component$(() => {

  const themeColors = ["theme-indigo", "theme-red", "theme-orange", "theme-yellow", "theme-green", "theme-blue", "theme-violet"];

  // Signal to store the selected theme color
  const selectedTheme = useSignal("");

    // Load theme from localStorage once component is mounted
    useVisibleTask$(() => {
      const savedTheme = localStorage.getItem("selectedTheme");
      if (savedTheme && themeColors.includes(savedTheme)) {
        selectedTheme.value = savedTheme;
      }
    });

  
  return (
    <>
     <main class={`${selectedTheme.value}`}>
  

    

      {/* <svg xmlns="http://www.w3.org/2000/svg" class="mx-0" viewBox="0 0 1000 100" fill="#FF6464"><path d="M0 0v100l500-48 500 48V0H0z" opacity=".5"></path><path d="M0 0h1000v52H0z" opacity=".5"></path><path d="M0 0v4l500 48 500-48V0H0z" opacity=".5"></path><path d="M0 0v4l500 48 500-48V0H0z"></path></svg> */}
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "Etchy Sketchy",
      content: SITE.description,
    },
  ],
};
