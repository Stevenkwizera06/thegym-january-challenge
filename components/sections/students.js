import Wrapper from "../layout/wrapper";
import rightChevron from "../../public/images/chevron-right.svg"
import Image from "next/image";
function Students() {
  return (
    <Wrapper>
      <div className="bg-[#00BEFF] flex justify-between p-12 ">
        <div className="max-w-3xl p-20 space-y-8">
          <h2 className="font-bold text-3xl ">Students</h2>
          <p className="">
            Important news, links, documents, and tips for students of the
            University of Stuttgart: This page offers information on your
            studies.
          </p>
        </div>
        <div className="mt-4">
          <div class="bg-gray-700 hover:bg-white hover:text-black  rounded-full h-52 w-52 flex items-center   px-4">
            <p class="text-white text-center hover:text-black">
              INFORMATION FOR PROSPECTIVE STUDENTS 
            </p>
          </div>
          
        </div>
      </div>
    </Wrapper>
  );
};

export default Students;
