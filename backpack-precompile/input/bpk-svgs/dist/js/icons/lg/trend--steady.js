import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M21.484 11.496l-5.258-3.035a.872.872 0 0 0-1.307.755v1.546l-11.4-.035h-.006a1.5 1.5 0 0 0-.005 3l11.41.035v1.525a.872.872 0 0 0 1.308.755l5.258-3.036a.872.872 0 0 0 0-1.51z" /></svg>);