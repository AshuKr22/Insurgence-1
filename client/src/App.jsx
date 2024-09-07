// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import { Sidebar, Navbar } from "./components";
// import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";

// const App = () => {
//   return (
//     <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
//       {/* Main content first */}
//       <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pl-5">
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/create-campaign" element={<CreateCampaign />} />
//           <Route path="/campaign-details/:id" element={<CampaignDetails />} />
//         </Routes>
//       </div>

//       {/* Sidebar on the right */}
//       <div className="sm:flex hidden ml-10 relative">
//         <Sidebar />
//       </div>
//     </div>
//   );
// };

// export default App;


import React from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      {/* Main content */}
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pl-5">
        {/* Animated Navbar */}
        <div
        // Animation config
        >
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>

      {/* Sidebar on the right */}
      <motion.div
        initial={{ x: "100vw" }} // Navbar starts from the right outside the viewport
        animate={{ x: 0 }} // Animates to its final position
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
          duration: 0.5,
        }}
        className="sm:flex hidden ml-10 relative"
      >
        <Sidebar />
      </motion.div>
    </div>
  );
};

export default App;
