import axios from "axios";
import React, { useEffect, useState } from "react";
import PurchaseCard from "../components/PurchasesPage/PurchaseCard";
import LoadingPage from "../components/shared/LoadingPage";
import config from "../store/slices/getConfig";
import "./styles/Purchases.css"

const Purchases = () => {
  const [purchases, setpurchases] = useState();

  const getPurchases = () => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases";
    axios
      .get(url, config)
      .then((res) => setpurchases(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(getPurchases, []);
  if (!purchases) {
    return <LoadingPage />;
  } else {
    return (
      <div className="purchase__container">
        <div className="purchase__cardbox">
          {purchases?.map((purchase) => (
            <PurchaseCard key={purchase.id} purchase={purchase} />
          ))}
        </div>
      </div>
    );
  }
};

export default Purchases;
