import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M18 2H6a2 2 0 0 0-2 2v18l8-4 8 4V4a2 2 0 0 0-2-2zm-7.515 12.929l-3.707-3.861L8.22 9.683l2.293 2.389 5.278-5.278 1.414 1.414-6.72 6.721z" /></svg>);