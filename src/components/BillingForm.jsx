import React from "react";
import Box from "./Box";
import DropDown from "./DropDown";

const BillingForm = () => {
  return (
    <>
      <div>
        <h3 className="font-['Poppins'] font-semibold text-[36px] text-[#303030] mb-10">
          Billing Details
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-8">
          <div className="w-[49%]">
            <Box
              inputtype="First Name"
              placeholder="Amelia Robert"
              star={true}
            />
          </div>
          <div className="w-[49%]">
            <Box inputtype="Last Name" placeholder="Watson" star={true} />
          </div>
          <div className="w-[49%]">
            <Box
              inputtype="Phone Number"
              placeholder="+123 456 7890"
              star={true}
            />
          </div>
          <div className="w-[49%]">
            <Box
              inputtype="Email Address"
              placeholder="amelia.watson@eshop.com"
              star={true}
            />
          </div>
          {/* ...... */}
          <div className="w-full">
            <Box
              inputtype="Address"
              placeholder="Home Address, Auxiliary St. 12345, Anywhere State"
              star={true}
            />
          </div>

          <div className="w-[49%]">
            <DropDown
              title={"Country"}
              type={"country"}
              inputtype="Select Country"
              star={true}
            />
          </div>
          <div className="w-[49%]">
            <DropDown
              title={"State"}
              type={"state"}
              inputtype="Select State"
              star={true}
            />
          </div>
          <div className="w-[49%]">
            <DropDown
              title={"City"}
              type={"city"}
              inputtype="Select City"
              star={true}
            />
          </div>
          <div className="w-[49%]">
            <DropDown
              title={"Zip Code"}
              type={"zip"}
              inputtype="Select Zip Code"
            />
          </div>
          <div className="w-full">
            <Box
              inputtype="Order Notes"
              placeholder="Enter your order notes ..."
              type="textarea"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingForm;
