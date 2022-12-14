import React from "react";
import { useLocation } from "react-router-dom";

export default function Report() {
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
                d="M13.75 3.4375H17.1875C17.3698 3.4375 17.5447 3.50993 17.6736 3.63886C17.8026 3.7678 17.875 3.94266 17.875 4.125V18.5625C17.875 18.7448 17.8026 18.9197 17.6736 19.0486C17.5447 19.1776 17.3698 19.25 17.1875 19.25H4.8125C4.63016 19.25 4.4553 19.1776 4.32636 19.0486C4.19743 18.9197 4.125 18.7448 4.125 18.5625V4.125C4.125 3.94266 4.19743 3.7678 4.32636 3.63886C4.4553 3.50993 4.63016 3.4375 4.8125 3.4375H8.25"
                stroke={pathname ==="/report" ? "#00AB55" : "#637381"} 
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M7.5625 6.1875V5.5C7.5625 4.58832 7.92466 3.71398 8.56932 3.06932C9.21398 2.42466 10.0883 2.0625 11 2.0625C11.9117 2.0625 12.786 2.42466 13.4307 3.06932C14.0753 3.71398 14.4375 4.58832 14.4375 5.5V6.1875H7.5625Z"
                stroke={pathname ==="/report" ? "#00AB55" : "#637381"} 
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
