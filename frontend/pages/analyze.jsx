import React, { useState, useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import Admin from "layouts/Admin.js";
import FileComplaint from "components/FileComplaint";
import CardTable from "components/Cards/CardTable";

export default function Analyze() {
  const { data: session, status } = useSession();
  console.log(session);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const securePage = () => {
  //     if (status === "unauthenticated") {
  //       signIn();
  //     } else {
  //       setLoading(false);
  //     }
  //   };
  //   securePage();
  // });

  // if (loading) {
  //   return <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>;
  // }
  return (
    <Admin
      title="Analyze your followings"
      headerText="Click the analyze button to analyze the tweets of your followings"
      image={session.user.image}
    >
      <div className="flex flex-wrap mt-4 justify-center">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <div className="text-white">
            <CardTable />
          </div>
        </div>
      </div>
    </Admin>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
