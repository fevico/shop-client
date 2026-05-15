import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const PaymentForm = ({checkoutData}: any) => {
  return (
    <div>
        <Card className="p-6 rounded-2xl space-y-6">
            <h2 className="text-2xl font-semibold">
                Payment Information
            </h2>
            <form className="space-y-6" action="">
                {/* Card Number */}
                <div className="space-y-2">
                    <Label htmlFor="card number">Card Number</Label>
                    <Input type="text" placeholder="123 456 789"/>
                </div>
                {/* Card holder */}
                <div className="space-y-2">
                    <Label htmlFor="card holder">Card Holder</Label>
                    <Input type="text" placeholder="John Doe"/>
                </div>
                {/* Expiry + CVV */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input type="text" placeholder="MM/YY"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input type="text" placeholder="123"/>
                    </div>
                </div>
            </form>
        </Card>
    </div>
  )
}

export default PaymentForm