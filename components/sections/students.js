import Wrapper from "../layout/wrapper";
import rightChevron from "../../public/images/chevron-right.svg"
import Image from "next/image";
function Students() {
  return (
    <Wrapper>
      <section className='bg-[#00BEFF] md:mt-28 mt-4 h-80 md:px-5 max-w-[74rem] mx-auto px-24 md:flex-col md:justify-center md:gap-3 flex justify-between items-center gap-16'>
          <div className='space-y-6'>
            <h4 className='font-bold  text-[1.96rem] md:text-xl'>Students</h4>
            <p className='text-md tracking-wide'>Important news, links, documents, and tips for students of the University of Stuttgart: This page offers information on your studies.</p>
          </div>
          <div className='hidden mt-6 md:blockm md:flex gap-8 items-center'>
                <svg className='group-hover:stroke-white   duration-300' width="17px" height="17px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="7.072" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="18.86 57.47 44.12 30.84 18.86 6.58"></polyline></g></svg>
                <p className='text-sm font-semibold underline hover:no-underline cursor-pointer'>INFORMATION FOR
                PROSPECTIVE STUDENTS</p>
            </div>
          <div className='p-[8.5rem] md:hidden relative text-white hover:text-black -mb-28 bg-[#333333] hover:bg-white group duration-200 rounded-full'>
            <div className='absolute top-28  left-8 '>
              <p className='text-md font-bold'>INFORMATION FOR
                PROSPECTIVE STUDENTS</p>
                <svg className='group-hover:stroke-black absolute top-[7rem] left-24  duration-300' width="17px" height="17px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="7.072" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="18.86 57.47 44.12 30.84 18.86 6.58"></polyline></g></svg>
            </div>
          </div>
        </section>
    </Wrapper>
  );
};

export default Students;
