
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Minus, CreditCard, Smartphone, Building, History, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WalletSectionProps {
  balance: number;
  setBalance: (balance: number | ((prev: number) => number)) => void;
}

const WalletSection = ({ balance, setBalance }: WalletSectionProps) => {
  const [addAmount, setAddAmount] = useState(1000);
  const [withdrawAmount, setWithdrawAmount] = useState(500);
  const { toast } = useToast();

  const transactions = [
    { id: 1, type: 'credit', amount: 5000, description: 'Added money via UPI', date: '2 hours ago', method: 'UPI' },
    { id: 2, type: 'debit', amount: 1000, description: 'Trade: Bitcoin prediction', date: '5 hours ago', method: 'Trade' },
    { id: 3, type: 'credit', amount: 1500, description: 'Won: Cricket match prediction', date: '1 day ago', method: 'Win' },
    { id: 4, type: 'debit', amount: 800, description: 'Trade: Tesla stock prediction', date: '2 days ago', method: 'Trade' },
    { id: 5, type: 'credit', amount: 2000, description: 'Added money via Card', date: '3 days ago', method: 'Card' },
  ];

  const handleAddMoney = (method: string) => {
    setBalance(prev => prev + addAmount);
    toast({
      title: "Money Added!",
      description: `₹${addAmount} added via ${method}`,
    });
  };

  const handleWithdraw = () => {
    if (withdrawAmount <= balance) {
      setBalance(prev => prev - withdrawAmount);
      toast({
        title: "Withdrawal Initiated!",
        description: `₹${withdrawAmount} will be credited to your bank account in 1-2 business days`,
      });
    } else {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough balance to withdraw this amount",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Balance Card */}
      <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-blue-100 mb-2">Available Balance</p>
            <p className="text-4xl font-bold mb-4">₹{balance.toLocaleString()}</p>
            <div className="flex gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Money
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Money to Wallet</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Amount (₹)</label>
                      <Input
                        type="number"
                        value={addAmount}
                        onChange={(e) => setAddAmount(Number(e.target.value))}
                        min="100"
                        step="100"
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">Choose payment method:</p>
                      <div className="grid grid-cols-1 gap-3">
                        <Button 
                          variant="outline" 
                          className="justify-start h-auto p-4"
                          onClick={() => handleAddMoney('UPI')}
                        >
                          <Smartphone className="h-5 w-5 mr-3" />
                          <div className="text-left">
                            <div className="font-medium">UPI</div>
                            <div className="text-sm text-gray-500">PhonePe, GooglePay, Paytm</div>
                          </div>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="justify-start h-auto p-4"
                          onClick={() => handleAddMoney('Card')}
                        >
                          <CreditCard className="h-5 w-5 mr-3" />
                          <div className="text-left">
                            <div className="font-medium">Debit/Credit Card</div>
                            <div className="text-sm text-gray-500">Visa, Mastercard, RuPay</div>
                          </div>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="justify-start h-auto p-4"
                          onClick={() => handleAddMoney('Net Banking')}
                        >
                          <Building className="h-5 w-5 mr-3" />
                          <div className="text-left">
                            <div className="font-medium">Net Banking</div>
                            <div className="text-sm text-gray-500">All major banks</div>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 text-white border-white/30 hover:bg-white/10">
                    <Minus className="h-4 w-4" />
                    Withdraw
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Withdraw Money</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Amount (₹)</label>
                      <Input
                        type="number"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                        min="100"
                        max={balance}
                        step="100"
                      />
                      <p className="text-xs text-gray-500">Maximum: ₹{balance.toLocaleString()}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">
                        Money will be transferred to your registered bank account within 1-2 business days.
                      </p>
                    </div>
                    <Button onClick={handleWithdraw} className="w-full">
                      Withdraw ₹{withdrawAmount}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {transaction.type === 'credit' ? 
                      <ArrowDownLeft className="h-4 w-4 text-green-600" /> : 
                      <ArrowUpRight className="h-4 w-4 text-red-600" />
                    }
                  </div>
                  <div>
                    <p className="font-medium text-sm">{transaction.description}</p>
                    <p className="text-xs text-gray-500">{transaction.date} • {transaction.method}</p>
                  </div>
                </div>
                <div className={`font-semibold ${
                  transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <Plus className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <p className="text-sm font-medium">Add ₹500</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <Plus className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <p className="text-sm font-medium">Add ₹1000</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <Plus className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <p className="text-sm font-medium">Add ₹2000</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <Plus className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <p className="text-sm font-medium">Add ₹5000</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WalletSection;
