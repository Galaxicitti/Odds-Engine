
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Clock, DollarSign } from "lucide-react";

const Portfolio = () => {
  // Mock portfolio data
  const portfolioStats = {
    totalInvested: 5500,
    currentValue: 6200,
    totalPnL: 700,
    winRate: 68,
    activeTrades: 8,
    completedTrades: 24
  };

  const activeTrades = [
    {
      id: 1,
      title: "Will Bitcoin reach $100,000 by end of 2024?",
      position: "YES",
      amount: 1000,
      currentPrice: 48,
      buyPrice: 45,
      pnl: 150,
      timeLeft: "2 days",
      status: "winning"
    },
    {
      id: 2,
      title: "Will India win the Cricket World Cup 2024?",
      position: "NO",
      amount: 800,
      currentPrice: 32,
      buyPrice: 35,
      pnl: -80,
      timeLeft: "5 days",
      status: "losing"
    },
    {
      id: 3,
      title: "Will Tesla stock price exceed $300 this month?",
      position: "YES",
      amount: 1200,
      currentPrice: 41,
      buyPrice: 38,
      pnl: 200,
      timeLeft: "12 days",
      status: "winning"
    },
    {
      id: 4,
      title: "Will OpenAI release GPT-5 in 2024?",
      position: "NO",
      amount: 600,
      currentPrice: 50,
      buyPrice: 52,
      pnl: -50,
      timeLeft: "30 days",
      status: "losing"
    }
  ];

  const completedTrades = [
    {
      id: 1,
      title: "Will it rain in Delhi yesterday?",
      position: "YES",
      amount: 500,
      pnl: 300,
      result: "won",
      date: "2 days ago"
    },
    {
      id: 2,
      title: "Will Nifty cross 24,000 last week?",
      position: "NO",
      amount: 800,
      pnl: -800,
      result: "lost",
      date: "5 days ago"
    },
    {
      id: 3,
      title: "Will Apple stock rise 5% last month?",
      position: "YES",
      amount: 1000,
      pnl: 600,
      result: "won",
      date: "1 week ago"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Invested</p>
                <p className="text-2xl font-bold">₹{portfolioStats.totalInvested.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Current Value</p>
                <p className="text-2xl font-bold">₹{portfolioStats.currentValue.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total P&L</p>
                <p className={`text-2xl font-bold ${portfolioStats.totalPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {portfolioStats.totalPnL >= 0 ? '+' : ''}₹{portfolioStats.totalPnL}
                </p>
              </div>
              {portfolioStats.totalPnL >= 0 ? 
                <TrendingUp className="h-8 w-8 text-green-500" /> : 
                <TrendingDown className="h-8 w-8 text-red-500" />
              }
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Win Rate</p>
                <p className="text-2xl font-bold">{portfolioStats.winRate}%</p>
                <Progress value={portfolioStats.winRate} className="mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Trades */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Active Trades ({portfolioStats.activeTrades})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeTrades.map((trade) => (
              <div key={trade.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm leading-tight flex-1 pr-4">{trade.title}</h4>
                  <Badge variant={trade.position === 'YES' ? 'default' : 'secondary'}>
                    {trade.position}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Invested</p>
                    <p className="font-semibold">₹{trade.amount}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Buy Price</p>
                    <p className="font-semibold">₹{trade.buyPrice}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Current Price</p>
                    <p className="font-semibold">₹{trade.currentPrice}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">P&L</p>
                    <p className={`font-semibold ${trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {trade.pnl >= 0 ? '+' : ''}₹{trade.pnl}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-500">Ends in {trade.timeLeft}</span>
                  <Button variant="outline" size="sm">
                    Sell Position
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Completed Trades */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Completed Trades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {completedTrades.map((trade) => (
              <div key={trade.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm leading-tight flex-1 pr-4">{trade.title}</h4>
                  <Badge variant={trade.result === 'won' ? 'default' : 'destructive'}>
                    {trade.result.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Position</p>
                    <p className="font-semibold">{trade.position}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Amount</p>
                    <p className="font-semibold">₹{trade.amount}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">P&L</p>
                    <p className={`font-semibold ${trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {trade.pnl >= 0 ? '+' : ''}₹{trade.pnl}
                    </p>
                  </div>
                </div>
                <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
              © 2024 Galaxy Rawat. All rights reserved.</p>
                  </div>
                <div className="text-xs text-gray-500 mt-2">{trade.date}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;
