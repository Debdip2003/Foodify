import { Button } from "@mui/material";
import foodBg from "..//assets/foodBg.png"; //import from assets
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex border border-gray-400">
      {/* Hero left side */}
      <div className="w-1/2 flex items-center justify-center py-10 ">
        <div className="bg=[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8  h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm ">ORDER YOUR FOOD</p>
          </div>
          <h1 className="text-5xl py-3 leading-relaxed prata-regular">
            FOODIFY
          </h1>
          <div className="flex items-center gap-2">
            <Link to={`/menu`}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  "&:hover": { backgroundColor: "darkgreen" },
                }}
              >
                GET A MEAL
              </Button>
            </Link>
            <p className="w-8  h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <img src={foodBg} alt="foodBg" className="w-1/2" />
    </div>
  );
};

export default Hero;
