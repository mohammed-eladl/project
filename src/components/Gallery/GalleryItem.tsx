
interface GalleryItemProps {
  image: string;
  title: string;
  onClick: () => void;
}

export function GalleryItem({ image, title, onClick }: GalleryItemProps) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer animate-fade-in"
    >
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-lg font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
}