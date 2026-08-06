import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, title, description, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#151515] shadow-[0_0_40px_rgba(212,175,55,0.18)]">
        <div className="flex items-start justify-between border-b border-yellow-500/10 px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            {description ? <p className="mt-2 text-sm text-gray-400">{description}</p> : null}
          </div>
          <button
            type="button"
            className="rounded-full p-2 text-gray-400 transition hover:bg-gray-800 hover:text-white"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
