import FQCMockData from "@/utils/FQAMocks";
import React from "react";
import ExpandableBox from "../uiComponents/ExpandableBox";
import SecondaryTitle from "../uiComponents/SecondaryTitle";

interface FQAProps {}
const FQA: React.FC<FQAProps> = () => {
    return (
        <div className=" flex min-h-[100vh] w-full flex-col items-center space-y-8" data-aos="fade-up">
            <div>
                <SecondaryTitle text="FREQUENTLY ASKED QUESTIONS" LineLength={10} />
            </div>
            <div className=" z-50 flex w-full flex-col space-y-12">
                {FQCMockData.map((item, index) => (
                    <ExpandableBox key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
};
export default FQA;
