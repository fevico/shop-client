import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {Textarea} from "@/components/ui/textarea"
import { Spinner } from "../ui/spinner";
import { useState } from "react";
import { useCreateCategoryMutation } from "@/services/api";

const categrySchema = z.object({
    name: z.string().min(3, "Category name must be at least 3 characters long"),
    description: z.string().min(10, "Category description must be at least 10 characters long"),
    image: z.any()
})

type formFields = z.infer<typeof categrySchema>

const AddCategoryDialog = () => {
    const {reset, register, handleSubmit, formState: {errors}} = useForm<formFields>({resolver: zodResolver(categrySchema)})
    const [createCategory, {isLoading}] = useCreateCategoryMutation()
        const [open, setOpen] = useState(false)
      const onSubmit = async (data: formFields) => {
    try {
      const formData = new FormData();

      console.log("before form data", data.image)
      formData.append("name", data.name);
      formData.append("description", data.description);
      
      // file input returns array
      const result = await createCategory(formData).unwrap();

      console.log("category created", result);

      reset();     
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-600">Add Category</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input placeholder="Category name" {...register("name")} />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea placeholder="Category description" {...register("description")} />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </div>
  
          <div className="space-y-2">
            <Label>Image</Label>
            <Input type="file" {...register("image")} />
            {errors.image && <p className="text-red-500">{String(errors.image.message)}</p>}
          </div>

          <Button disabled={isLoading} className="w-full bg-purple-600" onClick={handleSubmit(onSubmit)}>
            {isLoading ? <Spinner/> : "Create Category"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryDialog;