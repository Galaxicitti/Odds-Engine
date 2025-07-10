
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Edit, 
  Camera, 
  Trophy, 
  Target, 
  TrendingUp, 
  Calendar,
  Award,
  Star,
  Shield,
  Settings,
  Bell,
  Lock
} from "lucide-react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Arjun Mehta",
    username: "arjun_trader",
    email: "arjun.mehta@example.com",
    phone: "+91 98765 43210",
    bio: "Passionate trader with 3+ years of experience in prediction markets. Love analyzing sports events and crypto trends.",
    location: "Mumbai, India"
  });

  const stats = {
    totalTrades: 156,
    winRate: 73,
    totalPnL: 45600,
    bestStreak: 12,
    rank: 47,
    badge: "Silver",
    joinDate: "March 2023",
    accuracy: 78
  };

  const achievements = [
    { name: "First Win", icon: Trophy, description: "Won your first prediction", earned: true },
    { name: "Hot Streak", icon: Target, description: "Win 5 predictions in a row", earned: true },
    { name: "Big Winner", icon: Star, description: "Earn ₹10,000+ in profits", earned: true },
    { name: "Market Expert", icon: TrendingUp, description: "Make 100+ predictions", earned: true },
    { name: "Diamond Hands", icon: Shield, description: "Hold a position for 30+ days", earned: false },
    { name: "Perfect Week", icon: Award, description: "Win all predictions in a week", earned: false }
  ];

  const recentActivities = [
    { action: "Won prediction", event: "Bitcoin will reach $100K", amount: "+₹1,500", time: "2 hours ago" },
    { action: "Placed trade", event: "India to win Cricket World Cup", amount: "-₹800", time: "5 hours ago" },
    { action: "Achievement unlocked", event: "Big Winner badge earned", amount: "", time: "1 day ago" },
    { action: "Lost prediction", event: "Tesla stock prediction", amount: "-₹600", time: "2 days ago" },
    { action: "Won prediction", event: "Weather forecast Mumbai", amount: "+₹400", time: "3 days ago" }
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                <AvatarFallback className="text-lg">AM</AvatarFallback>
              </Avatar>
              <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">{profileData.name}</h1>
                <Badge className="bg-gray-100 text-gray-700 w-fit mx-auto md:mx-0">
                  @{profileData.username}
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 w-fit mx-auto md:mx-0">
                  {stats.badge}
                </Badge>
              </div>
              <p className="text-gray-600 mb-4">{profileData.bio}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined {stats.joinDate}
                </span>
                <span>📍 {profileData.location}</span>
                <span>🏆 Rank #{stats.rank}</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-blue-600">{stats.totalTrades}</p>
                <p className="text-sm text-gray-600">Total Trades</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-green-600">{stats.winRate}%</p>
                <p className="text-sm text-gray-600">Win Rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-emerald-600">₹{stats.totalPnL.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total P&L</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-orange-600">{stats.bestStreak}</p>
                <p className="text-sm text-gray-600">Best Streak</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Win Rate</span>
                  <span className="text-sm font-medium">{stats.winRate}%</span>
                </div>
                <Progress value={stats.winRate} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Accuracy</span>
                  <span className="text-sm font-medium">{stats.accuracy}%</span>
                </div>
                <Progress value={stats.accuracy} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Rank Progress</span>
                  <span className="text-sm font-medium">Top 5%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.event}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    {activity.amount && (
                      <span className={`font-semibold ${
                        activity.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {activity.amount}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-3 border rounded-lg text-center ${
                      achievement.earned ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <achievement.icon className={`h-6 w-6 mx-auto mb-1 ${
                      achievement.earned ? 'text-yellow-600' : 'text-gray-400'
                    }`} />
                    <p className="text-xs font-medium">{achievement.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Quick Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Lock className="h-4 w-4 mr-2" />
                Privacy Settings
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Account Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
