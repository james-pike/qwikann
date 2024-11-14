import { $, component$, useStore, useTask$ } from "@builder.io/qwik";

export default component$(() => {
  // Initialize store with values from localStorage, default to blue color theme
  const store = useStore({
    color: (typeof window !== "undefined" && window.localStorage.getItem("color")) || "", // Default to blue
  });

  // Wrap the setColor function inside $() to make it serializable
  const setColor = $((newColor: string) => {
    store.color = newColor;
    window.localStorage.setItem("color", newColor); // Save color to localStorage
  });

  // Apply the selected color theme to the document on initial render or on page load
  useTask$(() => {
    // Get the color theme from localStorage when the component is mounted
    const savedColor = typeof window !== "undefined" ? window.localStorage.getItem("color") : "blue";
    store.color = savedColor || "blue"; // If no saved color, default to "blue"

    // Apply the saved color to the document
    if (typeof window !== "undefined") {
      // Remove old theme classes (theme-blue, theme-red, etc.) to avoid conflicts
      document.documentElement.classList.remove(
        "theme-blue",
        "theme-red",
        "theme-green",
        "theme-yellow",
        "theme-purple",
        "theme-black",
        "theme-orange",
        "theme-pink",
        "theme-cyan",
        "theme-teal",
        "theme-indigo"
      );
      
      // Add the new color class from the store
      document.documentElement.classList.add(`theme-${store.color}`);
    }
  });

  return (
    <div>
      {/* Color Change Buttons */}
      <button onClick$={() => setColor("blue")}>Blue Theme</button>
      <button onClick$={() => setColor("red")}>Red Theme</button>
      <button onClick$={() => setColor("green")}>Green Theme</button>
      <button onClick$={() => setColor("yellow")}>Yellow Theme</button>
      <button onClick$={() => setColor("purple")}>Purple Theme</button>

      <div class={`color-${store.color}`}>
        <p>The current color theme is {store.color}.</p>
      </div>
    </div>
  );
});
