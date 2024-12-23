import Header from "@/components/Header";
import HomeLogo from "@/components/HomeLogo";
import { downloadPDF, listProjectPDFs } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { DownloadIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {

    const [pdfs, setPdfs] = useState<{ name: string | undefined; path: string }[]>([]);

    const [logo, animateLogo] = useAnimate();
    const [titleBox, animateTitleBox] = useAnimate();
    const [underline, animateUnderline] = useAnimate();

    useEffect(() => {
        animateTitleBox(
            titleBox.current,
            { x: 0, opacity: 1 },
            { delay: 0.8, type: 'spring', stiffness: 50, damping: 20 },
        );
        animateUnderline(
            underline.current,
            { x: 0, opacity: 1 },
            { delay: 1.5, type: 'spring', stiffness: 50, damping: 20 },
        );
    });

    useEffect(() => {
        animateLogo(
            logo.current,
            { scale: 1, opacity: 1 },
            { delay: 1.5, type: 'spring', stiffness: 100, damping: 20 },
        );
    });
    useEffect(() => {
        setPdfs(listProjectPDFs());
    }, []);

    return (
        <>
            <Header />
            <div
                ref={logo}
                className="w-screen h-64 md:h-96 relative flex flex-col justify-center items-center "
            >
                <img
                    src="/images/pico-imagem-improved.webp"
                    alt="Pico"
                    className="h-full w-full object-cover z-0 absolute filter grayscale brightness-100 hue-rotate-270"
                />
                <div className="h-full absolute z-10 w-full bg-filter" />
                <HomeLogo onClick={() => window.open('/', '_self')} className="mt-20 md:mt-10 text-xl w-[250px] md:text-3xl md:w-[360px] h-fit" />
                <div className="h-fit z-20 mt-8 md:mt-14">
                    <motion.h1
                        ref={titleBox}
                        initial={{ x: -100, opacity: 0 }}
                        className="text-white font-calya z-10 text-3xl md:text-5xl"
                    >
                        Política de privacidade
                    </motion.h1>
                    <motion.div
                        ref={underline}
                        initial={{
                            x: -100,
                            opacity: 0,
                        }}
                        className="h-1 w-16 bg-picoLightGreen md:w-full"
                    />
                </div>
            </div>
            <div className="w-screen flex flex-col items-center bg-darkbg overflow-x-hidden padding-pages px-6">
                <div className='flex justify-around flex-wrap w-full gap-5'>
                    <div className='flex justify-around flex-wrap w-full gap-5'>
                        <div className='p-5 bg-slate-700 rounded-md cursor-pointer w-full md:max-w-[48%] flex justify-between items-center'>
                            <p>Clique no botão ao lado para fazer o download</p>
                            <DownloadIcon className='h-7 w-7 p-1 transition-colors duration-200 hover:bg-slate-400 rounded-md' onClick={() => downloadPDF(pdfs.find(pdf => pdf.name === 'politica-de-privacidade.docx')?.path ?? '')} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;