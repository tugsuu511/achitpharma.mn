export type Locale = "mn" | "en";

const translations = {
  mn: {
    nav: {
      home: "Нүүр",
      about: "Бидний тухай",
      products: "Бүтээгдэхүүн",
      education: "Эрүүл мэндийн мэдээлэл",
      partners: "Хамтрагч",
      contact: "Холбоо барих",
    },
    header: {
      order: "Захиалах",
      companyName: "Achit Pharma",
    },
    hero: {
      headline: "Хүүхдийн эрүүл мэндийг дэмжих найдвартай бүтээгдэхүүн",
      subheadline: "Ачит Алтан Ундарга ХХК-ийн хүүхдэд зориулсан OTC бүтээгдэхүүн",
      ctaPrimary: "Бүтээгдэхүүн үзэх",
      ctaSecondary: "Холбоо барих",
    },
    trust: {
      delivery: {
        title: "Өдөртөө хүргэлт",
        description: "Papa Logistics-той нэгдсэн, өдөртөө хүргэлт боломжтой",
      },
      formula: {
        title: "Хүүхдэд зориулсан найрлага",
        description: "Хүүхдийн эрүүл мэндэд ээлтэй, найдвартай найрлага",
      },
      quality: {
        title: "Чанарын шалгуур",
        description: "Олон улсын стандартын дагуу шалгагдсан",
      },
      guidance: {
        title: "Зөв хэрэглээний зөвлөгөө",
        description: "Мэргэжилтнүүдийн зөвлөгөө, хэрэглээний заавар",
      },
    },
    products: {
      title: "Онцлох бүтээгдэхүүн",
      advaIron: {
        name: "Adva-Iron",
        description: "Төмрийн дутлыг сэргээх, хүүхдийн эрүүл мэндэд дэмжлэг үзүүлэх",
        badge: "Төмөр",
      },
      advaBiotics: {
        name: "Adva-Biotics (Zinc)",
        description: "Ашигтай бактери, цайртай хослуулсан найрлага",
        badge: "Пробиотик + Цайр",
      },
      aclavcare: {
        name: "Aclavcare",
        description: "Хүүхдийн эрүүл мэндэд туслах бүтээгдэхүүн",
        badge: "Эрүүл мэнд",
      },
      mozincare: {
        name: "Mozincare",
        description: "Хүүхдийн эрүүл мэндийг дэмжих тусгай найрлага",
        badge: "Эрүүл мэнд",
      },
      learnMore: "Дэлгэрэнгүй",
    },
    howItWorks: {
      title: "Хэрхэн ажилладаг",
      step1: {
        title: "Бүтээгдэхүүн сонгох",
        description: "Хүүхдийн хэрэгцээнд тохирсон бүтээгдэхүүнийг сонгоно",
      },
      step2: {
        title: "Захиалах",
        description: "Хялбар захиалгын системээр захиална",
      },
      step3: {
        title: "Өдөртөө хүргэлт",
        description: "Papa Logistics-оор өдөртөө хүргэлт авна",
      },
    },
    education: {
      title: "Эрүүл мэндийн мэдээлэл",
      article1: "Хүүхдийн хооллолт ба эрүүл мэнд",
      article2: "Төмрийн дутал ба түүний эмчилгээ",
      article3: "Пробиотикийн ашиг тус",
      seeAll: "Бүгдийг үзэх",
    },
    testimonials: {
      title: "Хэрэглэгчдийн санал бодол",
      testimonial1: {
        quote: "Манай хүүхэд Adva-Iron ууж эхлээд идэвх сайжирсан. Ихээхэн дэмжлэг болсон.",
        author: "Б. Энхтуяа",
      },
      testimonial2: {
        quote: "Papa Logistics-ын хүргэлт маш хурдан. Захиалга өгсний дараа шөнийн дотор хүргэгдлээ.",
        author: "Ц. Гэрэлмаа",
      },
      testimonial3: {
        quote: "Бүтээгдэхүүний чанар сайн, хүүхэддээ итгэлтэйгээр өгч байна.",
        author: "С. Баярмаа",
      },
    },
    faq: {
      title: "Түгээмэл асуултууд",
      q1: "Хүргэлт хэр удаан үргэлжилдэг вэ?",
      a1: "Papa Logistics-оор захиалга өгсний дараа өдөртөө хүргэлт боломжтой. Хот доторх бүх бүсэд хүргэлт үйлчилгээ үзүүлдэг.",
      q2: "Бүтээгдэхүүнийг хэрхэн хадгалах вэ?",
      a2: "Бүх бүтээгдэхүүнийг сайтын зааврын дагуу хэвийн өрөөний температурт, хэт халуун, хүйтэнд орохгүй газар хадгална. Хүүхдийн хүрээллэхгүй газар байршуулна.",
      q3: "Хэдэн настай хүүхэд ашиглаж болох вэ?",
      a3: "Бүтээгдэхүүн бүр өөрийн гэсэн насны зөвлөмжтэй. Бүтээгдэхүүний дэлгэрэнгүй тайлбар болон эмчийн зөвлөгөөг уншаад тохирох бүтээгдэхүүнийг сонгоно уу.",
      q4: "Хэрхэн хэрэглэх вэ?",
      a4: "Бүтээгдэхүүн бүрийн сав дээр зааварчилгаа байна. Эмчийн зөвлөгөө эсвэл зааварчилгааг уншаад зөв хэрэглэнэ үү.",
      q5: "Хаанаас худалдан авах вэ?",
      a5: "Манай вэбсайтаас захиалга өгч, Papa Logistics-оор хүргүүлэх боломжтой. Мөн ойролцоох эмийн сангуудад байж болно.",
    },
    cta: {
      title: "Хүүхдийн эрүүл мэндийг дэмжихэд бидэнтэй нэгдээрэй",
      button: "Холбоо барих",
    },
    footer: {
      mission: "Хүүхдийн эрүүл мэндэд найдвартай, чанартай бүтээгдэхүүн үйлдвэрлэх нь бидний эрхэм зорилго.",
      company: "Ачит Алтан Ундарга ХХК",
      workingHours: "Ажлын цаг: Даваа - Баасан, 08:30 - 17:30",
      phone: "Утас",
      email: "Имэйл",
      address: "Хаяг",
      quickLinks: "Холбоос",
      contact: "Холбоо барих",
      privacy: "Нууцлалын бодлого",
      terms: "Үйлчилгээний нөхцөл",
      copyright: "© 2025 Ачит Алтан Ундарга ХХК. Бүх эрх хуулиар хамгаалагдсан.",
      disclaimer: "Энэ сайт нь мэдээллийн зорилготой. Эмчилгээний зөвлөгөөг мэргэжлийн эмчээс аваарай.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      education: "Health Education",
      partners: "Partners",
      contact: "Contact",
    },
    header: {
      order: "Order",
      companyName: "Achit Pharma",
    },
    hero: {
      headline: "Trusted Products for Children's Health",
      subheadline: "Pediatric OTC products from Achit Pharma LLC",
      ctaPrimary: "View Products",
      ctaSecondary: "Contact",
    },
    trust: {
      delivery: {
        title: "Same-Day Delivery",
        description: "Partnered with Papa Logistics for same-day delivery service",
      },
      formula: {
        title: "Child-Friendly Formula",
        description: "Safe and reliable formulas designed for children's health",
      },
      quality: {
        title: "Quality Standards",
        description: "Certified according to international standards",
      },
      guidance: {
        title: "Usage Guidance",
        description: "Professional advice and usage instructions",
      },
    },
    products: {
      title: "Featured Products",
      advaIron: {
        name: "Adva-Iron",
        description: "Supports iron deficiency recovery and children's health",
        badge: "Iron",
      },
      advaBiotics: {
        name: "Adva-Biotics (Zinc)",
        description: "Beneficial bacteria combined with zinc formula",
        badge: "Probiotic + Zinc",
      },
      aclavcare: {
        name: "Aclavcare",
        description: "Product supporting children's health",
        badge: "Health",
      },
      mozincare: {
        name: "Mozincare",
        description: "Special formula for children's health support",
        badge: "Health",
      },
      learnMore: "Learn More",
    },
    howItWorks: {
      title: "How It Works",
      step1: {
        title: "Choose Product",
        description: "Select the product that suits your child's needs",
      },
      step2: {
        title: "Place Order",
        description: "Order easily through our simple ordering system",
      },
      step3: {
        title: "Same-Day Delivery",
        description: "Receive your order the same day via Papa Logistics",
      },
    },
    education: {
      title: "Health Education",
      article1: "Children's Nutrition and Health",
      article2: "Iron Deficiency and Treatment",
      article3: "Benefits of Probiotics",
      seeAll: "See All",
    },
    testimonials: {
      title: "Customer Reviews",
      testimonial1: {
        quote: "Since my child started taking Adva-Iron, they've become more active. It's been very helpful.",
        author: "B. Enkhtuya",
      },
      testimonial2: {
        quote: "Papa Logistics delivery is very fast. We received our order within the same day.",
        author: "Ts. Gerelmaa",
      },
      testimonial3: {
        quote: "Product quality is excellent, we trust it for our children.",
        author: "S. Bayarmaa",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "How long does delivery take?",
      a1: "With Papa Logistics, same-day delivery is available after placing an order. Delivery service covers all areas within the city.",
      q2: "How to store the products?",
      a2: "All products should be stored according to package instructions at normal room temperature, away from extreme heat or cold. Keep out of reach of children.",
      q3: "What age can children use these products?",
      a3: "Each product has its own age recommendations. Please read the product details and consult with a doctor to choose the appropriate product.",
      q4: "How to use?",
      a4: "Each product has instructions on its packaging. Please read the doctor's advice or instructions before use.",
      q5: "Where can I purchase?",
      a5: "You can order from our website and have it delivered via Papa Logistics. Products may also be available at nearby pharmacies.",
    },
    cta: {
      title: "Join Us in Supporting Children's Health",
      button: "Contact Us",
    },
    footer: {
      mission: "Our mission is to produce reliable, quality products for children's health.",
      company: "Achit Pharma LLC",
      workingHours: "Working Hours: Monday - Friday, 08:30 - 17:30",
      phone: "Phone",
      email: "Email",
      address: "Address",
      quickLinks: "Quick Links",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      copyright: "© 2025 Achit Pharma LLC. All rights reserved.",
      disclaimer: "This website is for informational purposes only. Please consult a professional doctor for medical advice.",
    },
  },
} as const;

const STORAGE_KEY = "achitpharma-locale";

export function getLocale(): Locale {
  if (typeof window === "undefined") return "mn";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "mn" || stored === "en") return stored;
  return "mn";
}

export function setLocale(locale: Locale) {
  if (typeof window === "undefined") return;

  const prev = getLocale();
  if (prev === locale) return;

  localStorage.setItem(STORAGE_KEY, locale);
  window.dispatchEvent(new Event("localechange"));
}


function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function t(key: string, locale: Locale = "mn"): string {
  const keys = key.split(".");
  let value: unknown = translations[locale];

  for (const k of keys) {
    if (isRecord(value) && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }

  return typeof value === "string" ? value : key;
}
export type TranslationKey = keyof typeof translations.mn;
