function Slider() {
  return (
    <div className="mt-[5rem] text-center flex flex-col">
      <span className="font-gilroy text-[36px] text-5xl font-bold bg-gradient-to-b from-[#2D67D8] to-[#00AEF8] bg-clip-text text-transparent">
        ექსპერტები, რომლებიც წარმართავენ <br /> თქვენს გზას წარმატებისკენ
      </span>
      <div className="flex mt-[30px]">
        <img className="mr-[20px]" src="/slider_left.svg" alt="slider_left" />
        <div className="flex">
          <img src="/slider_img1.svg" alt="img1" />
          <img src="/slider_img2.svg" alt="img2" />
          <img src="/slider_img3.svg" alt="img3" />
        </div>
        <img className="mr-[20px]" src="/slider_right.svg" alt="slider_right" />
      </div>
    </div>
  );
}

export default Slider;
