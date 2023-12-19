import { FC } from "react";
import Container from "../components/reusableComponents/Container";

const PrivacyPolicySection: FC = () => {
  return (
    <Container>
      <h1 className="text-3xl font-semibold mb-4">
        Declaration of Information Obligation
      </h1>
      <section className="mb-4">
        <p className="text-sm md:text-base">
          In the following privacy policy, we inform you about the most
          important aspects of data processing within the framework of our
          website. We collect and process personal data only based on legal
          regulations (General Data Protection Regulation, Telecommunications
          Act 2003). As soon as you as a user access or visit our website, your
          IP address, start time and duration of the session are recorded. This
          is technically necessary and thus represents a legitimate interest in
          accordance with Art 6 para 1 lit f GDPR.
        </p>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Contact with Us</h2>
        <p className="text-sm md:text-base">
          If you contact us either via our contact form on our website or by
          email, the data you transmit to us will be stored for six months for
          the purpose of processing your request or in case of further
          inquiries. Your transmitted data will not be passed on without your
          consent.
        </p>
        <p className="text-sm md:text-base mb-2">
          <strong className="text-blue-500 font-bold">Cookies</strong>
        </p>

        <p className="text-sm md:text-base mt-2">
          Our website uses so-called cookies. These are small text files that
          are stored on your device using the browser. They do no harm. We use
          cookies to make our offer user-friendly. Some cookies remain stored on
          your device until you delete them. They allow us to recognize your
          browser the next time you visit. If you do not want this, you can set
          up your browser to inform you about the setting of cookies and only
          allow this in individual cases. Deactivating cookies may limit the
          functionality of our website.
        </p>

        <p className="text-sm md:text-base mb-2">
          <strong className="text-blue-500 font-bold">Google Maps</strong>
        </p>
        <p>
          Our website uses functions of the web map service &quot;Google
          Maps&quot;. The service provider of this function is: Google Ireland
          Limited Gordon House, Barrow Street Dublin 4. Ireland. Tel: +353 1 543
          1000 As part of using Google Maps, it is necessary to store and
          process your IP address. Google usually transfers the data to a server
          in the USA and stores the data there. The processing is carried out by
          the service provider (mentioned above), the operator of this homepage
          has no influence on the data transfer. Data processing is based on the
          legal provisions of § 96 para 3 TKG and Art 6 para 1 lit f (legitimate
          interest) of the GDPR. The use of Google Maps increases the visibility
          of the places provided on our website.
        </p>
        <p>
          For more information on how the service provider &quot;Google&quot;
          handles user data, please see the privacy policy:
        </p>
        <section>
          https://policies.google.com/privacy?hl=en. Google also processes the
          data in the USA but has subjected itself to the EU-US Privacy Shield.
          https://www.privacyshield.gov/EU-US-Framework
        </section>
        <p className="text-sm md:text-base mb-2">
          <strong className="text-blue-500 font-bold">Google Fonts</strong>
        </p>
        <p className="text-sm md:text-base mt-2">
          Our website uses fonts from &quot;Google Fonts&quot;. The service
          provider of this function is: Google Ireland Limited Gordon House,
          Barrow Street Dublin 4. Ireland.Tel: +353 1 543 1000
        </p>
        <section>
          When you call up this website, your browser loads fonts and stores
          them in the cache. As a visitor to the website, since you receive data
          from the service provider, Google may set or analyze cookies on your
          computer. The use of &quot;Google Fonts&quot; serves to optimize our
          service and the uniform presentation of content. This represents a
          legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR.
          For more information about Google Fonts, please follow this link:
          https://developers.google.com/fonts/faq For more information on how
          Google handles user data, please see the privacy policy:
          https://policies.google.com/privacy?hl=en. Google also processes the
          data in the USA but has subjected itself to the EU-US Privacy Shield.
          https://www.privacyshield.gov/EU-US-Framework
        </section>
        <p className="text-sm md:text-base mb-2">
          <strong className="text-blue-500 font-bold">Server Log Files</strong>
        </p>
        <p>
          This website and the associated provider automatically collect
          information in the context of website usage as part of so-called
          &quot;server log files&quot;. This particularly concerns:
        </p>
        <ul className="list-disc pl-6">
          <li>- IP address or hostname</li>
          <li>- the browser used</li>
          <li>- duration of stay on the website and date and time</li>
          <li>pages of the website accessed</li>
          <li>language settings and operating system</li>
          <li>
            &quot;Leaving Page&quot; (on which URL did the user leave the
            website)
          </li>
          <li>ISP (Internet Service Provider)</li>
        </ul>
        <p className="text-sm md:text-base mt-2">
          This collected information is not processed personally or linked with
          personal data. The website operator reserves the right to evaluate or
          check these data in case of known illegal activities.
        </p>

        <p className="text-sm md:text-base mb-2">
          <strong className="text-blue-500 font-bold">
            Your Rights as a Data Subject
          </strong>
        </p>
        <p>
          You as a data subject have the following rights regarding your data,
          which are stored by us:
        </p>
        <ul className="list-disc pl-6">
          <li> - Access</li>
          <li> - Deletion of data</li>
          <li> - Correction of data</li>
          <li> - Data portability</li>
          <li> - Revocation and objection to data processing</li>
          <li> - Restriction</li>
        </ul>
        <p className="text-sm md:text-base mb-2">
          <strong className="text-blue-500 font-bold">
            You can reach us at the following contact details:
          </strong>
        </p>
        <ul className="list-disc pl-6">
          <li>- Website operator: Evomina</li>
          <li>- Phone number: +43 676 3244801</li>
          <li>- Email: info@evomina.com</li>
        </ul>
      </section>
    </Container>
  );
};

export default PrivacyPolicySection;
