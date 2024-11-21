import UserProfileSm from "@/component/user-page-component/UserProfileSm";
import UserProfileLg from "@/component/user-page-component/UserProfileLg";
export default function UserProfile() {
  //todo
  //fetch userdata
  //useEffect to fetch when load page
  //state store userdata
  //state isSave: active after save button activated and render green-box
  //pre-fill the input
  //axios post to change user data
  return (
    <>
      <div className="block lg:hidden">
        <UserProfileSm />
      </div>
      <div className="hidden lg:block">
        <UserProfileLg />
      </div>
    </>
  );
}
