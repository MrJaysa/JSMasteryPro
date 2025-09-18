import Header from "./components/Header";
import Mouse from "./components/Mouse";
import Scroll from "./components/Scroll";

const App = () => {
  return (
    <main className="flex flex-col h-[150%] py-40 gap-20 overflow-hidden">
      <Header />
      <Scroll />
      <Mouse />
    </main>
  );
};

export default App;
