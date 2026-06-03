import { useState } from "react";

interface ProductImageGalleryProps {
  images: {
    url: string;
  }[];
}

const ProductImageGallery = ({
  images,
}: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images?.[0]?.url);

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="w-full h-[600px] overflow-hidden rounded-2xl border">
        <img
          src={selectedImage}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto">
        {images?.map((image, index) => (
          <button
            key={index}
            onClick={() =>
              setSelectedImage(image.url)
            }
            className={`w-30 h-30 rounded-lg overflow-hidden border-2 transition ${
              selectedImage === image.url
                ? "border-black"
                : "border-gray-200"
            }`}
          >
            <img
              src={image.url}
              alt={`Thumbnail ${index}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;