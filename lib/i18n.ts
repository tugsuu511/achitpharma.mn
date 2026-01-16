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
    about: {
      hero: {
        title: "Бидний тухай",
        subtitle: "Хүүхдийн эрүүл мэндийг дэмжихэд зориулсан бидний аялал",
        cta: "Бүтээгдэхүүн үзэх",
      },
      story: {
        title: "Манай түүх",
        content: "Ачит Алтан Ундарга ХХК нь хүүхдийн эрүүл мэндийг дэмжихэд зориулсан найдвартай, чанартай бүтээгдэхүүн үйлдвэрлэх зорилготойгоор байгуулагдсан. Бид эмнэлгийн мэргэжилтнүүдтэй хамтран ажиллаж, хүүхдүүдийн эрүүл мэндэд ээлтэй бүтээгдэхүүнийг бүтээж байна.",
      },
      mission: {
        title: "Эрхэм зорилго",
        values: {
          quality: {
            title: "Чанар",
            description: "Олон улсын стандартын дагуу шалгагдсан, найдвартай бүтээгдэхүүн",
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
            year: "2020",
            title: "Байгуулагдсан",
            description: "Ачит Алтан Ундарга ХХК байгуулагдсан",
          },
          firstProduct: {
            year: "2021",
            title: "Эхний бүтээгдэхүүн",
            description: "Adva-Iron бүтээгдэхүүн гаргасан",
          },
          expansion: {
            year: "2023",
            title: "Өргөтгөл",
            description: "Бүтээгдэхүүний цувралыг өргөжүүлсэн",
          },
          partnership: {
            year: "2024",
            title: "Хамтрал",
            description: "Papa Logistics-тай хамтран ажиллах гэрээ байгуулсан",
          },
        },
      },
      team: {
        title: "Бидний баг",
        description: "Мэргэжлийн баг, туршлагатай мэргэжилтнүүд",
      },
      cta: {
        title: "Бидэнтэй нэгдээрэй",
        description: "Хүүхдийн эрүүл мэндийг дэмжихэд бидэнтэй хамтран ажиллаарай",
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
          value: "+976 11 123456",
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
      form: {
        name: "Нэр",
        phone: "Утас",
        email: "Имэйл",
        subject: "Гарчиг",
        message: "Мессеж",
        submit: "Илгээх",
        success: "Амжилттай илгээгдлээ",
        error: "Алдаа гарлаа",
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
      benefits: {
        title: "Хамтралтын давуу тал",
        items: {
          support: {
            title: "Дэмжлэг",
            description: "Бүтээгдэхүүний сурталчилгаа, маркетингийн дэмжлэг",
          },
          training: {
            title: "Сургалт",
            description: "Бүтээгдэхүний талаарх мэргэжлийн сургалт",
          },
          quality: {
            title: "Чанар",
            description: "Олон улсын стандартын дагуу шалгагдсан бүтээгдэхүүн",
          },
        },
      },
      logos: {
        title: "Манай хамтрагчид",
      },
      steps: {
        title: "Хамтрагч болох алхам",
        step1: {
          title: "Холбоо барих",
          description: "Бидэнтэй холбогдох",
        },
        step2: {
          title: "Хэлэлцээр",
          description: "Хамтралтын нөхцөлийг хэлэлцэх",
        },
        step3: {
          title: "Гэрээ байгуулах",
          description: "Албан ёсны гэрээ байгуулах",
        },
        step4: {
          title: "Эхлэх",
          description: "Хамтран ажиллах",
        },
      },
      inquiry: {
        title: "Хамтралтын хүсэлт",
        name: "Нэр",
        company: "Байгууллага",
        email: "Имэйл",
        phone: "Утас",
        message: "Мессеж",
        submit: "Илгээх",
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
    about: {
      hero: {
        title: "About Us",
        subtitle: "Our journey in supporting children's health",
        cta: "View Products",
      },
      story: {
        title: "Our Story",
        content: "Achit Pharma LLC was founded with the mission to produce reliable, quality products that support children's health. We work closely with medical professionals to create products that are safe and beneficial for children.",
      },
      mission: {
        title: "Our Mission",
        values: {
          quality: {
            title: "Quality",
            description: "Reliable products certified according to international standards",
          },
          care: {
            title: "Care",
            description: "Dedicated to protecting and supporting children's health",
          },
          innovation: {
            title: "Innovation",
            description: "Utilizing new technologies and research findings",
          },
          trust: {
            title: "Trust",
            description: "Transparent and trustworthy relationships with customers",
          },
        },
      },
      timeline: {
        title: "Our Journey",
        items: {
          founded: {
            year: "2020",
            title: "Founded",
            description: "Achit Pharma LLC was established",
          },
          firstProduct: {
            year: "2021",
            title: "First Product",
            description: "Launched Adva-Iron product",
          },
          expansion: {
            year: "2023",
            title: "Expansion",
            description: "Expanded product line",
          },
          partnership: {
            year: "2024",
            title: "Partnership",
            description: "Established partnership with Papa Logistics",
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
          value: "+976 11 123456",
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
        subtitle: "Information about children's health, nutrition, and treatment",
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
      benefits: {
        title: "Partnership Benefits",
        items: {
          support: {
            title: "Support",
            description: "Product promotion and marketing support",
          },
          training: {
            title: "Training",
            description: "Professional training on products",
          },
          quality: {
            title: "Quality",
            description: "Products certified according to international standards",
          },
        },
      },
      logos: {
        title: "Our Partners",
      },
      steps: {
        title: "Steps to Partner",
        step1: {
          title: "Contact Us",
          description: "Get in touch with us",
        },
        step2: {
          title: "Discussion",
          description: "Discuss partnership terms",
        },
        step3: {
          title: "Agreement",
          description: "Sign official agreement",
        },
        step4: {
          title: "Start",
          description: "Begin working together",
        },
      },
      inquiry: {
        title: "Partnership Inquiry",
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submit: "Submit",
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
