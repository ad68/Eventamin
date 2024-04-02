import Image from "next/image";


export default function Home() {
  return (
    <main dir="rtl" className="py-10">
    {/*--------------- sec-3 -----------------*/}
     <section className="w-[1600px]">
      <header className="grid grid-cols-5 content-center">
        <Image src='/Vector 35.png' width={250} height={12} alt="" />
        <button className="py-[14px] px-4 w-[247px] flex gap-2 text-[#454545] border-[#d0d0d07d] border-[1px] rounded-[190px]">
          <Image src='/add 1.svg' width={26} height={26} alt=""/>
          <span className="text-[20px] font-normal text-[#454545]">جدیدترین محصولات</span>
        </button>
        <button className="py-[14px] px-4 w-[247px] flex gap-2 text-[#454545] border-[#d0d0d07d] border-[1px] rounded-[190px]">
          <Image src='/Frame 2147223370.png' width={26} height={26} alt="" />
          <span className="text-[20px] font-normal text-[#454545]">بهترین تامین‌کنندگان</span>
        </button>
        <button className="py-[14px] px-4 w-[247px] flex gap-2 text-[#454545] border-[#d0d0d07d] border-[1px] rounded-[190px]">
          <Image src='/broadcast 1.png' width={26} height={26} alt=""/>
          <span className="text-[20px] font-normal text-[#454545]">آخرین اخبار نمایشگاه ها</span>
        </button>
        <Image src='/Vector 39.png' width={250} height={12} alt="" />
      </header>
      <section className="flex gap-8 justify-center">
        <section className="mt-[124px]">
          <Image src='/6.png' width={251} height={325}/>
          <section className="text-center mt-5">
            <h2 className="text-[16px] font-semibold text-[#333333]">غرفه نبشی</h2>
            <span className="text-[12px] font-normal text-[#565656]">در نمایشگاه پزشکی</span>
          </section>
        </section>
        <section className="mt-[44px]">
          <Image src='/5.png' width={251} height={325}/>
          <section className="text-center mt-5">
          <h2 className="text-[16px] font-semibold text-[#333333]">غرفه خطی یا ردیفی</h2>
          <span className="text-[12px] font-normal text-[#565656]">در نمایشگاه های تجهیزات</span>
          </section>
        </section>
        <section className="mt-[124px]">
          <Image src='/1.png' width={251} height={325} className="rounded-[35px]"/>
          <section className="text-center mt-5">
            <h2 className="text-[16px] font-semibold text-[#333333]">غرفه جزیره ای</h2>
            <span className="text-[12px] font-normal text-[#565656]">در نمایشگاه لوازم خانگی</span>
          </section>
        </section>
        <section className="mt-[44px]">
          <Image src='/3.png' width={251} height={325}/>
          <section className="text-center mt-5">
            <h2 className="text-[16px] font-semibold text-[#333333]">غرفه چوبی (ام دی اف)</h2>
            <span className="text-[12px] font-normal text-[#565656]">در نمایشگاه های تجهیزات</span>
          </section>
        </section>
        <section className="mt-[124px]">
          <Image src='/2.png' width={251} height={325}/>
          <section className="text-center mt-5">
            <h2 className="text-[16px] font-semibold text-[#333333]">غرفه اسپیس فریم</h2>
            <span className="text-[12px] font-normal text-[#565656]">در نمایشگاه های صنعتی</span>
          </section>
        </section>
      </section>
      <section className="text-center mt-[54px]">
      <button className="px-[43px] py-[14px] bg-[#00699B] text-white rounded-md text-center">
        <span className="text-[18px] font-medium">مشاهده بیشتر</span>
      </button>
      </section>
     </section>
    {/*--------------- sec-4 -----------------*/}
    <section className="w-full my-[120px] bg-[#131127] text-white px-[190px] mx-auto">
      <section className="text-center mb-[70px]">
        <header className="text-[40px] font-bold pt-[83px] mb-[64px]">مزایای خریدار</header>
        <section className="grid grid-cols-3 gap-8">
          <section className="bg-[#ffffff40] rounded-xl px-8 pt-12 pb-[119px] text-right hover:shadow-[#e412a84b] hover:shadow-2xl  grid">
            <Image src='/notebook.png' width={52} height={52} alt="" />
            <h1 className="text-[20px] font-bold">برنامه‌های منحصر به فرد خریدار</h1>
            <p className="text-[18px] font-normal text-justify">فرصتی برای پیوستن خریداران به رویدادهای تجاری، دورهمی‌های شرکتی و حضور در برنامه‌های آموزشی ویژهه که ایونتامین برگزار می‌کند.</p>
            
          </section>
          <section className="bg-[#ffffff40] rounded-xl px-8 py-12 text-right hover:shadow-2xl hover:shadow-[#e7c41444] place-self-start	grid">
            <Image src='/hourglass.png' width={52} height={52} alt="" />
            <h1 className="text-[20px] font-bold">وقت طلاست</h1>
            <p className="text-[18px] font-normal text-justify">غرفه داران اکنون می توانند با صرفه جویی در وقت و هزینه، به راحتی با ارائه دهنده خدمات مناسب برای پروژه بعدی خود ارتباط برقرار کنند </p>
          </section>
          <section className="bg-[#ffffff40] rounded-xl px-8 pt-12 pb-[119px] text-right hover:shadow-2xl hover:shadow-[#28dba545] grid">
            <Image src='/database.png' width={52} height={52} alt="" />
            <h1 className="text-[20px] font-bold">اطلاعات ارزشمند</h1>
            <p className="text-[18px] font-normal text-justify">برای افزایش کارایی در تامین منابع، اطلاعات کاملی را در مورد تامین کنندگان بالقوه در یک پلتفرم پیدا کنید و همزمان درخواست ارسال کنید</p>
          </section> 
        </section>
      </section>
      <section className="text-center pb-[119px]">
        <header className="text-[40px] font-bold pt-[83px] mb-[64px]">مزایای تامین کننده</header>
        <section className="grid grid-cols-3 gap-8">
          <section className="bg-[#ffffff40] rounded-xl px-8 pt-12 pb-[119px] grid text-right hover:shadow-2xl hover:shadow-[#1cccf44f]">
            <Image src='/binoculars.png' width={52} height={52} alt="" />
            <h1 className="text-[20px] font-bold">قرار گرفتن در معرض دید</h1>
            <p className="text-[18px] font-normal text-justify">پروفایل تامیت کنندگان تمام وقت در معرض دید علاقمندان قارا می گیرد و می تواند بیش از هزار درخواست جستجو در روز ایجاد کند</p>
          </section>
          <section className="bg-[#ffffff40] rounded-xl px-8 py-12 text-right hover:shadow-2xl hover:shadow-[#ffffff42]  place-self-end grid">
            <Image src='/intermediary.png' width={52} height={52} alt="" />
            <h1 className="text-[20px] font-bold">100% شفاف</h1>
            <p className="text-[18px] font-normal text-justify">خریداران بدون واسطه و بدون کمسیون مستقیما از طریق اطلاعات تماس ارائه شده در نمایه تامین کنندگان با آنها تماس می گیرند</p>
          </section>
          <section className="bg-[#ffffff40] rounded-xl px-8 pt-12 pb-[119px] grid text-right hover:shadow-2xl hover:shadow-[#ea00ff4e]">
            <Image src='/Fra.png' width={52} height={52} alt="" />
            <h1 className="text-[20px] font-bold">حساب کاربری ممتاز</h1>
            <p className="text-[18px] font-normal text-justify">تامین کننده می تواند با ارتقاء بسته به امکانات ویژه ایونتامین با مزایای عالی نمایش و دریافت درخواست ها در فهرست ویژه ما قرار گیرد.</p>
          </section> 
        </section>
      </section>
    </section>
    {/*--------------- sec-5 -----------------*/}
    <section>
      <header className="text-[32px] font-bold text-center">چگونه کسب و کار خود را در ایونتامین معرفی کنید</header>
      <section className="relative"><Image src='/chart.png' width={1554} height={895} alt="" />
        <section className="grid absolute top-[90px] left-[130px]">
          <section className="flex gap-3 items-center">
            <span className="text-[#21A3BC] text-[65px] font-bold">
              5
            </span>
            <span className="text-[#21A3BC] text-2xl font-medium">RFP ها</span>
          </section>
          <p className="text-[#161616] text-xl font-normal w-[220px] pr-[46px] text-justify mt-[-35px] px-px">خریداران برای دریافت قیمت محصول با شما تماس می گیرند.</p>
          </section>
        <section className="grid absolute bottom-[60px] left-[350px]">
          <section className="flex gap-3 items-center">
            <span className="text-[#1D70B5] text-[65px] font-bold">
              4
            </span>
            <span className="text-[#1D70B5] text-2xl font-medium">نمایه</span>
          </section>
          <p className="text-[#161616] text-xl font-normal w-[220px] pr-[46px] text-justify mt-[-35px] px-px">نمایه شما برای همیشه در سایت ایونتامین نمایش داده می شود.</p>
        </section>
        <section className="grid absolute top-[100px] left-[648px]">
          <section className="flex gap-3 items-center">
            <span className="text-[#603DBB] text-[65px] font-bold">
              3
            </span>
            <span className="text-[#603DBB] text-2xl font-medium">نمایش در جستجو</span>
          </section>
          <p className="text-[#161616] text-xl font-normal w-[220px] pr-[46px] text-justify mt-[-30px] px-px">همه اطلاعات تماس شما در دسترس عموم است.</p>
        </section>
        <section className="grid absolute bottom-[90px] right-[400px]">
          <section className="flex gap-3 items-center">
            <span className="text-[#8D26CF] text-[65px] font-bold">
              2
            </span>
            <span className="text-[#8D26CF] text-2xl font-medium">ایجاد پروفایل</span>
          </section>
          <p className="text-[#161616] text-xl font-normal w-[220px] pr-[46px] text-justify mt-[-30px] px-px">ایمیل خود را تأیید کنید و اطلاعات مورد نیاز را پر کنید.</p>
        </section>
        <section className="grid absolute top-[90px] right-[144px]">
          <section className="flex gap-3 items-center">
            <span className="text-[#8D26CF] text-[65px] font-bold">
              1
            </span>
            <span className="text-[#8D26CF] text-2xl font-medium">ثبت نام</span>
          </section>
          <p className="text-[#161616] text-xl font-normal w-[220px] pr-[46px] text-justify mt-[-35px] px-px">روی دکمه “ثبت نام کنید” در صفحه اصلی ما کلیک کنید.</p>
        </section>
      </section>
      
    </section>
    {/*--------------- sec-7-1 -----------------*/}
     <section>
      <section className=" bg-[#131127] my-5 text-white py-8">
        <header className="font-bold text-center text-[40px] mb-6 pt-6">اگر تامین کننده هستید</header>
        <section className="grid grid-cols-2 gap-5 pl-12">
          <Image src='/pic7.png' width={532} height={479} alt="" />
          <section className="bg-gradient-to-r from-[#00f7ff09] text-center rounded-[30px] py-3 px-1">
            <nav className="text-right grid grid-rows-6 gap-2">
              <a className="hov p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/> قرار گرفتن در معرض شبکه ارتباطی خریداران B2B</a>
              <a className="hov p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>فهرست و نمایش معرفی شرکت بصورت کاملا شفاف بدون هزینه یا کارمزد</a>
              <a className="hov p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>ارجاع سریع به صفحه اصلی سایت شما با ثبت بازدید سایت</a>
              <a className="hov p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>دریافت مشتریان جدید و RFP در راستای افزایش فروش</a>
              <a className="hov p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>امکان ارتقای حساب کاربری برای دریافت حداکثر امکانات و بازخورد مشتری</a>
              <a className="hov p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>درج رایگان فهرست و تبلیغات آنلاین و چاپی ایونتامین</a>
            </nav>
            <button className="bg-gradient-to-r from-[#066A95] to-[#B71789] rounded-[6px] py-3 px-7 mt-[26px] hover:text-[#8D0F69] hove">
              <span className="text-[18px] font-medium">به عنوان تامین‌کننده ثبت نام کنید!</span>
            </button>
          </section>
        </section>
        <section className="grid grid-cols-3 pl-12 pr-24 mt-4">
          <Image src='/slider icons.png' width={51} height={12} alt="" className="justify-self-center col-start-2"/>

            <section className="flex gap-3 col-start-4">
              <button className="bg-[#ffffff1d] p-2 rounded-full hover:bg-[#BB6DA6]">
                <Image src='/chevron_right_FILL0_wght400_GRAD0_opsz24.png' width={18} height={18} alt=""/>
              </button>
              <button className="bg-[#ffffff1d] p-2 rounded-full hover:bg-[#BB6DA6]">
                <Image src='/chevron_left_FILL0_wght400_GRAD0_opsz24.png' width={18} height={18} alt=""/>
              </button>
            </section>
        </section>
      </section>
      <section className="w-[1600px] h-[824px] mx-auto bg-[#131127] my-5 text-white mySlides hidden">
      </section>
     </section>
     {/*--------------- sec-7-2 -----------------*/}
     <section className="bg-[#131127] my-5 text-white py-8">
      <header className="font-bold text-center text-[40px] mb-6 pt-6">اگر خریدار هستید</header>
      <section className="grid grid-cols-2 content-center px-12">
        <section className="bg-gradient-to-r from-[#00f7ff09] text-center rounded-[30px] py-3 px-1">
          <nav className="text-right grid grid-rows-6 gap-2">
            <a className="hov2 p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>
            دعوتنامه‌های ویژه حضور در جلسات و رودادهای تجاری برای خریداران</a>
            <a className="hov2 p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>
            دسترسی براساس علاقه‌مندی به اطلاعات رویدادهای در حال برگزاری و یا پیش‌رو</a>
            <a className="hov2 p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>
            دسترسی به تبلیغات ویژه تامین‌کنندگان و تخفیفات</a>
            <a className="hov2 p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>
            پیگیری RFP های ارسالی</a>
            <a className="hov2 p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>
            ذخیره لیست تامین‌کنندگان موردعلاقه</a>
            <a className="hov2 p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>
            فهرست تامین‌کنندگاندر بیش از 185 کشور جهان</a>
            <a className="hov2 p-4"><Image src='/star.png' width={34} height={34} alt="" className="inline"/>
            تماس مستقیم با تامین‌کنندگان بدون هزینه یا کارمزد</a>
          </nav>
          <button className="bg-gradient-to-r from-[#066A95] to-[#B71789] rounded-[6px] py-3 px-7 mt-[26px] hover:text-[#8D0F69] hove">
              <span className="text-[18px] font-medium">به عنوان خریدار ثبت‌ نام کنید!</span>
            </button>
        </section>
        <Image src='/image.png' width={532} height={479} alt=""  className="mr-[100px] place-self-center"/>
      </section>
      <section className="grid grid-cols-3 pl-12 pr-24 mt-4">
          <Image src='/slider icons.png' width={51} height={12} alt="" className="justify-self-center col-start-2"/>

            <section className="flex gap-3 col-start-4">
              <button className="bg-[#ffffff1d] p-2 rounded-full hover:bg-[#BB6DA6]">
                <Image src='/chevron_right_FILL0_wght400_GRAD0_opsz24.png' width={18} height={18} alt=""/>
              </button>
              <button className="bg-[#ffffff1d] p-2 rounded-full hover:bg-[#BB6DA6]">
                <Image src='/chevron_left_FILL0_wght400_GRAD0_opsz24.png' width={18} height={18} alt=""/>
              </button>
            </section>
        </section>
     </section>
    {/*--------------- sec-8 -----------------*/}
      <section className="w-[1280px] mx-auto">
        <header className="font-bold text-center text-[40px] mb-6 pt-6">لیست نمایشگاه های 1402</header>
        <section className="grid grid-cols-3 grid-rows-2 gap-5 h-[485px]">
          <Image src='/expredia-1-tiny 2.png' width={486} height={367} alt="" className="rounded-[10px] col-start-1 col-end-2 "/ >
          <Image src='/1_PGL1222-2048x1304.png' width={396} height={260} alt="" className="rounded-[10px] col-start-2 col-end-3"/>
          <Image src='/Rectangle 98.png' width={359} height={484} alt="" className="rounded-[10px]"/>
          <Image src='/Rectangle 99.png' width={902} height={202} alt="" className="row-start-2 col-start-1 col-end-3 mt-8 rounded-[10px]"/>
       </section>
      </section>
    </main>
  );
}
