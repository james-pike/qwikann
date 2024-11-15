import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import IconTwitter from "~/components/icons/IconTwitter"
import IconInstagram from "~/components/icons/IconInstagram"
import IconFacebook from "~/components/icons/IconFacebook"
import IconGithub from "~/components/icons/IconGithub"


export default component$((props: { theme?: string }) => {
  const { theme = "theme-indigo" } = props; // Default to "theme-indigo" if no theme is provided
  const links = [
    {
      title: "Etch Features",
      items: [
        { title: "Knob Precision", href: "#" },
        { title: "Shake to Erase", href: "#" },
        { title: "Accidental Squiggles", href: "#" },
        { title: "One-of-a-Kind Art", href: "#" },
      ],
    },
    {
      title: "Etch Platform",
      items: [
        { title: "Left Knob API", href: "#" },
        { title: "Right Knob API", href: "#" },
        { title: "Etch Hub", href: "#" },
        { title: "Shake Mode", href: "#" },
      ],
    },
    {
      title: "Support Center",
      items: [
        { title: "User Manual", href: "#" },
        { title: "Etch Artists Forum", href: "#" },
        { title: "Pro Tips", href: "#" },
        { title: "Etch Skills", href: "#" },
      ],
    },
    {
      title: "The Etch Team",
      items: [
        { title: "Our Story", href: "#" },
        { title: "Etch Blog", href: "#" },
        { title: "Join the Etch Team", href: "#" },
        { title: "Media", href: "#" },
      ],
    },
  ]

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "#" },
    { label: "Instagram", icon: IconInstagram, href: "#" },
    { label: "Facebook", icon: IconFacebook, href: "#" },
    {
      label: "Github",
      icon: IconGithub,
      href: "#",
    },
  ];

  return (
    <footer class={`py-3 bg-gradient-to-r from-primary-300 via-pink-200 to-red-200 px-3 ${theme}`}>
      <div class="max-w-7xl mx-auto px-6 bg-accent dark:bg-gray-900 rounded-lg shadow-lg">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 pt-8 pb-2 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-2">
        
              <Link class="inline-block font-bold text-xl" href={"#"}>
                Etchy Sketchy
              </Link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Scribble your way through creativity! Master the lines, embrace the quirks, and turn every twist into a masterpiece—because art’s all about the journey, not the perfect line.
            </div>
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="text-gray-800 dark:text-gray-300 font-medium mb-2">{title}</div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class="mb-2">
                      <Link
                        class="text-gray-600 hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
          <ul class="flex mb-2 md:order-1 -ml-2 md:ml-4 md:mb-0">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
            ))}
          </ul>

          <div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
            <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
            Made with <span class="text-black">♥</span> by{" "}
            <a class="text-gray-900 underline dark:text-gray-200" href="#">
              {" "}
              Webdev.ca
            </a>{" "}
            <span class="hidden md:inline"> · All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
});