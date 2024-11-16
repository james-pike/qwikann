// themeColors.ts
export const themeColors = {
    "theme-blue": "147efb", // Base color for theme-blue
    "theme-black": "000000", // Base color for theme-black
    "theme-green": "1F7735", // Base color for theme-green (Deep Forest Green)
    "theme-indigo": "5856d6", // Base color for theme-indigo
    "theme-orange": "fd9426", // Base color for theme-orange
    "theme-pink": "c22542", // Base color for theme-pink (Deep Pink)
    "theme-purple": "8585ff", // Base color for theme-purple
    "theme-red": "fc3d39", // Base color for theme-red
    "theme-teal": "4191b3", // Base color for theme-teal (Deep Teal)
    "theme-yellow": "fecb2e", // Base color for theme-yellow
  } as const; // Use `as const` to ensure literal types for keys and values
  
  export type Theme = keyof typeof themeColors; // Type for theme keys
  