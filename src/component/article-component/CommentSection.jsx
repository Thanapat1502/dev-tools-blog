export default function CommentSection() {
  return (
    <>
      <div className="base-container">
        <butoon className="like-button">like</butoon>
        <div className="icon-container">
          <button>
            <span>icon</span>Copy link
          </button>
          <div className="icon-collection"></div>
        </div>
      </div>
      <div className="comment-container">
        <form action="post" className="comment-form">
          <label htmlFor="comment"></label>
          <textarea name="comment" id=""></textarea>
          <button>Send</button>
        </form>
      </div>
      <div className="comments-area"></div>
    </>
  );
}
