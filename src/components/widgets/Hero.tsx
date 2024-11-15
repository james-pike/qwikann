import { component$} from "@builder.io/qwik";
import { HeroBackground } from "./HeroBackground";

// Define the component to accept a theme prop
export default component$((props: { theme?: string }) => {
  const { theme = "theme-indigo" } = props; // Default to "theme-indigo" if no theme is provided

  return (
    <div>
      {/* <Hero1 /> */}
      <section class={`relative md:-mt-[76px] not-prose flex items-center justify-center h-[80vh] ${theme}`}>
        <div class="absolute inset-0 -mt-28 overflow-hidden -z-10">
          <img
            width={600}
            height={600}
            src={HeroBackground}
            alt="Background cover image"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="relative max-w-7xl mx-auto lg:px-12 lg:gap-20 lg:mt-8 px-4 sm:px-6 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
          <div class="lg:basis-1/2 pb-10 md:pb-16">
            <h1 class="text-5xl md:text-6xl text-primary font-bold leading-tighter tracking-tighter mb-4 font-heading">
              Build A Better {""}
              <br class="hidden lg:block" />
              <span class="text-secondary">Website {""}</span>
             
            </h1>
            <p class="text-xl text-muted mb-6 text-gray-900 max-w-3xl mx-auto lg:max-w-none">
              Master the lines, embrace the quirks, and turn every twist into a masterpiece—because art's all about the journey, not the perfect line.
            </p>
            <div class="sm:max-w-md flex flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start">
              <a
                class="btn bg-primary  text-white font-bold w-full"
                href="https://aymansor.github.io/Etch-a-Sketch/"
                target="_blank"
                rel="noopener"
              >
                Start Etching
              </a>
              <button class="btn w-full bg-secondary">Learn More</button>
            </div>
          </div>
          <div class="lg:basis-1/2">
            {/* <Image
              src={CoverImage}
              alt="Background cover image"
              width={500} // adjust width to your layout needs
              height={500} // adjust height for your layout
              class="object-cover w-full h-full"
              priority="true"
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
});
