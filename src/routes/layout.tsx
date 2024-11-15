// src/layout.tsx
import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";
import ToggleTheme from "~/components/common/ToggleTheme";
import ToggleMenu from "~/components/common/ToggleMenu";
import IconChevronDown from "~/components/icons/IconChevronDown";
import Footer from "~/components/widgets/Footer";
import Hero from "~/components/widgets/Hero";


export default component$(() => {
  const themeColors = ["theme-indigo", "theme-red", "theme-orange", "theme-yellow", "theme-green", "theme-blue", "theme-purple", "theme-teal", "theme-pink", "theme-black"];

  // Signal to store the selected theme color
  const selectedTheme = useSignal("");
  const isScrolling = useSignal(false); // Signal to track scrolling state
  const { menu } = useContent();

  // Load theme from localStorage once component is mounted
  useVisibleTask$(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme && themeColors.includes(savedTheme)) {
      selectedTheme.value = savedTheme;
    }

    // Set up scroll event listener to track isScrolling state
    const onScroll = () => {
      isScrolling.value = window.scrollY >= 10;
    };
    window.addEventListener("scroll", onScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
    
      {/* Header */}
      <header
  id="header"
  class={`sticky top-0 z-40 ${selectedTheme.value} flex-none border-b border-gray-100 border-gray-50/0 transition-all ease-in-out duration-100 ${
    isScrolling.value
      ? "w-full md:bg-white/90 border-b border-gray-100 px-1 py-0 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-white dark:bg-slate-900 md:mx-0 md:rounded-none md:shadow-none"
      : "mx-auto lg:p-2 rounded-lg shadow-md  text-primary "
  }`}
>

        <div class="absolute inset-0"></div>
        <div class="relative text-default py-3 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
          <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
            <a class="flex items-center" href={"/etch-a-sketch/"}>
              {/* <Logo /> */}
              <div
                class={`text-2xl md:text-xl font-bold whitespace-nowrap tracking-tight ${
                  isScrolling.value
                    ? "text-primary dark:text-slate-200"
                    : "text-primary md:text-gray-900 dark:md:text-slate-200"
                }`}
              >
                Webdev.ca
              </div>
            </a>
            <div class="flex items-center md:hidden">
              <ToggleTheme iconClass={`w-6 h-6 md:w-5 md:h-5 ${isScrolling.value ? "text-gray-900 dark:text-slate-200" : "text-white"}`} />
              <ToggleMenu iconClass={`w-6 h-6 md:w-5 md:h-5 ${isScrolling.value ? "text-gray-900 dark:text-slate-200" : "text-white"}`} />



    
     
              <div class="flex mb-8">
        {/* <label for="theme-selector" class="mr-4 text-lg font-medium">
          <IconApps/>
        </label> */}
        <select
          id="theme-selector"
          class="p-2 border border-gray-300 rounded"
          value={selectedTheme.value || "theme-indigo"} // Fallback to theme-indigo if empty
          onChange$={(e) => {
            const target = e.target as HTMLSelectElement;
            const newTheme = target.value;
            selectedTheme.value = newTheme;
            localStorage.setItem("selectedTheme", newTheme); // Store selected theme
          }}
        >
          {themeColors.map((color) => (
            <option key={color} value={color}>
              {color.replace("theme-", "").charAt(0).toUpperCase() + color.slice(6)}
            </option>
          ))}
        </select>
      </div>

              
            </div>
          </div>
          <nav
            class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5"
            aria-label="Main navigation"
          >
            {menu && menu.items ? (
              <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
                {menu.items.map(({ text, href, items = [] }, key) => (
                  <li key={key} class={items.length ? "dropdown" : ""}>
                    {items.length ? (
                      <>
                        <button
                          class={`hover:text-link ${
                            isScrolling.value ? "text-gray-900 dark:text-slate-200" : "text-gray-900 dark:text-white"
                          } px-4 py-3 flex items-center`}
                        >
                          {text} <IconChevronDown class="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" />
                        </button>
                        <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-slate-800 rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl">
                          {items.map((subItem, key2) => (
                            <li key={key2}>
                              <a
                                class="first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap"
                                href={subItem.href || "#"}
                              >
                                {subItem.text || "Untitled"}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <a
                        class={`hover:text-link ${
                          isScrolling.value ? "text-gray-900 dark:text-slate-200" : "text-gray-900 dark:text-white"
                        } px-4 py-3 flex items-center`}
                        href={href || "#"}
                      >
                        {text || "Untitled"}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </nav>
          <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
            <div class="items-center flex justify-between w-full md:w-auto">
              <div class="flex">
                <ToggleTheme iconClass={`w-6 h-6 md:w-5 md:h-5 ${isScrolling.value ? "text-gray-900 dark:text-slate-200" : "text-white"}`} />
                <div class="flex mb-8">
        {/* <label for="theme-selector" class="mr-4 text-lg font-medium">
          Choose Theme:
        </label> */}
        <select
          id="theme-selector"
          class="p-2 border border-gray-300 rounded"
          value={selectedTheme.value || "theme-indigo"} // Fallback to theme-indigo if empty
          onChange$={(e) => {
            const target = e.target as HTMLSelectElement;
            const newTheme = target.value;
            selectedTheme.value = newTheme;
            localStorage.setItem("selectedTheme", newTheme); // Store selected theme
          }}
        >
          {themeColors.map((color) => (
            <option key={color} value={color}>
              {color.replace("theme-", "").charAt(0).toUpperCase() + color.slice(6)}
            </option>
          ))}
        </select>
      </div>
              </div>
              <span class="ml-4 rtl:ml-0 rtl:mr-4">
                <a
                  href="https://aymansor.github.io/Etch-a-Sketch/"
                  class="btn btn-primary ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
                >
                  Get Started
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
     
      <Hero theme={`${selectedTheme.value}`}/>
        <Slot />
     

      {/* Footer */}
      <Footer theme={`${selectedTheme.value}`}/>
    </>
  );
});
