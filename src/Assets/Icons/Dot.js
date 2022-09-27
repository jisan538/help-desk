import React from "react";
import { useLocation } from "react-router-dom";

export default function Dot() {
    const { pathname } = useLocation();
    return (
        <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="4" cy="4" r="4" fill={pathname ==="/priority" ? "#00AB55" : "#637381"} />
        </svg>
    );
}
