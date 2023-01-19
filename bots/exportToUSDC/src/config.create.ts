import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../.env") });

export const SERVICE = process.env.SERVICE ? process.env.SERVICE : "";
export const USERNAME = process.env.API_USERNAME
  ? process.env.API_USERNAME
  : "";
export const PASSWORD = process.env.PASSWORD ? process.env.PASSWORD : "";
export const START_BOT_COMMANDS = ["exchange", "exchange bot"];
export const LEAVE_BOT_COMMANDS = ["exit", "stop", "leave"];
export const BOT_FIRSTNAME = "Exchange";
export const BOT_LASTNAME = "Bot";
export const BOT_AVATAR = process.env.AVA_URL;
let envRooms = process.env.ROOMS?.split(",");
envRooms = envRooms ? envRooms : [];
console.log("envRooms ", envRooms);
export const ROOMS: string[] = envRooms;
export const API_BASE_URL = process.env.API_BASE_URL
  ? process.env.API_BASE_URL
  : "";
export const APP_TOKEN = process.env.APP_TOKEN ? process.env.APP_TOKEN : "";

export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
