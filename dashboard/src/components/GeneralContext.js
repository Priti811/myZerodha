import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
//  const [selectedStockUID, setSelectedStockUID] = useState("");
const [buyStockUID, setBuyStockUID] = useState("");
const [sellStockUID, setSellStockUID] = useState("");

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setBuyStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setBuyStockUID("");
  };


  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSellStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSellStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={buyStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={sellStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;