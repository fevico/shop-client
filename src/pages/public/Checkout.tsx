import { useState } from "react";
import ShippingForm from "@/components/checkout/ShippingForm";
import ReviewOrder from "@/components/checkout/ReviewOrder";
import OrderSummary from "@/components/checkout/OrderSummary";
import CheckoutSteps from "@/components/checkout/CheckoutSteps";
import { useCart } from "@/hook/useCart";
import { usePaymentIntentMutation } from "@/services/api";
import { useDispatch } from "react-redux";
import { clearCart } from "@/store/slice/cartSlice";

const Checkout = () => { 
  const [step, setStep] = useState(1);
  const {cartItems} = useCart()
  const [paymentIntent, {isLoading}] = usePaymentIntentMutation()
  const dispatch = useDispatch();
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

  const handlePayment = async () => {
  const payload = {
    email: checkoutData.email,
    name: checkoutData.fullName,
    shippingAddress: {
      fullName: checkoutData.fullName,
      address: checkoutData.address,
      city: checkoutData.city,
      postalCode: checkoutData.postalCode,
      country: checkoutData.country,
    },
    items: cartItems.map((item: any) => ({
      productId: item.productId,
      quantity: item.quantity,
    })),
  };


  try {
    const response = await paymentIntent(payload).unwrap()
    console.log("checkout", response)
    dispatch(clearCart())
    window.location.href = response.authorization_url; 
  } catch (error) {
    console.log("unable to process payment..", error)
  }

};

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
              isLoading={isLoading}
              handlePaymentIntent={handlePayment}
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