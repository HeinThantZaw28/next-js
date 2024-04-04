import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdExitToApp,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";

export const menuItems = [
  {
    id: "1",
    title: "Pages",
    lists: [
      {
        id: "1.1",
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        id: "1.2",
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        id: "1.3",
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        id: "1.4",
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    id: "2",
    title: "Analytics",
    lists: [
      {
        id: "2.1",
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        id: "2.2",
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        id: "2.3",
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    id: "3",
    title: "User",
    lists: [
      {
        id: "3.1",
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        id: "3.2",
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
      {
        id: "3.3",
        title: "Logout",
        icon: <MdExitToApp />,
      },
    ],
  },
];

export const isAdmin = [
  { id: 1, label: "Yes", value: "yes" },
  { id: 2, label: "No", value: "no" },
];
export const isActive = [
  { id: 1, label: "Yes", value: "yes" },
  { id: 2, label: "No", value: "no" },
];
