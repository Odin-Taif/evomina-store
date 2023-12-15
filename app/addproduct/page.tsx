import React from "react";
import Productform from "./productform";
import { useSession } from "next-auth/react";

import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";

// type Props = {};

// const page = (props: Props) => {

//   return <Productform />;
// };

// export default page;

const AssistentPage = async (props) => {
  // Attempting to retrieve the current user's session on the server-side
  const currentUser = await getServerSession(options);

  // If there is no current user session, meaning the user is not authenticated
  if (currentUser?.user.email !== "mjd.reklam@gmail.com") {
    // Return a message prompting the user to log in, wrapped in ClientOnly to ensure it renders on the client-side
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized!"
          subtitle="Please login first as an admin!"
          showReset
        />
      </ClientOnly>
    );
  }

  return <Productform />;
};
// Exporting the component as the default export
export default AssistentPage;
