function Herosection() {
  return (
    <div className="bg-gradient-to-r from-blueCustom to-tealCustom   flex justify-center items-center mt-[20px] max-w-[1280px] max-h-[500px] w-full h-screen flex-col gap-[50px] font-gilroy text-[#FFFFFF] rounded-tl-3xl rounded-tr-3xl relative">
      <h1 className=" text-[36px]  capitalize">
        Discover one of the best <br />{" "}
        <span className="ml-[60px]">learning platform</span>
      </h1>
      <div className="items-center gap-[40px] flex">
        <button
          type="button"
          className="hover:bg-[#FFFFFF] hover:text-[#2C81C4]     border-[1px] border-[#FFFFFF] rounded-full max-h-full max-w-full w-[129px] h-[42px] capitalize"
        >
          Join now
        </button>
        <button
          type="button"
          className="hover:bg-[#FFFFFF] hover:text-[#2C81C4] border-[1px] border-[#FFFFFF] rounded-full max-h-full max-w-full w-[129px] h-[42px] capitalize"
        >
          learn more
        </button>
      </div>
      <div className="bg-[#E9EBEF] bg-opacity-80 max-w-[846px] max-h-[160px] w-[100%] h-[100%] rounded-2xl flex justify-between items-center p-[30px] absolute bottom-[-82px] backdrop-blur-md">
        <img className="" src="/svg_1.svg" alt="svg_1" />
        <img src="/svg_2.svg" alt="svg_2" />
        <img src="/svg_3.svg" alt="svg_3" />
      </div>
    </div>
  );
}

export default Herosection;
