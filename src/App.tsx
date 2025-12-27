import "./App.css";
import BgChanger from "./bgChanger";
// import Card from "./components/card";
// let myObj = {
//   name: "Sofia",
//   age: 32,
// };
// let myArr = [1, 2, 3];
function App() {
  return (
    <>
      <div className="flex flex-wrap md:min-w-max gap-1 ">
        {/* <Card name="Ali" btnText="Hire me" />
        <Card name="Ahmaed" /> */}
        <BgChanger />
      </div>
    </>
  );
}

export default App;
