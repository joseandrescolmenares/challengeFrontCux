import "./App.css";
import React from "react";

import { Input } from "./components/ui/input";
import { Sidebar } from "./components/layout/Sidebar";
import { DialogChat } from "./components/layout/Dialog";

function App() {
  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Sidebar setOpenDialog={setOpenDialog} />
      <DialogChat openDialog={openDialog}/>
      <div className=" w-9/12 h-full relative">
        <Input
          type="text"
          placeholder="Escribir tu mensaje acá"
          className=" absolute bottom-0 m-4  w-4/5"
        />
      </div>
    </div>
  );
}

export default App;
