
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, Clock, Users, ArrowUp, ArrowDown, Flame } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PriceChart from "./PriceChart";

interface TradingEvent {
  id: number;
  title: string;
  category: string;
  yesPrice: number;
  noPrice: number;
  volume: string;
  timeLeft: string;
  trending: boolean;
  image: string;
  priceHistory: Array<{
    time: string;
    yesPrice: number;
    noPrice: number;
  }>;
}

interface TradingCardProps {
  event: TradingEvent;
  onTrade: (type: 'yes' | 'no', amount: number) => void;
}

const TradingCard = ({ event, onTrade }: TradingCardProps) => {
  const [tradeAmount, setTradeAmount] = useState(100);
  const [selectedType, setSelectedType] = useState<'yes' | 'no'>('yes');
  const { toast } = useToast();

  const handleTrade = () => {
    if (tradeAmount > 0) {
      onTrade(selectedType, tradeAmount);
      toast({
        title: "Trade Executed!",
        description: `₹${tradeAmount} on ${selectedType.toUpperCase()} for "${event.title}"`,
      });
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Crypto': 'bg-gradient-to-r from-orange-900/50 to-yellow-900/50 text-orange-300 border-orange-700/50',
      'Sports': 'bg-gradient-to-r from-green-900/50 to-emerald-900/50 text-green-300 border-green-700/50',
      'Stocks': 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 text-blue-300 border-blue-700/50',
      'Weather': 'bg-gradient-to-r from-cyan-900/50 to-teal-900/50 text-cyan-300 border-cyan-700/50',
      'Technology': 'bg-gradient-to-r from-purple-900/50 to-violet-900/50 text-purple-300 border-purple-700/50',
      'Finance': 'bg-gradient-to-r from-emerald-900/50 to-green-900/50 text-emerald-300 border-emerald-700/50',
    };
    return colors[category as keyof typeof colors] || 'bg-gradient-to-r from-slate-900/50 to-gray-900/50 text-slate-300 border-slate-700/50';
  };

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 backdrop-blur-sm">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20"></div>
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={`${getCategoryColor(event.category)} border font-semibold`}>
            {event.category}
          </Badge>
          {event.trending && (
            <Badge className="bg-gradient-to-r from-red-900/50 to-orange-900/50 text-orange-300 border-orange-700/50 font-semibold">
              <Flame className="h-3 w-3 mr-1" />
              Hot
            </Badge>
          )}
        </div>
      </div>

      <CardHeader className="pb-3 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <CardTitle className="text-lg leading-tight line-clamp-2 text-slate-100 font-bold">
          {event.title}
        </CardTitle>
        
        <div className="flex items-center justify-between text-sm text-slate-400">
          <div className="flex items-center gap-2 bg-slate-800/50 px-2 py-1 rounded-lg border border-slate-700/50">
            <Clock className="h-4 w-4 text-amber-400" />
            <span className="text-slate-300 font-medium">{event.timeLeft}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 px-2 py-1 rounded-lg border border-slate-700/50">
            <Users className="h-4 w-4 text-emerald-400" />
            <span className="text-slate-300 font-medium">{event.volume}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 bg-gradient-to-b from-slate-900/50 to-slate-900">
        {/* Price Chart */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400 font-medium">Price Trend</span>
            <div className="flex gap-3 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-400">YES</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-red-400">NO</span>
              </div>
            </div>
          </div>
          <PriceChart data={event.priceHistory} />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="flex-1 border-2 border-green-700/50 bg-gradient-to-r from-green-900/30 to-emerald-900/30 hover:from-green-800/50 hover:to-emerald-800/50 hover:border-green-600 transition-all duration-300 group/btn"
                onClick={() => setSelectedType('yes')}
              >
                <div className="text-center w-full">
                  <div className="flex items-center justify-center gap-2 text-green-300 font-bold group-hover/btn:text-green-200">
                    <ArrowUp className="h-5 w-5" />
                    YES
                  </div>
                  <div className="text-xl font-bold text-green-400 group-hover/btn:text-green-300">₹{event.yesPrice}</div>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-slate-700 text-slate-100">
              <DialogHeader>
                <DialogTitle className="text-green-400 text-xl">Bet on YES</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <p className="text-sm text-slate-300 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">{event.title}</p>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-200">Investment Amount (₹)</label>
                  <Input
                    type="number"
                    value={tradeAmount}
                    onChange={(e) => setTradeAmount(Number(e.target.value))}
                    min="1"
                    className="bg-slate-800/50 border-slate-600 text-slate-200 focus:border-green-500 text-lg font-semibold"
                  />
                </div>
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-4 rounded-xl border border-green-700/50">
                  <div className="text-green-300 font-semibold">
                    Potential Return: ₹{Math.round((tradeAmount / event.yesPrice) * 100)}
                  </div>
                  <div className="text-xs text-green-400/70 mt-1">if YES outcome occurs</div>
                </div>
                <Button onClick={handleTrade} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-lg py-3 transition-all duration-300">
                  Execute Trade
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="flex-1 border-2 border-red-700/50 bg-gradient-to-r from-red-900/30 to-rose-900/30 hover:from-red-800/50 hover:to-rose-800/50 hover:border-red-600 transition-all duration-300 group/btn"
                onClick={() => setSelectedType('no')}
              >
                <div className="text-center w-full">
                  <div className="flex items-center justify-center gap-2 text-red-300 font-bold group-hover/btn:text-red-200">
                    <ArrowDown className="h-5 w-5" />
                    NO
                  </div>
                  <div className="text-xl font-bold text-red-400 group-hover/btn:text-red-300">₹{event.noPrice}</div>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-slate-700 text-slate-100">
              <DialogHeader>
                <DialogTitle className="text-red-400 text-xl">Bet on NO</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <p className="text-sm text-slate-300 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">{event.title}</p>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-200">Investment Amount (₹)</label>
                  <Input
                    type="number"
                    value={tradeAmount}
                    onChange={(e) => setTradeAmount(Number(e.target.value))}
                    min="1"
                    className="bg-slate-800/50 border-slate-600 text-slate-200 focus:border-red-500 text-lg font-semibold"
                  />
                </div>
                <div className="bg-gradient-to-r from-red-900/30 to-rose-900/30 p-4 rounded-xl border border-red-700/50">
                  <div className="text-red-300 font-semibold">
                    Potential Return: ₹{Math.round((tradeAmount / event.noPrice) * 100)}
                  </div>
                  <div className="text-xs text-red-400/70 mt-1">if NO outcome occurs</div>
                </div>
                <Button onClick={handleTrade} className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-lg py-3 transition-all duration-300">
                  Execute Trade
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="text-xs text-slate-500 text-center bg-slate-800/30 py-2 rounded-lg border border-slate-700/30">
          Market prices fluctuate based on trading activity
        </div>
      </CardContent>
    </Card>
  );
};

export default TradingCard;
