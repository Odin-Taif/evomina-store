"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Filter from "../../filters/Filter";
import { BsSliders2Vertical } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
  selectedCategories: any;
  setSelectedCategories: any;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        <Filter
          selectedCategories={props.selectedCategories}
          setSelectedCategories={props.setSelectedCategories}
        />
      </List>
    </div>
  );
  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <div className="flex flex-row w-full space-x-4 mx-auto my-4 relative text-black bg-gray-100 rounded-lg">
        <div className="flex w-full items-center bg-gray-100 rounded-lg">
          <input
            type="text"
            className="outline-none w-full bg-transparent px-4 caret-amber-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
            placeholder="Search"
            autoComplete="false"
          />
          <button>
            <BiSearch size={20} className="opacity-50" />
          </button>
        </div>
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <BsSliders2Vertical size={20} className="text-neutral-600" />
          </IconButton>
        </div>
      </div>

      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="temporary"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
