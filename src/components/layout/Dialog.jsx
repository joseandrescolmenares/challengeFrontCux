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
import { ChatActivity } from "../ui/chatActivity";
import { getActivitys, postMessage } from "../../services/api";

export const DialogChat = ({ openDialog, setOpenDialog }) => {
  const [activitys, setActivitys] = React.useState([]);
  const [initChatActivity, setInitChatActivity] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [initMessage, setInitMessage] = React.useState('');

  React.useEffect(() => {
    const fetchActivity = async () => {
      const result = await getActivitys();
      setActivitys(result);
    };
    fetchActivity();
  }, []);

  const handleMessageActivity = async (id) => {
    setLoading(true);
    const message = "comenzar ejercicio";
    const responseMessage = await postMessage(id, message);
    console.log(responseMessage, "chat");
    setInitMessage(responseMessage)
    setLoading(false);
    setInitChatActivity(true);
  };

  if (loading) {
    return (
      <Dialog open={openDialog}>
        <DialogContent className="sm:max-w-[60%] h-4/5">
          <div>
            <p>cargando.... </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={openDialog}>
      <DialogContent className="sm:max-w-[60%] h-4/5">
        {!initChatActivity ? (
          <>
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
                gestionar y reducir las emociones negativas como la ira, la
                tristeza y la ansiedad. Cada actividad tiene un enfoque
                específico:
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
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => handleMessageActivity(item.id)}
                    >
                      Comenzar!
                    </Button>
                  </DialogFooter>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <ChatActivity initMessage={initMessage} />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
