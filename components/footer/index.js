import Wrapper from "../layout/wrapper";
import youtube from "../../public/images/youtube (1).svg";
import Image from "next/image";
import instagram from "../../public/images/instagram.svg";
import linkedin from "../../public/images/linkedin.svg";

function Footer() {
  return (
    <Wrapper>
      

      <div>
        <div className="max-w-[74rem]  bg-[#333333] text-white md:px-5 pt-10 px-32 mx-auto">
          <div className="grid md:grid-cols-1 grid-cols-3">
            <div>
              <img
                className="w-56"
                src="https://www.student.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-inverted-en.svg"
                alt=""
              />
            </div>
            <div className="flex gap-4 md:gap-0 items-center md:grid md:grid-cols-3 md:mt-6 col-span-2">
              {[{
                image:youtube,
                title:"youtube"
              },
              {
                image:instagram,
                title:"instagram"
              },
              {
                image:linkedin,
                title:"linkedin"
              },
              {
                image:youtube,
                title:"youtube"
              },
              {
                image:instagram,
                title:"instagram"
              },
              {
                image:linkedin,
                title:"linkedin"
              },
              {
                image:youtube,
                title:"youtube"
              }

            ].map((e, idx) => {
                return (
                  <div className="space-y-4">
                  <Image className="rounded-full border hover:bg-blue-600 border-white w-fit p-4" src={e.image} alt="drive" fill="" />
                    <p>{e.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid md:grid-cols-1 grid-cols-4 pb-20 pt-8 gap-6 mt-10">
            {[
              {
                title: "Audience",
                desc: [
                  "Students",
                  "Employees",
                  "Alunia and supporter",
                  "Industries",
                ],
              },
              {
                title: "Formalities",
                desc: [
                  "Legal Notice",
                  "Private Notice",
                  "accessibility",
                  "Certificate",
                ],
              },
              {
                title: "Services",
                desc: [
                  "Contacts",
                  "Press",
                  "Job",
                  "Apply for doctorate or",
                  "Post doc",
                  "Uni-shop",
                ],
              },
              {
                title: "Organization",
                desc: [
                  "faculties and institutes",
                  "Facilities",
                  "Centarl administartation",
                ],
              },
            ].map((e, idx) => {
              return (
                <div key={idx} className=" flex flex-col">
                  <h4 className="text-md font-semibold">{e.title}</h4>
                  <div className="mt-7">
                    <div>
                      {e.desc.map((e, idx) => {
                        return (
                          <p key={idx} className="underline">
                            {e}
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
      </div>
    </Wrapper>
  );
}

export default Footer;
