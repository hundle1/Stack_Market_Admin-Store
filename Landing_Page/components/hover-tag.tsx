import { CalendarIcon } from "@radix-ui/react-icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardAvt() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
            <h1 className='font-bold text-xl'>Stack Market</h1>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar> 
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Tác giả: Nguyễn Mạnh Dũng</h4>
            <p className="text-sm">
                Sinh viên khoa Công Nghệ Thông Tin - IT PDU <br/> đại học Phương Đông.
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Tạo 27/3/2024, bản quyền cá nhân
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
