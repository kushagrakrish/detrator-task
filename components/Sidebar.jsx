"use client";

import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "../components/sidebar.css";

const Sidebar = ({ children }) => {
  return (
    <>
      <div className='sidebar-container'>
        {/* Sidebar2 */}
        <div className='sidebar-2'>
          <Avatar
            alt='Remy Sharp'
            src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
            sx={{ width: 56, height: 56 }}
            style={{ margin: "10px auto" }}
          />
          <h1 className='username'>Kushagra Krishna</h1>
        </div>

        <div className='sidebar-1'>
          <List>
            {["Home", "Search", "Post", "Live"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                style={{ color: "#1d0075", fontWeight: "600" }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "#1d0075", fontWeight: "600" }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ flexGrow: 1 }} />
          <ListItem disablePadding>
            <ListItemButton style={{ color: "#1d0075", fontWeight: "600" }}>
              <ListItemIcon>
                <InboxIcon style={{ color: "#1d0075", fontWeight: "600" }} />
              </ListItemIcon>
              <ListItemText primary='Log Out' />
            </ListItemButton>
          </ListItem>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Sidebar;
