import styles from "./notepad.module.css";
import React from "react";
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
import { Textarea } from "../../components/ui/textarea";
import { Copy, FolderOpenDot, FolderOpen, Save, SaveAll } from "lucide-react";
import notepadIcon from "../../assets/img/notepad icon.png";

function Notepad() {
  const handleOpenNewFile = () => {
    console.log("Opening a new file...");
    // Create a new file input element
    const input = document.createElement("input");
    input.type = "file";

    // Add event listener for when file is selected
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      console.log("Selected file:", file);
      // You can now do something with the selected file, such as reading its contents
    });

    // Trigger click event to open file dialog
    input.click();
  };

  const handleOpenExistingFile = () => {
    console.log("Opening an existing file...");
    // Create a new file input element
    const input = document.createElement("input");
    input.type = "file";

    // Add event listener for when file is selected
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      console.log("Selected file:", file);
      // You can now do something with the selected file, such as reading its contents
    });

    // Trigger click event to open file dialog
    input.click();
  };

  const handleSaveNewFile = () => {
    console.log("Saving a new file...");
    // Example: You can prompt user to save content as a file
    const content = "This is the content of the new file.";
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "new_file.txt";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSaveExistingFile = () => {
    console.log("Saving an existing file...");
    // Example: You can prompt user to save content as a file
    const content = "This is the content of the existing file.";
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "existing_file.txt";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <img src={notepadIcon} alt="notepad-icon" height="100" width="100" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full h-full flex">
        <div className="w-1/4">
          <DialogHeader>
            <DialogTitle className="text-s">BuzzPad</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col">
            <div className="mb-2">
              <Button
                style={{
                  color: "black",
                  width: "200px",
                  height: "40px",
                  textAlign: "left",
                  display: "block",
                  marginBottom: "8px",
                }}
                onClick={handleOpenNewFile}
              >
                <FolderOpen className="mr-2 h-4 w-4 inline-block align-middle" />{" "}
                Open a new file
              </Button>
            </div>
            <div className="mb-2">
              <Button
                style={{
                  color: "black",
                  width: "200px",
                  height: "40px",
                  textAlign: "left",
                  display: "block",
                  marginBottom: "8px",
                }}
                onClick={handleOpenExistingFile}
              >
                <FolderOpenDot className="mr-2 h-4 w-4 inline-block align-middle" />{" "}
                Open an existing file
              </Button>
            </div>
            <div className="mb-2">
              <Button
                style={{
                  color: "black",
                  width: "200px",
                  height: "40px",
                  textAlign: "left",
                  display: "block",
                  marginBottom: "8px",
                }}
                onClick={handleSaveNewFile}
              >
                <Save className="mr-2 h-4 w-4 inline-block align-middle" /> Save
                a new file
              </Button>
            </div>
            <div className="mb-2">
              <Button
                style={{
                  color: "black",
                  width: "200px",
                  height: "40px",
                  textAlign: "left",
                  display: "block",
                  marginBottom: "8px",
                }}
                onClick={handleSaveExistingFile}
              >
                <SaveAll className="mr-2 h-4 w-4 inline-block align-middle" />{" "}
                Save an existing file
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Textarea className="mt-8 flex-grow" placeholder="Type your message here." />
          <div className="flex justify-end">
            <Button className="mt-4">Send message</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default Notepad;
