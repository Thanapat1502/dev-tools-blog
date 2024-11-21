export function UserAlert() {
  return (
    <div className="alert-container flex justify-center sticky bottom-20">
      <div className="save-alert-box flex flex-row gap-3 bg-[#12B279] w-11/12 h-28 rounded-lg justify-center items-center">
        <div className="alert-message">
          <h4 className="font-semibold text-xl text-white">Saved profile</h4>
          <p className="font-medium text-sm text-white">
            Your profile has been successfully updated
          </p>
        </div>
        <button className="text-white">X</button>
      </div>
    </div>
  );
}
