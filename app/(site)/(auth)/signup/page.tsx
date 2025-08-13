import { Metadata } from "next";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import SignUp from "../../../components/Auth/SignUp";

export const metadata: Metadata = {
  title: "Sign Up | Property",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign Up Page" />

      <SignUp />
    </>
  );
};

export default SignupPage;
