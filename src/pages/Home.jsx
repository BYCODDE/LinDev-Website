import Course from "../components/Course";
import Education from "../components/Education";
import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Question from "../components/Question";
import Slider from "../components/Slider";

function Home() {
  return (
    <div className="p-[48px] min-h-screen w-screen flex flex-col justify-center items-center">
      <Header />
      <Herosection />
      <Course />
      <Slider />
      <Education />
      <Question />
    </div>
  );
}

export default Home;
