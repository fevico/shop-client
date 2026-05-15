import { useState } from "react";
import ShippingForm from "@/components/checkout/ShippingForm";
import ReviewOrder from "@/components/checkout/ReviewOrder";
import OrderSummary from "@/components/checkout/OrderSummary";
import CheckoutSteps from "@/components/checkout/CheckoutSteps";

const Checkout = () => {
  const [step, setStep] = useState(1);

  // Shared form data
  const [checkoutData, setCheckoutData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",

    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">

        {/* LEFT */}
        <div className="space-y-8">

          {/* STEPS */}
          <CheckoutSteps step={step} />

          {/* STEP CONTENT */}
          {step === 1 && (
            <ShippingForm
              checkoutData={checkoutData}
              setCheckoutData={setCheckoutData}
              nextStep={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <ReviewOrder
              checkoutData={checkoutData}
              prevStep={() => setStep(2)}
            />
          )}

        </div>

        {/* RIGHT */}
        <OrderSummary />

      </div>
    </div>
  );
};

export default Checkout;