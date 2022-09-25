import Report from "../Assets/Icons/Report";
import Ticket from "../Assets/Icons/Ticket";
import Log from "../Assets/Icons/Log";
// import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
// import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";

const navConfig = [
    {
        id: 1,
        title: "Tickets",
        link: "/",
        icon: <Ticket />,
    },
    {
        id: 2,
        title: "Report",
        link: "/report",
        icon: <Report />,
    },
    {
        id: 3,
        title: "Acitivity Log",
        link: "/acitivity-log",
        icon: <Log/>,
    },
];


export default navConfig;
