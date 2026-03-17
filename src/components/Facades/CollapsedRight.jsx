import React from "react";
import { VariantFacade } from "../_internal/VariantFacade";

const registry = {
  teams: {
    5:  React.lazy(() => import("../Teams/05-Team/CollapsedRight")),
    6:  React.lazy(() => import("../Teams/06-Team/CollapsedRight")),
    7:  React.lazy(() => import("../Teams/07-Team/CollapsedRight")),
    8:  React.lazy(() => import("../Teams/08-Team/CollapsedRight")),
    9:  React.lazy(() => import("../Teams/09-Team/CollapsedRight")),
    10: React.lazy(() => import("../Teams/10-Team/CollapsedRight")),
    11: React.lazy(() => import("../Teams/11-Team/CollapsedRight")),
    12: React.lazy(() => import("../Teams/12-Team/CollapsedRight")),
    13: React.lazy(() => import("../Teams/13-Team/CollapsedRight")),
    14: React.lazy(() => import("../Teams/14-Team/CollapsedRight")),
    15: React.lazy(() => import("../Teams/15-Team/CollapsedRight")),
    16: React.lazy(() => import("../Teams/16-Team/CollapsedRight")),
  },
  individuals: {
    5:  React.lazy(() => import("../Individuals/05-Player/CollapsedRight")),
    6:  React.lazy(() => import("../Individuals/06-Player/CollapsedRight")),
    7:  React.lazy(() => import("../Individuals/07-Player/CollapsedRight")),
    8:  React.lazy(() => import("../Individuals/08-Player/CollapsedRight")),
    9:  React.lazy(() => import("../Individuals/09-Player/CollapsedRight")),
    10: React.lazy(() => import("../Individuals/10-Player/CollapsedRight")),
    11: React.lazy(() => import("../Individuals/11-Player/CollapsedRight")),
    12: React.lazy(() => import("../Individuals/12-Player/CollapsedRight")),
    13: React.lazy(() => import("../Individuals/13-Player/CollapsedRight")),
    14: React.lazy(() => import("../Individuals/14-Player/CollapsedRight")),
    15: React.lazy(() => import("../Individuals/15-Player/CollapsedRight")),
    16: React.lazy(() => import("../Individuals/16-Player/CollapsedRight")),
  },
};

export default VariantFacade(registry, "CollapsedRight");
