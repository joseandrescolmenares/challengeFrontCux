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


export const DialogChat = ({openDialog}) => {
  return (
    <Dialog open={openDialog}>
     
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
        
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">

        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
