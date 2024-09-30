function Header() {
  return (
    <header className="flex justify-evenly items-center w-full h-full">
      <div className="font-gilroy text-[24px] text-[#2764D6] uppercase">
        lindev
      </div>
      <div className="font-nino text-[20px] text-[#000000]">
        <nav>
          <ul className="  flex items-center gap-[25px]">
            <li className="hover:font-bold cursor-pointer">კურსები</li>
            <li className="hover:font-bold cursor-pointer">ჩვენს შესახებ</li>
            <li className="hover:font-bold cursor-pointer">ბლოგი</li>
            <li className="hover:font-bold cursor-pointer">სიახლეები</li>
            <li className="hover:font-bold cursor-pointer">კონტაქტი</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
