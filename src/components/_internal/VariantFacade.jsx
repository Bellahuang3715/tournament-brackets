import React, { Suspense } from "react";

export function VariantFacade(registry, displayName) {
  const Facade = ({ entity = "teams", size, ...props }) => {
    const key = String(entity).toLowerCase();
    const Comp = registry[key]?.[size];
    if (!Comp) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`${displayName}: no variant for entity="${entity}" size=${size}`);
      }
      return null;
    }
    return (
      <Suspense fallback={null}>
        <Comp {...props} />
      </Suspense>
    );
  };
  Facade.displayName = displayName;

  // Ergonomic sugar
  Facade.Teams = (p) => <Facade entity="teams" {...p} />;
  Facade.Individuals = (p) => <Facade entity="individuals" {...p} />;

  return Facade;
}
