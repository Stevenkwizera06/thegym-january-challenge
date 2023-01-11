import Wrapper from "../layout/wrapper";

function Begriff() {
  return (
    <div className="">
      <div className=" px-36  bg-white mx-auto ml-56">
        <div class="flex flex-col space-y-4 w-[600px] h-[200px] p-6 mt-10  bg-white border-2 border-gray-200   shadow-md dark:bg-gray-200">
          <p>Begriff</p>
          <input
            className="bg-white w-[550px] h-[350px]"
            type="text"
            placeholder="Suchein Sie nach aus deim un"
          />
          <button className="bg-blue-600 text-white border py-4 px-6 w-44 h-16">
            Begriff Suchein
          </button>
        </div>
      </div>
    </div>
  );
}

export default Begriff;
