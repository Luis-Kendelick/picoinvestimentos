import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimate } from 'framer-motion';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { DownloadIcon } from 'lucide-react';

import Header from '@/components/Header';
import HomeLogo from '@/components/HomeLogo';
import YoutubeEmbed from '@/components/EmbedVideo';
import { downloadPDF, listProjectPDFs } from '@/lib/utils';
import { dateOrderedDocs } from '@/utils/docs';

interface PdfFile {
  name?: string;
  path: string;
}

interface DocumentItem {
  date: string;
  file: string;
}

interface VideoCardProps {
  title: string;
  embedId: string;
}

interface ReportCardProps {
  type: string;
  doc: DocumentItem;
  pdfs: PdfFile[];
}

const Insights: React.FC = () => {
  const [titleBox, logo, underline] = [useAnimate(), useAnimate(), useAnimate()];
  const [pdfs, setPdfs] = useState<PdfFile[]>([]);

  useEffect(() => {
    animateElements();
    setPdfs(listProjectPDFs());
  }, []);

  const animateElements = () => {
    if (titleBox[0].current) {
      titleBox[1](titleBox[0].current, { x: 0, opacity: 1 }, { delay: 0.8, type: 'spring', stiffness: 50, damping: 20 });
    }
    if (logo[0].current) {
      logo[1](logo[0].current, { scale: 1, opacity: 1 }, { delay: 1.5, type: 'spring', stiffness: 100, damping: 20 });
    }
    if (underline[0].current) {
      underline[1](underline[0].current, { x: 0, opacity: 1 }, { delay: 1.5, type: 'spring', stiffness: 50, damping: 20 });
    }
  };

  const VideoCard: React.FC<VideoCardProps> = ({ title, embedId }) => (
    <div className='bg-picoLightGreen rounded-md p-3 w-full md:max-w-[48%]'>
      <h2 className='text-picoLightBlue font-semibold text-xl'>{title}</h2>
      <YoutubeEmbed embedId={embedId} />
    </div>
  );

  const ReportCard: React.FC<ReportCardProps> = ({ type, doc, pdfs }) => (
    <div className='p-5 bg-slate-700 rounded-md cursor-pointer w-full md:max-w-[48%] flex justify-between items-center'>
      <p>{`${type} - ${format(doc.date, "MMMM 'de' yyyy", { locale: ptBR })}`}</p>
      <DownloadIcon
        className='h-7 w-7 p-1 transition-colors duration-200 hover:bg-slate-400 rounded-md'
        onClick={() => downloadPDF(pdfs.find(pdf => pdf.name === doc.file)?.path || '')}
      />
    </div>
  );

  return (
    <>
      <Header />
      <div ref={logo[0]} className="w-screen h-64 md:h-96 relative flex flex-col justify-center items-center">
        <img
          src="/images/pico-imagem-improved.webp"
          alt="Pico"
          className="h-full w-full object-cover absolute filter grayscale brightness-100 hue-rotate-270"
        />
        <div className="h-full absolute w-full bg-filter z-10" />
        <HomeLogo onClick={() => window.open('/', '_self')} className="mt-20 md:mt-10 text-xl md:text-3xl w-[250px] md:w-[360px] h-fit" />
        <div className="h-fit z-20 mt-8 md:mt-14">
          <motion.h1 ref={titleBox[0]} initial={{ x: -100, opacity: 0 }} className="text-white font-calya text-3xl md:text-5xl">Insights</motion.h1>
          <motion.div ref={underline[0]} initial={{ x: -100, opacity: 0 }} className="h-1 w-16 bg-picoLightGreen md:w-full" />
        </div>
      </div>

      <div className="w-screen min-h-screen flex flex-col items-center bg-darkbg overflow-x-hidden px-6">
        <h2 className="font-calya text-2xl md:text-3xl text-center">Explore nossos relatórios e vídeos! Descubra como podemos ajudar nos seus objetivos financeiros.</h2>

        <SectionTitle title="Vídeos" />
        <div className='flex justify-around flex-wrap w-11/12 md:w-10/12 gap-8'>
          {[
            { title: "Pico Investimentos - Apresentação", embedId: "Cz0uSfptbWk" },
            { title: "Pico Investimentos - Tesouro Direto", embedId: "xQrzWm8z4G4" },
            { title: "Pico Investimentos - Renda Fixa Passiva", embedId: "bavu-OBIyV8" },
            { title: "Pico Investimentos - Revar", embedId: "uAsUaMtv-70" }
          ].map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>

        {[
          { sectionName: "Relatórios", docs: dateOrderedDocs().monthlyReports, type: "Carta Mensal" },
          { sectionName: "Newsletter", docs: dateOrderedDocs().newsletters, type: 'Newsletter' }
        ].map((section) => (
          <>
            <SectionTitle title={section.sectionName ?? ''} />
            <div className='flex justify-around flex-wrap w-11/12 gap-5'>
              {section.docs.map((doc, index) => (
                <ReportCard key={index} type={section.type} doc={doc} pdfs={pdfs} />
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className='w-full flex flex-col items-center mt-6'>
    <h2 className='font-calya text-xl md:text-2xl text-center'>{title}</h2>
    <div className='bg-picoLightGreen w-11/12 h-1 mt-4 mb-6' />
  </div>
);

export default Insights;
