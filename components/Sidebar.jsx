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
            src='/static/images/avatar/1.jpg'
            style={{ margin: "10px auto" }}
          />
          <h1 className='username'>Kushagra Krishna</h1>
        </div>

        <div className='sidebar-1'>
          <List>
            {["Home", "Search", "Post", "Live"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ flexGrow: 1 }} />
          <List>
            {["Log Out"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Sidebar;
