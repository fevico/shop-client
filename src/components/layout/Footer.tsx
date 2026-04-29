const Footer = () => {
  return (
    <div className="px-10 mt-16 mb-10">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* ABOUT */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">About ShopHub</h3>
          <p className="text-sm text-gray-500">
            Your one-stop destination for quality products at great prices.
          </p>
        </div>

        {/* SHOP */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Shop</h3>
          <p className="text-sm text-gray-500">Electronics</p>
          <p className="text-sm text-gray-500">Sports</p>
          <p className="text-sm text-gray-500">Home</p>
          <p className="text-sm text-gray-500">Accessories</p>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Customer Service</h3>
          <p className="text-sm text-gray-500">Contact Us</p>
          <p className="text-sm text-gray-500">Shipping Info</p>
          <p className="text-sm text-gray-500">Returns</p>
          <p className="text-sm text-gray-500">FAQ</p>
        </div>

        {/* FOLLOW US */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Follow Us</h3>
          <p className="text-sm text-gray-500">
            Stay connected on social media
          </p>
        </div>

      </div>

    </div>
  );
};

export default Footer; 