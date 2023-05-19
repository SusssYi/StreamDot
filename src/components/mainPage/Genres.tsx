import Image from "next/image";
import React from "react";

interface GenresProps {}
const Genres: React.FC<GenresProps> = () => {
    return (
        <section
            title="Genres"
            className="flex w-full flex-col space-y-8 px-8 py-12"
        >
            <div className=" text-2xl font-bold">Popular Genres</div>

            <div className="grid grid-cols-4  gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="group relative cursor-pointer overflow-hidden rounded-md shadow-md shadow-secondary"
                    >
                        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-secondary/10">
                            <h2 className="font-Oswald text-2xl font-bold">
                                ACTION
                            </h2>
                        </div>
                        <Image
                            priority
                            width={300}
                            height={300}
                            src={`/images/genres/${index + 1}.webp`}
                            alt=""
                            className="h-[250px] w-full rounded-md object-cover transition-all duration-500  ease-in-out group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Genres;
