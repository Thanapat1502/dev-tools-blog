export default function Notification() {
  return (
    <div className="notics">
      <div className="notic-header font-semibold text-2xl py-6 px-16 border border-[#DAD6D1]">
        <h3>Notification</h3>
      </div>
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
