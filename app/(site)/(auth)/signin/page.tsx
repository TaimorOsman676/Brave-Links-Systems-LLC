import { Metadata } from "next";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import Signin from "../../../components/Auth/SignIn";

export const metadata: Metadata = {
  title: "Sign In | Property",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />

      <Signin />
    </>
  );
};

export default SigninPage;
