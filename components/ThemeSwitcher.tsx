"use client"
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) return;

  return (
    <div className="">
      <Switch
        defaultSelected
        color="primary"
        onValueChange={() => {
          if (theme == 'light') setTheme('dark');
          if (theme == 'dark') setTheme('light');
        }}
      >
        Dark mode
      </Switch>
    </div>
  );
}
