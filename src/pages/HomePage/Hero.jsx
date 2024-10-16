/* eslint-disable jsx-a11y/alt-text */
import Footer from "../footer";

const Hero = () => {
  return (
    <div>
      <div className="w-full bg-cover bg-center">
        <img src="/assets/img/hero.png" alt className="w-full absolute" />
        <div className="flex flex-row justify-between">
          <div className="relative flex flex-row">
            <div className="py-20 px-40 flex flex-col gap-4">
              <div className="text-white font-semibold text-5xl top-52 left-36 leading-[70px]">
                Start Your Day With <br />
                Coffee and Good Meals
              </div>
              <p className="text-white font-semibold text-xl top-[350px] left-36 leading-7 mt-3 mb-3">
                We Provide a high quality beans, good taste, and healthy <br />
                meals made by love just for you. Start your day with us <br />
                for a bigger smile
              </p>
              <div className="flex bg-yellow-500 items-center justify-center w-[250px] h-[60px] py-5 rounded-xl shadow-lg cursor-pointer text-amber-900 font-semibold active:bg-yellow-600">
                Get Started
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="bg-white relative rounded-full right-10 justify-center w-[314px] h-[60px] items-center">
              <div className="relative flex flex-row items-center justify-center px-4">
                <img className="w-[30px]" src="/assets/img/search.png" alt="" />
                <input
                  className="w-full rounded-3xl p-4 font-bold outline-none"
                  type="text" placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-around bg-white h-[200px] w-[80%]
      absolute top-[650px] left-[10%] rounded-xl shadow-xl"
      >
        <div className="flex items-center justify-center">
          <div className=" rounded-[50%] flex items-center justify-center h-14 w-14 p-5">
            <img src="/assets/img/staff.png" alt />
          </div>
          <div className="flex flex-col ml-5">
            <div className="font-bold text-black text-2xl">90+</div>
            <p className="text-slate-500 text-xl">Staff</p>
          </div>
        </div>
        <div className="bg-white w-2 h-24 border-l-2 border-slate-300" />
        <div className="flex items-center justify-center">
          <div className=" rounded-[50%] flex items-center justify-center h-14 w-14 p-5">
            <img src="/assets/img/stores.png" alt />
          </div>
          <div className="flex flex-col ml-5">
            <div className="font-bold text-black text-2xl">30+</div>
            <p className="text-slate-500 text-xl">Stores</p>
          </div>
        </div>
        <div className="bg-white w-2 h-24 border-l-2 border-slate-300" />
        <div className="flex items-center justify-center">
          <div className=" rounded-[50%] flex items-center justify-center h-14 w-14 p-5">
            <img src="/assets/img/customer.png" alt />
          </div>
          <div className="flex flex-col ml-5">
            <div className="font-bold text-black text-2xl">800+</div>
            <p className="text-slate-500 text-xl">Customer</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-[750px] p-[100px] py-[500px]">
        <img className="flex" src="/assets/img/teamwork.png" alt />
        <div className="flex flex-col ml-24 ">
          <div className="font-semibold text-4xl mt-25">
            We Provide Good Coffee
            <br /> and Healthy Meals
          </div>
          <div className="text-base font-normal mt-5 mb-5">
            You can explore the menu that we provide with fun and <br />
            have their own taste adn make your day better
          </div>
          <div className="flex items-center justify-start mb-4">
            <img
              src="/assets/img/checklist.png"
              alt
              className="w-6 h-6 top-[1217px] left-[862px]"
            />
            <div className="ml-4">High quality beans </div>
          </div>
          <div className="flex items-center justify-start mb-4">
            <img
              src="/assets/img/checklist.png"
              alt
              className="w-6 h-6 top-[1217px] left-[862px]"
            />
            <div className="ml-4">
              Healthy meals, you can request the ingredients{" "}
            </div>
          </div>
          <div className="flex items-center justify-start mb-4">
            <img
              src="/assets/img/checklist.png"
              alt
              className="w-6 h-6 top-[1217px] left-[862px]"
            />
            <div className="ml-4">
              Chat with our staff to get better experience for ordering
            </div>
          </div>
          <div className="flex items-center justify-start mb-4">
            <img
              src="/assets/img/checklist.png"
              alt
              className="w-6 h-6 top-[1217px] left-[862px]"
            />
            <div className="ml-4">
              Free member card with a minimum purchase of IDR 200.000{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-[#f8f8f8] w-full height-[1000px] relative flex-col pt-20">
        <div className="font-bold text-4xl mb-5 text-[#0B132A]">
          <p>Here is People&apos;s Favorite</p>
        </div>
        <div className="font-normal text-base leading-7">
          <p>
            Let&apos;s choose and have a bit tasteof people&apos;s favorite. it
            might be yours tool
          </p>
        </div>
        {/* card */}
        <div className="flex items-start justify-around cursor-pointer w-full  p-10">
          <div className="card border hover:border-orange-950 transition duration-300 ease-in-out rounded-lg border-gray-200 shadow-md p-10 h-[760px] w-80 flex items-center flex-col justify-start">
            <div>
              <img
                src="/assets/img/chickenWIngs.png"
                alt
                className="h-[120px] w-[120px] rounded-full"
              />
            </div>
            <h1 className="font-bold text-black text-xl mt-28">
              Chicken Wings
            </h1>
            {/* list */}
            <div className="h-[500px] mt-10">
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">Wings</div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">Drum Sticks</div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">
                  Mayonaise and Lemon
                </div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">Hot Fried</div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">Secret Recipe</div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">
                  Buy 1 Get 1 only for Dine in
                </div>
              </div>
            </div>
            <div className=" font-semibold text-xl mb-3">IDR 40.000</div>
            <div className="flex active:scale-105 transition-all ease-in-out select-none bg-yellow-500 rounded-full h-[70px] w-[135px] items-center justify-center text-amber-900 text-base font-bold cursor-pointer active:bg-yellow-600">
              Order Now
            </div>
          </div>

          <div className="card border rounded-lg hover:border-orange-950 transition duration-300 ease-in-out border-gray-200 shadow-md p-10 h-[760px] w-80 flex items-center flex-col justify-start">
            <div>
              <img
                src="/assets/img/pinky.png"
                alt
                className="h-[120px] w-[120px] rounded-full"
              />
            </div>
            <h1 className="font-bold text-black text-xl mt-28">
              phinky Promise
            </h1>
            {/* list */}
            <div className="h-[500px] mt-10">
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">
                  1 Shot of Coffee
                </div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">
                  Vanilla Whipped Cream
                </div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">
                  Sliced strawberry on Top
                </div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">
                  Chocolate Biscuits
                </div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">
                  Strawberry Syrup
                </div>
              </div>
            </div>
            <div className=" font-semibold text-xl mb-3">IDR 30.000</div>
            <div className="flex active:scale-105 transition-all ease-in-out select-none bg-yellow-500 rounded-full h-[70px] w-[135px] items-center justify-center text-amber-900 text-base font-bold cursor-pointer active:bg-yellow-600">
              Order Now
            </div>
          </div>

          <div className="card border hover:border-orange-950 transition duration-300 ease-in-out rounded-lg border-gray-200 shadow-md p-10 h-[760px] w-80 flex items-center flex-col justify-start">
            <div>
              <img
                src="/assets/img/hazelnut.png"
                alt=""
                className="h-[120px] w-[120px] rounded-full"
              />
            </div>
            <h1 className="font-bold text-black text-xl mt-28">
              Hazelnut Latte
            </h1>
            {/* list */}
            <div className="h-[500px] mt-10">
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">Hazelnut Syrup</div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">
                  Wanilla Whipped Cream
                </div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">Ice / Hot</div>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
                <div>
                  <img
                    src="/assets/img/checklist.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <div className=" text-slate-700 text-base">
                  Sliced Banana on Top
                </div>
              </div>
            </div>
            <div className=" font-semibold text-xl mb-3">IDR 25.000</div>
            <div className="flex active:scale-105 transition-all ease-in-out select-none bg-yellow-500 rounded-full h-[70px] w-[135px] items-center justify-center text-amber-900 text-base font-bold cursor-pointer active:bg-yellow-600">
              Order Now
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center p-24 ">
          <h3 className="text-4xl font-medium mb-6 text-center">
            Visits our store in the
            <br /> spot on the map bellow
          </h3>
          <p className="font-normal text-center text-slate-500 mb-5">
            See Our Store in every city on the spot and spend your good day
            there. See
            <br />
            you soon!
          </p>
          <img src="/assets/img/Huge Global.png" alt="" className="mt-20" />
        </div>
        <div className="flex items-center justify-center flex-col m-12">
          <h3 className="text-4xl font-semibold">Our Partner</h3>
          <div className="flex items-center justify-center mt-5 gap-12">
            <img src="/assets/img/Netflix.png" alt="" />
            <img src="/assets/img/reddit.png" alt="" />
            <img src="/assets/img/Amazon.png" alt="" />
            <img src="/assets/img/discord.png" alt="" />
            <img src="/assets/img/Sptify.png" alt="" />
          </div>
        </div>
        <div className="p-24 items-center">
          <div className="testiTitle">
            <h2 className="text-4xl font-medium leading-[50px] text-center">
              Loved by Thousands of
              <br />
              Happy Customer
            </h2>
            <p className="font-normal text-center text-slate-500 leading-7 pt-5">
              These are the stories of our customers who have visited us with
              great
              <br />
              pleasure.
            </p>
          </div>
          <div className="mt-12 flex items-center justify-between">
            <div className="border-2 rounded-lg p-5 h-60 w-full ml-12 cursor-pointer hover:border-yellow-800">
              <div className="flex mb-5 items-center justify-between">
                <img src="/assets/img/viezhRobet.png" alt />
                <div className="flex items-center justify-end">
                  <div>4.5</div>
                  <div className="ml-2">
                    <img src="/assets/img/star.png" alt />
                  </div>
                </div>
              </div>
              <div className="pt-5 text-left leading-7">
                <p>
                  “Wow... I am very happy to spend my whole day here. the Wi-fi
                  is good, and the coffee and meals tho. I like it here!! Very
                  recommended!
                </p>
              </div>
            </div>
            <div className="border-2 rounded-lg p-5 h-60 w-full ml-12 cursor-pointer hover:border-yellow-800">
              <div className="flex mb-5 items-center justify-between">
                <img src="/assets/img/yessika.png" alt />
                <div className="flex items-center justify-end">
                  <div>4.5</div>
                  <div className="ml-2">
                    <img src="/assets/img/star.png" alt />
                  </div>
                </div>
              </div>
              <div className="pt-5 text-left leading-7">
                <p>
                  “I like it because i like to travel far and still can make my
                  day better just by drinking their Hazelnut Latte
                </p>
              </div>
            </div>
            <div className="border-2 rounded-lg p-5 h-60 w-full ml-12 cursor-pointer hover:border-yellow-800">
              <div className="flex mb-5 items-center justify-between">
                <img src="/assets/img/Kim.png" alt />
                <div className="flex items-center justify-end">
                  <div>4.5</div>
                  <div className="ml-2">
                    <img src="/assets/img/star.png" alt />
                  </div>
                </div>
              </div>
              <div className="pt-5 text-left leading-5">
                <p>
                  “This is very unusual for my taste, I haven&apos;t liked
                  coffee before, but their coffee is the best! and yup, you have
                  to order the chicken wings, the best in town!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" p-7 flex items-center justify-between w-full h-[350px]">
          <div className="flex items-center justify-center ml-[10%] mb-36">
            <img src="/assets/img/union.png" alt="" />
            <div className="flex items-center justify-between mr-[10%] gap-8 cursor-pointer">
              <img
                className="absolute  top-[3031px] -left-[-1158px]"
                src="/assets/img/left.png"
                alt=""
              />
              <img
                className="absolute -left-[-1200px] top-[3000px] w-[150px] h-[150px]"
                src="/assets/img/right.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="member-card flex flex-col lg:flex-row items-center justify-between mt-8 lg:mt-[240%] p-10 lg:p-16 w-full lg:w-[80%] h-auto lg:h-60 bg-white border-none lg:shadow-2xl lg:rounded-xl lg:absolute z-[2] inset-0 lg:mx-auto">
          <div className="text-center lg:text-left flex flex-col mb-6 lg:mb-0 lg:absolute">
            <p className="font-bold text-2xl lg:text-3xl leading-10">
              Check Our Promo <br className="hidden lg:block" /> Today
            </p>
            <p className="font-normal text-[#4F5665] text-base lg:text-lg leading-6 mt-4 lg:mt-9">
              Let&apos;s see the deals and pick yours
            </p>
          </div>
          <div className="flex h-12 lg:h-14 items-center justify-center  rounded-2xl p-4 lg:w-[200px] cursor-pointer font-bold text-base active:bg-yellow-600 lg:ml-auto">
            <button className="bg-[#FFBA33] px-9 py-3 rounded-xl text-[#6A4029]">See Promo</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
