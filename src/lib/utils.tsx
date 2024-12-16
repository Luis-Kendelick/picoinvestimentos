import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export enum EMenuItems {
  HOME = '/',
  PROFILE = '/perfil',
  INVESTOR = '/investidor',
  USER = '/usuario',
  CONTRACTS = '/contratos-e-documentos',
  SIGN = '/assinar',
  SIGNED = '/assinados',
  TERMS = '/termos',
  SERVICES = '/servicos',
  WALLET = '/carteira',
  B3 = '/relatorio-b3',
  WEALTH = '/wealth',
  FINANCIAL = '/financeiro',
  RECOMENDATIONS = '/recomendacoes',
}

// export const menuItemsConfig: IMenuItems[] = [
//   {
//     title: 'Página inicial',
//     menuIcon: <HouseIcon className="h-5 w-5" />,
//     titleLink: EMenuItems.HOME,
//   },
//   {
//     title: 'Dados do perfil',
//     menuIcon: <CircleUserIcon className="h-5 w-5" />,
//     titleLink: EMenuItems.PROFILE,
//     cards: [
//       {
//         title: 'Dados da conta',
//         itemIcon: <CircleUserIcon className="h-5 w-5" />,
//         items: [
//           {
//             text: 'Perfil de investidor',
//             url: EMenuItems.INVESTOR,
//           },
//           {
//             text: 'Dados de usuário',
//             url: EMenuItems.USER,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: 'Contratos e documentos',
//     menuIcon: <FileArchiveIcon className="h-5 w-5" />,
//     titleLink: EMenuItems.CONTRACTS,
//     cards: [
//       {
//         title: 'Documentos',
//         itemIcon: <CircleUserIcon className="h-5 w-5" />,
//         items: [
//           {
//             text: 'Para assinar',
//             url: EMenuItems.SIGN,
//           },
//           {
//             text: 'Assinados',
//             url: EMenuItems.SIGNED,
//           },
//         ],
//       },
//       {
//         title: 'Contratos',
//         itemIcon: <CircleUserIcon className="h-5 w-5" />,
//         items: [
//           {
//             text: 'Termos',
//             url: EMenuItems.TERMS,
//           },
//           {
//             text: 'Serviços',
//             url: EMenuItems.SERVICES,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: 'Minha carteira',
//     menuIcon: <Wallet2Icon className="h-5 w-5" />,
//     titleLink: EMenuItems.WALLET,
//   },
//   {
//     title: 'Relatório B³',
//     menuIcon: <B3Icon />,
//     titleLink: EMenuItems.B3,
//   },
//   {
//     title: 'Área de Wealth',
//     menuIcon: <HandCoinsIcon className="h-5 w-5" />,
//     titleLink: EMenuItems.WEALTH,
//   },
//   {
//     title: 'Financeiro',
//     menuIcon: <LandmarkIcon className="h-5 w-5" />,
//     titleLink: EMenuItems.FINANCIAL,
//   },
//   {
//     title: 'Recomendações',
//     menuIcon: <MessagesSquareIcon className="h-5 w-5" />,
//     titleLink: EMenuItems.RECOMENDATIONS,
//   },
// ];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const listProjectPDFs = () => {
  const pdfContext = import.meta.glob('/public/documents/*.pdf');
  return Object.keys(pdfContext).map(path => ({
    name: path.split('/').pop(),
    path: path.replace('/public/', '')
  }));
};

export const downloadPDF = async (filename: string) => {
  try {
    // Construir URL completo do PDF
    const pdfUrl = `/${filename}`;

    // Fazer fetch do arquivo
    const response = await fetch(pdfUrl);
    const blob = await response.blob();

    // Criar link de download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;

    // Disparar download
    document.body.appendChild(link);
    link.click();

    // Limpar após download
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error('Erro no download do PDF:', error);
  }
};