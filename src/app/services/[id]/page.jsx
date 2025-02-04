import dbConnect, { collectionNamesObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const page = async ({ params }) => {
  const p = await params;
  const servicesCollection = dbConnect(
    collectionNamesObject.servicesCollection
  );
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div>
      <section className="flex justify-center mt-6">
        <figure className="  relative">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            width={1150}
            height={300}
            alt="image"
          />
          <div className="overlay_bg  absolute w-full h-full  top-0">
            <div className="w-full h-full flex items-center">
              <div>
                <h1 className="text-3xl font-bold ps-16 text-white">
                  Service Details
                </h1>
              </div>
            </div>
            <div
              className="flex bg-[#FF3811] w-[280px] mx-auto justify-center items-center relative bottom-6 text-white font-bold rounded-t-2xl
            ">
              <p>Services/Home</p>
            </div>
          </div>
        </figure>
      </section>

      {/* content */}
      <section className="flex justify-between items-center w-full mx-auto mt-6">
        <div>
          <Image
            className="rounded-xl"
            src={data.img}
            width={300}
            height={250}
            alt="Image_bb"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-2xl font-bold">Price: {data.price}$</p>
          <FaArrowRightLong />
        </div>
      </section>
    </div>
  );
};

export default page;
