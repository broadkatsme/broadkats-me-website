import React from "react";

const ThreeCircleIcon = ({ fill = "#ffffff", height = "15", width = "15" }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="ellipsis-h"
    class="svg-inline--fa fa-ellipsis-h fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={height}
    width={width}
  >
    <path
      fill={fill}
      d="M328 80c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
    ></path>
    <path
      fill={fill}
      d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
    ></path>
    <path
      fill={fill}
      d="M328 432c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
    ></path>
  </svg>
);

export default ThreeCircleIcon;
