
import { Truck, Star, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your orders delivered quickly with our express shipping options.",
  },
  {
    icon: Star,
    title: "Quality Products",
    description: "Every product is carefully selected to ensure the highest quality standards.",
  },
  {
    icon: TrendingUp,
    title: "Best Prices",
    description: "Competitive pricing with regular discounts and special offers.",
  },
];

const Features = () => {
  return (
    <div className="px-12">
        <div className="grid gid-cols-1 md:grid-cols-3 gap-4">
            {features.map((item, index) => (
            <Card key={index} className="p-4 rounded-lg border">
                <div className="w-12 h-12 p-3 bg-gray-200 rounded-lg">
                    <item.icon />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
            </Card>
            ))}
        </div>
    </div>
  )
}

export default Features