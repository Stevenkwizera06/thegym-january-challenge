import Wrapper from "../layout/wrapper";
import Image from "next/image";
import logo from "../../public/images/logo-black.svg";
import dezetnat from "../../public/images/Dezernat.jpg";
import mail from "../../public/images/mail.svg";
import call from "../../public/images/phone.svg";
import alert from "../../public/images/alert.svg";

function Contact() {
  return (
    <Wrapper>
      <div className="bg-white">
        <div className="p-20">
          <p className="font-bold text-2xl">Contact</p>
        </div>

        <div className="mt-4 flex gap-3 px-20">
          {[1, 2, 3].map((item, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div class="px-8 w-[600px] h-[600px] rounded-[12px] border-black border">
                <div className="mt-4">
                  <div class="bg-white  flex items-center   px-4">
                    <Image
                      className="rounded-full h-36 w-36 ml-8"
                      src={dezetnat}
                      alt="drive"
                    />
                  </div>
                </div>

                <div className=" mt-20 ml-4">
                  <p className="font-bold text-2xl">Dezernat Internationales</p>
                  <div className="mt-4">
                    <div className="flex gap-4">
                      <Image className="" src={mail} alt="mail" />
                      <p className="underline hover:no-underline">
                        profile page
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex gap-4">
                      <Image className="" src={call} alt="phone" />
                      <p className="underline hover:no-underline">
                        +49 711 685 68566
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex gap-4">
                      <Image className="" src={mail} alt="phone" />
                      <p className="underline hover:no-underline">
                        write email
                      </p>
                    </div>

                    <div className="mt-4">
                      <div className="flex gap-4">
                        <Image className="-mt-24" src={alert} alt="phone" />
                        <p className="">
                         <span className="underline hover:no-underline">Office hours online</span>  <span className="no-underline">: Mon & Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon</span>
                        </p>
                      </div>
                    </div>
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

export default Contact;
