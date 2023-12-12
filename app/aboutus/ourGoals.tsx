import { FunctionComponent } from "react";
import { MdSecurity, MdOutlineAttachMoney } from "react-icons/md";
import { FcMindMap } from "react-icons/fc";
import Container from "../components/reusableComponents/Container";
import Heading from "../components/reusableComponents/Heading";

const OurGoals: FunctionComponent = () => {
  return (
    <Container>
      <Heading title={"Our Goals"} center={true} />
      <section className="relative block py-10 px-6 md:px-10">
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md bg-gray-100  text-black p-8 text-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-6 font-normal my-3">Cheaper rents</h2>
              <MdOutlineAttachMoney size={40} />
            </div>
            <p className="my-4 mb-0 leading-relaxed tracking-wide">
              We offer the cheap alternative to the student dormitory with more
              space and a lower square meter rent
            </p>
          </div>
          <div className="rounded-md bg-gray-100  text-black p-8 text-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-6 font-normal my-3">Peace of mind</h2>
              <FcMindMap size={40} />
            </div>
            <p className="my-4 mb-0 leading-relaxed tracking-wide">
              Rent furnished and serviced without effort and relaxed.
            </p>
          </div>
          <div className="rounded-md bg-gray-100  text-black p-8 text-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-6 font-normal my-3">Security</h2>
              <MdSecurity size={40} />
            </div>
            <p className="my-4 mb-0 leading-relaxed tracking-wide">
              Rent furnished and serviced without effort and relaxed.
            </p>
          </div>
        </div>
      </section>
      <hr className="my-4" />
    </Container>
  );
};

export default OurGoals;
