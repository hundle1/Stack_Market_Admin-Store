"use client"
import 'next-cloudinary/dist/cld-video-player.css';
import Image from 'next/image';
import Link from 'next/link'
import infoCards from './libs/InfoCards'
import { CheckCheck, LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'
import pricingCards from './libs/PricingCards'
import { Button } from "@/components/ui/button"
import { NavigationMenuDemo } from '@/components/ui/navbar-drop';
import { InformationTag } from '@/components/information-tag';
import Footer from '@/components/footer';
import Spline from '@splinetool/react-spline'
import { Category } from '@/components/ui/category';
// import bgvideo from '../components/assets/bgvideo.mp4';
import { CarouselImage } from '@/components/carousel';
import { HoverCardAvt } from '@/components/hover-tag';

export default function Home() {
  return (
    <main className=' flex min-h-screen h-fit flex-col items-center justify-center relative'>
      {/* <video src={bgvideo} autoPlay loop muted className='object-cover absolute top-[65px] blur-sm -z[-1]'/> */}
      <Navbar/>
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden"
        // style={{zIndex: -1}}
      >
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8 text-center'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-black md:text-8xl text-black'>STACK MARKET</h1>
          </div>
          <p className='w-full text-sm md:text-base text-black'>Nền Tảng NFT Software Số 1 Thế Giới <HoverCardAvt/></p>
          <div className='w-full flex items-center justify-center md:justify-start gap-4'>
            <button className='w-48 h-12 text-sm sm:text-base rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors'> <a href="http://localhost:3001/">Tìm Kiếm NFT</a></button>
            <button className='w-48 h-12 text-sm sm:text-base rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors'><a href="http://localhost:3000/">Bắt Đầu Bán Hàng</a></button>
            <button className='w-48 h-12 text-sm sm:text-base rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors'><a href="tel:+84957544275">Liên Lạc Ngay</a></button>
          </div>
        </div>
        <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
          <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'/>
        </div>
        
        

      </header>
      

      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
        <div className='absolute -z-10 h-full w-full overflow-hidden'>
          <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl"/>
        </div>
        <div id='privacy' className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl mt-[-40px] pb-10">
          <h3 className='text-4xl md:text-5xl font-bold pb-20'>Cung Cấp Giải Pháp Giúp Bạn Tiếp Cận Mọi Thứ</h3>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
            {infoCards.map((infoCard) => {
              return (
                <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                  <p className="text-sm sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
                </InfoCard>
              )
            })}
          </div>
        </div>
      </section>
      <div className='flex flex-wrap justify-center w-[80%] pt-20'>
      <Category/>
      </div>
      <div className='flex justify-center w-full pt-20'>
      <CarouselImage/>
      </div>

      <section id="start" className="h-fit min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8">
        <h4 className="text-4xl md:text-5xl font-bold">Giá cả</h4>
        <div className='grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8'>
            {pricingCards.map((pricingCard) => {
              return (
                <PricingCard oneliner={pricingCard.oneliner} title={pricingCard.title} price={pricingCard.price} benefits={pricingCard.benefits} key={pricingCard.id}/>
              )
            })}
        </div>
      </section>


      
      <div className='w-full'>
        <div className='flex justify-center'>
          <InformationTag/>
        </div>
        <Footer/>
      </div>
    </main>
  )
}

interface IInfoCardProps {
  title:string;
  Icon:LucideIcon;
  children:ReactElement<any,any>
}

function InfoCard({title,Icon,children}:IInfoCardProps) {
  return (
    <div className='w-full h-80 flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className='text-lg font-bold sm:text-xl'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}

interface IPricingCardProps {
  title:string;
  price:number;
  benefits:string[]
  oneliner:string;
}
function PricingCard({title,price,benefits,oneliner}:IPricingCardProps) {
  return (
    <div className='h-fit w-full flex flex-col p-8 gap-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className='flex flex-col gap-2'>
        <div>
          <h6 className='text-2xl'>{title}</h6>
          <p className='text-sm text-zinc-500'>{oneliner}</p>
        </div>
        <p className='text-4xl font-bold'>
          {price}VND <span className='text-sm font-normal text-zinc-500'>/Tháng</span>
        </p>
      </div>
      <button className='bg-fuchsia-700 rounded p-2 text-sm transition-colors hover:bg-fuchsia-800'>Đăng Ký Sử Dụng</button>
      <div className='flex flex-col w-full gap-4'>
        {benefits.map((benefit, i) => {
          return(
            <p key={i} className='text-sm text-zinc-500 flex items-center gap-2'>
              <span>
                <CheckCheck />
              </span>
              {benefit}
            </p>
          )
        })}
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center z-10'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <a href="#" className="cursor-pointer">
          <img src="https://pbs.twimg.com/media/F7PzsHwawAA_WZK?format=jpg&name=medium" className="mx-5 w-12 h-12"/>
        </a>
        <ul className='flex gap-8 text-bold'>
          <li className='h-auto pt-2'><Link className='hover:text-green-500 transition-colors text-xs sm:text-base' href="http://localhost:3001/">Trang Chủ</Link></li>
          <NavigationMenuDemo></NavigationMenuDemo>
        </ul>
        <div className='flex items-center'>
          <a href="#" className="mx-2 rounded-full text-slate-800 transition-colors duration-300 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-violet-700" aria-label="Discord">
            <svg className="w-10 py-2 h-8  fill-current bi bi-discord" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
            </svg>
          </a>
          <a href="#" className="mx-2 rounded-full text-slate-800 transition-colors duration-300 dark:text-gray-300 hover:text-white dark:hover:text-white  hover:bg-red-500" aria-label="YouTube">
            <svg className="w-10 py-2 h-8  fill-current bi bi-youtube" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg>
          </a>
          <Button asChild className='ml-5'>
            <Link href="http://localhost:3001/">Đăng Nhập / Đăng Ký</Link>
          </Button>
        </div>
        
      </div>

    </div>
  )
}