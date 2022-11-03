import { api } from "../../services";
import { createContext, ReactNode, useState } from "react";

export interface IGallery {
    id: string;
    url: string;
    vehicle_id: string;
}

interface IGalleryProps {
  children: ReactNode;
}

interface GalleryProviderData {
    gallerys: IGallery[];
  createGallery: (gallery: IGallery) => void;
  listGallery: (gallery: IGallery) => void;
  updateGallery: (gallery: IGallery) => void;
  deleteGallery: (gallery: IGallery) => void;
}

const GalleryContext = createContext<GalleryProviderData>({} as GalleryProviderData);

const GalleryProvider = ({ children }: IGalleryProps) => {
  const [gallerys, setGallerys] = useState<IGallery[]>([]);

  const listGallery = () => {
    api.get("gallery/").then((response) => {
        setGallerys(response.data);
    });
  };

  const createGallery = () => {};

  const updateGallery = () => {};

  const deleteGallery = () => {};

  return (
    <GalleryContext.Provider
      value={{
        gallerys,
        listGallery,
        createGallery,
        updateGallery,
        deleteGallery,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
