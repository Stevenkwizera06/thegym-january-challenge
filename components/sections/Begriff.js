import Wrapper from "../layout/wrapper";

function Begriff() {
  return (
    <section className='max-w-[74rem] bg-white mx-auto'>
          <div className=' max-w-[44rem] mx-auto grid py-16'>
            <div className=' bg-[#EEEEEE] px-10  py-6'>
              <h4 className='mb-2'>Begriff</h4>
              <div>
                <input className='border border-gray-500  py-4 px-2 w-full focus:outline-blue-500' type="text" placeholder='Suchen Sie nach Begriffen aus dem Uni-Glossar' />
                <button className='px-6 text-sm py-4 bg-blue-600 text-white mt-4'>BEGRIFF SUCHEN</button>
              </div>
            </div>
          </div>
        </section>
  );
}

export default Begriff;
