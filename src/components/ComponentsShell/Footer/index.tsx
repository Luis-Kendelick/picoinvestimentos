import { PicoIconExtendedPulseHome } from '@/components/PicoIcon';
import { useToast } from '@/hooks/use-toast';
import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { CheckCheckIcon, FacebookIcon, GlobeIcon, MailIcon, PhoneIcon, YoutubeIcon } from 'lucide-react';
import { ReactNode } from 'react';

const Footer = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  return (
    <>
      {children}
      <footer className="relative bg-gradient-to-b from-darkbg to-picoLightBlue w-full flex flex-col md:flex-row justify-around md:justify-between h-fit pb-8 pt-8 md:px-52 items-center">
        <div className="h-full w-full md:w-[54rem] flex absolute left-0">
          <img
            src={'/images/footer-image-compressed.webp'}
            alt="Investimentos"
            className="h-full z-0 mask-gradient rounded-3xl"
          />
        </div>
        <div className="flex flex-col z-20">
          <div className="md:size-32 w-80 md:w-96 flex items-center gap-5">
            <PicoIconExtendedPulseHome />
            <div>
              <h2
                className="text-3xl md:text-[2.5rem] font-calya"
                style={{ lineHeight: '2.5rem' }}
              >
                Pico
              </h2>
              <h2
                className="text-3xl md:text-[2.5rem] font-calya"
                style={{ lineHeight: '2.5rem' }}
              >
                Investimentos
              </h2>
            </div>
          </div>
          <div className='flex gap-5 justify-around mb-5 md:mb-0 font-montserrat'>
            <a className='hover:text-picoLightGreen cursor-pointer' href='/politica-de-privacidade'>Política de privacidade</a>
            <a className='hover:text-picoLightGreen cursor-pointer' href='/termo-de-uso'>Termo de uso</a>
          </div>
        </div>
        <div className="flex flex-col font-montserrat font-light z-20">
          <h2>Rua Afonso Braz, 473, 9.º andar, {window.innerWidth < 765 && <br />} Vila Nova Conceição</h2>
          <h2>CEP 04511-011 l São Paulo, SP, Brasil</h2>
          <br />
          <div className="flex gap-3">
            <PhoneIcon className="fill-white" />
            <h2
              onClick={() => {
                navigator.clipboard.writeText('+55 (11) 2500-6905');
                toast({
                  description: (
                    <div className="flex gap-3">
                      <h2 className="font-montserrat">Telefone copiado!</h2>
                      <CheckCheckIcon className="stroke-constructive" />
                    </div>
                  ),
                });
              }}
              className="cursor-pointer hover:underline"
            >
              +55 (11) 2500-6905
            </h2>
          </div>
          <div className="flex gap-3">
            <GlobeIcon />
            <a
              href="https://www.picoinvestimentos.com"
              target="_blank"
              className="font-montserrat hover:underline cursor-pointer"
            >
              www.picoinvestimentos.com
            </a>
          </div>
          <div className="flex gap-3">
            <MailIcon />
            <a
              href="mailto:contato@picoinvestimentos.com"
              target="_blank"
              className="font-montserrat hover:underline cursor-pointer"
            >
              contato@picoinvestimentos.com
            </a>
          </div>
          <br />
          <div className="flex gap-5 justify-center md:justify-start">
            <InstagramLogoIcon className="size-8 md:size-9 hover:bg-slate-500 rounded-sm cursor-pointer" onClick={() => window.open('https://www.instagram.com/picoinvestimentos/', '_blank')} />
            <FacebookIcon className="size-8 md:size-9 hover:bg-slate-500 rounded-sm cursor-pointer" onClick={() => window.open('https://www.facebook.com/profile.php?id=61569535462654', '_blank')} />
            <LinkedInLogoIcon className="size-8 md:size-9 hover:bg-slate-500 rounded-sm cursor-pointer" onClick={() => window.open('https://www.linkedin.com/company/pico-investimentos/', '_blank')} />
            <YoutubeIcon className="size-8 md:size-9 hover:bg-slate-500 rounded-sm cursor-pointer" onClick={() => window.open('https://www.youtube.com/@picoinvestimentos', '_blank')} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
