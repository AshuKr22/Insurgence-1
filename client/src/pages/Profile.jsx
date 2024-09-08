import React from 'react';
import { Card } from '../components/Card';
import { CardContent } from '../components/Card';
import { CardHeader } from '../components/Card';
import { CardTitle } from '../components/Card';
import p1 from '../components/camp/p1.jpeg';

import { Avatar } from '../components/Avatar';
import { AvatarFallback } from '../components/Avatar';
import { AvatarImage } from '../components/Avatar';
import { Wallet, Link } from 'lucide-react';

const Profile = () => {
  const profileData = {
    name: "John Doe",
    walletAddress: "0x1234567890abcdef",
    campaignsStarted: [
      {
        name: "Acme Fundraiser",
        address: "0x1234567890abcdef",
        raised: 25000,
        goal: 50000,
        backers: 125
      }
    ],
    campaignsInvested: [
      {
        name: "Tech Innovation Fund",
        address: "0xfedcba0987654321",
        invested: 1000,
        raised: 75000,
        backers: 250,
        daysLeft: 60
      }
    ]
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      <Card className="w-full bg-gray-800 text-white mb-6">
        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
          <Avatar className="h-20 w-20">
            <AvatarImage src={p1} alt={profileData.name} />
            
          </Avatar>
          <div>
            <CardTitle>{profileData.name}</CardTitle>
            <p className="text-sm text-gray-400">{profileData.walletAddress}</p>
          </div>
          <div className="ml-auto flex space-x-2">
            <span className="flex items-center text-orange-500"><Wallet className="mr-1" size={16} /> ETH</span>
            <button className="px-3 py-1 bg-orange-500 text-white rounded-md">Wallet</button>
          </div>
        </CardHeader>
      </Card>

      <h2 className="text-xl font-semibold mb-4">Campaigns Started</h2>
      {profileData.campaignsStarted.map((campaign, index) => (
        <Card key={index} className="w-full bg-gray-800 text-white mb-4">
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              <Link className="mr-2 text-orange-500" size={20} />
              <h3 className="text-lg font-semibold">{campaign.name}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">{campaign.address}</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-400">Raised</p>
                <p className="text-2xl font-bold text-orange-500">${campaign.raised.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Goal</p>
                <p className="text-2xl font-bold">${campaign.goal.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Backers</p>
                <p className="text-2xl font-bold">{campaign.backers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <h2 className="text-xl font-semibold mb-4 mt-8">Campaigns Invested</h2>
      {profileData.campaignsInvested.map((campaign, index) => (
        <Card key={index} className="w-full bg-gray-800 text-white mb-4">
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              <Link className="mr-2 text-orange-500" size={20} />
              <h3 className="text-lg font-semibold">{campaign.name}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">{campaign.address}</p>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-400">Invested</p>
                <p className="text-2xl font-bold text-orange-500">${campaign.invested.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Raised</p>
                <p className="text-2xl font-bold">${campaign.raised.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Backers</p>
                <p className="text-2xl font-bold">{campaign.backers}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Ends in</p>
                <p className="text-2xl font-bold">{campaign.daysLeft} days</p>
              </div>
            </div>
            <button className="mt-4 px-3 py-1 bg-gray-700 text-white rounded-md">Manage</button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Profile;