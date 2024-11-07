"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GamesIcon from "@mui/icons-material/Games";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { grey } from "@mui/material/colors";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="text-white" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding className="flex justify-end">
          <Button onClick={toggleDrawer(true)} className="px-0">
            <CloseIcon sx={{ color: grey[50] }} />
          </Button>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/")}>
            <ListItemIcon>
              <HomeIcon sx={{ color: grey[50] }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/game")}>
            <ListItemIcon>
              <GamesIcon sx={{ color: grey[50] }} />
            </ListItemIcon>
            <ListItemText primary="Play Game" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  if (session)
    return (
      <div className="flex justify-between py-2">
        <div>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: grey[50] }} />
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
        <div className="flex items-center">
          <p className="px-3 py-1 border border-gray-800 bg-gray-900 rounded-lg">{session.user?.email}</p>
          <Button onClick={() => signOut()}>
            <LogoutIcon sx={{ color: grey[50] }} />
          </Button>
        </div>
      </div>
    );
}
