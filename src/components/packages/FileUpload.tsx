import React, { useRef, useState } from "react";
import { ImagePlus, Trash2 } from "lucide-react";

const FileUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);

  const [preview, setPreview] = useState<string>("");

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);

    setPreview(URL.createObjectURL(selectedFile));
  };

  const removeFile = () => {
    setFile(null);
    setPreview("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-gray-300">
        Upload Payment Screenshot
      </label>

      {!file ? (
        <div
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-yellow-500/30 bg-[#1A1A1A] p-10 text-center transition hover:border-yellow-500 hover:bg-[#202020]"
        >
          <ImagePlus
            size={55}
            className="mx-auto text-yellow-500"
          />

          <h3 className="mt-4 text-lg font-semibold text-white">
            Upload Screenshot
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Click here to browse your payment screenshot
          </p>

          <button
            type="button"
            className="mt-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-2 font-semibold text-black"
          >
            Browse File
          </button>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-700 bg-[#1A1A1A] p-5">

          <img
            src={preview}
            alt="Preview"
            className="h-60 w-full rounded-xl object-cover"
          />

          <div className="mt-4 flex items-center justify-between">

            <div>

              <p className="font-medium text-white">
                {file.name}
              </p>

              <p className="text-sm text-gray-400">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>

            </div>

            <button
              onClick={removeFile}
              className="rounded-lg bg-red-500 p-3 text-white transition hover:bg-red-600"
            >
              <Trash2 size={18} />
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default FileUpload;