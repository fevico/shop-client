type Props = {
  step: number;
};

const CheckoutSteps = ({ step }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">

      <div
        className={`border rounded-2xl p-6 text-center font-medium
        ${step === 1 ? "bg-black text-white" : "bg-white"}
        `}
      >
        Shipping
      </div>

      <div
        className={`border rounded-2xl p-6 text-center font-medium
        ${step === 2 ? "bg-black text-white" : "bg-white"}
        `}
      >
        Review
      </div>

    </div>
  );
};

export default CheckoutSteps;