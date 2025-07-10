
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Wallet, Trophy, User, Search, Filter, Crown } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur-md sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Crown className="h-8 w-8 text-amber-400" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                  OddsEngine
                </h1>
              </div>
              <Badge variant="secondary" className="hidden sm:inline-flex bg-amber-900/30 text-amber-300 border-amber-700">
                PREMIUM
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-900/50 to-green-900/50 px-4 py-2 rounded-xl border border-emerald-700/50 shadow-lg">
                <Wallet className="h-5 w-5 text-emerald-400" />
                <span className="font-bold text-emerald-300 text-lg">₹{balance.toLocaleString()}</span>
              </div>
              <Button variant="outline" size="sm" className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-slate-800/50 border border-slate-700 p-1 rounded-xl">
            <TabsTrigger value="trade" className="flex items-center gap-2 data-[state=active]:bg-amber-600 data-[state=active]:text-black font-semibold">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Trade</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center gap-2 data-[state=active]:bg-amber-600 data-[state=active]:text-black font-semibold">
              <Badge className="h-4 w-4" />
              <span className="hidden sm:inline">Portfolio</span>
            </TabsTrigger>
            <TabsTrigger value="wallet" className="flex items-center gap-2 data-[state=active]:bg-amber-600 data-[state=active]:text-black font-semibold">
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">Wallet</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2 data-[state=active]:bg-amber-600 data-[state=active]:text-black font-semibold">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Leaderboard</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2 data-[state=active]:bg-amber-600 data-[state=active]:text-black font-semibold">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trade" className="space-y-8">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="Search prediction markets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-slate-800/50 border-slate-600 text-slate-200 placeholder:text-slate-400 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2 h-12 px-6 bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white">
                <Filter className="h-5 w-5" />
                Filters
              </Button>
            </div>

            {/* Trending Events */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-200">Trending Markets</h2>
                <div className="h-px bg-gradient-to-r from-slate-600 to-transparent flex-1 ml-4"></div>
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
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-slate-200">All Markets</h2>
                <div className="h-px bg-gradient-to-r from-slate-600 to-transparent flex-1 ml-4"></div>
              </div>
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
