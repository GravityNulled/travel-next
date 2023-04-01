import React from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

const index = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return <div>{props.user.email}</div>;
};

export default index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const email = session.user?.email;
  const name = session.user?.name;
  const user = {
    email,
    name,
  };
  return {
    props: {
      user,
    },
  };
}
