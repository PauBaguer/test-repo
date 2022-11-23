import "./style.css";
import { io, Socket } from "socket.io-client";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

const socket = io("ws://localhost:3000");
socket.on("connection", (socket: Socket) =>
  console.log(`Connected to: ${socket.id}`)
);
