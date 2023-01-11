import Wrapper from "../layout/wrapper";



function Information() {
  return (
    <Wrapper>
    <section>
    <div className='max-w-[74rem] bg-[#004696] text-white  py-6 px-32 mx-auto'>
      <h4 className='text-2xl font-bold'>News and events for students</h4>
      <div className='grid grid-cols-2'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((e, idx) => {
          return (

            <div key={idx} className='mt-5 flex gap-4 items-center'>
              <div className='border border-white  px-12 rounded-full py-12'>
                <svg className='' width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="5.072" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="18.86 57.47 44.12 30.84 18.86 6.58"></polyline></g></svg>
              </div>
              <div>
                <h4 className='font-bold text-xl'>All study programs</h4>
                <p className='max-w-xs'>On the webpages of your degree program
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
