import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Cross2Icon,
    PlayIcon,
    PauseIcon,
    StopIcon,
    TrackNextIcon,
    PlusIcon,
    ReloadIcon,
    ChevronRightIcon,
 } from "@radix-ui/react-icons";
import { Button } from "../../components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"
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
import { Card, CardHeader, CardContent, CardBody, CardFooter } from "../../components/ui/card";
import { Copy, FolderOpenDot, FolderOpen, Save, SaveAll, ChevronLeftIcon } from "lucide-react";
import pcbIcon from "../../assets/img/pcbIcon.png";
import styles from "./pcb.module.css";
import { generateRandomProcessControlBlock } from "../../components/pcb/dummydata";
import JobPoolTable from '../../components/jobPoolTable';
import { ScrollArea } from "../../components/ui/scroll-area";

function PCB() {

    const navigate = useNavigate();

    return (
        <>
        <div className="h-screen">
        <div className="grid grid-cols-3 items-center w-screen py-2">
            <h2 className="col-start-2 col-end-3 text-center">BusyBee</h2> 
            <div className="col-start-3 col-end-4 text-right">
                <Button variant="icon" onClick={()=>navigate('/desktop')}><Cross2Icon /></Button>
            </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-4 relative flex bg-orange-50 h-[790px] w-full p-5 justify-center items-center rounded-lg gap-4 box-shadow-lg">     
            <div className="col-span-2">
            <Card className="bg-slate-100 h-full">
                <CardHeader className="bg-slate-300 h-[20px] justify-center items-center rounded-t"><h4>Data</h4></CardHeader>
                <CardContent className="justify-center justify-items-center items-center h-[100px] py-2 grid grid-cols-5">
                    <div>
                        <p>No. of Jobs</p>
                        <p><b className="text-2xl">6999</b></p>
                    </div>
                    <div className="justify-center items-center">
                        <p>Algorithm</p>
                        <Select>
                            <SelectTrigger  className="h-[30px] w-full">
                                <SelectValue placeholder="Select a policy" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value = "FCFS">First Come, First Served</SelectItem>
                                    <SelectItem value = "SJF">Shortest Job First</SelectItem>
                                    <SelectItem value = "Priority">Priority</SelectItem>
                                    <SelectItem value = "Round Robin">Round Robin</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <p>Quantum</p>
                        <p><b className="text-2xl">6999</b></p>
                    </div>
                    <div className="col-span-2">
                        <div className = "flex gap-3 py-1">
                            <Button variant = "nohover" className = "h-1/4 flex gap-2 bg-green-500"><PlayIcon />Start</Button>
                            <Button variant = "nohover" className = "h-1/4 flex gap-2 bg-red-500"><StopIcon /> Stop</Button>
                            <Button variant = "nohover" className = "h-1/4 flex gap-2 bg-orange-500"><PauseIcon />Pause</Button>
                            <Button variant = "nohover" className = "h-1/4 flex gap-2 bg-gray-500"><TrackNextIcon />Next</Button>
                        </div>
                        <div className = "flex gap-6">
                            <Button variant = "nohover" className = "h-1/4 flex gap-2 bg-yellow-400"><PlusIcon /> Create New Task</Button>
                            <Button variant = "nohover" className = "h-1/4 flex gap-2 bg-gray-400"><ReloadIcon />Start New Simulation</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
            </div>
            <div>
            <Card className="bg-slate-100 h-full">
                <CardHeader className="bg-slate-300 h-[20px] justify-center items-center rounded-t"><h4>CPU</h4></CardHeader>
                <CardContent className="justify-center items-center h-[100px] py-2 grid grid-cols-4">
                    <div>
                        <p>Current Job</p>
                        <p><b className="text-2xl">6999</b></p>
                    </div>
                    <div>
                        <p>Current Time</p>
                        <p><b className="text-2xl">6999</b></p>
                    </div>
                    <div>
                        <p>Idle Time</p>
                        <p><b className="text-2xl">6999</b></p>
                    </div>
                    <div>
                        <p>Utilization</p>
                        <p><b className="text-2xl">69.99%</b></p>
                    </div>
                </CardContent>
            </Card>
            </div>
            <div className="h-full row-span-2 col-span-2">
                <Card className="bg-slate-100 h-full">
                    <CardHeader className="bg-slate-300 h-[20px] justify-center items-center rounded-t"><h4>Job Pool (PCB)</h4></CardHeader>
                    <CardContent className="m-0"><JobPoolTable /></CardContent>
                </Card>
            </div>
            <div className="h-full row-span-1 col-span-1">
                <Card className="bg-slate-100 h-full">
                    <CardHeader className="bg-slate-300 h-[20px] justify-center items-center rounded-t"><h4>Average</h4></CardHeader>
                    <CardContent className="justify-center items-center h-[100px] py-2 grid grid-cols-2">
                        <div>
                            <p>Waiting</p>
                            <p><b className="text-2xl">6999</b></p>
                        </div>
                        <div>
                            <p>Turnaround Time</p>
                            <p><b className="text-2xl">6999</b></p>
                        </div>
                        </CardContent>
                </Card>
            </div>
            <div className="h-full row-span-1 col-span-1">
                <Card className="bg-slate-100 h-full">
                    <CardHeader className="bg-slate-300 h-[20px] justify-center items-center rounded-t"><h4>Ready Queue</h4></CardHeader>
                    <CardContent className="items-center justify-center h-[100px] py-2 grid grid-cols-6">
                        <div className="col-span-1"><ChevronRightIcon className="h-[20px] w-[20px]"/></div>
                        <div className="grid col-span-5 justify-items-start">insert</div>
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-3 h-full">
                <Card className="bg-slate-100 h-full">
                    <CardHeader className="bg-slate-300 h-[20px] justify-center items-center rounded-t"><h4>Gantt Chart</h4></CardHeader>
                    <CardContent className="items-center justify-center h-[100px] py-2 grid grid-cols-10">
                        <div className="col-span-1"><ChevronRightIcon className="h-[20px] w-[20px]"/></div>
                        <div className="grid col-span-9 justify-items-start">insert</div>
                    </CardContent>
                </Card>
            </div>
        </div>
        </div>
        </>
    );
}

export default PCB;