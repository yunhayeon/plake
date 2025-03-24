import LoginJoinLayout from "@/components/layout/LoginJoinLayout";

import JoinForm from "./_components/JoinForm";

const Page = () => {
  return (
    <LoginJoinLayout page="join">
      <JoinForm />
    </LoginJoinLayout>
  );
};

export default Page;
