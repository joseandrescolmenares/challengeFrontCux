import React from "react";
import { Button } from "../../components/ui/button";
import { X } from "lucide-react";
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
import { getActivitys } from "../../services/api";

export const DialogChat = ({ openDialog, setOpenDialog }) => {
  const [activitys, setActivitys] = React.useState([]);

  console.log(activitys, "act");

  React.useEffect(() => {
    const fetchActivity = async () => {
      const result = await getActivitys();
      setActivitys(result);
    };
    fetchActivity();
  }, []);

  return (
    <Dialog open={openDialog}>
      <DialogContent className="sm:max-w-[60%]  ">
        <DialogHeader>
          <button
            className="flex justify-end"
            onClick={() => setOpenDialog(false)}
          >
            <X className="h-4 w-4" />
          </button>
          <span className="sr-only">Close</span>
          <h2 className="text-2xl font-semibold mb-4">Actividades</h2>
          <DialogDescription className="mb-8">
            Estas actividades están diseñadas para ayudar a las personas a
            gestionar y reducir las emociones negativas como la ira, la tristeza
            y la ansiedad. Cada actividad tiene un enfoque específico:
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between  p-8">
          {activitys.map((item) => (
            <div
              className="flex flex-col justify-center items-center"
              key={item.id}
            >
              <img
                className="rounded-lg mb-2"
                height="200"
                width="200"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                src={item.image}
                alt=""
              />
              <p className="text-sm font-medium mb-2">{item.name}</p>
              <Button variant="outline">Comenzar!</Button>
            </div>
          ))}
        </div>
        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
