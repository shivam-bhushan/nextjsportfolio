import React, { useEffect, useState } from "react";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useTheme } from "next-themes";

const Cursor = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show after mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const getCustomColor = () => {
    // Use resolvedTheme for more reliable theme detection
    const currentTheme = resolvedTheme || theme;
    if (currentTheme === "dark") {
      return "#fff";
    } else if (currentTheme === "light") {
      return "#000";
    }
    // Default fallback color
    return "#000";
  };

  // Don't render until mounted and theme is resolved
  if (!mounted || !resolvedTheme) {
    return null;
  }
  
  return (
    <CustomCursor
      key={resolvedTheme} // Force remount when theme changes
      targets={[".link"]}
      customClass="custom-cursor"
      dimensions={30}
      fill={getCustomColor()}
      smoothness={{
        movement: 0.2,
        scale: 0.1,
        opacity: 0.2,
      }}
      targetOpacity={0.5}
      targetScale={2}
    />
  );
};

export default Cursor;
