import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, BadgePercent, CandlestickChart, LucideIcon, ShieldCheck } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Trao Đổi Mua Bán Dễ Dàng",
        bodyText: "Insightful's predictive analytics identify high-value prospects for targeted pitches, boosting conversion rates and sales by up to 20%.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Tiết Kiệm Thời Gian",
        bodyText: "Insightful automates personalized content creation, freeing up sales reps' time for revenue-focused activities and increased productivity.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Giảm Thiểu Chi Phí Trung Gian",
        bodyText: " Insightful's AI lead engagement and renewal tools reduce customer churn by up to 30% through consistent outreach and retention opportunities.",
        icon: ArrowDownNarrowWide,
        id: 3
    },
    {
        title: "Nâng Cao Lợi Nhuận",
        bodyText: " Insightful's AI lead engagement and renewal tools reduce customer churn by up to 30% through consistent outreach and retention opportunities.",
        icon: CandlestickChart,
        id: 4
    },
    {
        title: "Hưởng Quyền Sở Hữu",
        bodyText: " Insightful's AI lead engagement and renewal tools reduce customer churn by up to 30% through consistent outreach and retention opportunities.",
        icon: BadgePercent,
        id: 5
    },
    {
        title: "Bảo Vệ Nghiêm Ngặt",
        bodyText: " Insightful's AI lead engagement and renewal tools reduce customer churn by up to 30% through consistent outreach and retention opportunities.",
        icon: ShieldCheck,
        id: 6
    },
]

export default infoCards