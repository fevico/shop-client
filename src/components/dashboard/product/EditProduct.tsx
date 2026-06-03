import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { showToast } from "@/lib/toast."
import { useEditProductMutation, useGetProductDetailsQuery } from "@/services/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useParams } from "react-router-dom"
import {z} from 'zod'

const productSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  price: z.string().optional(),
  images: z
    .any()
    .optional()
  })

type formFields = z.infer<typeof productSchema>

const EditProduct = () => {
    const {reset, register, handleSubmit, formState: {errors}} = useForm<formFields>({
    resolver: zodResolver(productSchema)
  }) 

    const { productId } = useParams();

  const { data: productData } = useGetProductDetailsQuery(productId);
  const [editProduct, {isLoading}] = useEditProductMutation();


  useEffect(() => {
  if (productData?.product) {
    reset({
      name: productData.product.name,
      description: productData.product.description,
      category: productData.product.category._id,
      price: productData.product.price,
    });
  }
}, [productData, reset]);

  const onSubmit:SubmitHandler<formFields>  = async (data) => {
    try {
    const formdata = new FormData();
    if (data.name) formdata.append("name", data.name);
    if (data.description) formdata.append("description", data.description);
    if (data.category) formdata.append("category", data.category);
    if (data.price) formdata.append("price", data.price.toString());

    if (data.images?.length) {
    for (let i = 0; i < data.images.length; i++) {
    formdata.append("images", data.images[i]);
    }
}
    
    const response = await editProduct({ id: productId, formdata }).unwrap();
    console.log("Product updated:", response);
    showToast.success("Product updated", `${response.product.name} has been updated.`);
    } catch (error) {
      console.error("Error updating product:", error);
        showToast.error("Failed to update product", `An error occurred while updating the product.`);
    }
}
  
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Edit Product</h3> 

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
          <Input type="string" {...register("price")} placeholder="Enter product price" />
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
            {productData?.product.category && (
            <option key={productData.product.category._id} value={productData.product.category._id}>
              {productData.product.category.name}
            </option>
                )}
          </select>
        </div>
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        {/* Images */}
        <div className="space-y-1">
          <Label>Upload new image</Label>
          <Input  type="file" multiple {...register("images")} />
        </div>
        {errors.images && <p className="text-red-500 text-sm">{String(errors.images.message)}</p>}

        <div className="space-y-2">
  <Label>Current Images</Label>

  <div className="flex gap-3 flex-wrap">
    {productData?.product?.images?.map(
      (image: any, index: number) => (
        <img
          key={index}
          src={image.url}
          alt={`Product ${index + 1}`}
          className="w-24 h-24 object-cover rounded-md border"
        />
      )
    )}
  </div>
</div>

        {/* Submit */}
        <Button disabled={isLoading} className="bg-purple-600" type="submit">
          {isLoading ? <Spinner /> : "Update Product"}
        </Button>

      </form>
    </div>
  )
}

export default EditProduct