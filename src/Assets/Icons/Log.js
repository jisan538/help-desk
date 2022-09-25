import React from "react";
import { useLocation } from "react-router-dom";

export default function Log() {
    const { pathname } = useLocation();

    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.375 8.9375L11 14.4375L20.625 8.9375L11 3.4375L1.375 8.9375Z"
                 stroke={pathname ==="/acitivity-log" ? "#00AB55" : "#637381"} 
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M1.375 12.375L11 17.875L20.625 12.375"
                 stroke={pathname ==="/acitivity-log" ? "#00AB55" : "#637381"} 
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
