//import { UserResetSm } from "@/component/user-page-component/UserResetSm";
import {
  UserResetPasswordSM,
  UserResetPasswordLG,
} from "@/component/user-page-component/UserResetPassword";

export default function UserResetPasswordPage() {
  //TODO make user reset password page
  return (
    <>
      <div className="lg:hidden">
        <UserResetPasswordSM />
      </div>
      <div className="hidden lg:block">
        <UserResetPasswordLG />
      </div>
    </>
  );
}
