import AddCategoryDialog from "@/components/category/AddCategoryDialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddProduct = () => {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Add Product</h3>

        {/* Category modal still here */}
        <AddCategoryDialog />
      </div>

      {/* FORM */}
      <form className="space-y-4 max-w-2xl">

        {/* Name */}
        <div className="space-y-1">
          <Label>Product Name</Label>
          <Input placeholder="Enter product name" />
        </div>

        {/* Description */}
        <div className="space-y-1">
          <Label>Description</Label>
          <textarea
            className="w-full border rounded-md p-2"
            placeholder="Enter description"
          />
        </div>

        {/* Category */}  
        <div className="space-y-1">
          <Label>Category</Label>
          <select className="w-full border rounded-md p-2">
            <option>Select category</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </select>
        </div>

        {/* Images */}
        <div className="space-y-1">
          <Label>Product Images</Label>
          <Input type="file" multiple />
        </div>

        {/* Submit */}
        <Button className="bg-purple-600">
          Create Product
        </Button>

      </form>
    </div>
  )
}

export default AddProduct