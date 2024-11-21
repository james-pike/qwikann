import { component$, useSignal } from "@builder.io/qwik";
import { Popover } from "@qwik-ui/headless";
import IconApps from "../icons/IconApps";
import { useTheme } from "~/lib/provider";

interface ItemProps {
  iconClass?: string;
}

const themes = [
  { name: "dark-green", color: "bg-green-500" },
  { name: "light-green", color: "bg-green-500" },
  { name: "dark-blue", color: "bg-blue-500" },
  { name: "light-blue", color: "bg-blue-500" },
  { name: "dark-red", color: "bg-red-500" },
  { name: "light-red", color: "bg-red-500" },
  { name: "dark-purple", color: "bg-purple-500" },
  { name: "light-purple", color: "bg-violet-500" },
];

export default component$((props: ItemProps) => {
  const { iconClass } = props;

  const { themeSig } = useTheme();
  const isOpen = useSignal(false); // Signal to track popover open state

  const togglePopover = () => {
    isOpen.value = !isOpen.value; // Toggle the open state
  };

  const closePopover = () => {
    isOpen.value = false; // Close the popover
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div
          class="px-4 py-2 font-medium text-white bg-primary rounded-md cursor-pointer"
          onClick$={togglePopover}
        >
          <IconApps class={iconClass} />
        </div>
      </Popover.Trigger>
      {isOpen.value && (
        <Popover.Panel>
          <div class="grid gap-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md overflow-hidden">
            <h4 class="font-medium text-lg">Select a Theme</h4>
            <div class="grid grid-cols-3 gap-2">
              {themes.map((theme) => (
                <div
                  key={theme.name}
                  class={`w-16 h-16 rounded-md ${theme.color} ${
                    themeSig.value === theme.name
                      ? "ring-2 ring-offset-2 ring-black"
                      : ""
                  }`}
                  onClick$={() => {
                    themeSig.value = theme.name; // Set the theme
                    closePopover(); // Close the popover
                  }}
                  aria-label={`Select ${theme.name} theme`}
                />
              ))}
            </div>
          </div>
        </Popover.Panel>
      )}
    </Popover.Root>
  );
});
