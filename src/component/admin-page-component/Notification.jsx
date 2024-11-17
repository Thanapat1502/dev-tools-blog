export default function Notification() {
  return (
    <div className="notics">
      <div className="notic-header font-semibold text-2xl py-6 px-16 border border-[#DAD6D1]">
        <h3>Notification</h3>
      </div>
      <div className="notic-list flex flex-row items-center px-16 py-10">
        <div className="picture h-12 w-12 rounded-full">
          <img src="*" />
        </div>
        <div className="notic-body flex flex-col">
          <div className="flex flex-row gap-2 items-center">
            <h4 className="notics-name font-bold">Jacob Lash</h4>
            <p className="notics-action text-[#75716B]">
              Jacob Lash Commented on your article: The Fascinating World of
              Cats: Why We Love Our Furry Friends
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            similique cumque quas, modi aliquam architecto dolorem commodi nam
            quos, neque in, ipsam officiis explicabo laboriosam iusto quasi
            ullam facere voluptatem.
          </p>
          <p className="time text-[#F2B68C] text-sm font-medium">4 hours ago</p>
        </div>
        <button className="font-medium text-base underline">View</button>
      </div>
      {/**demo----------------------------------------------------- */}
      <div className="notic-list flex flex-row items-center px-16 py-10">
        <div className="notic-body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          similique cumque quas, modi aliquam architecto dolorem commodi nam
          quos, neque in, ipsam officiis explicabo laboriosam iusto quasi ullam
          facere voluptatem.
        </div>
        <button className="font-medium text-base underline">View</button>
      </div>
      {/**demo----------------------------------------------------- */}
    </div>
  );
}
