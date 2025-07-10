
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Wallet, Trophy, User, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import TradingCard from "@/components/TradingCard";
import Portfolio from "@/components/Portfolio";
import WalletSection from "@/components/WalletSection";
import Leaderboard from "@/components/Leaderboard";
import UserProfile from "@/components/UserProfile";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("trade");
  const [balance, setBalance] = useState(10000);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock trading events data
  const tradingEvents = [
    {
      id: 1,
      title: "Will Bitcoin reach $100,000 by end of 2024?",
      category: "Crypto",
      yesPrice: 45,
      noPrice: 55,
      volume: "₹2.3L",
      timeLeft: "2 days",
      trending: true,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Will India win the Cricket World Cup 2024?",
      category: "Sports",
      yesPrice: 65,
      noPrice: 35,
      volume: "₹5.1L",
      timeLeft: "5 days",
      trending: false,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Will Tesla stock price exceed $300 this month?",
      category: "Stocks",
      yesPrice: 38,
      noPrice: 62,
      volume: "₹1.8L",
      timeLeft: "12 days",
      trending: true,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Will it rain in Mumbai tomorrow?",
      category: "Weather",
      yesPrice: 72,
      noPrice: 28,
      volume: "₹95K",
      timeLeft: "1 day",
      trending: false,
      image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Will OpenAI release GPT-5 in 2024?",
      category: "Technology",
      yesPrice: 52,
      noPrice: 48,
      volume: "₹3.2L",
      timeLeft: "30 days",
      trending: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Will Nifty 50 cross 25,000 this week?",
      category: "Finance",
      yesPrice: 41,
      noPrice: 59,
      volume: "₹4.7L",
      timeLeft: "4 days",
      trending: false,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
    }
  ];

  const filteredEvents = tradingEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ProboClone
              </h1>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                BETA
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
                <Wallet className="h-4 w-4 text-green-600" />
                <span className="font-semibold text-green-700">₹{balance.toLocaleString()}</span>
              </div>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="trade" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Trade</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center gap-2">
              <Badge className="h-4 w-4" />
              <span className="hidden sm:inline">Portfolio</span>
            </TabsTrigger>
            <TabsTrigger value="wallet" className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">Wallet</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Leaderboard</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trade" className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Trending Events */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <h2 className="text-xl font-semibold">Trending Events</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.filter(event => event.trending).map((event) => (
                  <TradingCard
                    key={event.id}
                    event={event}
                    onTrade={(type, amount) => {
                      console.log(`Trading ${type} for ₹${amount} on event ${event.id}`);
                      setBalance(prev => prev - amount);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* All Events */}
            <div>
              <h2 className="text-xl font-semibold mb-4">All Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <TradingCard
                    key={event.id}
                    event={event}
                    onTrade={(type, amount) => {
                      console.log(`Trading ${type} for ₹${amount} on event ${event.id}`);
                      setBalance(prev => prev - amount);
                    }}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="portfolio">
            <Portfolio />
          </TabsContent>

          <TabsContent value="wallet">
            <WalletSection balance={balance} setBalance={setBalance} />
          </TabsContent>

          <TabsContent value="leaderboard">
            <Leaderboard />
          </TabsContent>

          <TabsContent value="profile">
            <UserProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
