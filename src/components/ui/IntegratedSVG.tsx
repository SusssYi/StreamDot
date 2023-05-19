import React from "react";

// Export All the SVGs as React Components
interface IntegratedSVGSVGProps {
    size: number;
    category: "computer" | "mobile" | "google" | "discord";
}
const IntegratedSVG: React.FC<IntegratedSVGSVGProps> = ({ size, category }) => {
    switch (category) {
        case "computer": {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 354.331 215.672"
                >
                    <g transform="translate(-492.254 -3688.394)">
                        <g transform="translate(-352 -3)">
                            <path
                                d="M376.675,461.547V307.035a8.367,8.367,0,0,0-8.5-8.5h-248.4a8.367,8.367,0,0,0-8.5,8.5V461.917H83.911v9.98c3.7,5.913,23.289,9.241,30.681,9.241H372.976c7.763,0,27.354-3.7,30.681-9.241v-9.98H376.675v-.37ZM116.92,307.035H371.18V461.917l-254.26-.37Z"
                                transform="translate(760.343 3392.863)"
                                fill="#411fd1"
                            ></path>
                            <rect
                                width="252"
                                height="154"
                                transform="translate(878 3700)"
                                fill="#050314"
                            ></rect>
                        </g>
                        <g transform="translate(-265 60)">
                            <path
                                d="M328.683,434.824V305.641a7,7,0,0,0-7.109-7.11H113.89a7,7,0,0,0-7.109,7.11V435.133H83.911v8.344c3.092,4.944,19.471,7.726,25.652,7.726H325.591c6.49,0,22.87-3.091,25.652-7.726v-8.344H328.683v-.309ZM111.509,305.641h212.58V435.133l-212.58-.309Z"
                                transform="translate(760.343 3392.863)"
                                fill="#411fd1"
                            ></path>
                            <rect
                                width="211"
                                height="128"
                                transform="translate(872 3699)"
                                fill="#050314"
                            ></rect>
                        </g>
                    </g>
                </svg>
            );
        }
        case "mobile": {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 195 240"
                >
                    <g transform="translate(-1603 -3706.837)">
                        <g
                            transform="translate(1629 3706.837)"
                            fill="none"
                            stroke="#411fd1"
                            strokeWidth={6}
                        >
                            <rect
                                width="169"
                                height="222"
                                rx="12"
                                stroke="none"
                            ></rect>
                            <rect
                                x="3"
                                y="3"
                                width="163"
                                height="216"
                                rx="9"
                                fill="none"
                            ></rect>
                        </g>
                        <g
                            transform="translate(1606 3804.837)"
                            fill="#050314"
                            stroke="#707070"
                            strokeWidth="1"
                        >
                            <rect
                                width="70"
                                height="138"
                                rx="8"
                                stroke="none"
                            ></rect>
                            <rect
                                x="0.5"
                                y="0.5"
                                width="69"
                                height="137"
                                rx="7.5"
                                fill="none"
                            ></rect>
                        </g>
                        <g transform="translate(1603 3801.57)">
                            <g transform="translate(0 0)">
                                <path
                                    d="M64.445,0H10.627A10.638,10.638,0,0,0,0,10.626V134.64a10.638,10.638,0,0,0,10.626,10.627H64.444a10.638,10.638,0,0,0,10.627-10.626V10.627A10.638,10.638,0,0,0,64.445,0ZM70.2,134.641a5.752,5.752,0,0,1-5.752,5.752H10.627a5.752,5.752,0,0,1-5.752-5.752V10.627a5.752,5.752,0,0,1,5.752-5.752h8.5a2.292,2.292,0,0,1,2.242,1.82l.475,2.257A3.461,3.461,0,0,0,25.233,11.7H50.326A3.461,3.461,0,0,0,53.713,8.95l.475-2.256a2.292,2.292,0,0,1,2.243-1.819h8.014A5.752,5.752,0,0,1,70.2,10.626Z"
                                    fill="#411fd1"
                                ></path>
                            </g>
                        </g>
                    </g>
                </svg>
            );
        }
        case "google": {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width={size}
                    height={size}
                >
                    <path
                        fill="#fbc02d"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                        fill="#e53935"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                        fill="#4caf50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                        fill="#1565c0"
                        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                </svg>
            );
        }
        case "discord": {
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 -28.5 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                >
                    <g>
                        <path
                            d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                            fill="#5865F2"
                            fill-rule="nonzero"
                        ></path>
                    </g>
                </svg>
            );
        }

        default:
            return <div></div>;
    }
};
export default IntegratedSVG;
