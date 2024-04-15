import styles from "./notepad.module.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Copy, FolderOpenDot, FolderOpen, Save, SaveAll } from "lucide-react";
import notepadIcon from "../../assets/img/notepad icon.png";
function Notepad() {
  return (
    //     <div className={`${styles.container}`}>
    //         <h6>Notepad</h6>
    //       <button className={`${styles.button} absolute`}>
    //         <p className="">File</p>
    //       </button>
    //       <textarea
    //         className={`${styles.notepad}`}
    //         placeholder="Start typing here..."
    //       ></textarea>
    //     </div>

    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <img src={notepadIcon} alt="notepad-icon" height="100" width="100" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full h-full">
        <DialogHeader>
          <DialogTitle className="text-s">BuzzPad</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col">
          {" "}
          <DialogClose asChild>
          <div className="mb-2">
            <Button style = {{ color: 'black' , width: '200px', height: '40px', textAlign: 'left', display: 'block', marginBottom: '8px'}}>
              <FolderOpen className="mr-2 h-4 w-4 inline-block align-middle" /> Open a new file
            </Button>
            </div>
          </DialogClose>
          <DialogClose asChild>
            <div className="mb-2">     
            <Button style = {{ color: 'black'  , width: '200px', height: '40px', textAlign: 'left', display: 'block', marginBottom: '8px'}}>
              <FolderOpenDot className="mr-2 h-4 w-4 inline-block align-middle" /> Open an existing file
            </Button>
            </div>
          </DialogClose>
          <DialogClose asChild>
            <div className="mb-2">
            <Button style = {{ color: 'black' , width: '200px', height: '40px', textAlign: 'left', display: 'block', marginBottom: '8px'}}>
              <Save className="mr-2 h-4 w-4 inline-block align-middle" /> Save a new file
            </Button>
            </div>
          </DialogClose>
          <DialogClose asChild>
            <div className="mb-2">
            <Button style = {{ color: 'black' , width: '200px', height: '40px', textAlign: 'left', display: 'block', marginBottom: '8px'}}>
              <SaveAll className="mr-2 h-4 w-4 inline-block align-middle" /> Save an existing file
            </Button>
            </div>
          </DialogClose>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default Notepad;
