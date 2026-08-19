import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "react-toastify";

interface CopyButtonProps {
  value: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      toast.success("Copied successfully!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      toast.error("Failed to copy");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer sm:w-auto
      ${
        copied
          ? "bg-green-500 text-white"
          : "bg-yellow-500 text-black hover:bg-yellow-400"
      }`}
    >
      {copied ? (
        <>
          <Check size={18} />
          Copied
        </>
      ) : (
        <>
          <Copy size={18} />
          Copy
        </>
      )}
    </button>
  );
};

export default CopyButton;