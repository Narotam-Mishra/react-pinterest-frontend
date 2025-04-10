import useEditorStore from "../../utils/editorStore"

const Workspace = ({ previewImg }) => {
  const { textOptions, setTextOptions } = useEditorStore()
  return (
    <div className="workspace">
      <div className="canvas">
        <img src={previewImg.url} alt="" />
        {textOptions.text && (
          <div className="">
            <input
              type="text"
              value={textOptions.text}
              onChange={(e) =>
                setTextOptions({ ...textOptions, text: e.target.value })
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Workspace