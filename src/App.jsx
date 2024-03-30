import Header from "./components/Header/Header";
import Hero from "./components/Hero";

export default function App() {
  console.log("render");
  return (
    <div className="dark:bg-[#030713]">
      <Header />
      <Hero />
    </div>
  );
}
