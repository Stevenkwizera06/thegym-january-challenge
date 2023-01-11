import Wrapper from "../layout/wrapper";

function News() {
  return (
    <Wrapper>
    {/**
      <section>
        <div className="max-w-[74rem] bg-[#333333] text-white  py-2 px-32 mx-auto">
          <h4 className="text-2xl font-bold pt-10">
            News and events for students
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-1 mt-5 gap-6 pb-44">
            <div className="space-y-6">
              {[1, 2].map((e, i) => {
                return (
                  <div className="bg-white text-black py-8 px-4">
                    <h4 className="text-2xl font-bold">
                      Newsticker: Information on the coronavirus
                    </h4>
                    <p>Article | 11/10/22</p>
                  </div>
                );
              })}
              <div className="bg-white flex flex-col space-y-5 text-black">
                <img
                  src=""
                  alt=""
                  className="m-auto rounded-full"
                />
                <div className="px-4 flex items-start flex-col justify-between">
                  <h4 className="text-2xl font-bold">
                    Latest episode:Intelligent systems will help us in crises
                    and in he future
                  </h4>
                </div>
              </div>
            </div>
            <div className="space-y-6 ">
              <div className="bg-white flex flex-col space-y-5 text-black">
                <img
                  src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/instagram.jpg?__scale=w:220,h:220,cx:333,cy:0,cw:1333,ch:1333"
                  alt=""
                  className="m-auto rounded-full"
                />
                <div className="px-4 flex items-start flex-col justify-between">
                  <h4 className="text-2xl font-bold">
                    Latest episode:Intelligent systems will help us in crises
                    and in he future
                  </h4>
                </div>
              </div>
              <div className="bg-white flex flex-col space-y-5 text-black">
                <img
                  src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/photocase_4910444.jpg?__scale=w:220,h:220,cx:0,cy:871,cw:2000,ch:2000"
                  alt=""
                  className="m-auto rounded-full"
                />
                <div className="px-4 flex items-start flex-col justify-between">
                  <h4 className="text-2xl font-bold">
                    Latest episode:Intelligent systems will help us in crises
                    and in he future
                  </h4>
                </div>
              </div>
              <div className="bg-white flex flex-col space-y-5 text-black">
                <img
                  src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/diversity-kalender.JPG?__scale=w:220,h:220,cx:170,cy:0,cw:832,ch:832"
                  alt=""
                  className="m-auto rounded-full"
                />
                <div className="px-4 flex items-start flex-col justify-between">
                  <h4 className="text-2xl font-bold">
                    Latest episode:Intelligent systems will help us in crises
                    and in he future
                  </h4>
                </div>
              </div>
            </div>
            <div className="space-y-6 sm:w-hidden">
              <div className="bg-white flex flex-col space-y-5 text-black">
                <img
                  src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
                  alt=""
                  className="m-auto "
                />
                <div className="px-4 flex items-start flex-col justify-between">
                  <h4 className="text-2xl font-bold">
                    Latest episode:Intelligent systems will help us in crises
                    and in he future
                  </h4>
                </div>
              </div>
              <div className="bg-white flex flex-col space-y-5 text-black">
                <img
                  src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"
                  alt=""
                  className="m-auto rounded-full"
                />
                <div className="px-4 flex items-start flex-col justify-between">
                  <h4 className="text-2xl font-bold">
                    Latest episode:Intelligent systems will help us in crises
                    and in he future
                  </h4>
                </div>
              </div>
              <div className="bg-white text-black py-8 px-4">
                <h4 className="text-2xl font-bold">
                  Newsticker: Information on the coronavirus
                </h4>
                <p>Article | 11/10/22</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
 */}

      <section>
      <div className='max-w-[74rem]  bg-[#333333] text-white md:px-6 py-2 px-28 mx-auto'>
        <h4 className='text-[1.7rem] font-bold pt-10'>News and events for students</h4>
        <div className='grid text-[#333333]  md:grid-cols-1  grid-cols-3 mt-5 gap-6  pb-10'>
          <div className='space-y-6 '>
            {[{
              title: 'Newsticker: Information on the coronavirus',
              desc: ''
            }, {
              title: 'Impressive research in the field of business administration',
              desc: ''
            }].map((e, i) => {
              return (
                <div key={i} className='bg-white duration-300 cursor-pointer hover:bg-[#00beff] text-black py-8 px-4'>
                  <h4 className='text-[1.35rem] max-w-[16rem] leading-7 font-bold'>{e.title}</h4>
                  <p className='mt-5 font-thin'>Article | 11/10/22</p>
                </div>
              )
            })}
            <div className='bg-white duration-300 cursor-pointer hover:bg-[#00beff] flex flex-col space-y-5 text-black'>
              <img src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/instagram.jpg?__scale=w:220,h:220,cx:333,cy:0,cw:1333,ch:1333" alt="" className='m-auto rounded-full object-cover mt-8' />
              <div className='px-4 flex pt-5 items-start flex-col justify-between'>
                <h4 className='text-[1.35rem] max-w-[16rem] leading-7 font-bold'>
                  The University of Stuttgart's five most beautiful Instagram pictures
                </h4>
                <p className='mt-5 font-thin'>Article | 11/10/22</p>
                <p className='mt-5 font-thin'>Photo: Addictive Stock / photocase.de</p>
              </div>
            </div>
          </div>
          <div className='space-y-6'>
            <div className='bg-white duration-300 cursor-pointer hover:bg-[#00beff]  flex flex-col space-y-5 text-black'>
              <img src="https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720" alt="" className='w-full h-full object-contain' />
              <div className='px-4 flex py-5 items-start flex-col justify-between'>
                <h4 className='text-[1.35rem] max-w-[16rem] leading-7 font-bold'>
                  Latest episode:
                  "Intelligent systems will
                  help us in crises and in
                  the future"
                </h4>
                <p className='mt-5 font-thin'>Video | Youtube</p>

              </div>
            </div>
            <div className='bg-white duration-300 cursor-pointer hover:bg-[#00beff]  flex flex-col space-y-5 text-black'>
              <img src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/photocase_4910444.jpg?__scale=w:220,h:220,cx:0,cy:871,cw:2000,ch:2000" alt="" className='m-auto rounded-full mt-8' />
              <div className='px-4 flex py-5 items-start flex-col justify-between'>
                <h4 className='text-[1.35rem] max-w-[16rem] leading-7 font-bold'>
                  Energy savings in
                  November
                </h4>
                <p className='mt-5 font-thin'>Article 1 12/15/22</p>

              </div>
            </div>
            <div className='bg-white duration-300 cursor-pointer hover:bg-[#00beff]  flex flex-col space-y-5 text-black'>
              <img src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/diversity-kalender.JPG?__scale=w:220,h:220,cx:170,cy:0,cw:832,ch:832" alt="" className='m-auto rounded-full mt-10' />
              <div className='px-4 flex py-5 pb-12 items-start flex-col justify-between'>
                <h4 className='text-[1.35rem] max-w-[16rem] leading-7 font-bold'>
                  Diversity calendar makes
                  diversity visible
                </h4>
                <p className='mt-5 font-thin'>News | 12/15/22</p>

              </div>
            </div>
          </div>
          <div className='space-y-6'>

            <div className='bg-white duration-300 cursor-pointer hover:bg-[#00beff]  flex flex-col space-y-5 text-black'>
              <img src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333" alt="" className='m-auto   object-contain w-full' />
              <div className='px-4 flex py-5 items-start flex-col justify-between'>
                <h4 className='text-md max-w-[16rem] leading-7'>
                  Everyone feels sometimes stressed
                  during their studies. But what can
                  you do against it? Constanza has a
                  few tips.
                </h4>
                <p className='mt-5 font-thin'>News | 12/15/22</p>

              </div>
            </div>
            <div className='bg-white duration-300 cursor-pointer hover:bg-[#00beff] text-black py-8 px-4'>
              <h4 className='text-[1.35rem] max-w-[16rem] leading-7 font-bold'>
                General questions:
                imited office hours
                ecember 22, 2022 -
                anuary 6, 2023
              </h4>
              <p className='mt-5 font-thin'>News | 11/10/22</p>
            </div>
            <div className='bg-white duration-300 cursor-pointer hover:bg-[#00beff]  flex flex-col space-y-5 text-black'>
              <img src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073" alt="" className='m-auto rounded-full mt-10' />
              <div className='px-4 flex py-5 pb-12 items-start flex-col justify-between'>
                <h4 className='text-[1.35rem] max-w-[16rem] leading-7 font-bold'>
                  Sim & Tech solve their third case
                </h4>
                <p className='mt-5 font-thin'>News | 12/15/22</p>

              </div>
            </div>

          </div>
        </div>

      </div>
      <section className='max-w-[74rem] bg-[#333333] grid py-2 pb-16 mx-auto'>
        <div className='m-auto'>
          <div className='space-x-5'>
            <button className='px-8 text-sm  py-4 border font-semibold border-white text-white mt-4 mx-auto'>
              ALL NEWS</button>
            <button className='px-8 text-sm font-semibold py-4 border border-white text-white mt-4 mx-auto'>
              ALL EVENTS</button>
          </div>
        </div>
      </section>
    </section>
    </Wrapper>
  );
}

export default News;
