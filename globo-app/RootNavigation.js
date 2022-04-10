import * as React from "react";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  // console.log("Navigate to name " + name);
  // console.log("Navigate has params: ");
  // console.log(params);
  navigationRef.current?.navigate(name, params);
}
