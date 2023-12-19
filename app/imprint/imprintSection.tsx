import React, { FC } from "react";
import Container from "../components/reusableComponents/Container";

const Imprint: FC = () => {
  return (
    <Container>
      <h1 className="text-3xl font-semibold mb-4">Imprint</h1>
      <section className="mb-4">
        <p className="text-sm md:text-base mb-2 font-bold">
          Web:
          <a
            href="https://www.evomina.com"
            className="underline decoration-transparent text-blue-400 transition duration-300 ease-in-out hover:decoration-inherit"
          >
            https://www.evomina.com
          </a>
          <br />
        </p>
        <p className="text-sm md:text-base mb-2 font-bold">
          Mail:{" "}
          <a
            href="office@friends-in-flats.at"
            className="underline decoration-transparent text-blue-400 transition duration-300 ease-in-out hover:decoration-inherit"
          >
            info@evomina.com
          </a>
          <br />
        </p>
        <p className="text-sm md:text-base mb-2 font-bold">
          Phone & Whatsapp: :{" "}
          <a
            href="office@friends-in-flats.at"
            className="underline decoration-transparent text-blue-400 transition duration-300 ease-in-out hover:decoration-inherit"
          >
            +43 (0)6763244801
          </a>
          <br />
        </p>
        <p className="text-sm md:text-base mb-2 font-bold">
          Legal basis:
          <span className="text-sm md:text-base">Friends in Flats GmbH</span>
        </p>
        <p className="text-sm md:text-base mb-2 font-bold">
          Legal form:
          <span className="text-sm md:text-base">one-man business</span>
        </p>
        <p className="text-sm md:text-base mb-2 font-bold">
          Business branch:
          <span className="text-sm md:text-base">
            Development and operation of a real estate platform for the rental
            of properties
          </span>
        </p>
        <p className="text-sm md:text-base mb-2 font-bold">
          VAT number:
          <span className="text-sm md:text-base"> ATBRA.609062-000</span>
        </p>
        <p className="text-sm md:text-base mb-2 font-bold">
          Company registration number:
          <span className="text-sm md:text-base">FN 609062f</span>
        </p>
        <p className="text-sm md:text-base mb-2 font-bold">
          Company headquarters:
          <span className="text-sm md:text-base">
            Rainerstraße 2 5310 Mondsee Austria
          </span>
        </p>
        <p className="text-sm md:text-base mb-2 font-bold">
          Member of the WKÖ, WKOÖ
        </p>
        <p className="text-sm md:text-base mb-2 font-bold">
          <span className="text-sm md:text-base">
            Vöcklabruck District Authority
          </span>
        </p>
        <p className="text-sm md:text-base mb-2 font-bold">
          Trade regulations: see the freely accessible website of the Federal
          Chancellery&apos;s legal information service:
          <a
            href=" www.ris.bka.gv.at"
            className="underline decoration-transparent text-blue-400 transition duration-300 ease-in-out hover:decoration-inherit"
          >
            www.ris.bka.gv.at
          </a>
          <br />
        </p>

        <p className="text-sm md:text-base mb-2 ">
          You can also send any complaints to the email address given above.
        </p>
      </section>
    </Container>
  );
};
export default Imprint;
