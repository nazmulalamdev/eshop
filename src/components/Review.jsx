import React, { useState } from "react";

const Review = () => {
  let [review, setReview] = useState(false);
  let [description, setDescription] = useState(true);

  const handleDescription = () => {
    setDescription(true);
    setReview(false);
  };

  const handleReview = () => {
    setDescription(false);
    setReview(true);
  };
  return (
    <>
      <div>
        <div className="flex items-center gap-12">
          <h4
            className={`font-['Poppins'] font-semibold text-[24px] ${
              description
                ? "text-[#303030] border-b-4 border-solid border-[#FF624C]"
                : "text-[#CBCBCB]"
            } cursor-pointer pb-2`}
            onClick={handleDescription}
          >
            Description
          </h4>
          <h4
            className={`font-['Poppins'] font-semibold text-[24px] ${
              review
                ? "text-[#303030] border-b-4 border-solid border-[#FF624C]"
                : "text-[#CBCBCB]"
            } cursor-pointer pb-2`}
            onClick={handleReview}
          >
            Reviews
          </h4>
        </div>
        {description && (
          <div className="mt-12 pb-10 flex gap-6 border-b border-solid border-[#CBCBCB]">
            <div className="w-[49%] font-[20px]">
              <ul className="flex gap-[95px] mb-8">
                <li className="w-[101px] font-['Poppins'] font-semibold">
                  Brand
                </li>
                <li className="font-['Montserrat'] font-normal">
                  NexSUS Tech Company
                </li>
              </ul>
              <ul className="flex gap-[95px] mb-8">
                <li className="w-[101px] font-['Poppins'] font-semibold">
                  Display
                </li>
                <li className="font-['Montserrat'] font-normal w-[430px]">
                  17.3-inch Full HD (1920 x 1080) IPS panel, 144Hz refresh rate,
                  3ms response time, 100% sRGB color gamut, Adaptive-Sync
                  technology, anti-glare
                </li>
              </ul>
              <ul className="flex gap-[95px] mb-8">
                <li className="w-[101px] font-['Poppins'] font-semibold">
                  Processor
                </li>
                <li className="font-['Montserrat'] font-normal w-[430px]">
                  10th Gen Intel Core i9-10980HK (8 cores, 16 threads, 2.4GHz
                  base clock speed, up to 5.3GHz turbo boost)
                </li>
              </ul>
              <ul className="flex gap-[95px] mb-8">
                <li className="w-[101px] font-['Poppins'] font-semibold">
                  Graphics
                </li>
                <li className="font-['Montserrat'] font-normal">
                  NVIDIA GeForce RTX 3080 (16GB GDDR6 VRAM)
                </li>
              </ul>
              <ul className="flex gap-[95px] mb-8">
                <li className="w-[101px] font-['Poppins'] font-semibold">
                  Memory
                </li>
                <li className="font-['Montserrat'] font-normal">
                  32GB DDR4-3200 RAM
                </li>
              </ul>
              <ul className="flex gap-[95px]">
                <li className="w-[101px] font-['Poppins'] font-semibold">
                  Storage
                </li>
                <li className="font-['Montserrat'] font-normal">
                  1TB PCIe NVMe M.2 SSD
                </li>
              </ul>
            </div>
            <div className="w-[49%] font-[20px]">
              <ul className="flex gap-[69px] mb-8">
                <li className="w-[119px] font-['Poppins'] font-semibold">
                  Audio
                </li>
                <li className="font-['Montserrat'] font-normal">
                  2 x 4W speakers with Smart Amp technology
                </li>
              </ul>
              <ul className="flex gap-[69px] mb-8">
                <li className="w-[119px] font-['Poppins'] font-semibold">
                  Connection
                </li>
                <li className="font-['Montserrat'] font-normal w-[480px]">
                  Wi-Fi 6 (802.11ax), Bluetooth 5.1, Gigabit Ethernet, HDMI
                  2.0b, USB 3.2 Gen 2 Type-C with DisplayPort 1.4 and Power
                  Delivery, 3 x USB 3.2 Gen 1 Type-A, 3.5mm audio
                </li>
              </ul>
              <ul className="flex gap-[69px] mb-8">
                <li className="w-[119px] font-['Poppins'] font-semibold">
                  Keyboard
                </li>
                <li className="font-['Montserrat'] font-normal w-[480px]">
                  Backlit Chiclet keyboard, N-key rollover, per-key RGB
                  lighting, Aura Sync technology
                </li>
              </ul>
              <ul className="flex gap-[69px] mb-8">
                <li className="w-[119px] font-['Poppins'] font-semibold">
                  Battery
                </li>
                <li className="font-['Montserrat'] font-normal">
                  4-cell 90Wh lithium battery (up to 8 hours battery life)
                </li>
              </ul>
              <ul className="flex gap-[69px] mb-8">
                <li className="w-[119px] font-['Poppins'] font-semibold">
                  Dimensions
                </li>
                <li className="font-['Montserrat'] font-normal">
                  15.7 x 11.1 x 1.0 inches (W x D x H)
                </li>
              </ul>
              <ul className="flex gap-[69px]">
                <li className="w-[119px] font-['Poppins'] font-semibold">
                  Weight
                </li>
                <li className="font-['Montserrat'] font-normal">6.28 pounds</li>
              </ul>
            </div>
          </div>
        )}
        {review && (
          <div className="w-full mt-12 pb-10 border-b border-solid border-[#CBCBCB]">
            Review Ddesign Under Construction
          </div>
        )}
      </div>
    </>
  );
};

export default Review;
