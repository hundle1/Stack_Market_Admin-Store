import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image'

const cardList = [
  { title: "WordPress", content: "Thousands of WordPress plugins",artword: "/anh1.png"},
  { title: "PHP Script", content: "Thousands of PHP Scripts",artword: "/profile.png"},
  { title: "React Work", content: "Thousands of WordPress plugins",artword: "/profile.png"},
  { title: "HTML 5", content: "Thousands of WordPress plugins",artword: "/profile.png"},
  { title: "Javascript", content: "Thousands of WordPress plugins",artword: "/profile.png"},
  { title: "Plugin", content: "Thousands of WordPress plugins",artword: "/profile.png"},
];

export const Category = () => {
    return (
        cardList.map(asset =>
            <Card className="m-5 text-center">
                <CardHeader>
                    <CardTitle>{asset.title}</CardTitle>
                    <CardDescription>{asset.content}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={asset.artword}
                            width={50}
                            height={250}
                            alt="Picture of the author"/>
                </CardContent>
            </Card>
        )
    )
};
