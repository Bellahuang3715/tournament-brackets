import React from "react";
import { VariantFacade } from "../_internal/VariantFacade";
const registry = {
  teams: {
    8:  React.lazy(() => import("../Teams/08-Team/CollapsedLeft")),
    9:  React.lazy(() => import("../Teams/09-Team/CollapsedLeft")),
    10: React.lazy(() => import("../Teams/10-Team/CollapsedLeft")),
    11: React.lazy(() => import("../Teams/11-Team/CollapsedLeft")),
    12: React.lazy(() => import("../Teams/12-Team/CollapsedLeft")),
    13: React.lazy(() => import("../Teams/13-Team/CollapsedLeft")),
    14: React.lazy(() => import("../Teams/14-Team/CollapsedLeft")),
    16: React.lazy(() => import("../Teams/16-Team/CollapsedLeft")),
  },
  individuals: {
    8:  React.lazy(() => import("../Individuals/08-Player/CollapsedLeft")),
    9:  React.lazy(() => import("../Individuals/09-Player/CollapsedLeft")),
    10: React.lazy(() => import("../Individuals/10-Player/CollapsedLeft")),
    11: React.lazy(() => import("../Individuals/11-Player/CollapsedLeft")),
    12: React.lazy(() => import("../Individuals/12-Player/CollapsedLeft")),
    13: React.lazy(() => import("../Individuals/13-Player/CollapsedLeft")),
    14: React.lazy(() => import("../Individuals/14-Player/CollapsedLeft")),
    16: React.lazy(() => import("../Individuals/16-Player/CollapsedLeft")),
  },
};

export default VariantFacade(registry, "CollapsedLeft");
