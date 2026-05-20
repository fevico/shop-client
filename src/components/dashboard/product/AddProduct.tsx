import AddCategoryDialog from "@/components/category/AddCategoryDialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { useCreateProductMutation, useGetCategoriesQuery } from "@/services/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import {z} from 'zod'
   
const productSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters long"),
  description: z.string().min(10, "Product description must be at least 10 characters long"),
  category: z.string().min(1, "Category is required"),
  price: z.coerce.number().min(1, "Price must be a positive number"),
  images: z  
    .any()
    .refine((files) => files?.length > 0, {
      message: "At least one image is required",
    }),
  })

type formFields = z.infer<typeof productSchema>

const AddProduct = () => {
  const {reset, register, handleSubmit, formState: {errors}} = useForm<formFields>({
    resolver: zodResolver(productSchema)
  })
  const {data, isLoading, error } = useGetCategoriesQuery();
  const [createProduct, { isLoading: loading }] = useCreateProductMutation()

  const onSubmit:SubmitHandler<formFields>  = async (data) => {
    try {
      const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("category", data.category);
    formdata.append("price", data.price.toString());
    for (let i = 0; i < data.images.length; i++) {
      formdata.append("images", data.images[i]);
    }
    const response = await createProduct(formdata).unwrap();
    reset();
    console.log("Product created:", response);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Add Product</h3> 

        {/* Category modal still here */}
        <AddCategoryDialog />
      </div>
     
      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-2xl">

        {/* Name */}
        <div className="space-y-1">
          <Label>Product Name</Label>
          <Input type="text" {...register("name")} placeholder="Enter product name" />
        </div>
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        {/* Description */}
        <div className="space-y-1">
          <Label>Description</Label>
          <textarea
            className="w-full border rounded-md p-2"
            placeholder="Enter description"
            {...register("description")}
          />
        </div>
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

        {/* price */}
          <div className="space-y-1">
          <Label>Product Price</Label>
          <Input type="number" {...register("price")} placeholder="Enter product price" />
        </div>
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

        {/* Category */}  
        <div className="space-y-1">
          <Label>Category</Label>
          <select
            className="w-full border rounded-md p-2"
            {...register("category")}
            defaultValue=""
          >
            <option value="">Select category</option>
            {isLoading ? (
              <option disabled>Loading categories...</option>
            ): error ? (
              <option disabled>Failed to load categories</option>
            ) : (
            data?.categories.map((item: any) => (
            <option key={item._id} value={item._id}>{item.name}</option>
            ))
            )}
          </select>
        </div>
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        {/* Images */}
        <div className="space-y-1">
          <Label>Product Images</Label>
          <Input  type="file" multiple {...register("images")} />
        </div>
        {errors.images && <p className="text-red-500 text-sm">{String(errors.images.message)}</p>}

        {/* Submit */}
        <Button disabled={loading} className="bg-purple-600" type="submit">
          {loading ? <Spinner /> : "Create Product"}
        </Button>

      </form>
    </div>
  )
}

export default AddProduct