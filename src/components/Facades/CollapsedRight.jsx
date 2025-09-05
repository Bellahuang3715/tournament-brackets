import React from "react";
import VariantFacade from "../_internal/VariantFacade";

const registry = {
  teams: {
    8:  React.lazy(() => import("../Teams/8-Team/CollapsedRight")),
    9:  React.lazy(() => import("../Teams/9-Team/CollapsedRight")),
    10: React.lazy(() => import("../Teams/10-Team/CollapsedRight")),
    11: React.lazy(() => import("../Teams/11-Team/CollapsedRight")),
    12: React.lazy(() => import("../Teams/12-Team/CollapsedRight")),
    13: React.lazy(() => import("../Teams/13-Team/CollapsedRight")),
    14: React.lazy(() => import("../Teams/14-Team/CollapsedRight")),
    16: React.lazy(() => import("../Teams/16-Team/CollapsedRight")),
  },
  individuals: {
    8:  React.lazy(() => import("../Individuals/8-Player/CollapsedRight")),
    9:  React.lazy(() => import("../Individuals/9-Player/CollapsedRight")),
    10: React.lazy(() => import("../Individuals/10-Player/CollapsedRight")),
    11: React.lazy(() => import("../Individuals/11-Player/CollapsedRight")),
    12: React.lazy(() => import("../Individuals/12-Player/CollapsedRight")),
    13: React.lazy(() => import("../Individuals/13-Player/CollapsedRight")),
    14: React.lazy(() => import("../Individuals/14-Player/CollapsedRight")),
    16: React.lazy(() => import("../Individuals/10-Player/CollapsedRight")),
  },
};

export default VariantFacade(registry, "CollapsedRight");
