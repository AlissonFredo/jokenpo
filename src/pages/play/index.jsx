import { Link } from "react-router-dom";
import Rock from "../../assets/rock.png";
import Paper from "../../assets/paper.png";
import Scissor from "../../assets/scissor.png";
import Container from "../../components/Container";
import Title from "../../components/Title";

function Play() {
  return (
    <Container>
      <div className="flex-2">
        <Title label={"Jokenpo"} />

        <div className="relative flex items-center justify-center">
          <img src={Paper} alt="" className="w-60 rotate-90" />
          <p
            className={`
              absolute 
              text-center 
              text-white 
              font-bold
              text-3xl
              md:text-5xl 
              drop-shadow-[6px_6px_4px_black]
            `}
          >
            Rock, Paper or Scissor
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="justify-items-end">
            <img
              src={Scissor}
              alt="scissor"
              className="w-30 md:w-40 h-25 md:h-35"
            />
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/game"
              className={`
                rounded-xl 
                text-xl
                md:text-4xl 
                drop-shadow-[6px_6px_4px_black] 
                font-bold 
                bg-yellow-700 
                hover:bg-yellow-800 
                text-white 
                p-3
                md:p-5
                w-40
                md:w-60
                text-center 
                border-5 
                border-black
              `}
            >
              Start
            </Link>
          </div>
          <div className="justify-items-start">
            <img
              src={Rock}
              alt="rock"
              className="w-30 md:w-40 h-22 md:h-34 rotate-180"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Play;
