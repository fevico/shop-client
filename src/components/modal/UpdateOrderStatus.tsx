import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Spinner } from "../ui/spinner";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: any;
  isLoading: boolean;
  onUpdate: (
    orderId: string,
    status: string
  ) => Promise<void>;
};

const UpdateOrderStatusModal = ({
  open,
  onOpenChange,
  order,
  isLoading,
  onUpdate,
}: Props) => {
  const [status, setStatus] = useState(order?.status || "pending");

  if (!order) return null;


  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>

        <DialogHeader>
          <DialogTitle className="text-center">
            Update Order Status
          </DialogTitle>
        </DialogHeader>

        <Select
          value={status}
          onValueChange={setStatus}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent className="w-full">
            <SelectItem value="pending" >
              Pending
            </SelectItem>

            <SelectItem value="shipped">
              Shipped
            </SelectItem>

            <SelectItem value="delivered">
              Delivered
            </SelectItem>
          </SelectContent>
        </Select>

        <Button
        className="bg-purple-600 w-full mt-4"
        disabled={isLoading}
          onClick={() =>
            onUpdate(order._id, status)
          }
        >
          {isLoading ? <Spinner/> : "Save Changes"}
        </Button>

      </DialogContent>
    </Dialog>
  );
};

export default UpdateOrderStatusModal;