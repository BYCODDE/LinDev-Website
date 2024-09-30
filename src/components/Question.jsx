function Question() {
  return (
    <div className="font-gilroy mt-[5rem] flex items-center flex-col w-full h-full">
      <span className="text-[36px] bg-gradient-to-b from-[#2662D6] to-[#3DB8B1] bg-clip-text text-transparent">
        ხშირად დასმული შეკითხვები
      </span>
      <div className="mt-[2rem] flex flex-col gap-[2rem] w-full h-full justify-center items-center">
        {/* Question Container */}
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="relative cursor-pointer max-w-[1062px] rounded-3xl w-full flex p-4"
          >
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                border: "4px solid transparent", // Set the border to transparent
                borderImage: "linear-gradient(to right, #2662D6, #2F847F) 1", // Apply the gradient
              }}
            ></div>
            <span className="flex-1 text-transparent bg-clip-text bg-gradient-to-r from-[#2662D6] to-[#2F847F]">
              {/* Gradient text */}
              რა სტრატეგიებს იყენებთ ვებაპლიკაციის მუშაობის ოპტიმიზაციისთვის?
            </span>
            <img src="question_svg.svg" alt="question_svg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
