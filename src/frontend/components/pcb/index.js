import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Draggable from "react-draggable";
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
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
} from "../../components/ui/table";
import { Copy, FolderOpenDot, FolderOpen, Save, SaveAll } from "lucide-react";
import pcbIcon from "../../assets/img/bee.png";
import styles from "./pcb.module.css";
import { generateRandomProcessControlBlock } from "./dummydata";
import { ScrollArea } from "../../components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip"


function PCB() {
  const [dialogCount, setDialogCount] = useState(1);
  const [dialogStates, setDialogStates] = useState(Array.from({ length: 1 }, () => true));
  const navigate = useNavigate();
  const [processControlBlocks, setProcessControlBlocks] = useState([]);

//   useEffect(() => {
//     const generateRandomProcess = () => {
//         const newProcess = generateRandomProcessControlBlock(processControlBlocks.length ? processControlBlocks[processControlBlocks.length - 1].id : 0);
//         setProcessControlBlocks(prevProcesses => [...prevProcesses, newProcess]);
//     };

//     const interval = setInterval(generateRandomProcess, 3000);

//     return () => clearInterval(interval);
// }, [processControlBlocks]);



  const renderDialogContent = () => {
    const dialogContentArray = [];
    for (let i = 0; i < dialogCount; i++) {
      dialogContentArray.push(
        <>
          {/* <Draggable positionOffset={{ x: '-50%', y: '-50%' }}> */}
            <DialogContent key={i} className="w-fit object-center">
              <div>
                <DialogHeader className="flex justify-center items-center">
                  <h3>BusyBee PCB</h3>  
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
                    >
                      <FolderOpen className="mr-2 h-4 w-4 inline-block align-middle" />{" "}
                      First-Come First-Served
                    </Button>
                  </div>
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
                    >
                      <FolderOpenDot className="mr-2 h-4 w-4 inline-block align-middle" />{" "}
                      <>Shortest Job First (Preemptive)</>
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
                    >
                      <Save className="mr-2 h-4 w-4 inline-block align-middle" />
                      Priority Scheduling
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
                    >
                      <SaveAll className="mr-2 h-4 w-4 inline-block align-middle" />{" "}
                      Round Robin
                    </Button>
                  </div>
                </div>
            <Table > 
              <ScrollArea className="h-[200px] w-full p-2">
              <TableHeader className="sticky z-50 top-0 bg-white drop-shadow-sm">
                <TableRow>
                  <TableHead>Process ID</TableHead>
                  <TableHead>Arrival Time</TableHead>
                  <TableHead>Burst Time</TableHead>
                  <TableHead>Memory Size</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* {processControlBlocks.map((process, index) => (
                  <TableRow key={index}>
                    <TableCell>{process.id}</TableCell>
                    <TableCell>{process.arrivalTime}</TableCell>
                    <TableCell>{process.burstTime}</TableCell>
                    <TableCell>{process.memorySize}</TableCell>
                    <TableCell>{process.priority}</TableCell>
                    <TableCell>{process.status}</TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
              </ScrollArea>
            </Table>
          </DialogContent>
        {/* </Draggable> */}
        </>
      );
    }
    return dialogContentArray;
  };

  return (  
  <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button id="pcbButton" 
                  variant="outline" 
                  size="icon" 
                  className={`${styles.appIconButton} transparent`} 
                  onClick = {() => navigate('/PCB')} >
              <img src={pcbIcon} alt="pcb-icon"/>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          BusyBee (PCB)
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default PCB;