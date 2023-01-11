import Image from "next/image";
import Wrapper from "../layout/wrapper";
import digital from "../../public/images/digital.jpeg";
import rightChevron from "../../public/images/chevron-right.svg";

function Program() {
  return (
    <Wrapper>
      <div className="flex bg-white px-32  mx-auto   space-x-6">
        <div></div>
        {/* 1 card */}
        <div className="mt-8">
          <div>
            <Image className="" src={digital} alt="drive" />
          </div>
          <div className="space-y-4">
            <p className="font-bold text-2xl mt-2">Digital services</p>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
          </div>
        </div>
        {/* 2 card */}
        <div className="mt-8">
          <div>
            <Image className="" src={digital} alt="drive" />
          </div>
          <div className="space-y-4">
            <p className="font-bold text-2xl mt-2">Digital services</p>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
          </div>
        </div>
        {/* 3 card */}
        <div className="mt-8">
          <div>
            <Image className="" src={digital} alt="drive" />
          </div>
          <div className="space-y-4">
            <p className="font-bold text-2xl mt-2">Digital services</p>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
            <div className="flex hover:underline">
              <Image className="" src={rightChevron} alt="drive" />
              <p className="text-blue-700 text-xl">
                {" "}
                C@MPUS - campus management and lectures
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        {" "}
        <button className="bg-blue-900 mt-8 ml-96 items-center text-white border py-4 px-6 w-[] h-16">
          STUDY PROGRAMS WEBPAGES FOR STUDENTS
        </button>
      </div>
    </Wrapper>
  );
}

export default Program;
