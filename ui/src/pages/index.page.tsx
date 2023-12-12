import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { PublicKey } from "o1js";
import GradientBG from "../components/GradientBG";
import ZkappWorkerClient from "./zkappWorkerClient";
import "./reactCOIServiceWorker";
import FromTransaction from "@/components/FromTransaction";
import ToTransaction from "@/components/ToTransaction";

export default function Home() {
  return (
    <main className="main-area mx-auto bg-[#fff]  h-full flex flex-col justify-center items-center">
      <FromTransaction />
      <ToTransaction />
    </main>
  );
}
