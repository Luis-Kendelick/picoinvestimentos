import Header from '@/components/Header';
import HomeLogo from '@/components/HomeLogo';
import { useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import InputMask from 'react-input-mask';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import clsx from 'clsx';
import emailjs from '@emailjs/browser';
import { CheckCircleIcon, XIcon } from 'lucide-react';

// const apiKey = process.env.EMAILJS_PRIVATE_KEY;

const formSchema = z.object({
  name: z
    .string({
      required_error: 'O nome é obrigatório.',
    })
    .min(1, {
      message: 'O nome é obrigatório.',
    }),
  lastname: z
    .string({
      required_error: 'O sobrenome é obrigatório.',
    })
    .min(1, {
      message: 'O sobrenome é obrigatório.',
    }),
  phone: z.string().min(13, {
    message: 'O telefone deve ser no formato (xx) xxxx-xxxx ou xxxxx-xxxx.',
  }),
  email: z
    .string({
      required_error: 'O e-mail é obrigatório.',
    })
    .email({
      message: 'O e-mail deve ser no formato email@xx.xx',
    }),
  investiment: z
    .string({
      message: 'O valor do investimento desejado é obrigatório.',
    })
    .min(1, {
      message: 'O valor do investimento desejado é obrigatório.',
    }),
  comments: z.string().optional(),
});

const BeAClient = () => {
  const [titleBox, animateTitleBox] = useAnimate();
  const [logo, animateLogo] = useAnimate();
  const [isFetchingForm, setIsFetchingForm] = useState(false);
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastname: '',
      phone: '',
      email: '',
      investiment: '',
      comments: '',
    },
  });

  const sendEmail = async (data: z.infer<typeof formSchema>) => {
    setIsFetchingForm(true);
    try {
      await emailjs.send(
        'service_t4f4b9b',
        'template_zwx5ok1',
        {
          name: data.name,
          lastname: data.lastname,
          phone: data.phone,
          email: data.email,
          investiment: data.investiment,
          comments: data.comments,
        },
        'YLhcVyurQPPFALtCe',
      );
    } catch (error) {
      toast({
        className: 'bg-red-200 font-montserrat',
        description: (
          <div className="flex items-center gap-2">
            <XIcon className="stroke-destructive size-6" />
            <div>
              <h2 className="font-semibold">Erro ao enviar agendamento</h2>
              <h2 className="font-light">
                Tente novamente mais tarde ou entre em contato no e-mail
                <strong> contato@picoinvestimentos.com</strong>
              </h2>
            </div>
          </div>
        ),
        duration: 8000,
      });
    } finally {
      setIsFetchingForm(false);
      toast({
        className: 'font-montserrat',
        variant: 'default',
        description: (
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="stroke-constructive" />
            <div>
              <h2 className="font-semibold">Reunião agendada com sucesso!</h2>
              <h2 className="font-light">Em breve entraremos em contato.</h2>
            </div>
          </div>
        ),
        duration: 5000,
      });
      form.reset();
      form.resetField('investiment');
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendEmail(values);
  }

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
        <HomeLogo
          onClick={() => window.open('/', '_self')}
          className="mt-20 md:mt-10 text-xl w-[250px] md:text-3xl md:w-[360px] h-fit"
        />
        <div className="h-fit z-20 mt-8 md:mt-14">
          <motion.h1
            ref={titleBox}
            initial={{ x: -100, opacity: 0 }}
            className="text-white font-calya z-10 text-3xl md:text-5xl"
          >
            Seja cliente
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
      <div className="w-screen  flex flex-col bg-darkbg overflow-x-hidden padding-pages overflow-hidden items-center pb-12">
        <h2 className="font-calya text-2xl md:text-4xl text-center">
          Agende uma reunião:
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex justify-center gap-5 flex-col mt-5"
            id="formzinho"
          >
            <div className="w-full flex flex-wrap gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="min-w-52 flex-1">
                    <FormControl
                      className={clsx(
                        'font-montserrat h-12 text-darkbg font-semibold bg-white',
                        {
                          'border-red-500': form.formState.errors.name,
                        },
                      )}
                    >
                      <Input
                        disabled={isFetchingForm}
                        placeholder="Nome *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="min-w-52 flex-1">
                    <FormControl
                      className={clsx(
                        'font-montserrat h-12 text-darkbg font-semibold bg-white',
                        {
                          'border-red-500': form.formState.errors.lastname,
                        },
                      )}
                    >
                      <Input
                        disabled={isFetchingForm}
                        placeholder="Sobrenome *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex flex-wrap gap-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="min-w-52 flex-1">
                    <FormControl
                      className={clsx(
                        'font-montserrat h-12 text-darkbg font-semibold bg-white',
                        {
                          'border-red-500': form.formState.errors.email,
                        },
                      )}
                    >
                      <Input
                        disabled={isFetchingForm}
                        placeholder="E-mail *"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="min-w-52 flex-1">
                    <FormControl
                      className={clsx(
                        'font-montserrat h-12 text-darkbg font-semibold bg-white',
                        {
                          'border-red-500': form.formState.errors.phone,
                        },
                      )}
                    >
                      <InputMask
                        disabled={isFetchingForm}
                        mask="(99) 99999-9999"
                        maskChar={null}
                        {...field}
                      >
                        <Input placeholder="Telefone *" type="tel" />
                      </InputMask>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex flex-wrap gap-5">
              <FormField
                control={form.control}
                name="investiment"
                render={({ field }) => (
                  <FormItem className="min-w-52 flex-1">
                    <Select onValueChange={field.onChange}>
                      <FormControl
                        className={clsx(
                          'font-montserrat h-12 text-darkbg font-semibold bg-white',
                          {
                            'border-red-500': form.formState.errors.investiment,
                            'opacity-55': isFetchingForm,
                          },
                        )}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Quanto você deseja investir? *" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="font-montserrat font-semibold">
                        <SelectItem value="Entre R$100.000 e R$1.000.000">
                          Entre R$100.000 e R$1.000.000
                        </SelectItem>
                        <SelectItem value="Entre R$1.000.000 e R$3.000.000">
                          Entre R$1.000.000 e R$3.000.000
                        </SelectItem>
                        <SelectItem value="Entre R$3.000.000 e R$10.000.000">
                          Entre R$3.000.000 e R$10.000.000
                        </SelectItem>
                        <SelectItem value="Acima de R$10.000.000">
                          Acima de R$10.000.000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem className="min-w-52 flex-1">
                    <FormControl className="font-montserrat h-24 text-darkbg font-semibold bg-white">
                      <Textarea
                        disabled={isFetchingForm}
                        placeholder="Comentários adicionais (Opcional)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
          <Button
            disabled={isFetchingForm}
            form="formzinho"
            type="submit"
            className="bg-picoLightBlue text-xl mt-10 hover:bg-picoLightBlue hover:opacity-60 w-full md:w-fit flex justify-center items-center"
            size={'lg'}
          >
            {isFetchingForm ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V4"
                ></path>

                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V4"
                ></path>
              </svg>
            ) : (
              'Enviar e agendar reunião'
            )}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default BeAClient;
