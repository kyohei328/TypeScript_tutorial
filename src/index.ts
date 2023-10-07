import SaySomething from "./saySomething";

const root: HTMLElement | null = document.getElementById("root");

//インスタンスか

const saySomething = new SaySomething("Hello TypeScript")
saySomething.sayText(root)