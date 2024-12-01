
import { X } from 'lucide-react';

interface ModalProps {
  image: string;
  title: string;
  onClose: () => void;
}

export function Modal({ image, title, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative max-w-4xl w-auto bg-white rounded-lg overflow-hidden"> 
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-auto p-1"
        />
        <div className="p-2">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
      </div>
    </div>
  );
}