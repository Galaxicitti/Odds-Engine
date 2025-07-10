
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award, TrendingUp, Crown } from "lucide-react";

const Leaderboard = () => {
  const topTraders = [
    {
      rank: 1,
      name: "Rajesh Kumar",
      username: "@rajesh_trader",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      totalPnL: 125000,
      winRate: 89,
      totalTrades: 156,
      streak: 12,
      badge: "Diamond"
    },
    {
      rank: 2,
      name: "Priya Sharma",
      username: "@priya_predictions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      totalPnL: 98000,
      winRate: 85,
      totalTrades: 134,
      streak: 8,
      badge: "Gold"
    },
    {
      rank: 3,
      name: "Amit Singh",
      username: "@amit_market_guru",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      totalPnL: 87500,
      winRate: 82,
      totalTrades: 142,
      streak: 5,
      badge: "Gold"
    },
    {
      rank: 4,
      name: "Sneha Patel",
      username: "@sneha_trades",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      totalPnL: 76200,
      winRate: 78,
      totalTrades: 118,
      streak: 3,
      badge: "Silver"
    },
    {
      rank: 5,
      name: "Rohit Gupta",
      username: "@rohit_predictor",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      totalPnL: 65800,
      winRate: 75,
      totalTrades: 105,
      streak: 7,
      badge: "Silver"
    },
    {
      rank: 6,
      name: "Kavya Reddy",
      username: "@kavya_crypto",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      totalPnL: 58900,
      winRate: 72,
      totalTrades: 98,
      streak: 2,
      badge: "Bronze"
    },
    {
      rank: 7,
      name: "Arjun Mehta",
      username: "@arjun_sports_bet",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      totalPnL: 52300,
      winRate: 70,
      totalTrades: 87,
      streak: 1,
      badge: "Bronze"
    },
    {
      rank: 8,
      name: "Deepika Jain",
      username: "@deepika_markets",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      totalPnL: 47600,
      winRate: 68,
      totalTrades: 92,
      streak: 4,
      badge: "Bronze"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Diamond': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Gold': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Silver': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'Bronze': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Award className="h-5 w-5 text-orange-500" />;
      default: return <span className="text-gray-500 font-bold">#{rank}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Leaderboard Header */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-center justify-center">
            <Trophy className="h-6 w-6 text-yellow-600" />
            Top Traders Leaderboard
          </CardTitle>
          <p className="text-center text-gray-600">Compete with the best traders and climb the ranks!</p>
        </CardHeader>
      </Card>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {topTraders.slice(0, 3).map((trader, index) => (
          <Card key={trader.rank} className={`${index === 0 ? 'ring-2 ring-yellow-400 shadow-lg' : ''} hover:shadow-lg transition-shadow`}>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-3">
                {getRankIcon(trader.rank)}
              </div>
              <Avatar className="h-16 w-16 mx-auto mb-3">
                <AvatarImage src={trader.avatar} alt={trader.name} />
                <AvatarFallback>{trader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg">{trader.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{trader.username}</p>
              <Badge className={getBadgeColor(trader.badge)}>
                {trader.badge}
              </Badge>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total P&L:</span>
                  <span className="font-semibold text-green-600">₹{trader.totalPnL.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Win Rate:</span>
                  <span className="font-semibold">{trader.winRate}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Streak:</span>
                  <span className="font-semibold text-orange-600">{trader.streak} wins</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Leaderboard Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Traders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topTraders.map((trader) => (
              <div key={trader.rank} className={`flex items-center justify-between p-4 rounded-lg border ${
                trader.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-transparent' : 'hover:bg-gray-50'
              } transition-colors`}>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8">
                    {getRankIcon(trader.rank)}
                  </div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={trader.avatar} alt={trader.name} />
                    <AvatarFallback>{trader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{trader.name}</h4>
                    <p className="text-sm text-gray-500">{trader.username}</p>
                  </div>
                  <Badge className={getBadgeColor(trader.badge)}>
                    {trader.badge}
                  </Badge>
                </div>
                
                <div className="hidden md:flex items-center gap-8 text-sm">
                  <div className="text-center">
                    <p className="text-gray-500">P&L</p>
                    <p className="font-semibold text-green-600">₹{trader.totalPnL.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500">Win Rate</p>
                    <p className="font-semibold">{trader.winRate}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500">Trades</p>
                    <p className="font-semibold">{trader.totalTrades}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500">Streak</p>
                    <p className="font-semibold text-orange-600">{trader.streak}</p>
                  </div>
                </div>

                <div className="md:hidden text-right text-sm">
                  <p className="font-semibold text-green-600">₹{trader.totalPnL.toLocaleString()}</p>
                  <p className="text-gray-500">{trader.winRate}% win rate</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievement Badges Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Achievement Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-2">Diamond</Badge>
              <p className="text-sm text-gray-600">₹1L+ P&L</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 mb-2">Gold</Badge>
              <p className="text-sm text-gray-600">₹50K+ P&L</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Badge className="bg-gray-100 text-gray-700 border-gray-200 mb-2">Silver</Badge>
              <p className="text-sm text-gray-600">₹25K+ P&L</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-2">Bronze</Badge>
              <p className="text-sm text-gray-600">₹10K+ P&L</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
