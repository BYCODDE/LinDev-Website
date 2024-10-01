function Footer() {
  return (
    <footer className="mt-[10rem] w-full h-full max-w-[846px] max-h-[160px]">
      <div className="bg-[#E9EBEF] bg-opacity-80   flex justify-between items-center p-[48px] rounded-3xl">
        <span className="text-[#000000] text-[24px] font-nino">
          არ ჩამორჩე სიახლეებს
        </span>
        <div className="flex items-center space-x-2">
          {/* Email Input */}
          <input
            type="email"
            placeholder="YOUR E-MAIL ADDRESS"
            className=" focus:outline-none bg-[#7BC7D0] bg-opacity-50 rounded-2xl  w-[330px] h-[36px] placeholder:text-[#000000] placeholder:text-opacity-70 flex justify-center items-center p-2"
          />
          {/* Submit Button */}
          <button className="font-nino text-[#FFFFFF] text-[20px] bg-gradient-to-b from-[#3EDAD0] to-[#002241] rounded-3xl max-w-[120px] max-h-[36px] w-full h-full p-5 flex justify-center items-center">
            გამოწერა
          </button>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
