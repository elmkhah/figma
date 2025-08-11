import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-plans',
  imports: [CarouselModule],
  templateUrl: './plans.html',
  styleUrl: './plans.css'
})
export class Plans {
  items = [
    "sadfs",
    "bhadhlfkashld",
    "/;omvas",
    "wert",
    "bnsdgn"
  ];

  codeSamples=[
    `<div class="w-full flex flex-col items-center">
      <div class="relative top-10 p-2 rounded-xl flex flex-col font-extrabold text-white bg-orange-500 items-center w-4/5 ">
        <p>پرمیوم</p>
        <p>65.423 تومان</p>
      </div>

      <div class="w-full rounded-xl border-2 border-gray-200 flex flex-col gap-2 items-center justify-end pb-3 h-96" >
        <p>یک ماه</p>
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <p>3400 پیام</p>
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">

        <div class="flex flex-row gap-3 items-center mt-5">
          <p class="py-2 px-4 rounded-xl border-2 border-[#07b1bc] text-[#07b1bc]">ویرایش</p>
          <img src="/svg/Trash%20Bin%202.svg">

        </div>

      </div>
    </div>`,



    `<div class="w-full flex flex-col items-center">
      <div class="relative top-10 p-2 rounded-xl flex flex-col font-extrabold text-white bg-[#fd9216] items-center w-4/5 ">
        <p>استاندارد</p>
        <p>65.423 تومان</p>
      </div>

      <div class="w-full rounded-xl border-2 border-gray-200 flex flex-col gap-2 items-center justify-end pb-3 h-96" >
        <p>یک ماه</p>
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <p>3400 پیام</p>
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">

        <div class="flex flex-row gap-3 items-center mt-5">
          <p class="py-2 px-4 rounded-xl border-2 border-[#07b1bc] text-[#07b1bc]">ویرایش</p>
          <img src="/svg/Trash%20Bin%202.svg">

        </div>

      </div>
    </div>`,


    `<div class="w-full flex flex-col items-center">
      <div class="relative top-10 p-2 rounded-xl flex flex-col font-extrabold text-white bg-[#2b8180] items-center w-4/5 ">
        <p>پایه</p>
        <p>65.423 تومان</p>
      </div>

      <div class="w-full rounded-xl border-2 border-gray-200 flex flex-col gap-2 items-center justify-end pb-3 h-96" >
        <p>یک ماه</p>
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <p>3400 پیام</p>
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Close%20Circle%202.svg">

        <div class="flex flex-row gap-3 items-center mt-5">
          <p class="py-2 px-4 rounded-xl border-2 border-[#07b1bc] text-[#07b1bc]">ویرایش</p>
          <img src="/svg/Trash%20Bin%202.svg">

        </div>

      </div>
    </div>`,



    `<div class="w-full flex flex-col items-center">
      <div class="relative top-10 p-2 rounded-xl flex flex-col font-extrabold text-white bg-[#07b1bc] items-center w-4/5 ">
        <p>تازه وارد</p>
        <p>65.423 تومان</p>
      </div>

      <div class="w-full rounded-xl border-2 border-gray-200 flex flex-col gap-2 items-center justify-end pb-3 h-96" >
        <p>یک ماه</p>
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <p>3400 پیام</p>
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Check%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Close%20Circle%202.svg">
        <div class="h-[1px] bg-gray-200 w-11/12"></div>
        <img src="/svg/Close%20Circle%202.svg">

        <div class="flex flex-row gap-3 items-center mt-5">
          <p class="py-2 px-4 rounded-xl border-2 border-[#07b1bc] text-[#07b1bc]">ویرایش</p>
          <img src="/svg/Trash%20Bin%202.svg">

        </div>

      </div>
    </div>
`
  ]

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    }
  ];
}
