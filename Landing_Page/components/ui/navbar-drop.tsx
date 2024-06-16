"use client"

import * as React from "react"
import Link from "next/link"
import bgvideo from '../assets/bgvideo.mp4';
import { cn } from "@/lib/utils"
import { Icons } from "./incons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Trang Mua Bán Tập Trung",
    href: "/docs/primitives/hover-card",
    description:
      "Nơi các sản phẩm được bán trực tiếp hoặc giao dịch trên Blockchain",
  },
  {
    title: "Trang Bán Hàng Cá Nhân",
    href: "/docs/primitives/progress",
    description:
      "Hãy trở thành người bán hàng của chúng tôi",
  },
  {
    title: "Tham Gia Dự Án OutSource",
    href: "/docs/primitives/scroll-area",
    description: "Tham gia các dự án phi tập trung do các công ty tổ chức",
  },
  {
    title: "Khuyến Mãi",
    href: "/docs/primitives/tabs",
    description:
      "Thông tin khuyến mãi hiện có đang hoạt động",
  },
  {
    title: "Công Cụ Hỗ Trợ Tìm Kiếm",
    href: "/docs/primitives/tooltip",
    description:
      "Các công cụ hỗ trợ tìm kiếm sản phẩm và dự án",
  },
  {
    title: "Mạng Xã Hội Liên Kết",
    href: "/docs/primitives/alert-dialog",
    description:
      "Các trang thông tin và nền tảng hỗ trợ thảo luận",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-green-500">Thông Tin Chính</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <video src={bgvideo} autoPlay loop muted className='object-cover w-auto rounded'/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Code Market
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Tổng hợp nhiều lĩnh vực khách nhau của công nghệ thông tin
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Thông tin giới thiệu">
                Thông tin chính và hướng dẫn sử dụng
              </ListItem>
              <ListItem href="#coop" title="Kết hợp phát triển">
                Cách thức đăng ký trở thành người bán hàng
              </ListItem>
              <ListItem href="#privacy" title="Danh mục hỗ trợ chính">
                Các lĩnh vực hỗ trợ chính có kết hợp BlockChain
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-green-500">Thành Phần</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#start" legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} >
              Khuyến Mãi Phát Triển
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
