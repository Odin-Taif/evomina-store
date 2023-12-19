import { FunctionComponent } from "react";
import {
  MdSecurity,
  MdHighQuality,
  MdCastForEducation,
  MdCreate,
  MdClearAll,
} from "react-icons/md";
import { GiUncertainty } from "react-icons/gi";
import { AiFillCustomerService } from "react-icons/ai";

import { FcMindMap } from "react-icons/fc";
import Container from "../components/reusableComponents/Container";
import Heading from "../components/reusableComponents/Heading";

const OurValues: FunctionComponent = () => {
  return (
    <Container>
      <Heading title={" Our Values"} center={true} />
      <section className="relative block py-10 px-6 md:px-10">
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md bg-gradient-to-t from-amber-50 to-gray-100  text-black p-2 text-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-6 font-normal my-3">Customer first​</h2>
              <AiFillCustomerService size={40} />
            </div>
            <p className="my-4 mb-0 leading-relaxed tracking-wide">
              We put our customers&apos; needs and satisfaction first and work
              hard to understand and meet them.
            </p>
          </div>
          <div className="rounded-md bg-gradient-to-t from-amber-50 to-gray-100  text-black p-2 text-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-6 font-normal my-3">Quality & Excellence</h2>
              <MdHighQuality size={40} />
            </div>
            <p className="my-4 mb-0 leading-relaxed tracking-wide">
              We strive for the highest quality in everything we do and
              continuously strive for excellence in our products and services.
            </p>
          </div>
          <div className="rounded-md bg-gradient-to-t from-amber-50 to-gray-100 text-black p-2 text-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-6 font-normal my-3">Lifelong learning</h2>
              <MdCastForEducation size={40} />
            </div>
            <p className="my-4 mb-0 leading-relaxed tracking-wide">
              We are convinced that we can only really grow through continuous
              learning. Therefore, further training and acquiring new knowledge
              are part of our daily tasks.
            </p>
          </div>
          <div className="rounded-md bg-gradient-to-b from-amber-50 to-gray-100 text-black p-2 text-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-6 font-normal my-3">Sustainability</h2>
              <GiUncertainty size={40} />
            </div>
            <p className="my-4 mb-0 leading-relaxed tracking-wide">
              We recognise our responsibility to the environment and are
              committed to sustainable business practices to minimise our
              environmental footprint.
            </p>
          </div>
          <div className="rounded-md bg-gradient-to-b from-amber-50 to-gray-100 text-black p-2 text-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-6 font-normal my-3">Ethics & Transparency</h2>
              <MdClearAll size={40} />
            </div>
            <p className="my-4 mb-0 leading-relaxed tracking-wide">
              We always act honestly, ethically and transparently and hold
              ourselves to the highest standards to exceed our own and our
              clients&apos; expectations.
            </p>
          </div>
          <div className="rounded-md bg-gradient-to-b from-amber-50 to-gray-100 text-black p-2 text-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-6 font-normal my-3">Innovation</h2>
              <MdCreate size={40} />
            </div>
            <p className="my-4 mb-0 leading-relaxed tracking-wide">
              We encourage creativity and innovation in every area of our
              business to stay on the cutting edge.
            </p>
          </div>
        </div>
      </section>
      <hr className="my-4" />
    </Container>
  );
};

export default OurValues;
