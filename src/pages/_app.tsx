/* eslint-disable @typescript-eslint/no-unsafe-call */
import "@/styles/globals.css";
import { api } from "@/utils/api";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    // smooth scroll
    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay: 100,
        });

        const lenis = new Lenis({
            lerp: 0.02,
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);
    return (
        <SessionProvider session={session}>
            <Toaster />
            <Component {...pageProps} />
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
