/* eslint-disable @typescript-eslint/no-unsafe-call */
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { api } from "src/utils/api";
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    // Smooth scroll
    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay: 0,
        });

        const lenis = new Lenis({
            lerp: 0.02,
            smoothWheel: true,
            easing: (t) => t,
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
