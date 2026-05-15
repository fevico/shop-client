import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const shippingSchema = z.object({
  email: z.string().email("Invalid email address"),

  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters long"),

  address: z
    .string()
    .min(5, "Address must be at least 5 characters long"),

  city: z
    .string()
    .min(2, "City must be at least 2 characters long"),

  postalCode: z
    .string()
    .min(5, "Postal code must be at least 5 characters long"),

  country: z
    .string()
    .min(2, "Country must be at least 2 characters long"),
});

type FormState = z.infer<typeof shippingSchema>;

const ShippingForm = ({
  checkoutData,
  setCheckoutData,
  nextStep,
}: any) => { 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    resolver: zodResolver(shippingSchema),

    // preload existing data
    defaultValues: checkoutData,
  });

  const onSubmit = (data: FormState) => {

    // save to parent state
    setCheckoutData({
      ...checkoutData,
      ...data,
    });

    // move to next step
    nextStep();
  };

  return (
    <Card className="p-6 rounded-2xl space-y-6">

      <h2 className="text-2xl font-semibold">
        Shipping Information
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        {/* Full name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="space-y-2">
            <Label>Full Name</Label>

            <Input
              placeholder="John Doe"
              {...register("fullName")}
            />

            {errors.fullName && (
              <p className="text-sm text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Email</Label>

            <Input
              placeholder="john@example.com"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label>Address</Label>

          <Input
            placeholder="123 Main Street"
            {...register("address")}
          />

          {errors.address && (
            <p className="text-sm text-red-500">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* City / Postal / Country */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="space-y-2">
            <Label>City</Label>

            <Input
              placeholder="New York"
              {...register("city")}
            />

            {errors.city && (
              <p className="text-sm text-red-500">
                {errors.city.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Postal Code</Label>

            <Input
              placeholder="100101"
              {...register("postalCode")}
            />

            {errors.postalCode && (
              <p className="text-sm text-red-500">
                {errors.postalCode.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Country</Label>

            <Input
              placeholder="Canada"
              {...register("country")}
            />

            {errors.country && (
              <p className="text-sm text-red-500">
                {errors.country.message}
              </p>
            )}
          </div>

        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
        >
          Continue to Payment
        </Button>

      </form>

    </Card>
  );
};

export default ShippingForm;