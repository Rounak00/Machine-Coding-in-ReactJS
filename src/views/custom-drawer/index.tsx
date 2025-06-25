import React, { useState } from "react";
import Drawer from "./Drawer";

const CustomDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="p-8">
      <button
        onClick={toggleDrawer}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Open Drawer
      </button>

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
          <p>This is the drawer content that slides in from the right.</p>
          <button
            onClick={toggleDrawer}
            className="mt-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default CustomDrawer;
