import { ReactNode } from "react";
import UserProvider from "./Users";
import GalleryProvider from "./Gallery";
import AuctionProvider from "./Auctions";
import VehicleProvider from "./Vehicles";

interface IContext {
  children: ReactNode;
}





const Providers = ({ children }: IContext) => {
  return (
    <UserProvider>
      <AuctionProvider>
        <VehicleProvider>
          <GalleryProvider> {children}</GalleryProvider>
        </VehicleProvider>
      </AuctionProvider>
    </UserProvider>
  );
};

export default Providers;
