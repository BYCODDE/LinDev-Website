import Header from "../components/Header";
import Herosection from "../components/Herosection";

function Home() {
  return (
    <div className="p-[48px] min-h-screen w-screen flex flex-col justify-center items-center">
      <Header />
      <Herosection />
    </div>
  );
}

export default Home;
