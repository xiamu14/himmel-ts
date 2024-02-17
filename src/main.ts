import { createRoot } from "himmel";
import { Div, Img, Text } from "himmel/dom";
import { dispatch, get, signal } from "himmel/signal";
import "virtual:uno.css";
import himmelLogo from "./himmel-logo.svg";
import "./style.css";
import viteLogo from "./typescript.svg";
const countSignal = signal(0);
function App() {
  return Div([
    Div([
      Img(himmelLogo).className("logo").attrs({ alt: "himmel Logo" }),
      Img(viteLogo).className("logo").attrs({ alt: "TypeScript Logo" }),
    ]).className("flex gap-2 justify-center"),
    Text("Himmel + TypeScript").as("h1"),
    Div(
      Div(() => `count is ${get(countSignal)}`)
        .as("button")
        .attrs({ id: "counter" })
        .onClick(() => {
          dispatch(countSignal, (old) => old + 1);
        })
    ).className("card"),
    Text("Click on the Himmel and TypeScript logos to learn more").className(
      "read-the-docs"
    ),
  ]);
}

createRoot("#app", App);
