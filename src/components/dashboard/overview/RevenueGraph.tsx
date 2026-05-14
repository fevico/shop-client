import { Card } from "@/components/ui/card";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { name: "Jan", revenue: 12000 },
  { name: "Feb", revenue: 15000 },
  { name: "Mar", revenue: 18000 },
  { name: "Apr", revenue: 22000 },
  { name: "May", revenue: 20000 },
  { name: "Jun", revenue: 25000 },
];

const RevenueGraph = () => {
  return (
    <Card className="w-full p-6 rounded-2xl">
      
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-6">
        Revenue Overview
      </h2>

      {/* Chart container */}
      <div className="w-full h-87.5">
        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            {/* Gradient color */}
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#9333ea"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="#9333ea"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f1f1"
            />

            {/* X axis */}
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 14 }}
            />

            {/* Y axis */}
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 14 }}
            />

            {/* Tooltip */}
            <Tooltip />

            {/* Filled area */}
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#9333ea"
              strokeWidth={3}
              fill="url(#colorRevenue)"
            />

          </AreaChart>

        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default RevenueGraph;