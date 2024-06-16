"use client"
import Image from 'next/image'
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const images: ImageProps[] = [
  { src: "https://assets-global.website-files.com/637e2b6d602973ea0941d482/65d4f305d621c9b59e0b1c09_image1.png", alt: "Image 2",title: "Polygon Dev Chain", description: "Cung cấp tất cả các bộ công cụ xây dựng ứng dụng phi tập trung, dễ dàng, thuận tiện"},
  { src: "https://www.webdesign.org/img_articles/20655/01.jpg", alt: "Image 5",title: "LIBRE", description: "Tiêu điểm của ứng dụng số hóa tài sản trên nền tảng di động" },
  { src: "https://assets-global.website-files.com/637e2b6d602973ea0941d482/6595fca2ccc4d6b8fce99cfd_snapshots-p-800.png", alt: "Image 6",title: "ForSkill", description: "Biến ví điện tử của bạn trở lên dễ dàng sử dụng hơn với nhiều tính năng mới của mạng chính" },
  { src: "https://assets-global.website-files.com/637e2b6d602973ea0941d482/6583132663ff69d0f5008587_girnaar%20nodes-p-800.png", alt: "Image 7",title: "Ginaar Nodes", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { src: "https://assets-global.website-files.com/637e2b6d602973ea0941d482/657f660f3e530f0904256041_Twitter%20post%20-%2019%20(1)-p-800.png", alt: "Image 8",title: "GateWay", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
  { src: "https://assets-global.website-files.com/637e2b6d602973ea0941d482/657aed2a1153f58c755cc862_image-p-800.png", alt: "Image 9" ,title: "ChainLink", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  { src: "https://assets-global.website-files.com/637e2b6d602973ea0941d482/656fd33191778d3899e52a0f_Spotlightkilnownest-p-800.png", alt: "Image 9" ,title: "SpotLight", description: "Consequat id porta nibh venenatis. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac"},
  { src: "https://assets-global.website-files.com/637e2b6d602973ea0941d482/6563e376c70b41f61610adad_aws-p-800.png", alt: "Image 9" ,title: "AMB Access", description: "Aliquam sem et tortor consequat id. Mauris in aliquam sem fringilla ut morbi tincidunt augue."},
  { src: "https://assets-global.website-files.com/637e2b6d602973ea0941d482/656fd33191778d3899e52a0f_Spotlightkilnownest-p-800.png", alt: "Image 9" ,title: "SpotLight", description: "Consequat id porta nibh venenatis. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac"},
  { src: "https://assets-global.website-files.com/637e2b6d602973ea0941d482/654b1b8e0e5f78c82d28dd4a_village-p-800.png", alt: "Image 9" ,title: "Polygon Village", description: "Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Ridiculus mus mauris vitae ultricies leo integer"},
];

export function CarouselImage() {
  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // )

  return (
    <Carousel 
      // plugins={[plugin.current]}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    id='coop'
      opts={{
        align: "start",
      }}
      className="w-full max-w-screen-2xl pt-40"
    >
      <CarouselContent>
        {Array.from(images).map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center w-full">
                  <span className="text-4xl font-semibold w-full">
                    <img className='mt-5 w-full rounded-md' src={image.src} alt={image.alt} />
                    <div className='mt-5 hover:bg-slate-100 hover:rounded-md w-full h-40 hover:scale-105'>
                      <h2 className="p-2 text-2xl font-semibold">{image.title}</h2>
                      <p className="p-2 text-base">{image.description}</p>
                    </div>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
function Autoplay(arg0: { delay: number; stopOnInteraction: boolean; }): any {
  throw new Error('Function not implemented.');
}

