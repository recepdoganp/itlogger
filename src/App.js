import React, { useEffect, Fragment } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layouts/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

// conencting redux and react
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    // initiliaze materialisa JS in order to use Modals
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <Logs />
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <AddTechModal />
          <TechListModal />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
