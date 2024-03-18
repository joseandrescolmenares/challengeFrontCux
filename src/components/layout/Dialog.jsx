import React from "react";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  //   DialogTitle,
  //   DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";

export const DialogChat = ({ openDialog }) => {


    React.useEffect(() => {
     
    }, []);

  return (
    <Dialog open={openDialog}>
      <DialogContent className="sm:max-w-[60%]  h-4/5 ">
        <DialogHeader>
          Actividades
          <DialogDescription>
          Estas actividades están diseñadas para ayudar a las personas a gestionar y reducir las emociones negativas como la ira, la tristeza y la ansiedad. Cada actividad tiene un enfoque específico:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
