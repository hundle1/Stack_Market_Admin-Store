interface IPricingCard {
    price:number;
    title:string;
    benefits:string[];
    id:number;
    oneliner:string;
}

const pricingCards:IPricingCard[] = [
    {
        price: 0,
        title: "Bản Người Bán",
        benefits: [
            "Mở khóa giới hạn 40 sản phẩm trên cửa hàng",
            "Mở khóa giới hạn 10 khuyến mãi",
            "Mở khóa 1 sản phẩm lên gợi ý",
            "10 mẫu thiết kế chỉnh sửa bán hàng",
        ],
        id: 1,
        oneliner: "Dành cho người bán thông thường và các freelancer"
    },
    {
        price: 499000,
        title: "Bản Doanh Nghiệp",
        benefits: [
            "Mở khóa không giới hạn tất cả hạng mục",
            "Mở khóa 10 sản phẩm lên gợi ý",
            "Tạo các dự án thu hút lập trình viên",
            "Kết hợp thiết kế cửa hàng do chính Market cung cấp",
        ],
        id: 2,
        oneliner: "Comprehensive sales optimization for accelerated revenue gains"
    },
]

export default pricingCards