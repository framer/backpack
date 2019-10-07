import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 4a8 8 0 1 1-8 8 8 8 0 0 1 8-8m0-2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 10.41l3.89 3.89a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-3.3-3.3V8a1 1 0 0 0-1-1 1 1 0 0 0-1 1z" /></svg>);