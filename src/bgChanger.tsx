import { useState } from "react";

export default function BgChanger() {
  type Color =
    | "red"
    | "blue"
    | "green"
    | "orange"
    | "gray"
    | "lavender"
    | "white"
    | "black";
  const [color, setColor] = useState<Color>("black");
  const colors: Color[] = [
    "red",
    "blue",
    "green",
    "orange",
    "gray",
    "lavender",
    "white",
    "black",
  ];
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colors.map((c: Color) => {
              const isLightColor = c === "white" || c === "lavender";
              return (
                <button
                  onClick={() => setColor(c)}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{
                    backgroundColor: c,
                    color: isLightColor ? "black" : "white",
                  }}
                >
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </button>
              );
            })}
            {/* <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
