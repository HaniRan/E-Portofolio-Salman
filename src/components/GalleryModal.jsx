import { X } from "lucide-react";
import { useEffect } from "react";

const GalleryModal = ({ isOpen, onClose, image }) => {
  // Efek untuk mematikan scroll body saat modal buka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Konten Modal */}
      <div className="relative bg-zinc-900 border border-zinc-700 p-3 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate__animated animate__zoomIn animate__faster">
        {/* Tombol Tutup */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full hover:bg-zinc-700 transition-colors"
        >
          <X className="w-5 h-5 text-gray-300" />
        </button>

        {/* Gambar Besar */}
        <img 
          src={image.gambar} 
          alt={image.nama} 
          className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
        />
        
        {/* Caption/Penjelasan Foto */}
        <div className="p-4 mt-2">
          <h3 className="text-xl font-bold text-white">{image.nama}</h3>
          <p className="text-gray-400 mt-1 text-sm">{image.ket}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;