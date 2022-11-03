import { api } from "../../services";
import { createContext, ReactNode, useState } from "react";

export interface IAuction {
  id: string;
  start_date: Date;
  end_date: Date;
  createdAt: Date;
  is_active: boolean;
  vehicle_id: string;
}

interface IAuctionProps {
  children: ReactNode;
}

interface AuctionProviderData {
  auctions: IAuction[];
  createAuction: (auction: IAuction) => void;
  listAuction: (auction: IAuction) => void;
  updateAuction: (auction: IAuction) => void;
  deleteAuction: (auction: IAuction) => void;
}

const AuctionContext = createContext<AuctionProviderData>(
  {} as AuctionProviderData
);

const AuctionProvider = ({ children }: IAuctionProps) => {
  const [auctions, setAuctions] = useState<IAuction[]>([]);

  const listAuction = () => {
    api.get("auction/").then((response) => {
      setAuctions(response.data);
    });
  };

  const createAuction = () => {};

  const updateAuction = () => {};

  const deleteAuction = () => {};

  return (
    <AuctionContext.Provider
      value={{
        auctions,
        listAuction,
        createAuction,
        updateAuction,
        deleteAuction,
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
};

export default AuctionProvider;
