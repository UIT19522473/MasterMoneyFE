import React from "react";
import Summary from "../Components/homes/Summary";
import ListTransactions from "../Components/homes/ListTransactions";

const Home = () => {
  return (
    <div className="sm:grid sm:grid-cols-3 p-6">
      <section className="col-span-2">
        <Summary />
      </section>
      <section className="col-span-1">
        <ListTransactions />
      </section>
    </div>
  );
};

export default Home;
