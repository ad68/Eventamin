import Image from "next/image";
import "./style.css";
export default function Home() {
  return (
    <>
      <section>
        <header className="fixed top-0 bg-white w-full z-50">
          <nav className="flex justify-around items-center h-24">
            <section className="flex gap-8">
              <button>ورود</button>
              <button>ثبت نام</button>
            </section>
            <ul className="flex gap-16 items-center font-bold">
              <li>
                <a href="#">محصولات</a>
              </li>
              <li>
                <a href="#">پلن ها</a>
              </li>
              <li>
                <Image src="./logo.svg" width={44} height={44} alt="" />
              </li>
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
            </ul>
            <section className="flex items-center gap-2">
              <button className="w-6 h-6 relative">
                <Image
                  src="./Vector.svg"
                  width={14}
                  height={7.2}
                  className="absolute top-[35%] right-[24%]"
                  alt=""
                />
              </button>
              <span className="font-medium">ENG</span>
            </section>
          </nav>
        </header>
      </section>
      <section className="bg-[url('/images/Hero.png')] h-[702px]  mb-[206px] pt-[207px]">
        <section className="mr-[98px] bg-[#00000066] w-[529px] h-[240px] rounded-[10px] backdrop-blur-[10px] p-12 text-white">
          <h2 className=" font-bold text-5xl mb-9">ایونتامین</h2>
          <p className="text-3xl leading-[42px]">
            حامی برگزار کنندگان و غرفه‌داران نمایشگاه‌ها در سراسر دنیا{" "}
          </p>
        </section>
        <section className="mt-[22px] mr-[98px] flex gap-[22px]">
          <button>
            <Image src="./assets/icons/right.svg" width={50} height={50} />
          </button>
          <button>
            <Image src="./assets/icons/left.svg" width={50} height={50} />
          </button>
        </section>
        <section className="flex justify-center ">
          <section className="w-[1056px] h-[262px] rounded-[10px] overflow-hidden bg-white mt-[35px]  shadow-[0px_3.410897731781006px_26.605003356933594px_0px_#00000030]">
            <section className="h-[105px] bg-[#131127] overflow-hidden flex justify-between items-center">
              <button className="mr-[21px]">
                <Image
                  src="./assets/icons/Vector-left.svg"
                  width={5.6}
                  height={9.5}
                />
              </button>

              <button className="flex ml-[15px] text-sm items-center flex-col w-[73.63px] gap-[8.5px]">
                <Image
                  src="./assets/icons/Group.svg"
                  width={23.5}
                  height={28.2}
                />
                <span className="text-white ">گل آرایی</span>
              </button>
              <button className="flex items-center flex-col w-[73.63px] ml-[15px] text-sm gap-[8.5px]">
                <Image
                  src="./assets/icons/information-technology 1.svg"
                  width={27.3}
                  height={26.46}
                />
                <span className="text-white">فناوری اطلاعات</span>
              </button>
              <button className="flex ml-[15px] items-center flex-col w-[96.36px] px-[13px] py-[14.7px] h-full rounded-t-[10px] bg-white gap-[8.5px]">
                <Image
                  src="./assets/icons/gift.svg"
                  width={28.14}
                  height={28.14}
                />
                <span className="text-[#066595] font-bold ">حمل و نقل</span>
                <div className="w-full h-[1px] bg-[#066595]"></div>
              </button>
              <button className="flex ml-[15px] text-sm items-center flex-col w-[73.63px] gap-[8.5px]">
                <Image
                  src="./assets/icons/gifts-box-bow-gift box-donation.svg"
                  width={28.14}
                  height={28.14}
                />
                <span className="text-white">جوایز و هدایا</span>
              </button>
              <button className="flex ml-[15px] text-sm items-center flex-col w-[73.63px] gap-[8.5px]">
                <Image
                  src="./assets/icons/Group.svg"
                  width={28.14}
                  height={28.14}
                />
                <span className="text-white">گل آرایی</span>
              </button>
              <button className="flex ml-[15px] text-sm items-center flex-col w-[73.63px] gap-[8.5px]">
                <Image
                  src="./assets/icons/home-theater1.svg"
                  width={23.5}
                  height={28.2}
                />
                <span className="text-white">صوتی و تصویری</span>
              </button>
              <button className="flex ml-[15px] text-sm items-center flex-col w-[73.63px] gap-[8.5px]">
                <Image
                  src="./assets/icons/information-technology 1.svg"
                  width={28.14}
                  height={28.14}
                />
                <span className="text-white">فناوری اطلاعات</span>
              </button>
              <button className="flex ml-[15px] text-sm items-center flex-col w-[73.63px] gap-[8.5px]">
                <Image
                  src="./assets/icons/delivery 1.svg"
                  width={28.14}
                  height={28.14}
                />
                <span className="text-white">حمل و نقل</span>
              </button>
              <button className="flex ml-[15px] text-sm items-center flex-col w-[73.63px] gap-[8.5px]">
                <Image
                  src="./assets/icons/gifts-box-bow-gift box-donation.svg"
                  width={28.14}
                  height={28.14}
                />
                <span className="text-white">جوایز و هدایا</span>
              </button>
              <button className="flex ml-[15px] text-sm items-center flex-col w-[73.63px] gap-[8.5px]">
                <Image
                  src="./assets/icons/Group.svg"
                  width={28.14}
                  height={28.14}
                />
                <span className="text-white">گل آرایی</span>
              </button>
              <button className="flex ml-[15px] text-sm items-center flex-col w-[73.63px] gap-[8.5px]">
                <Image
                  src="./assets/icons/home-theater1.svg"
                  width={28.14}
                  height={28.14}
                />
                <span className="text-white">صوتی و تصویری</span>
              </button>

              <button className="ml-[21px]">
                <Image
                  src="./assets/icons/Vector-right.svg"
                  width={5.6}
                  height={9.5}
                />
              </button>
            </section>
            <section className="flex justify-center gap-[27.3px] items-center h-[141.2px]">
              <section className=" relative ">
                <input
                  type="text"
                  placeholder="انتخاب محل برگزاری"
                  className="w-full  pr-[51.3px] py-[15px] rounded-md border border-solid border-[#737373]"
                />

                <Image
                  src="./assets/icons/location2.svg"
                  width={27.34}
                  height={27.34}
                  className="absolute bottom-[30%] mr-[17.2px]"
                />
              </section>
              <section className=" relative ">
                <input
                  type="text"
                  placeholder="نام شرکت"
                  className="w-full  pr-[55.85px] border border-solid border-[#737373] py-[15px] rounded-md"
                />

                <Image
                  src="./assets/icons/event 1.svg"
                  width={28.14}
                  height={25.39}
                  className="absolute bottom-[30%] right-[20.9px]"
                />
              </section>

              <section>
                <button className="btn relative flex gap-[10px] text-lg items-center text-white font-medium bg-[#066595] w-[166px] py-[14px] rounded-md ">
                  <Image
                    src="./assets/icons/search-normal.svg"
                    width={20.47}
                    height={20.47}
                    className="mr-[40px] relative z-50"
                  />
                  <span className="relative z-50">جستجو</span>
                  <section className="section flex gap-[10px] items-center absolute left-0 h-full w-0 bg-gradient-to-r from-[#066A95] from-0% [#6D3A8E] [#6D3A8E]-45.6% to-[#B71789] rounded-md "></section>
                </button>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="w-[1280px] mx-auto">
        <section className="text-center">
          <h2 className="text-[32px] font-bold mb-3 tracking-[-0.85px]">
            با ایونتامین به راحتی هر رویدادی را برگزار کنید.
          </h2>
          <p className="text-lg font-medium mb-[35px]">
            ایونتامین پلتفرم اختصاصی تامین کنندگان و برگزارکنندگان رویدادها و
            نمایشگاه ها می باشد
          </p>
          <section className="flex justify-center gap-6 mb-16">
            <button className="btn relative flex gap-[10px] text-lg items-center justify-center text-white font-medium bg-[#066595] px-[32px] py-[18px] rounded-md ">
              <span className="relative z-50">
                ثبت نام رایگان تامین کنندگان
              </span>
              <section className="section flex gap-[10px] items-center absolute left-0 h-full w-0 bg-gradient-to-r from-[#066A95] from-0% [#6D3A8E] [#6D3A8E]-45.6% to-[#B71789] rounded-md "></section>
            </button>
            <button className="btn relative flex gap-[10px] text-lg justify-center items-center text-white font-medium bg-[#066595] px-[32px] py-[18px] rounded-md ">
              <span className="relative z-50">ثبت نام رایگان خریداران</span>
              <section className="section flex gap-[10px] items-center absolute left-0 h-full w-0 bg-gradient-to-r from-[#066A95] from-0% [#6D3A8E] [#6D3A8E]-45.6% to-[#B71789] rounded-md "></section>
            </button>
          </section>
        </section>
        <section className="flex justify-center">
          <Image
            src="/assets/icons/right (1).svg"
            width={66}
            height={66}
            className="mb-[90px]"
          />
          <section className="w-[728px]  ml-[-60px] mt-[50px] mb-[140px] shadow-[0px_16px_72px_0px_#0000003D] mr-4 rounded-lg ">
            <ul className="w-[552px] h-[166px] justify-center my-[38px] mr-[45px] flex flex-col  list-disc">
              <li>
                شما به عنوان برگزارکننده می توانید با تامین کنندگان بدون واسطه
                ارتباط برقرار کنید و با فرستادن درخواست بطور همزمان به چندین
                تامین کننده، امکان مقایسه قیمت و خدمات درخواستی خود را دارید.
              </li>
              <li>
                برای برگزاری هر رویدادی (جشن تولد، نمایشگاه، جلسه کاری و ....)
                می توانید از طریق این پلتفرم، خدمات مورد نیاز خود را در هر کشور
                و شهری، از تامین کنندگان معتبر دریافت کنید.
              </li>
            </ul>
          </section>

          <section className="flex items-center  ">
            <Image
              src="/images/1 (4).png"
              width={321}
              height={470}
              className="z-40 ml-[-230px]"
            />

            <Image
              src="/images/2 (1).png"
              width={273.82}
              height={354}
              className=" z-30 ml-[-175px]"
            />

            <Image
              src="/images/3 (1).png"
              width={216.58}
              height={280}
              className=""
            />
          </section>
          {/* <Image
            src="/images/slider.png"
            width={448}
            height={415}
            className=""
          /> */}
          <button>
            <Image
              src="/assets/icons/Subtract.svg"
              width={52.8}
              height={52.8}
              className="mb-[40px]"
            />
          </button>
        </section>
      </section>
    </>
  );
}
