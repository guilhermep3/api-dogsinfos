type size = 'Pequeno' | 'Médio' | 'Grande';

type dogData = {
  id: number;
  breed: string;
  image: string;
  size: size;
  countryOrigin: string;
  colors: string[];
  lifeExpectancy: string;
  adultWeightKg: string;
  classification: string[];
  description: string;
};

const data: dogData[] = [
  {
    id: 1,
    breed: "Labrador Retriever",
    image: "labrador_retriever.jpg",
    size: "Médio",
    countryOrigin: "Canadá",
    colors: ["Preto", "Marrom", "Caramelo"],
    lifeExpectancy: "10 a 12 anos",
    adultWeightKg: "25 a 36 kg",
    classification: ["Companhia", "Assistência"],
    description: "O Labrador é dócil, brincalhão e inteligente, ideal para famílias ativas. Vive bem em casas com quintal e adora água e brincadeiras ao ar livre."
  },
  {
    id: 2,
    breed: "Golden Retriever",
    image: "golden_retriever.jpg",
    size: "Médio",
    countryOrigin: "Escócia",
    colors: ["Dourado"],
    lifeExpectancy: "10 a 12 anos",
    adultWeightKg: "25 a 34 kg",
    classification: ["Companhia", "Assistência"],
    description: "O Golden é afetuoso, calmo e excelente com crianças. Se adapta a espaços maiores e precisa de exercícios diários para manter a saúde física e mental."
  },
  {
    id: 3,
    breed: "Poodle",
    image: "poodle.jpg",
    size: "Pequeno",
    countryOrigin: "Alemanha/França",
    colors: ["Branco", "Preto", "Marrom", "Cinza", "Dourado", "Laranja"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "6 a 12 kg",
    classification: ["Companhia", "Competições de agilidade"],
    description: "O Poodle é inteligente, hipoalergênico e aprende comandos com facilidade. Ideal para apartamentos, desde que tenha estímulos mentais e caminhadas regulares."
  },
  {
    id: 4,
    breed: "Bulldog Francês",
    image: "bulldog_frances.jpg",
    size: "Pequeno",
    countryOrigin: "França",
    colors: ["Tigrado", "Preto", "Branco", "Cinza"],
    lifeExpectancy: "10 a 12 anos",
    adultWeightKg: "8 a 14 kg",
    classification: ["Companhia"],
    description: "Afetuoso e tranquilo, o Bulldog Francês adora companhia humana. Vive muito bem em apartamentos, mas exige atenção por causa de problemas respiratórios."
  },
  {
    id: 5,
    breed: "Bulldog Inglês",
    image: "bulldog_ingles.jpg",
    size: "Médio",
    countryOrigin: "Reino Unido",
    colors: ["Branco", "Caramelo", "Tigrado", "Vermelho"],
    lifeExpectancy: "8 a 10 anos",
    adultWeightKg: "18 a 25 kg",
    classification: ["Companhia"],
    description: "O Bulldog Inglês é calmo e companheiro, ideal para lares tranquilos. Adapta-se bem a apartamentos, mas requer cuidados com calor e exercícios leves."
  },
  {
    id: 6,
    breed: "Pastor Alemão",
    image: "pastor_alemao.jpg",
    size: "Grande",
    countryOrigin: "Alemanha",
    colors: ["Preto e marrom", "Cinza", "Preto"],
    lifeExpectancy: "9 a 13 anos",
    adultWeightKg: "22 a 40 kg",
    classification: ["Guarda", "Resgate", "Companhia"],
    description: "Leal, protetor e inteligente, o Pastor Alemão é excelente para guarda e resgate. Precisa de espaço e atividades, sendo mais adequado a casas com quintal ou áreas abertas."
  },
  {
    id: 7,
    breed: "Beagle",
    image: "beagle.jpg",
    size: "Médio",
    countryOrigin: "Reino Unido",
    colors: ["Marrom", "Branco", "Preto", "Tricolor"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "9 a 14 kg",
    classification: ["Caça", "Companhia"],
    description: "O Beagle é curioso, sociável e enérgico. Se adapta a casas e apartamentos com rotina ativa, mas requer atenção por seu faro aguçado e tendência a fugir."
  },
  {
    id: 8,
    breed: "Rottweiler",
    image: "rottweiler.jpg",
    size: "Grande",
    countryOrigin: "Alemanha",
    colors: ["Preto e marrom"],
    lifeExpectancy: "8 a 10 anos",
    adultWeightKg: "35 a 60 kg",
    classification: ["Guarda", "Companhia"],
    description: "O Rottweiler é forte, leal e protetor. Ideal para casas com espaço e donos experientes; precisa de socialização e adestramento desde cedo."
  },
  {
    id: 9,
    breed: "Yorkshire Terrier",
    image: "yorkshire_terrier.jpg",
    size: "Pequeno",
    countryOrigin: "Reino Unido",
    colors: ["Cinza", "Dourado", "Preto"],
    lifeExpectancy: "13 a 16 anos",
    adultWeightKg: "2 a 3 kg",
    classification: ["Companhia"],
    description: "Pequeno, valente e elegante, o Yorkshire é ótimo para apartamentos. Precisa de escovação frequente e adora estar no colo do tutor."
  },
  {
    id: 10,
    breed: "Shih Tzu",
    image: "shih_tzu.jpg",
    size: "Pequeno",
    countryOrigin: "China",
    colors: ["Branco", "Marrom", "Preto", "Dourado", "Cinza"],
    lifeExpectancy: "10 a 16 anos",
    adultWeightKg: "4 a 7 kg",
    classification: ["Companhia"],
    description: "O Shih Tzu é dócil, sociável e muito apegado à família. Ideal para apartamentos, exige cuidados com os pelos e olhos sensíveis."
  },
  {
    id: 11,
    breed: "Border Collie",
    image: "border_collie.jpg",
    size: "Médio",
    countryOrigin: "Reino Unido",
    colors: ["Preto e branco", "Merle", "Tricolor", "Marrom e branco"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "14 a 20 kg",
    classification: ["Assistência", "Companhia"],
    description: "Extremamente inteligente e ágil, o Border Collie é ideal para quem mora no campo ou tem espaço para atividades intensas. Não se adapta bem à vida sedentária."
  },
  {
    id: 12,
    breed: "Dachshund",
    image: "dachshund.jpg",
    size: "Pequeno",
    countryOrigin: "Alemanha",
    colors: ["Marrom", "Preto e marrom", "Vermelho", "Tigrado"],
    lifeExpectancy: "12 a 16 anos",
    adultWeightKg: "7 a 14 kg",
    classification: ["Caça", "Companhia"],
    description: "Destemido e divertido, o Dachshund adora cavar e seguir trilhas. Vive bem em apartamentos, mas precisa de cuidados com a coluna e caminhadas leves."
  },
  {
    id: 13,
    breed: "Boxer",
    image: "boxer.jpg",
    size: "Grande",
    countryOrigin: "Alemanha",
    colors: ["Caramelo", "Tigrado", "Branco"],
    lifeExpectancy: "10 a 12 anos",
    adultWeightKg: "25 a 32 kg",
    classification: ["Guarda", "Companhia"],
    description: "O Boxer é brincalhão, fiel e cheio de energia. Ideal para casas com quintal e tutores que gostam de atividades ao ar livre."
  },
  {
    id: 14,
    breed: "Doberman",
    image: "doberman.jpg",
    size: "Grande",
    countryOrigin: "Alemanha",
    colors: ["Preto e marrom", "Marrom", "Azul", "Isabela"],
    lifeExpectancy: "10 a 13 anos",
    adultWeightKg: "30 a 45 kg",
    classification: ["Guarda", "Companhia"],
    description: "Elegante, protetor e obediente, o Doberman é ótimo para guarda. Requer espaço, liderança firme e atenção constante."
  },
  {
    id: 15,
    breed: "Husky Siberiano",
    image: "husky_siberiano.jpg",
    size: "Grande",
    countryOrigin: "Rússia",
    colors: ["Cinza", "Preto e branco", "Vermelho", "Branco"],
    lifeExpectancy: "12 a 14 anos",
    adultWeightKg: "20 a 27 kg",
    classification: ["Companhia", "Competições de agilidade"],
    description: "Independente e energético, o Husky adora correr e é sensível ao calor. Prefere ambientes frios e espaços amplos, como casas com quintal."
  },
  {
    id: 16,
    breed: "Chihuahua",
    image: "chihuahua.jpg",
    size: "Pequeno",
    countryOrigin: "México",
    colors: ["Marrom", "Preto", "Branco", "Dourado", "Mesclado"],
    lifeExpectancy: "14 a 17 anos",
    adultWeightKg: "1,5 a 3 kg",
    classification: ["Companhia"],
    description: "Pequeno e alerta, o Chihuahua é ideal para apartamentos e tutores tranquilos. Gosta de colo, mas pode ser desconfiado com estranhos."
  },
  {
    id: 17,
    breed: "Pug",
    image: "pug.jpg",
    size: "Pequeno",
    countryOrigin: "China",
    colors: ["Caramelo", "Preto", "Cinza", "Abricot"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "6 a 9 kg",
    classification: ["Companhia"],
    description: "Afetuoso e divertido, o Pug é perfeito para apartamentos. Requer atenção com a respiração e não tolera muito calor ou exercícios intensos."
  },
  {
    id: 18,
    breed: "Vira-lata",
    image: "vira_lata.jpg",
    size: "Médio",
    countryOrigin: "Brasil",
    colors: ["Preto", "Caramelo", "Branco", "Mesclado"],
    lifeExpectancy: "12 a 16 anos",
    adultWeightKg: "10 a 25 kg",
    classification: ["Companhia", "Guarda"],
    description: "Versátil, resistente e amoroso, o Vira-lata se adapta bem a diferentes ambientes. Cada um tem uma personalidade única, ideal para quem busca um companheiro fiel."
  },
  {
    id: 19,
    breed: "Cocker Spaniel",
    image: "cocker_spaniel.jpg",
    size: "Médio",
    countryOrigin: "Reino Unido",
    colors: ["Dourado", "Preto", "Marrom", "Tricolor", "Azul ruão"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "12 a 15 kg",
    classification: ["Caça", "Companhia"],
    description: "Meigo e sociável, o Cocker é ótimo para crianças e vive bem em apartamentos ou casas. Precisa de escovação frequente e passeios diários."
  },
  {
    id: 20,
    breed: "Maltês",
    image: "maltes.jpg",
    size: "Pequeno",
    countryOrigin: "Itália",
    colors: ["Branco"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "3 a 4 kg",
    classification: ["Companhia"],
    description: "Delicado e muito apegado, o Maltês se adapta bem a apartamentos. Seus pelos exigem escovação constante, e ele adora colo e atenção."
  },
  {
    id: 21,
    breed: "Fila Brasileiro",
    image: "fila_brasileiro.jpg",
    size: "Grande",
    countryOrigin: "Brasil",
    colors: ["Caramelo", "Tigrado", "Preto"],
    lifeExpectancy: "9 a 11 anos",
    adultWeightKg: "40 a 60 kg",
    classification: ["Guarda", "Caça"],
    description: "Imponente e territorialista, o Fila exige espaço, adestramento e socialização. Ideal para grandes propriedades e tutores experientes."
  },
  {
    id: 22,
    breed: "Fox Paulistinha",
    image: "fox_paulistinha.jpg",
    size: "Médio",
    countryOrigin: "Brasil",
    colors: ["Tricolor"],
    lifeExpectancy: "13 a 16 anos",
    adultWeightKg: "6 a 10 kg",
    classification: ["Companhia", "Competições de agilidade"],
    description: "Ágil, leal e muito esperto, o Fox Paulistinha é ótimo para quem vive em casas ou apartamentos com rotina ativa. Ama brincar e aprender truques."
  },
  {
    id: 23,
    breed: "Spitz Alemão (Lulu da Pomerânia)",
    image: "spitz_alemao.jpg",
    size: "Pequeno",
    countryOrigin: "Alemanha",
    colors: ["Laranja", "Branco", "Preto", "Marrom", "Creme"],
    lifeExpectancy: "12 a 16 anos",
    adultWeightKg: "1,5 a 3,5 kg",
    classification: ["Companhia"],
    description: "Pequeno, animado e muito apegado ao tutor, o Spitz Alemão é ideal para apartamentos. Gosta de atenção e cuidados com os pelos são essenciais para manter sua beleza."
  },
  {
    id: 24,
    breed: "Pitbull Terrier Americano",
    image: "pitbull.jpg",
    size: "Médio",
    countryOrigin: "Estados Unidos",
    colors: ["Preto", "Branco", "Caramelo", "Tigrado", "Cinza"],
    lifeExpectancy: "12 a 14 anos",
    adultWeightKg: "14 a 30 kg",
    classification: ["Companhia", "Guarda"],
    description: "Forte, leal e inteligente, o Pitbull é um excelente companheiro para tutores firmes e ativos. Requer socialização desde cedo e vive melhor em casas com espaço para se exercitar."
  },
  {
    id: 25,
    breed: "Dachshund",
    image: "dachshund.jpg",
    size: "Pequeno",
    countryOrigin: "Alemanha",
    colors: ["Marrom", "Preto e marrom", "Vermelho", "Tigrado"],
    lifeExpectancy: "12 a 16 anos",
    adultWeightKg: "7 a 14 kg",
    classification: ["Caça", "Companhia"],
    description: "Destemido e carismático, o Dachshund é ótimo para apartamentos e lares com rotina moderada. Gosta de cavar e seguir trilhas, e precisa de atenção com a coluna devido ao corpo alongado."
  },
  {
    id: 26,
    breed: "Lhasa Apso",
    image: "lhasa_apso.jpg",
    size: "Pequeno",
    countryOrigin: "Tibete",
    colors: ["Dourado", "Preto", "Branco", "Mesclado", "Cinza"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "5 a 8 kg",
    classification: ["Companhia"],
    description: "Independente, calmo e protetor, o Lhasa Apso vive muito bem em apartamentos. Exige escovação frequente e costuma ser reservado com estranhos."
  },
  {
    id: 27,
    breed: "Akita Inu",
    image: "akita_inu.jpg",
    size: "Grande",
    countryOrigin: "Japão",
    colors: ["Vermelho", "Branco", "Tigrado", "Gergelim"],
    lifeExpectancy: "10 a 13 anos",
    adultWeightKg: "30 a 50 kg",
    classification: ["Guarda", "Companhia"],
    description: "Silencioso, fiel e imponente, o Akita Inu é indicado para tutores experientes. Vive melhor em locais espaçosos e com socialização adequada desde filhote."
  },
  {
    id: 28,
    breed: "Cão de Crista Chinês",
    image: "cao_crista_chines.jpg",
    size: "Pequeno",
    countryOrigin: "China",
    colors: ["Rosa", "Cinza", "Preto", "Branco", "Manchado"],
    lifeExpectancy: "13 a 15 anos",
    adultWeightKg: "3 a 6 kg",
    classification: ["Companhia"],
    description: "Exótico, brincalhão e afetuoso, o Cão de Crista Chinês é ideal para apartamentos e lares tranquilos. Exige cuidados com a pele, principalmente se for da variedade sem pelos."
  },
  {
    id: 29,
    breed: "Weimaraner",
    image: "weimaraner.jpg",
    size: "Grande",
    countryOrigin: "Alemanha",
    colors: ["Cinza-prateado"],
    lifeExpectancy: "10 a 13 anos",
    adultWeightKg: "25 a 40 kg",
    classification: ["Caça", "Companhia"],
    description: "Elegante, atlético e inteligente, o Weimaraner precisa de muito exercício e estímulo mental. Vive melhor em casas com quintal e com tutores ativos."
  },
  {
    id: 30,
    breed: "São Bernardo",
    image: 'sao_bernardo.jpg',
    size: 'Grande',
    countryOrigin: 'Suíça',
    colors: ['Branco e marrom', 'Branco e vermelho', 'Tigrado'],
    lifeExpectancy: '8 a 10 anos',
    adultWeightKg: '55 a 80 kg',
    classification: ['Guarda', 'Companhia', 'Resgate'],
    description: "Gentil, paciente e protetor, o São Bernardo é ideal para casas espaçosas ou zonas rurais. Apesar do tamanho imponente, é excelente com crianças, mas precisa de espaço, escovação regular e atenção ao calor."
  },
];

export const getDogs = {
  getAll: (): dogData[] => {
    return data;
  },
  getFromBreed: (breed: string): dogData[] => {
    return data.filter(i => i.breed.toLowerCase().indexOf(breed.toLowerCase()) > -1)
  },
  getFromSize: (size: size): dogData[] => {
    return data.filter(i => i.size === size);
  },
  getFromColors: (colors: string): dogData[] => {
    return data.filter(i => i.colors.includes(colors));
  },
  getFromCountry: (country: string): dogData[] => {
    return data.filter(i => i.countryOrigin === country)
  },
  getFromId: (id: number): dogData => {
    return data.find(i => i.id === id)!;
  }
}