import React, { Fragment } from "react";
import { Router } from "@reach/router";
/** importing our pages */
import Tracks from "./tracks.js";
import Track from "./track.js";
import Modules from "./modules.js";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="/track/:trackId" />
      <Modules path="/track/:trackId/module/:moduleId" />
    </Router>
  );
}
