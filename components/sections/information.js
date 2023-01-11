import Wrapper from "../layout/wrapper";

function Information() {
  return (
    <Wrapper>
      <section>
      <div className='max-w-[74rem] bg-[#004696] text-white md:px-5  py-14 px-24 mx-auto'>
        <h4 className='text-2xl font-bold  pb-6'>Information for students</h4>
        <div className='grid md:grid-cols-1 grid-cols-2'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((e, idx) => {
            return (

              <div key={idx} className='mt-8 flex md:gap-4 gap-10 items-center'>
                <div className='border-2 md:py-4 md:px-4 cursor-pointer group duration-300 hover:bg-white border-white  px-[3.4rem] rounded-full py-[3.4rem]'>
                  <svg className='group-hover:stroke-black duration-300' width="17px" height="17px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="7.072" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="18.86 57.47 44.12 30.84 18.86 6.58"></polyline></g></svg>
                </div>
                <div>
                  <h4 className='font-bold md:text-lg text-xl'>All study programs</h4>
                  <p className='max-w-xs md:max-w-md'>On the webpages of your degree program
                    you will find information on the study pro-
                    gram structure,</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </Wrapper>
  );
}

export default Information;
