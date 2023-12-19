"use client";
import React, { useState, useEffect, useContext } from "react";
import { BsSliders2Vertical, BsChevronUp } from "react-icons/bs";
import axios from "axios";
import { CounterContext } from "@/app/context/counter.context";
type Props = {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  // selectedSize:string[]
  // setSelectedSize:React.Dispatch<React.SetStateAction<string[]>>
  // allHexValues:string[]
  // setAllHexValues:React.Dispatch<React.SetStateAction<string[]>>
  // selectedHexValues:string[]
  // setSelectedAllHexValues:React.Dispatch<React.SetStateAction<string[]>>
  // price: {min:number; max:number}
  // setPrice: React.Dispatch<React.SetStateAction<{min:number; max:number}>>
};

const Filter = ({ selectedCategories, setSelectedCategories }: Props) => {
  const { state, dispatch } = useContext(CounterContext);
  const allCategories = [
    "All Products",
    "Accessories",
    "Gift sets",
    "Incense cones",
    "Diffuser",
    "Frankincense",
    "Essential oil",
    "Incense burners",
    "Other",
  ];
  const [price, setPrice] = useState({
    min: 0,
    max: 1000,
  });

  useEffect(() => {
    dispatch({ type: "SET_PRICE", price: price });
  }, [price]);

  const handelMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "min" ? parseInt(e.target.value) : e.target.value;
    setPrice({
      ...price,
      [e.target.name]: value,
    });
  };

  const handlMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "max" ? parseInt(e.target.value) : e.target.value;
    setPrice({
      ...price,
      [e.target.name]: value,
    });
  };
  const toggleCategory = (category: string) => {
    setSelectedCategories((prevCategories) => {
      // Check if the category is already selected, and toggle accordingly
      const updatedCategories = prevCategories.includes(category)
        ? prevCategories.filter((c) => c == category)
        : [category];

      // console.log(updatedCategories); // Log the updated categories
      dispatch({ type: "SET_CATEGORY", selectedCategory: updatedCategories });
      return updatedCategories;
    });
  };

  const toggleAllProducts = () => {
    setSelectedCategories(allCategories);
    dispatch({ type: "SET_CATEGORY", selectedCategory: allCategories });
  };

  return (
    <div className="flex">
      <div className="md:w-[250px] border-l-[0.5px] border-r-[0.5px]">
        <div className="relative">
          <div className={"md:w-[250px] border-l-[0.5px] border-r-[0.5px]"}>
            <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px]">
              <h1 className="text-neutral-800">Filters</h1>
              <BsSliders2Vertical size={20} className="text-neutral-600" />
            </div>
            <div className="flex flex-col py-3 pb-5 tet-sm text-neutral-600 border-b-[0.5px]">
              <span
                className={`py-3 px-5 ${
                  selectedCategories.includes("All Products")
                    ? "bg-purple-50"
                    : ""
                }`}
                onClick={() => toggleAllProducts()}
              >
                All Products
              </span>
              <span
                className={`py-3 px-5 hover:cursor-pointer hover:bg-amber-100 ${
                  selectedCategories.includes("Accessories")
                    ? "bg-amber-50"
                    : ""
                }`}
                onClick={() => toggleCategory("Accessories")}
              >
                Accessories
              </span>
              <span
                className={`py-3 px-5 hover:cursor-pointer hover:bg-amber-100 ${
                  selectedCategories.includes("Gift sets") ? "bg-amber-50" : ""
                }`}
                onClick={() => toggleCategory("Gift sets")}
              >
                Gift sets
              </span>
              <span
                className={`py-3 px-5 hover:cursor-pointer hover:bg-amber-100 ${
                  selectedCategories.includes("Incense cones")
                    ? "bg-amber-50"
                    : ""
                }`}
                onClick={() => toggleCategory("Incense cones")}
              >
                Incense cones
              </span>
              <span
                className={`py-3 px-5 hover:cursor-pointer hover:bg-amber-100 ${
                  selectedCategories.includes("Diffuser") ? "bg-amber-50" : ""
                }`}
                onClick={() => toggleCategory("Diffuser")}
              >
                Diffuser
              </span>
              <span
                className={`py-3 px-5 hover:cursor-pointer hover:bg-amber-100 ${
                  selectedCategories.includes("Frankincense")
                    ? "bg-amber-50 "
                    : ""
                }`}
                onClick={() => toggleCategory("Frankincense")}
              >
                Frankincense
              </span>
              <span
                className={`py-3 px-5 hover:cursor-pointer hover:bg-amber-100 ${
                  selectedCategories.includes("Essential oil")
                    ? "bg-amber-50"
                    : ""
                }`}
                onClick={() => toggleCategory("Essential oil")}
              >
                Essential oil
              </span>
              <span
                className={`py-3 px-5 hover:cursor-pointer hover:bg-amber-100 ${
                  selectedCategories.includes("Incense burners")
                    ? "bg-amber-50"
                    : ""
                }`}
                onClick={() => toggleCategory("Incense burners")}
              >
                Incense burners
              </span>
              <span
                className={`py-3 px-5 hover:cursor-pointer hover:bg-amber-100 ${
                  selectedCategories.includes("Other") ? "bg-amber-50" : ""
                }`}
                onClick={() => toggleCategory("Other")}
              >
                Other
              </span>
            </div>
            {/* <div className="border-b-[0.5px] pb-10">
          <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5">
            <h1 className="text-neutral-800">Prices</h1>
            <BsChevronUp size={18} className="text-neutral-600" />
          </div>
          <div className="grid grid-cols-2 gap-5 px-5 overflow-hidden">
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="" className="text-[15px] opacity-75">
                Min
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1">$</span>
                <input
                  className="w-full outline-none border-[1px] rounded-lg px-2 text-center py-[2px]"
                  type="number"
                  name="min"
                  onChange={handelMinChange}
                  value={props.price.min}
                  id=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="" className="text-[15px] opacity-75">
                Max
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1">$</span>
                <input
                  className="w-full outline-none border-[1px] rounded-lg px-2 text-center py-[2px]"
                  type="number"
                  name="max"
                  onChange={handlMaxChange}
                  value={props.price.max}
                  id=""
                />
              </div>
            </div>
          </div>
        </div> */}
            {/* <div className="border-b-[0.5px]">
          <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5">
            <h1 className="text-neutral-800">Colors</h1>
          </div>
          <ul className="grid grid-cols-4 px-5 gap-5 mb-4">
            {allHexValue.map((hexvalue, index) => (
              <li
                key={index}
                className={`w-[40px] h-[40px] rounded-2xl border-[0.5px] border-neutral-300 cursor-pointer ${
                  props.selectedHexValues.includes(`#${hexvalue}`)
                    ? "shadow-2xl opacity-25"
                    : ""
                }`}
                style={{ backgroundColor: `#${hexvalue}` }}
                onClick={() => toggleColor(`#${hexvalue}`)}
              ></li>
            ))}
          </ul>
        </div> */}
            {/* <div className="sizes">
          <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5">
            <h1 className="text-neutral-800">sizes</h1>
          </div>
          <ul className="grid grid-cols-4 px-5 gap-5">
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("SM")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("SM")}
            >
              SM
            </li>
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("MD")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("MD")}
            >
              MD
            </li>
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("XL")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("XL")}
            >
              XL
            </li>
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("2XL")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("2XL")}
            >
              2XL
            </li>
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("3XL")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("3XL")}
            >
              3XL
            </li>
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("4XL")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("2XL")}
            >
              4XL
            </li>
          </ul>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
