
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface PriceData {
  time: string;
  yesPrice: number;
  noPrice: number;
}

interface PriceChartProps {
  data: PriceData[];
}

const PriceChart = ({ data }: PriceChartProps) => {
  return (
    <div className="h-24 w-full bg-slate-800/30 rounded-lg p-2 border border-slate-700/50">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="time" 
            hide
          />
          <YAxis 
            hide
            domain={[0, 100]}
          />
          <Line 
            type="monotone" 
            dataKey="yesPrice" 
            stroke="#10b981" 
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="noPrice" 
            stroke="#ef4444" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
