import React from "react";
import { VariantFacade } from "../_internal/VariantFacade";

const registry = {
  teams: {
    8:  React.lazy(() => import("../Teams/8-Team/Expanded")),
    9:  React.lazy(() => import("../Teams/9-Team/Expanded")),
    10: React.lazy(() => import("../Teams/10-Team/Expanded")),
    11: React.lazy(() => import("../Teams/11-Team/Expanded")),
    12: React.lazy(() => import("../Teams/12-Team/Expanded")),
    13: React.lazy(() => import("../Teams/13-Team/Expanded")),
    14: React.lazy(() => import("../Teams/14-Team/Expanded")),
    16: React.lazy(() => import("../Teams/16-Team/Expanded")),
  },
  individuals: {
    8:  React.lazy(() => import("../Individuals/8-Player/Expanded")),
    9:  React.lazy(() => import("../Individuals/9-Player/Expanded")),
    10: React.lazy(() => import("../Individuals/10-Player/Expanded")),
    11: React.lazy(() => import("../Individuals/11-Player/Expanded")),
    12: React.lazy(() => import("../Individuals/12-Player/Expanded")),
    13: React.lazy(() => import("../Individuals/13-Player/Expanded")),
    14: React.lazy(() => import("../Individuals/14-Player/Expanded")),
    16: React.lazy(() => import("../Individuals/16-Player/Expanded")),
  },
};

export default VariantFacade(registry, "Expanded");
