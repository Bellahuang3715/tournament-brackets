import React from "react";
import { VariantFacade } from "../_internal/VariantFacade";

const registry = {
  teams: {
    2:  React.lazy(() => import("../Teams/02-Team/Expanded")),
    4:  React.lazy(() => import("../Teams/04-Team/Expanded")),
    5:  React.lazy(() => import("../Teams/05-Team/Expanded")),
    6:  React.lazy(() => import("../Teams/06-Team/Expanded")),
    7:  React.lazy(() => import("../Teams/07-Team/Expanded")),
    8:  React.lazy(() => import("../Teams/08-Team/Expanded")),
    9:  React.lazy(() => import("../Teams/09-Team/Expanded")),
    10: React.lazy(() => import("../Teams/10-Team/Expanded")),
    11: React.lazy(() => import("../Teams/11-Team/Expanded")),
    12: React.lazy(() => import("../Teams/12-Team/Expanded")),
    13: React.lazy(() => import("../Teams/13-Team/Expanded")),
    14: React.lazy(() => import("../Teams/14-Team/Expanded")),
    15: React.lazy(() => import("../Teams/15-Team/Expanded")),
    16: React.lazy(() => import("../Teams/16-Team/Expanded")),
  },
  individuals: {
    2:  React.lazy(() => import("../Individuals/02-Player/Expanded")),
    4:  React.lazy(() => import("../Individuals/04-Player/Expanded")),
    5:  React.lazy(() => import("../Individuals/05-Player/Expanded")),
    6:  React.lazy(() => import("../Individuals/06-Player/Expanded")),
    7:  React.lazy(() => import("../Individuals/07-Player/Expanded")),
    8:  React.lazy(() => import("../Individuals/08-Player/Expanded")),
    9:  React.lazy(() => import("../Individuals/09-Player/Expanded")),
    10: React.lazy(() => import("../Individuals/10-Player/Expanded")),
    11: React.lazy(() => import("../Individuals/11-Player/Expanded")),
    12: React.lazy(() => import("../Individuals/12-Player/Expanded")),
    13: React.lazy(() => import("../Individuals/13-Player/Expanded")),
    14: React.lazy(() => import("../Individuals/14-Player/Expanded")),
    15: React.lazy(() => import("../Individuals/15-Player/Expanded")),
    16: React.lazy(() => import("../Individuals/16-Player/Expanded")),
  },
};

export default VariantFacade(registry, "Expanded");
