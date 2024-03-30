import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');
let clientPlayer;
let collectible;

const randomStart = Math.floor(Math.random()*420+20);
const randomStart2 = Math.floor(Math.random()*420+20);

socket.on("connect", () => {
  console.log("Connected to server");
})