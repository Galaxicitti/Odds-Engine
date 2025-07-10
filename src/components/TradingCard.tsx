
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, Clock, Users, ArrowUp, ArrowDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
        title: "Trade Placed!",
        description: `₹${tradeAmount} on ${selectedType.toUpperCase()} for "${event.title}"`,
      });
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Crypto': 'bg-orange-100 text-orange-700',
      'Sports': 'bg-green-100 text-green-700',
      'Stocks': 'bg-blue-100 text-blue-700',
      'Weather': 'bg-cyan-100 text-cyan-700',
      'Technology': 'bg-purple-100 text-purple-700',
      'Finance': 'bg-emerald-100 text-emerald-700',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={getCategoryColor(event.category)}>
            {event.category}
          </Badge>
          {event.trending && (
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              <TrendingUp className="h-3 w-3 mr-1" />
              Trending
            </Badge>
          )}
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-tight line-clamp-2">
          {event.title}
        </CardTitle>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {event.timeLeft}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {event.volume}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="flex-1 border-green-200 hover:bg-green-50 hover:border-green-300"
                onClick={() => setSelectedType('yes')}
              >
                <div className="text-center w-full">
                  <div className="flex items-center justify-center gap-1 text-green-700 font-semibold">
                    <ArrowUp className="h-4 w-4" />
                    YES
                  </div>
                  <div className="text-lg font-bold text-green-600">₹{event.yesPrice}</div>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Trade on YES</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">{event.title}</p>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount (₹)</label>
                  <Input
                    type="number"
                    value={tradeAmount}
                    onChange={(e) => setTradeAmount(Number(e.target.value))}
                    min="1"
                  />
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-sm text-green-700">
                    You'll get ₹{Math.round((tradeAmount / event.yesPrice) * 100)} if YES wins
                  </div>
                </div>
                <Button onClick={handleTrade} className="w-full bg-green-600 hover:bg-green-700">
                  Place Trade
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="flex-1 border-red-200 hover:bg-red-50 hover:border-red-300"
                onClick={() => setSelectedType('no')}
              >
                <div className="text-center w-full">
                  <div className="flex items-center justify-center gap-1 text-red-700 font-semibold">
                    <ArrowDown className="h-4 w-4" />
                    NO
                  </div>
                  <div className="text-lg font-bold text-red-600">₹{event.noPrice}</div>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Trade on NO</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">{event.title}</p>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount (₹)</label>
                  <Input
                    type="number"
                    value={tradeAmount}
                    onChange={(e) => setTradeAmount(Number(e.target.value))}
                    min="1"
                  />
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="text-sm text-red-700">
                    You'll get ₹{Math.round((tradeAmount / event.noPrice) * 100)} if NO wins
                  </div>
                </div>
                <Button onClick={handleTrade} className="w-full bg-red-600 hover:bg-red-700">
                  Place Trade
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="text-xs text-gray-500 text-center">
          Prices change based on market demand
        </div>
      </CardContent>
    </Card>
  );
};

export default TradingCard;
