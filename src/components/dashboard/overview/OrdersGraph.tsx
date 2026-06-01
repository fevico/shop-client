import { Card } from '@/components/ui/card';
import { BarChart, ResponsiveContainer, Legend,  XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';

const OrdersGraph = ({stats}: any) => {
  return (
    <div>
        <Card className='w-full p-6 rounded-2xl'>
        {/* Heading */}
        <h2 className="text-xl font-semibold mb-6">
        Orders by Month
        </h2>
        <div className="w-full h-87.5">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                    <XAxis dataKey="month" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="orders" fill="#9333ea"  />
                </BarChart>
            </ResponsiveContainer>
        </div>
        </Card>
    </div>
  )
}

export default OrdersGraph