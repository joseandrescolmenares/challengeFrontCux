import "./App.css";
import React from "react";

import { Input } from "./components/ui/input";
import { Sidebar } from "./components/layout/Sidebar";
import { DialogChat } from "./components/layout/Dialog";
import { FaRegFaceGrin, FaAnglesRight } from "react-icons/fa6";
import { AiOutlineAudio } from "react-icons/ai";

function App() {
  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Sidebar setOpenDialog={setOpenDialog} />
      <DialogChat openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <div className="w-9/12 h-full flex flex-col justify-end items-end">
        <div></div>
        <div className="flex w-full">
          <Input
            type="text"
            placeholder="Escribir tu mensaje acá"
            className="m-4   w-4/5"
          />
          <div className="flex items-center gap-4">
            <FaAnglesRight size={20} />
            <FaRegFaceGrin size={20} />
            <AiOutlineAudio size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
