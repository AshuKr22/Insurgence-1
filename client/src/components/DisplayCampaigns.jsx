
import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FundCard from "./FundCard";
import { loader } from "../assets";
import { fakeCampaigns } from "./fakeCampaigns";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  // Combine stored campaigns with fake campaigns
  const allCampaigns = [...campaigns, ...fakeCampaigns];

  return (
    <div className="p-4">
      <h1 className="font-epilogue font-semibold text-[18px] text-orange-500 text-left">
        {title} ({allCampaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}

        {!isLoading && allCampaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-gray-400">
            No campaigns found
          </p>
        )}

        {!isLoading &&
          allCampaigns.length > 0 &&
          allCampaigns.map((campaign) => (
            <FundCard
              key={uuidv4()}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import FundCard from "./FundCard";
// import { loader } from "../assets";

// const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
//   const navigate = useNavigate();

//   const handleNavigate = (campaign) => {
//     navigate(`/campaign-details/${campaign.title}`, { state: campaign });
//   };

//   return (
//     <div className="p-4">
//       <h1 className="font-epilogue font-semibold text-[18px] text-orange-500 text-left">
//         {title} ({campaigns.length})
//       </h1>

//       <div className="flex flex-wrap mt-[20px] gap-[26px]">
//         {isLoading && (
//           <img
//             src={loader}
//             alt="loader"
//             className="w-[100px] h-[100px] object-contain"
//           />
//         )}

//         {!isLoading && campaigns.length === 0 && (
//           <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-gray-400">
//             You have not created any campaigns yet
//           </p>
//         )}

//         {!isLoading &&
//           campaigns.length > 0 &&
//           campaigns.map((campaign) => (
//             <FundCard
//               key={uuidv4()}
//               {...campaign}
//               handleClick={() => handleNavigate(campaign)}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default DisplayCampaigns;
