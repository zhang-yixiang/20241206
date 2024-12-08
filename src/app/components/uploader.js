import UploadIcon from '@/app/icons/upload.svg';
import {useState, useRef} from "react";

// Uploader component
export default function UpLoader({accept, multiple, onFileChange}) {
  const [cursorInside, setCursorInside] = useState(false)
  const inputRef = useRef(null);
  const onDragOver = e => {
    e.preventDefault()
    return false
  }
  const onDrop = e => {
    setCursorInside(false);
    onFileChange(e.dataTransfer.files);
    e.preventDefault();
    return false;
  }
  const onChange = e => {
    if (e.target.files !== null) {
      onFileChange(e.target.files);
      inputRef.current.value = "";
    }
  }
  return (
    <div
      className="h-[350px] relative text-center w-[275px]"
      onDragEnter={() => setCursorInside(true)}
    >
      {cursorInside && (
        <div
          className="absolute w-full h-full rounded-sm top-0 right-0 left-0 bottom-0 cursor-pointer z-30"
          onDragLeave={() => setCursorInside(false)}
          onDragOver={onDragOver}
          onDrop={onDrop}
        ></div>
      )}
      <input
        ref={inputRef}
        className="cursor-pointer hidden"
        type="file"
        id="input-file-upload"
        multiple={multiple}
        accept={accept != null ? accept : '.pdf'}
        onChange={onChange}
      />
      <label
        className={
        `${cursorInside 
          ? "bg-stone-100 border-stone-200 border-solid" 
          : "bg-white border-dashed border-stone-300"}
          h-full flex items-center justify-center border rounded transition-all
          `}
        htmlFor="input-file-upload"
      >
        <div className="cursor-pointer flex flex-col items-center space-y-3">
          <UploadIcon className="w-8 h-8" />
          <p>Click to upload or drag and drop</p>
        </div>
      </label>
    </div>
  )
}