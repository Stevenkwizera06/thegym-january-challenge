import Wrapper from "../layout/wrapper";

function News() {
  return (
    <Wrapper>
      <section>
        <div className="max-w-[74rem] bg-[#333333] text-white  py-2 px-32 mx-auto">
          <h4 className="text-2xl font-bold pt-10">
            News and events for students
          </h4>
          <div className="grid grid-cols-3 mt-5 gap-6 pb-44">
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
            <div className="space-y-6">
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
            <div className="space-y-6">
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
            {/* {[
          {
            img: 'https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720',
            tititle: 'Latest episode:Intelligent systems will help us in crises and in he future',
            desc: 'Video I YouTube'
          },
          {
            img: "https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333",
            tititle: 'veryone feels sometimes stressed during their studies. But what can ou do against it? Constanza has aew tips.',
            desc: 'USUS blog | 1/4/23'
          }, {
            img: "https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333",
            tititle: 'veryone feels sometimes stressed during their studies. But what can ou do against it? Constanza has aew tips.',
            desc: 'USUS blog | 1/4/23'
          }, {
            img: "https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333",
            tititle: 'veryone feels sometimes stressed during their studies. But what can ou do against it? Constanza has aew tips.',
            desc: 'USUS blog | 1/4/23'
          },
          {
            img: "https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333",
            tititle: 'veryone feels sometimes stressed during their studies. But what can ou do against it? Constanza has aew tips.',
            desc: 'USUS blog | 1/4/23'
          },].map((e, idx) => {
            return (
              <div key={idx} className='bg-white space-y-5 text-black'>
                <img src={e.img} alt="" />
                <div className='px-4 flex items-start flex-col justify-between'>
                  <h4 className={`${idx === 0 ? 'text-2xl font-bold' : 'text-md'} `}>
                    {e.tititle}
                  </h4>
                </div>
              </div>
            )
          })} */}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default News;
