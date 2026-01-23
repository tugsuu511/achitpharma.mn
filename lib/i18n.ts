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
      // subheadline: "Ачит Алтан Ундарга ХХК-ийн хүүхдэд зориулсан OTC бүтээгдэхүүн",
      ctaPrimary_1: "Бүтээгдэхүүн үзэх",
      ctaPrimary_2: "Дэлгэрэнгүй",
      ctaPrimary_3: "Дэлгэрэнгүй",
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
        description:
          "Төмрийн дутлыг сэргээх, хүүхдийн эрүүл мэндэд дэмжлэг үзүүлэх",
        badge: "Төмрийн бэлдмэл",
      },
      advaBiotics: {
        name: "Adva-Biotics",
        description: "Ашигтай бактери, цайртай хослуулсан найрлага",
        badge: "Пробиотик + 10мг Цайр",
      },
      aclavcare: {
        name: "Aclavcare",
        description: "Хүүхдийн эрүүл мэндэд туслах бүтээгдэхүүн",
        badge: "Антибиотик",
      },
      mozincare: {
        name: "Mozincare",
        description: "Хүүхдийн эрүүл мэндийг дэмжих тусгай найрлага",
        badge: "Сироп",
      },
      learnMore: "Дэлгэрэнгүй",
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
        quote:
          "Манай хүүхэд Adva-Iron ууж эхлээд идэвх сайжирсан. Ихээхэн дэмжлэг болсон.",
        author: "Б. Энхтуяа",
      },
      testimonial2: {
        quote:
          "Papa Logistics-ын хүргэлт маш хурдан. Захиалга өгсний дараа шөнийн дотор хүргэгдлээ.",
        author: "Ц. Гэрэлмаа",
      },
      testimonial3: {
        quote: "Бүтээгдэхүүний чанар сайн, хүүхэддээ итгэлтэйгээр өгч байна.",
        author: "С. Баярмаа",
      },
    },
    faq: {
      title: "Түгээмэл асуултууд",
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
      title: "lorem ipsum",
      button: "Холбоо барих",
    },
    footer: {
      mission:
        "Хүүхдийн эрүүл мэндэд найдвартай, чанартай бүтээгдэхүүн үйлдвэрлэх нь бидний эрхэм зорилго.",
      company: "Ачит Алтан Ундарга ХХК",
      workingHours: "Ажлын цаг: Даваа - Баасан, 08:30 - 17:30",
      phone: "Утас",
      email: "Имэйл",
      address: "Хаяг",
      quickLinks: "Холбоос",
      contact: "Холбоо барих",
      privacy: "Нууцлалын бодлого",
      terms: "Үйлчилгээний нөхцөл",
      copyright:
        "© 2025 Ачит Алтан Ундарга ХХК. Бүх эрх хуулиар хамгаалагдсан.",
      disclaimer:
        "Энэ сайт нь мэдээллийн зорилготой. Эмчилгээний зөвлөгөөг мэргэжлийн эмчээс аваарай.",
    },
    about: {
      hero: {
        title: "Бидний тухай",
        subtitle: "Хүүхдийн эрүүл мэндийг дэмжихэд зориулсан бидний аялал",
        cta: "Бүтээгдэхүүн үзэх",
      },
      story: {
        title: "Манай түүх",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sodales sem, a porttitor turpis. Etiam id egestas neque, a venenatis dui. Aliquam vestibulum semper augue, in maximus odio finibus nec. Sed eu justo eget libero interdum ullamcorper. Suspendisse condimentum imperdiet velit, sit amet rhoncus mi mollis vitae. Vivamus ullamcorper, nibh ac semper convallis, justo sem pharetra erat, in semper metus odio ac ex. Morbi feugiat suscipit sapien, vitae viverra mauris suscipit eget.",
      },
      mission: {
        title: "Эрхэм зорилго",
        values: {
          quality: {
            title: "Чанар",
            description:
              "Олон улсын стандартын дагуу шалгагдсан, найдвартай бүтээгдэхүүн",
          },
          care: {
            title: "Анхаарал",
            description: "Хүүхдийн эрүүл мэндэд анхаарал тавьж, хамгаалах",
          },
          innovation: {
            title: "Шинэчлэл",
            description: "Шинэ технологи, судалгааны үр дүнг ашиглах",
          },
          trust: {
            title: "Итгэл",
            description: "Хэрэглэгчдэд итгэлтэй, ил тод харилцаа",
          },
        },
      },
      timeline: {
        title: "Манай замнал",
        items: {
          founded: {
            year: "2023",
            title: "Байгуулагдсан",
            description: "Ачит Алтан Ундарга ХХК байгуулагдсан",
          },
          firstProduct: {
            year: "2024",
            title: "Эхний бүтээгдэхүүн",
            description: "Adva-Biotics бүтээгдэхүүн гаргасан",
          },
          expansion: {
            year: "2024",
            title: "Өргөтгөл",
            description: "Бүтээгдэхүүний цувралыг өргөжүүлсэн",
          },
          partnership: {
            year: "2024",
            title: "Хамтрал",
            description: "x хамтран ажиллах гэрээ байгуулсан",
          },
        },
      },
      team: {
        title: "Бидний баг",
        description: "Мэргэжлийн баг, туршлагатай мэргэжилтнүүд",
      },
      cta: {
        title: "Бидэнтэй нэгдээрэй",
        description:
          "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        button: "Холбоо барих",
      },
    },
    contact: {
      title: "Холбоо барих",
      subtitle: "Бидэнтэй холбогдох",
      info: {
        address: {
          title: "Хаяг",
          value: "Улаанбаатар хот, Монгол улс",
        },
        phone: {
          title: "Утас",
          value: "9192-9698 , 7707-9698",
        },
        email: {
          title: "Имэйл",
          value: "info@achitpharma.mn",
        },
        hours: {
          title: "Ажлын цаг",
          value: "Даваа - Баасан, 08:30 - 17:30",
        },
      },
      map: {
        title: "Байршил",
      },
    },
    educationPage: {
      hero: {
        title: "Эрүүл мэндийн мэдээлэл",
        subtitle: "Хүүхдийн эрүүл мэнд, хооллолт, эмчилгээний талаарх мэдээлэл",
      },
      tabs: {
        iron: "Төмөр",
        zinc: "Цайр",
        probiotics: "Пробиотик",
        immunity: "Дархлаа",
      },
      resources: {
        learnMore: "Дэлгэрэнгүй",
      },
      faq: {
        title: "Түгээмэл асуултууд",
      },
    },
    partners: {
      hero: {
        title: "Хамтрагч",
        subtitle: "Хамтран ажиллах боломж",
        cta: "Хамтрагч болох",
      },
      logos: {
        title: "Манай хамтрагчид",
      },
    },
    productsPage: {
      hero: {
        title: "Бүтээгдэхүн",
        subtitle: "Хүүхдэд зориулсан найдвартай бүтээгдэхүүн",
      },
      search: {
        placeholder: "Бүтээгдэхүүн хайх...",
        category: "Ангилал",
        ageRange: "Насны хүрээ",
        formFactor: "Хэлбэр",
        allCategories: "Бүх ангилал",
        allAges: "Бүх нас",
        allForms: "Бүх хэлбэр",
      },
      empty: {
        title: "Бүтээгдэхүүн олдсонгүй",
        description: "Таны хайлтын үр дүнд тохирох бүтээгдэхүүн олдсонгүй",
      },
      pagination: {
        previous: "Өмнөх",
        next: "Дараах",
      },
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
      // subheadline: "Pediatric OTC products from Achit Pharma LLC",
      ctaPrimary_1: "View Products",
      ctaPrimary_2: "See More",
      ctaPrimary_3: "See More",
    },
    trust: {
      delivery: {
        title: "Same-Day Delivery",
        description:
          "Partnered with Papa Logistics for same-day delivery service",
      },
      formula: {
        title: "Child-Friendly Formula",
        description:
          "Safe and reliable formulas designed for children's health",
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
        badge: "Iron jelly",
      },
      advaBiotics: {
        name: "Adva-Biotics",
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
        quote:
          "Since my child started taking Adva-Iron, they've become more active. It's been very helpful.",
        author: "B. Enkhtuya",
      },
      testimonial2: {
        quote:
          "Papa Logistics delivery is very fast. We received our order within the same day.",
        author: "Ts. Gerelmaa",
      },
      testimonial3: {
        quote: "Product quality is excellent, we trust it for our children.",
        author: "S. Bayarmaa",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
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
      mission:
        "Our mission is to produce reliable, quality products for children's health.",
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
      disclaimer:
        "This website is for informational purposes only. Please consult a professional doctor for medical advice.",
    },
    about: {
      hero: {
        title: "About Us",
        subtitle: "Our journey in supporting children's health",
        cta: "View Products",
      },
      story: {
        title: "Our Story",
        content:
          "Achit Pharma LLC was founded with the mission to produce reliable, quality products that support children's health. We work closely with medical professionals to create products that are safe and beneficial for children.",
      },
      mission: {
        title: "Our Mission",
        values: {
          quality: {
            title: "Quality",
            description:
              "Reliable products certified according to international standards",
          },
          care: {
            title: "Care",
            description:
              "Dedicated to protecting and supporting children's health",
          },
          innovation: {
            title: "Innovation",
            description: "Utilizing new technologies and research findings",
          },
          trust: {
            title: "Trust",
            description:
              "Transparent and trustworthy relationships with customers",
          },
        },
      },
      timeline: {
        title: "Our Journey",
        items: {
          founded: {
            year: "2023",
            title: "Founded",
            description: "Achit Pharma LLC was established",
          },
          firstProduct: {
            year: "2024",
            title: "First Product",
            description: "Launched Adva-Biotics product",
          },
          expansion: {
            year: "2024",
            title: "Expansion",
            description: "Expanded product line",
          },
          partnership: {
            year: "2024",
            title: "Partnership",
            description: "Established partnership with x",
          },
        },
      },
      team: {
        title: "Our Team",
        description: "Professional team with experienced specialists",
      },
      cta: {
        title: "Join Us",
        description: "Work with us to support children's health",
        button: "Contact Us",
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with us",
      info: {
        address: {
          title: "Address",
          value: "Ulaanbaatar, Mongolia",
        },
        phone: {
          title: "Phone",
          value: "9192-9698 , 7707-9698",
        },
        email: {
          title: "Email",
          value: "info@achitpharma.mn",
        },
        hours: {
          title: "Working Hours",
          value: "Monday - Friday, 08:30 - 17:30",
        },
      },
      form: {
        name: "Name",
        phone: "Phone",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Send",
        success: "Message sent successfully",
        error: "An error occurred",
      },
      map: {
        title: "Location",
      },
    },
    educationPage: {
      hero: {
        title: "Health Education",
        subtitle:
          "Information about children's health, nutrition, and treatment",
      },
      tabs: {
        iron: "Iron",
        zinc: "Zinc",
        probiotics: "Probiotics",
        immunity: "Immunity",
      },
      resources: {
        learnMore: "Learn More",
      },
      faq: {
        title: "Frequently Asked Questions",
      },
    },
    partners: {
      hero: {
        title: "Partners",
        subtitle: "Partnership opportunities",
        cta: "Become a Partner",
      },
      logos: {
        title: "Our Partners",
      },
    },
    productsPage: {
      hero: {
        title: "Products",
        subtitle: "Reliable products for children",
      },
      search: {
        placeholder: "Search products...",
        category: "Category",
        ageRange: "Age Range",
        formFactor: "Form",
        allCategories: "All Categories",
        allAges: "All Ages",
        allForms: "All Forms",
      },
      empty: {
        title: "No products found",
        description: "No products match your search criteria",
      },
      pagination: {
        previous: "Previous",
        next: "Next",
      },
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
