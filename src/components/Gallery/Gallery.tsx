import  { useState } from 'react';
import { Section } from '../shared/Section';
import { GalleryItem } from './GalleryItem';
import { Modal } from './Modal';

const galleryItems = [
  {
    id: 1,
    image: 'src/assets/Rectangle 601.png',
    title: 'Cable tray'
  },
  {
    id: 2,
    image: 'src/assets/Group 355.png',
    title: 'Lockers'
  },
  {
    id: 3,
    image: 'src/assets/Frame 358.png',
    title: 'Metal doors'
  },
  {
    id: 4,
    image: 'src/assets/Group 356.png',
    title: 'Electrical panels'
  },
  {
    id: 5,
    image: 'src/assets/Rectangle 602.png',
    title: 'Electrical panel'
  },
  {
    id: 6,
    image: 'src/assets/Rectangle 603.png',
    title: 'Electrical panels'
  },
  {
    id: 7,
    image: 'src/assets/Rectangle 604.png',
    title: 'Cable tray connector'
  },
  {
    id: 8,
    image: 'src/assets/Rectangle 605.png',
    title: 'Lockers'
  },
  {
    id: 9,
    image: 'src/assets/Rectangle 606.png',
    title: 'Electrical enclosure'
  },
  {
    id: 10,
    image: 'src/assets/Rectangle 607.png',
    title: 'Fire rated door'
  },
  {
    id: 11,
    image: 'src/assets/Rectangle 608.png',
    title: 'Electrical enclosure'
  },
  {
    id: 12,
    image: 'src/assets/Group 358.png',
    title: 'Cable tray'
  },
  {
    id: 13,
    image: 'src/assets/100.jpg',
    title: 'Metal Fabrication'
  },
  {
    id: 14,
    image: 'src/assets/200.jpg',
    title: 'Metal Fabrication'
  },
  // {
  //   id: 6,
  //   image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
  //   title: 'Metal Fabrication'
  // },
];

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <Section id="gallery" bgColor="gray">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are honored to participate in supplying different products and to be a consistent supplier to below
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <GalleryItem
              key={item.id}
              image={item.image}
              title={item.title}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <Modal
          image={selectedItem.image}
          title={selectedItem.title}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </Section>
  );
}