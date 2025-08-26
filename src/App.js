import React, { useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer , Footer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  const [, dispatch] = useStateValue();

  const fetchData = useCallback(async () => {
    try {
      await getAllFoodItems().then((data) => {
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItems: data,
        });
      });
    } catch (error) {
      console.error("Failed to fetch food items:", error);
      // You could set an error state here if needed
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full"
        >
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/Footer" element={<Footer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
