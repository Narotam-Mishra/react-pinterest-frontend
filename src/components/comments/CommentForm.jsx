import EmojiPicker from "emoji-picker-react"
import { useState } from "react";

const CommentForm = () => {
  const [open, setOpen] = useState(false);
  const [desc, setDesc ] = useState("");

  const handleEmojiClick = (emojiObj) => {
    setDesc((prev) => prev +" "+emojiObj.emoji);
    setOpen(false);
  }

  return (
    <>
      {/* comment input form */}
      <form className="commentForm">
        <input
          type="text"
          placeholder="Add a comment"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <div className="emoji">
          <div onClick={() => setOpen((prev) => !prev)}>😊</div>
          {open && (
            <div className="emojiPicker">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default CommentForm;