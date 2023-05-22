import { useSession } from "next-auth/react";
import React from "react";
import { toast } from "react-hot-toast";
import { BsPlus } from "react-icons/bs";
import { api } from "src/utils/api";

interface AddButtonProps {
    movieId: string | number;
    title: string;
    posterImage: string;
    releaseDate: string;
    size?: number;
}

// This Button will add movie to watchList
const AddButton: React.FC<AddButtonProps> = ({
    movieId,
    title,
    posterImage,
    releaseDate,
    size = 20,
}) => {
    const { data } = useSession();
    const utils = api.useContext();
    const { mutate } = api.watchList.addToWatchList.useMutation({
        onSuccess: async () => {
            toast.success("movie  success add to watchList! ", {
                style: {
                    border: "1px solid #411fd1",
                    padding: "16px",
                    color: "#411fd1",
                },
                iconTheme: {
                    primary: "#411fd1",
                    secondary: "#FFFAEE",
                },
            });
            await utils.watchList.getWatchList.invalidate();
        },
        onError: () => {
            toast.error("movie already in watchList!", {
                style: {
                    border: "1px solid #e3342f",
                    padding: "16px",
                    color: "#e3342f",
                },
                iconTheme: {
                    primary: "#e3342f",
                    secondary: "#FFFAEE",
                },
            });
        },
    });
    return (
        <div
            className="cursor-pointer  p-1 text-lg text-white shadow-md  shadow-secondary ring-1 ring-secondary"
            onClick={() => {
                if (data?.user) {
                    mutate({
                        movieId: `${movieId}`,
                        title: `${title}`,
                        posterPath: `${posterImage}`,
                        backdropPath: `${posterImage}`,
                        rating: 5,
                        releaseDate: `${releaseDate}`,
                    });
                } else {
                    toast.error("you must login first!", {});
                }
            }}
        >
            <BsPlus
                style={{
                    height: `${size}px`,
                    width: `${size}px`,
                }}
            />
        </div>
    );
};
export default AddButton;
