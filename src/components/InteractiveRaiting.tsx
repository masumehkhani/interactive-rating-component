
import Container from "./Container";
import starLogo from "../assets/images/icon-star.svg";
import { useState } from "react";
interface Props{
  onclickItem:(item:number)=>void
}
const InteractiveRaiting = ({onclickItem}:Props) => {
  const [hoveredItem, setHoveredItem] = useState<number|null>(null);
  const [hoveredBtn, setHoveredBtn] = useState('bg-Orange');

  const handleHoveredItem = (item:number) => {
    setHoveredItem(item);
  };
 
  const handleBtnHover = () => {
    setHoveredBtn('bg-white text-Orange');
  };
  
  const handleBtnOut = () => {
    setHoveredBtn('bg-Orange');
  };

  return (
    <Container className="w-[340px] h-[380px] sm:w-[420px] sm:h-[450px] bg-VeryDarkBlue p-5 sm:p-8  rounded-2xl flex flex-col justify-between ">
      <div className="bg-DarkBlue w-[50px] h-[50px] rounded-full flex justify-center items-center">
        <img className="" src={starLogo} alt="starLogo" />
      </div>
      <h2 className="text-white text-2xl sm:text-3xl font-bold">
        How did we do?
      </h2>
      <p className="text-MediumGrey text-[15px] ">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <ul className="flex justify-between text-MediumGrey px-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <a
            key={item}
            className={`w-[50px] h-[50px] rounded-full flex justify-center items-center bg-DarkBlue ${hoveredItem === item ? 'bg-Orange' : 'bg-DarkBlue'} hover:duration-500`}
            href="#"
            onMouseOver={() => handleHoveredItem(item)}
            onMouseOut={() => setHoveredItem(null)}
            onClick={()=>onclickItem(item)}
          >
            <li className="text-lg">{item}</li>
          </a>
        ))}
      </ul>
      <button
        className={`${hoveredBtn} p-2 text-white text-lg rounded-full mx-2 transition duration-0 hover:duration-500`}
        onMouseOver={handleBtnHover}
        onMouseOut={handleBtnOut}
        // style={{ transition: "background-color 0.9s" }}

      >
        SUBMIT
      </button>
    </Container>
  );
};

export default InteractiveRaiting;

