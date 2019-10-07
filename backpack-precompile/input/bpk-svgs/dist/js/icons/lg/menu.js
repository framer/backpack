import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M20 8H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zm1 4c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1zm0 5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1z" /></svg>);