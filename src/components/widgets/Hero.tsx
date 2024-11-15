import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";// If you want to use an image or an additional background


// Define the component to accept a theme prop
export default component$((props: { theme?: string }) => {
  const { theme = "theme-yellow" } = props;
  const primaryColor = useSignal<string>("");
 // Default to "theme-indigo" if no theme is provided

 useVisibleTask$(() => {
  // Run only on the client
  if (typeof window !== "undefined") {
    const style = getComputedStyle(document.documentElement);
    const color = style.getPropertyValue("--color-primary").trim();
    primaryColor.value = color; // Update the signal with the primary color value
  }
});
  return (
    <div>
      <p>{primaryColor.value}</p>
      {/* Hero section with gradient background and theme applied */}
      <section class={`relative md:-mt-[76px] not-prose flex items-center justify-center h-[80vh] ${theme}`}>
        <div class="absolute inset-0 -mt-28 overflow-hidden -z-10">
          {/* Optionally use an image for background */}
          <img
            width={600}
            height={600}
            src={`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20485%20861%22%20preserveAspectRatio%3D%22xMidYMid%22%20width%3D%22485%22%20height%3D%22861%22%20style%3D%22shape-rendering%3A%20auto%3B%20display%3A%20block%3B%20background%3A%20rgb(255%2C%20255%2C%20255)%3B%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%20style%3D%22transform%3Atranslate(242.5px%2C430.5px)%20scale(1%2C-1)%20translate(-242.5px%2C-430.5px)%22%3E%3Cdefs%3E%3ClinearGradient%20y2%3D%221%22%20y1%3D%220%22%20x2%3D%220%22%20x1%3D%220%22%20id%3D%22lg-bk-jg6mq6wfbyj%22%3E%3Cstop%20offset%3D%220%22%20stop-opacity%3D%220%22%20stop-color%3D%22%23${primaryColor}%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.7374999999999999%22%20stop-opacity%3D%221%22%20stop-color%3D%22%23${primaryColor}%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3ClinearGradient%20y2%3D%221%22%20y1%3D%220%22%20x2%3D%220%22%20x1%3D%220%22%20id%3D%22lg-oersv4ab58c%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23${primaryColor}%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.37%22%20stop-color%3D%22%23365ebf%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23${primaryColor}%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23lg-bk-jg6mq6wfbyj)%22%20height%3D%22861%22%20width%3D%22485%22%20y%3D%220%22%20x%3D%220%22%3E%3C%2Frect%3E%3Cg%3E%3Cpath%20opacity%3D%220.4%22%20fill%3D%22url(%23lg-oersv4ab58c)%22%20d%3D%22M0%20507.98999999999995C242.5%20507.98999999999995%20242.5%20610.3629%20485%20610.3629C727.5%20610.3629%20727.5%20507.98999999999995%20970%20507.98999999999995C1212.5%20507.98999999999995%201212.5%20610.3629%201455%20610.3629C1697.5%20610.3629%201697.5%20507.98999999999995%201940%20507.98999999999995L1940%20861%20L0%20861%20Z%22%3E%3CanimateTransform%20values%3D%22-970%200%3B0%200%22%20begin%3D%220s%22%20keyTimes%3D%220%3B1%22%20repeatCount%3D%22indefinite%22%20dur%3D%2210s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fpath%3E%3CanimateTransform%20values%3D%220%200%3B0%2010%3B%200%22%20begin%3D%220s%22%20keyTimes%3D%220%3B0.5%3B1%22%20keySplines%3D%220.3%200%200.7%201%3B0.3%200%200.7%201%22%20calcMode%3D%22spline%22%20repeatCount%3D%22indefinite%22%20dur%3D%2210s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20opacity%3D%220.4%22%20fill%3D%22url(%23lg-oersv4ab58c)%22%20d%3D%22M0%20507.98999999999995C242.5%20507.98999999999995%20242.5%20610.3629%20485%20610.3629C727.5%20610.3629%20727.5%20507.98999999999995%20970%20507.98999999999995C1212.5%20507.98999999999995%201212.5%20610.3629%201455%20610.3629C1697.5%20610.3629%201697.5%20507.98999999999995%201940%20507.98999999999995L1940%20861%20L0%20861%20Z%22%3E%3CanimateTransform%20values%3D%22-970%200%3B0%200%22%20begin%3D%22-0.46666666666666673s%22%20keyTimes%3D%220%3B1%22%20repeatCount%3D%22indefinite%22%20dur%3D%2210s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fpath%3E%3CanimateTransform%20values%3D%220%200%3B0%2010%3B%200%22%20begin%3D%22-3.3333333333333335s%22%20keyTimes%3D%220%3B0.5%3B1%22%20keySplines%3D%220.3%200%200.7%201%3B0.3%200%200.7%201%22%20calcMode%3D%22spline%22%20repeatCount%3D%22indefinite%22%20dur%3D%2210s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20opacity%3D%220.4%22%20fill%3D%22url(%23lg-oersv4ab58c)%22%20d%3D%22M0%20507.98999999999995C242.5%20507.98999999999995%20242.5%20610.3629%20485%20610.3629C727.5%20610.3629%20727.5%20507.98999999999995%20970%20507.98999999999995C1212.5%20507.98999999999995%201212.5%20610.3629%201455%20610.3629C1697.5%20610.3629%201697.5%20507.98999999999995%201940%20507.98999999999995L1940%20861%20L0%20861%20Z%22%3E%3CanimateTransform%20values%3D%22-970%200%3B0%200%22%20begin%3D%22-0.9333333333333335s%22%20keyTimes%3D%220%3B1%22%20repeatCount%3D%22indefinite%22%20dur%3D%2210s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fpath%3E%3CanimateTransform%20values%3D%220%200%3B0%2010%3B%200%22%20begin%3D%22-6.666666666666667s%22%20keyTimes%3D%220%3B0.5%3B1%22%20keySplines%3D%220.3%200%200.7%201%3B0.3%200%200.7%201%22%20calcMode%3D%22spline%22%20repeatCount%3D%22indefinite%22%20dur%3D%2210s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fg%3E%3C!--%20%5Bldio%5D%20generated%20by%20https%3A%2F%2Floading.io%20--%3E%3C%2Fsvg%3E`} // If you prefer a static image for background
            alt="Background cover image"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="relative max-w-7xl mx-auto lg:px-12 lg:gap-20 lg:mt-8 px-4 sm:px-6 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
          <div class="lg:basis-1/2 pb-40 md:pb-16">
            <h1 class="text-5xl md:text-6xl text-primary font-bold leading-tighter tracking-tighter mb-4 font-heading">
              Build A Better {""}
              <br class="hidden lg:block" />
              <span class="text-accent">Website Today {""}</span>
            </h1>
            <p class="text-xl text-muted mb-6 pt-1 text-primary max-w-3xl mx-auto lg:max-w-none">
              Master the lines, embrace the quirks, and turn every twist into a masterpiece—because art's all about the journey, not the perfect line.
            </p>
            <div class="sm:max-w-md flex flex-col pt-1 sm:flex-row sm:justify-center gap-4 lg:justify-start">
              <a
                class="btn bg-primary p-3 text-white font-bold w-full"
                href="https://aymansor.github.io/Etch-a-Sketch/"
                target="_blank"
                rel="noopener"
              >
                Start Etching
              </a>
              <button class="btn w-full p-3 bg-secondary">Learn More</button>
            </div>
          </div>
          <div class="lg:basis-1/2">
            {/* Optionally add another image */}
          </div>
        </div>
      </section>
    </div>
  );
});
