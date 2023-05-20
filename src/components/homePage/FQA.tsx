import React from "react";
import FQCMockData from "src/utils/FQAMocks";
import ExpandableBox from "../ui/ExpandableBox";
import SecondaryTitle from "../ui/SecondaryTitle";

interface FQAProps {}
const FQA: React.FC<FQAProps> = () => {
    return (
        <section
            title="FQA"
            className=" flex min-h-[100vh] w-full flex-col items-center space-y-8"
            data-aos="fade-up"
        >
            <div>
                <SecondaryTitle
                    text="FREQUENTLY ASKED QUESTIONS"
                    LineLength={10}
                />
            </div>
            <div className=" z-50 flex w-full flex-col space-y-12">
                {FQCMockData.map((item, index) => (
                    <ExpandableBox
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </section>
    );
};
export default FQA;
