function Question() {
  return (
    <div className="font-gilroy mt-[5rem] flex items-center flex-col w-full h-full">
      <span className="text-[36px] bg-gradient-to-b from-[#2662D6] to-[#3DB8B1] bg-clip-text text-transparent">
        ხშირად დასმული შეკითხვები
      </span>
      <div className="mt-[2rem] flex flex-col gap-[2rem] w-full h-full justify-center items-center">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="relative max-w-[1062px] w-full p-4 bg-white rounded-3xl flex justify-between items-center cursor-pointer "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2662D6] to-[#2F847F] rounded-3xl p-[1px]">
              <div className="bg-white w-full h-full rounded-3xl "></div>
            </div>

            <span className="relative flex-1 z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#2662D6] to-[#2F847F]">
              რა სტრატეგიებს იყენებთ ვებაპლიკაციის მუშაობის ოპტიმიზაციისთვის?
            </span>
            <img
              className="relative z-10"
              src="question_svg.svg"
              alt="question_svg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
