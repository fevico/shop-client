import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const PaymentSuccessful = () => {
  const [searchParams] = useSearchParams()
  const reference = searchParams.get("reference")

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

      <Card className="w-full max-w-md rounded-2xl p-8 shadow-lg">

        <div className="flex flex-col items-center text-center">

          {/* Success Icon */}
          <div className="mb-4 rounded-full bg-green-100 p-4">
            <CheckCircle className="h-14 w-14 text-green-600" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-900">
            Payment Successful
          </h1>

          {/* Message */}
          <p className="mt-3 text-sm text-gray-600">
            Your payment has been completed successfully.
            Your order is now being processed.
          </p>

          {/* Reference */}
          <div className="mt-6 w-full rounded-lg bg-gray-100 p-4">
            <p className="text-sm text-gray-500">
              Transaction Reference
            </p>

            <p className="mt-1 break-all font-medium text-gray-800">
              {reference || "REF-123456789"}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col gap-3">

            <Button asChild className="w-full">
              <Link to="/orders">
                View Orders
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full"
            >
              <Link to="/">
                Continue Shopping
              </Link>
            </Button>

          </div>

        </div>

      </Card>
    </div>
  );
};

export default PaymentSuccessful;