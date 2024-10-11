import Header from '@/components/Header';
import HomeLogo from '@/components/HomeLogo';
import { useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import InputMask, { Props } from 'react-input-mask';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
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

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import clsx from 'clsx';

const formSchema = z.object({
  name: z
    .string({
      required_error: 'O nome é obrigatório.',
    })
    .min(1, {
      message: 'O nome é obrigatório.',
    }),
  lastname: z.string({
    required_error: 'O sobrenome é obrigatório.',
  }).min(1, {
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
  const [logo, animateLogo] = useAnimate();
  const [isFetchingForm, setIsFetchingForm] = useState(false);

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

  const fetchFake = async (data: z.infer<typeof formSchema>) => {
    setIsFetchingForm(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setIsFetchingForm(false);
      toast({
        title: 'Reunião agendada com sucesso!',
        description: 'Em breve entraremos em contato.',
        duration: 5000,
      });
      form.reset();
      form.resetField('investiment');
    }
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    fetchFake(values);
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
        <HomeLogo className="mt-20 md:mt-10 text-xl w-[250px] md:text-3xl md:w-[360px] h-fit" />
      </div>
      <div className="w-screen min-h-screen flex flex-col bg-darkbg overflow-x-hidden padding-pages overflow-hidden items-center">
        <h2 className="font-calya text-3xl text-center">Agende uma reunião:</h2>
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
                    <FormControl className="font-montserrat h-12 text-darkbg font-semibold bg-white">
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
                    <FormControl className="font-montserrat h-12 text-darkbg font-semibold bg-white">
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
                    <FormControl className="font-montserrat h-12 text-darkbg font-semibold bg-white">
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
                    <FormControl className="font-montserrat h-12 text-darkbg font-semibold bg-white">
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
                      <FormControl className="font-montserrat h-12 text-darkbg font-semibold bg-white">
                        <SelectTrigger>
                          <SelectValue
                            className={clsx({
                              'text-gray-400 opacity-40': isFetchingForm,
                            })}
                            placeholder="Quanto você deseja investir? *"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="font-montserrat font-semibold">
                        <SelectItem value="1M">
                          Entre R$100.000 e R$1.000.000
                        </SelectItem>
                        <SelectItem value="3M">
                          Entre R$1.000.000 e R$3.000.000
                        </SelectItem>
                        <SelectItem value="10M">
                          Entre R$3.000.000 e R$10.000.000
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
