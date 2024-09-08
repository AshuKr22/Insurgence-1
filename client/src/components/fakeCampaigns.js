import p1 from './camp/p1.jpeg';
import p2 from './camp/p2.jpeg';
import p3 from './camp/p3.jpeg';
import p4 from './camp/p4.jpeg';

export const fakeCampaigns = [
  {
    id:"1",
    title: "Save the Rainforest",
    description: "Help us protect 1000 acres of Amazon rainforest from deforestation.",
    target: 50000000000, // 500 APT
    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).getTime(), // 30 days from now
    image: p1,
    amountCollected: 25000000000, // 250 APT
    daysLeft: 25,
  },
  {
    id:"2",
    title: "Clean Ocean Initiative",
    description: "Join our mission to remove 10 tons of plastic from the Pacific Ocean.",
    target: 30000000000, // 300 APT
    deadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).getTime(), // 60 days from now
    image: p2,
    amountCollected: 15000000000, // 150 APT
    daysLeft: 55,
  },
  {
    id:"3",
    title: "Community Garden Project",
    description: "Help us create a sustainable community garden in downtown metropolis.",
    target: 10000000000, // 100 APT
    deadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).getTime(), // 45 days from now
    image: p3,
    amountCollected: 7500000000, // 75 APT
    daysLeft: 40,
  },
  {
    id:"4",
    title: "Education for All",
    description: "Support our initiative to provide quality education to underprivileged children.",
    target: 20000000000, // 200 APT
    deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).getTime(), // 90 days from now
    image: p4,
    amountCollected: 5000000000, // 50 APT
    daysLeft: 85,
  },
  // Additional campaigns:
  {
    id:"5",
    title: "Wildlife Conservation Fund",
    description: "Join our efforts in preserving endangered species and their habitats.",
    target: 45000000000, // 450 APT
    deadline: new Date(Date.now() + 40 * 24 * 60 * 60 * 1000).getTime(), // 40 days from now
    image: p1,
    amountCollected: 20000000000, // 200 APT
    daysLeft: 35,
  },
  {
    id:"6",
    title: "Solar Power for Villages",
    description: "Help install solar power in remote villages and reduce their carbon footprint.",
    target: 35000000000, // 350 APT
    deadline: new Date(Date.now() + 50 * 24 * 60 * 60 * 1000).getTime(), // 50 days from now
    image: p2,
    amountCollected: 17500000000, // 175 APT
    daysLeft: 45,
  },
  {
    id:"7",
    title: "Clean Drinking Water Initiative",
    description: "Provide clean and safe drinking water to communities in need.",
    target: 25000000000, // 250 APT
    deadline: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).getTime(), // 35 days from now
    image: p3,
    amountCollected: 12500000000, // 125 APT
    daysLeft: 30,
  },
  {
    id:"8",
    title: "Plant a Million Trees",
    description: "Help us plant one million trees across urban areas to combat climate change.",
    target: 10000000000, // 100 APT
    deadline: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).getTime(), // 25 days from now
    image: p4,
    amountCollected: 5000000000, // 50 APT
    daysLeft: 20,
  }
];