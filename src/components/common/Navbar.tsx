/* eslint-disable @typescript-eslint/no-floating-promises */
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BiSearch } from "react-icons/bi";
import ListElement from "../ui/ListElement";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = () => {
    const { push } = useRouter();
    const { data } = useSession();
    return (
        <nav className=" z-[21] flex w-full flex-col items-center justify-between   md:flex-row">
            {/* left */}
            <div className="flex items-center">
                <div className=" hover:scale-70  z-[40] cursor-pointer  text-2xl font-bold uppercase text-white transition-all duration-300  ">
                    <Image
                        className=" h-auto w-auto "
                        src="/images/logo2.png"
                        alt=""
                        priority
                        width={125}
                        height={80}
                        onClick={() => {
                            push("/");
                        }}
                    />
                </div>
                <div className=" flex space-x-16 text-xl font-bold text-white ">
                    <ListElement
                        text="HOME"
                        onClick={() => {
                            push("/category");
                        }}
                    />
                    <ListElement text="movies" />
                    <ListElement text="series" />
                </div>
            </div>
            {/* right */}
            <div className=" flex items-center space-x-8 px-12">
                {/* TODO:Add Search feature */}
                <div className="text-2xl font-bold">
                    <BiSearch />
                </div>
                <ListElement text="watchList" />
                {/* TODO:Add Avatar PIcks */}
                <div
                    className="h-[50px] w-[50px] cursor-pointer rounded-full"
                    onClick={() => {
                        if (!data?.user) {
                            push("/login");
                        }
                    }}
                >
                    <img
                        src={data?.user.image || "/images/login/guest-128.png"}
                        alt={data?.user.name || "guest"}
                        className="h-full w-full rounded-full object-cover"
                    />
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
