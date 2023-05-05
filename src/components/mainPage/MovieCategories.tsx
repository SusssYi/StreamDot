import React from "react";

import UpcomingComponents from "./UpcomingComponents";

interface MovieCategoriesProps {}
const MovieCategories: React.FC<MovieCategoriesProps> = () => {
    return (
        <div className=" flex h-auto min-h-[100vh] w-full flex-col space-y-6 px-10">
            <UpcomingComponents />
        </div>
    );
};
export default MovieCategories;
