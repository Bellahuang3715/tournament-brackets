import React, { Suspense } from "react";
import themeStyles from "../bracketTheme.module.css";

export function VariantFacade(registry, displayName) {
  const Facade = ({ entity = "teams", size, theme = "light", ...props }) => {
    const key = String(entity).toLowerCase();
    const Comp = registry[key]?.[size];
    if (!Comp) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`${displayName}: no variant for entity="${entity}" size=${size}`);
      }
      return null;
    }
    const resolvedTheme = theme === "dark" ? "dark" : "light";
    return (
      <div
        className={themeStyles.themeRoot}
        data-theme={resolvedTheme}
        data-bracket-theme={resolvedTheme}
      >
        <Suspense fallback={null}>
          <Comp {...props} theme={resolvedTheme} />
        </Suspense>
      </div>
    );
  };
  Facade.displayName = displayName;

  // Ergonomic sugar
  Facade.Teams = (p) => <Facade entity="teams" {...p} />;
  Facade.Individuals = (p) => <Facade entity="individuals" {...p} />;

  return Facade;
}
