import React, { Fragment } from "react";
import { Router } from "@reach/router";
/** importing our pages */
import Tracks from "./tracks";
import Track from "./track";
import Modules from "./modules";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="/track/:trackId" />
      <Modules path="/track/:trackId/module/:moduleId" />
    </Router>
  );
}
