import LoginJoinLayout from "@/components/layout/LoginJoinLayout";

import LoginForm from "./_components/LoginForm";

const Page = () => {
  return (
    <LoginJoinLayout page="login">
      <LoginForm />
    </LoginJoinLayout>
  );
};

export default Page;
