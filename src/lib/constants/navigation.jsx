import { Box, Calendar, Grid, Grid2X2, Grid2x2XIcon, HelpCircle, Store, Target } from "lucide-react";
import { 
    DashboardIcon, 
    FinanceIcon, 
    FiSettings, 
    GoalsIcon, 
    HelpIcon, 
    MessageIcon, 
    ProductsIcon, 
    SalesInsightsIcon, 
    SalesOrdersIcon, 
    StoreIcon, 
    ToDoIcon
} from "../../assets";
import { FiCalendar, FiHelpCircle, FiMessageCircle, FiMessageSquare, FiPackage } from "react-icons/fi";
import { BiBarChart, BiBarChartAlt, BiBarChartAlt2, BiCalendar, BiCalendarAlt, BiChart, BiChat, BiGrid, BiGridAlt, BiPackage, BiSolidGridAlt, BiStore, BiStoreAlt } from "react-icons/bi";
import { HiChat, HiChatAlt, HiChatAlt2 } from "react-icons/hi";
import { BsChat, BsBoxSeam, BsChatDots, BsChatSquare, BsChatSquareDots, BsGrid, BsGridFill, BsCalendar, BsCalendar2 } from "react-icons/bs";
import { FaCalendar, FaCalendarAlt, FaFileContract, FaStore, FaStoreAlt } from "react-icons/fa";
import { IoChatboxEllipses, IoChatboxEllipsesOutline, IoStorefront, IoStorefrontOutline } from "react-icons/io5";
import { MdDashboard, MdInsights, MdStorefront } from "react-icons/md";
import { TbDashboard, TbFileDollar, TbLayoutDashboard, TbTarget, TbTargetArrow } from "react-icons/tb";
import { RiDashboardFill, RiGridFill } from "react-icons/ri";
import { GiTargetArrows, GiTargetShot } from "react-icons/gi";
import { CiCalendar, CiChat1, CiChat2 } from "react-icons/ci";
import { PiGridFourFill, PiStorefront } from "react-icons/pi"
import { CgCalendar, CgCalendarTwo, CgInsights } from "react-icons/cg";
import { FcPackage } from "react-icons/fc";
import { LuFileCog } from "react-icons/lu";

export const MAIN_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dasboard',
        path: '/dashboard',
        icon: <PiGridFourFill />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/dashboard/products',
        icon: <FiPackage />
    },
    {
        key: 'store',
        label: 'Store',
        path: '/dashboard/store',
        icon: <BiStore />
    },
    {
        key: 'finance',
        label: 'Finance',
        path: '/dashboard/finance',
        icon: <TbFileDollar />
    },
    {
        key: 'message',
        label: 'Messages',
        path: '/dashboard/message',
        icon: <IoChatboxEllipsesOutline />
    },
    {
        key: 'sales-orders',
        label: 'Sales Orders',
        path: '/dashboard/sales-orders',
        icon: <LuFileCog />
    },
    {
        key: 'sales-insights',
        label: 'Sales Insights',
        path: '/dashboard/sales-insights',
        icon: <BiBarChartAlt2 />
    },
    {
        key: 'todo',
        label: 'To do list',
        path: '/dashboard/todo',
        icon: <BiCalendarAlt />
    },
    {
        key: 'goals',
        label: 'Goals & Targets',
        path: '/dashboard/goals',
        icon: <TbTargetArrow />
    },
]

export const BOTTOM_SIDEBAR_LINKS = [
    {
        key: 'help',
        label: 'Help Center',
        path: '/help',
        icon: <FiHelpCircle />
    },
    {
        key: 'settings',
        label: 'Settings',
        path: '/dashboard/settings',
        icon: <FiSettings />
    }
]