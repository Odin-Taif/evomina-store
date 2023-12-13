"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "../components/Navbar/Navbar";
import { useRouter } from "next/navigation";
import Para from "../components/Para";
import ImageUpload from "../components/ImageUpload";

interface Props {
  id: number;
  title: string;
  description: string;
  category: string;
  store: string;
  price: number;
  images: string;
  userId: number;
}

const Edit = ({
  id,
  title,
  description,
  category,
  store,
  price,
  images,
  userId,
}: Props) => {
  const Id = userId;
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: id,
    title: title,
    description: description,
    category: category,
    store: store,
    price: price,
    images: images,
    userId: Id,
  });
  const [Description, setDescription] = useState<string>("");
  const [info, updateinfo] = useState<any>();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    if (formData.images) {
      const imageUrlArray = formData.images.split(",");
      setImageUrls(imageUrlArray);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "price"
        ? parseInt(e.target.value)
        : parseInt(e.target.value);
    const inventory =
      e.target.name === "inventory"
        ? parseInt(e.target.value)
        : parseInt(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: value,
      [e.target.name]: inventory,
    });
  };

  const handleImageChange = () => {
    const stringimages = JSON.stringify(imageUrls);
    setFormData({
      ...formData,
      images: stringimages,
      description: Description,
      userId: id,
    });
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: Description,
      images: imageUrls.toString(),
      userId: id,
    }));
  }, [imageUrls]);

  const updateData = async () => {
    handleImageChange();
    try {
      const response = await axios.patch("/api/updateproduct", formData);
      console.log(response.data);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-5 max-w-[1280px] mx-auto mb-10">
      <h1 className="text-3xl font-semibold py-6">Add your Product Evomina</h1>
      <div className="text-black mt-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <input
              type="text"
              className="w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="category" className="font-medium">
              Category
            </label>
            <input
              type="text"
              className="w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="store" className="font-medium">
              Store
            </label>
            <input
              type="text"
              className="w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
              name="store"
              value={formData.store}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="price" className="font-medium">
              Price
            </label>
            <input
              type="number"
              className="w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
              name="price"
              value={formData.price}
              onChange={handlePriceChange}
            />
          </div>
        </div>
        <label htmlFor="" className="mt-10 inline-block font-medium">
          Description about your product
        </label>
        <Para
          setDescription={setDescription}
          description={formData.description}
        />
        <label htmlFor="" className="mt-10 inline-block font-medium">
          Upload Images
        </label>
        <ImageUpload
          info={info}
          updateInfo={updateinfo}
          imageUrls={imageUrls}
          setImageUrls={setImageUrls}
          handleImageChange={handleImageChange}
        />
        <button
          onClick={updateData}
          className="text-white mt-10 border-[1px] bg-amber-500 rounded-lg px-5 p-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Edit;
