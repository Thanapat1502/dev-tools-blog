import { Button } from "../general-components/button";
export default function ResetPassword() {
  return (
    <div>
      <div className="category-header flex justify-between items-center px-16 py-6 border">
        <h3 className="font-semibold text-2xl text-[#26231E]">
          Reset password
        </h3>
        <Button
          buttonText={"Reset password"}
          width={"w-60"}
          bgColor={"bg-black"}
          textColor={"text-white"}
        />
      </div>

      <div className="reset-body pl-16 pt-10 pb-32">
        <form action="post" className="reset-form flex flex-col gap-10">
          <div className="input-container flex flex-col">
            <label
              htmlFor="current-password"
              className="font-medium text-base text-[#75716B]">
              Current password
            </label>
            <input
              type="password"
              name="current-password"
              placeholder="Current password"
              className="w-96 h-12 border rounded-2xl py-3 pl-4 pr-3"
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="new-password"
              className="font-medium text-base text-[#75716B]">
              New password
            </label>
            <input
              type="password"
              name="new-password"
              placeholder="New password"
              className="w-96 h-12 border rounded-2xl py-3 pl-4 pr-3"
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="current-password"
              className="font-medium text-base text-[#75716B]">
              Confirm new password
            </label>
            <input
              type="password"
              name="current-password"
              placeholder="Confirm new password"
              className="w-96 h-12 border rounded-2xl py-3 pl-4 pr-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
