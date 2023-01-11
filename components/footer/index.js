import Wrapper from "../layout/wrapper";
import youtube from "../../public/images/youtube (1).svg";
import Image from "next/image";
import instagram from "../../public/images/instagram.svg";
import linkedin from "../../public/images/linkedin.svg";



function Footer() {
  return (
    <Wrapper>
      <div className=" max-w-[1800px]  bg-[#333333] text-white pt-16 px-32 mx-auto mt-8">
        <div className="max-w-[960px] mx-auto grid grid-cols-3">
          <div className="col-span-1">
            <img
              className="max-w-[223px]"
              src="https://www.student.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-inverted-en.svg"
              alt=""
            />
          </div>
          <div className="flex justify-around items-center col-span-2">
            <div className="flex flex-col gap-2">
              <div className="rounded-full border hover:bg-blue-900 border-white w-fit p-4">
                <Image className="" src={youtube} alt="drive" fill="" />
              </div>
              <p>Facebook</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="rounded-full border hover:bg-red-300 border-white w-fit p-4">
                <Image className="" src={instagram} alt="drive" fill="" />
              </div>
              <p>Instagram</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="rounded-full border hover:bg-red-600 border-white w-fit p-4">
                {" "}
                <Image className="" src={youtube} alt="drive" fill="" />
              </div>
              <p>Twitter</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="rounded-full border hover:bg-red-600 border-white w-fit p-4">
                <Image className="" src={youtube} alt="drive" fill="" />
              </div>
              <p>Mastodon</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="rounded-full border hover:bg-blue-600 border-white w-fit p-4">
                <Image className="" src={linkedin} alt="drive" fill="" />
              </div>
              <p>Youtube</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="rounded-full border hover:bg-white border-white p-4">
                {" "}
                <Image className="" src={youtube} alt="drive" fill="" />
              </div>
              <p>LinkedIn</p>{" "}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 pb-20 pt-8 gap-6 mt-10">
          {[
            {
              title: "Formalities",
              desc: [1, 2, 3, 4],
            },
            {
              title: "Formalities",
              desc: [1, 2, 3, 4],
            },
            {
              title: "Formalities",
              desc: [1, 2, 3, 4, 5],
            },
            {
              title: "Formalities",
              desc: [1, 2, 3],
            },
          ].map((e, idx) => {
            return (
              <div key={idx} className=" flex flex-col">
                <h4 className="text-md font-semibold">{e.title}</h4>
                <div className="mt-7">
                  <div>
                    {e.desc.map((item, i) => {
                      return (
                        <p key={i} className="underline">
                          Students
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
