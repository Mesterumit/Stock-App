import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StarsIcon from "@mui/icons-material/Stars";
import CategoryIcon from "@mui/icons-material/Category";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MuiDrawer from "@mui/material/Drawer";
import {
  styled,
  Toolbar,
  ListItemButton,
  List,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const drawerWidth = 240;
const menu = [
  { title: "Dahboard", icon: <DashboardIcon />, path: "/stock/dashboard" },
  { title: "Products", icon: <InventoryIcon />, path: "/stock/products" },
  { title: "Sales", icon: <ReceiptIcon />, path: "/stock/sales" },
  { title: "Purchases", icon: <ShoppingCartIcon />, path: "/stock/purchases" },
  { title: "Firms", icon: <AccountBalanceIcon />, path: "/stock/firms" },
  { title: "Brands", icon: <StarsIcon />, path: "/stock/brands" },
  { title: "Categories", icon: <CategoryIcon />, path: "/stock/categories" },
];

const Drawer = styled(MuiDrawer)(({theme,open})=>({
    // "Drawer .MuiDrawer-paper" and "& .MuiDrawer-paper" 
    // are essentially doing the same thing in the context 
    // of your styled-components code. Both selectors target the
    //  ".MuiDrawer-paper" element that is a descendant(child) of the "Drawer"
    //   component and apply styles to it. The "&" symbol is a special 
    //   syntax used in styled-components to refer to the component itself,
    //    so "& .MuiDrawer-paper" is a way to style the ".MuiDrawer-paper" 
    //    element within the "Drawer" component.
    "& .MuiDrawer-paper" :{
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        backgroundColor: "#1976D2",
        boxSizing: "border-box",
        transition: theme.transitions.create("width"),
        ...(!open && {
          width: theme.spacing(7),
          overflowX: "hidden",
          transition: theme.transitions.create("width"),
        }),
      },
    })); 