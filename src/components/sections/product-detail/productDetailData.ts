import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import type { Product } from "@/types";
import { PRODUCT_IMAGES } from "@/data/product-assets";

export const PRODUCTS_DB: Record<string, Partial<Product>> = {
  "adva-iron": {
    id: "adva-iron",
    price: "45,000₮",
    imageSrc: PRODUCT_IMAGES["adva-iron"],
  },
  "adva-biotics": {
    id: "adva-biotics",
    price: "25,000₮",
    imageSrc: PRODUCT_IMAGES["adva-biotics"],
  },
  aclavcare: {
    id: "aclavcare",
    price: "16,560₮",
    imageSrc: "/products/aclavcare.png",
  },
  mozincare: {
    id: "mozincare",
    price: "16,650₮",
    imageSrc: "/products/mozincare.png",
  },
  "ondalenz-4mg": {
    id: "ondalenz-4mg",
    price: "19,300₮",
    imageSrc: PRODUCT_IMAGES["ondalenz-4mg"],
  },
  "ondalenz-8mg": {
    id: "ondalenz-8mg",
    price: "29,200₮",
    imageSrc: PRODUCT_IMAGES["ondalenz-8mg"],
  },
};

const I18N_PRODUCT_KEYS: Record<string, string> = {
  "adva-iron": "advaIron",
  "adva-biotics": "advaBiotics",
  aclavcare: "aclavcare",
  mozincare: "mozincare",
  "ondalenz-4mg": "ondalenz4",
  "ondalenz-8mg": "ondalenz8",
};

type ResolvedProductDetail = {
  product: Partial<Product>;
  name: string;
  description: string;
  badge: string;
  benefits: string[];
  tabsContent: ProductTabsContent;
};

export type ProductTabsContent = {
  benefitsTitle: string;
  benefits: string[];
  whoForTitle: string;
  whoForBody: string;
  compositionTitle: string;
  ingredientLabel: string;
  amountLabel: string;
  compositionRows: { ingredient: string; amount: string }[];
  compositionNote: string;
  usageTitle: string;
  usageSteps: string[];
  dosageTitle: string;
  dosageLines: string[];
  faqTitle: string;
  faqItems: { question: string; answer: string }[];
  tabLabels: {
    info: string;
    composition: string;
    application: string;
    faq: string;
  };
};

function getProductTabsContent(id: string, locale: Locale): ProductTabsContent {
  const isMn = locale === "mn";

  if (id === "ondalenz-4mg" || id === "ondalenz-8mg") {
    const isChildDose = id === "ondalenz-4mg";

    return {
      benefitsTitle: isMn ? "Яагаад сонгох вэ?" : "Why choose it",
      benefits: isMn
        ? [
            "ODF хальсан хэлбэртэй, ус шаардахгүй",
            "Хэлэн дээр тавьж хурдан уусна",
            "Бөөлжилт, дотор муухайралтын үед тохиромжтой",
            isChildDose ? "Хүүхдийн тун (4mg)" : "Насанд хүрэгчдийн тун (8mg)",
          ]
        : [
            "ODF film form, no water needed",
            "Dissolves quickly on the tongue",
            "Suitable for nausea and vomiting",
            isChildDose ? "Child dose (4mg)" : "Adult dose (8mg)",
          ],
      whoForTitle: isMn ? "Хэнд зориулсан бэ?" : "Who is it for?",
      whoForBody: isMn
        ? isChildDose
          ? "4mg хувилбар нь хүүхдийн тунгийн хэрэгцээнд илүү тохирсон ODF хэлбэрийн сонголт."
          : "8mg хувилбар нь насанд хүрэгчдийн тунгийн хэрэгцээнд илүү тохирсон ODF хэлбэрийн сонголт."
        : isChildDose
          ? "The 4mg option is an ODF form that better fits child-dose needs."
          : "The 8mg option is an ODF form that better fits adult-dose needs.",
      compositionTitle: isMn ? "Найрлага" : "Composition",
      ingredientLabel: isMn ? "Найрлага" : "Ingredient",
      amountLabel: isMn ? "Хэмжээ" : "Amount",
      compositionRows: [
        {
          ingredient: isMn ? "Ondalenz (ODF)" : "Ondalenz (ODF)",
          amount: isChildDose ? "4mg" : "8mg",
        },
        {
          ingredient: isMn ? "Хэлэн дээр уусдаг хальс" : "Orally dissolving film",
          amount: isMn ? "ODF" : "ODF",
        },
      ],
      compositionNote: isMn
        ? "ODF нь хэлэн дээр тавьж уусгадаг хальсан хэлбэртэй."
        : "ODF is a film that dissolves when placed on the tongue.",
      usageTitle: isMn ? "Хэрэглэх заавар" : "How to use",
      usageSteps: isMn
        ? [
            "Гараа цэвэр байлгана.",
            "Хальсыг хэлэн дээр тавина.",
            "Бүрэн уусах хүртэл хүлээнэ.",
          ]
        : [
            "Keep hands clean and dry.",
            "Place the film on the tongue.",
            "Allow it to fully dissolve.",
          ],
      dosageTitle: isMn ? "Тунгийн мэдээлэл" : "Dosage guidance",
      dosageLines: isMn
        ? [
            isChildDose ? "Хүүхдийн тун: 4mg" : "Насанд хүрэгчдийн тун: 8mg",
            "Тухайн өвчтөнд тохирох тунг эмчийн заавраар хэрэглэнэ.",
          ]
        : [
            isChildDose ? "Child dose: 4mg" : "Adult dose: 8mg",
            "Follow clinician guidance for appropriate dosing.",
          ],
      faqTitle: isMn ? "Түгээмэл асуулт" : "FAQ",
      faqItems: isMn
        ? [
            {
              question: "ODF гэж юу вэ?",
              answer:
                "ODF нь хэлэн дээр тавьж уусгадаг хальсан хэлбэртэй бүтээгдэхүүн юм.",
            },
            {
              question: "Ус уух шаардлагатай юу?",
              answer: "Үгүй. Хэлэн дээр уусгаж хэрэглэнэ.",
            },
            {
              question: "Хэн хэрэглэх вэ?",
              answer: isChildDose
                ? "4mg хувилбар нь хүүхдийн тунгийн хэрэгцээнд тохиромжтой."
                : "8mg хувилбар нь насанд хүрэгчдийн тунгийн хэрэгцээнд тохиромжтой.",
            },
          ]
        : [
            {
              question: "What is ODF?",
              answer:
                "ODF is a film format that dissolves when placed on the tongue.",
            },
            {
              question: "Do I need water?",
              answer: "No. It is designed to dissolve on the tongue.",
            },
            {
              question: "Who is it for?",
              answer: isChildDose
                ? "The 4mg option better fits child-dose needs."
                : "The 8mg option better fits adult-dose needs.",
            },
          ],
      tabLabels: {
        info: isMn ? "Мэдээлэл" : "Info",
        composition: isMn ? "Найрлага" : "Composition",
        application: isMn ? "Хэрэглэх" : "Application",
        faq: isMn ? "Асуулт" : "FAQ",
      },
    };
  }

  if (id === "adva-iron") {
    return {
      benefitsTitle: isMn ? "Яагаад сонгох вэ?" : "Why choose it",
      benefits: isMn
        ? [
            "Төмрийн дутлыг нөхөхөд дэмжлэг үзүүлнэ",
            "Өдөр тутмын хэрэглээнд тохиромжтой",
            "Хүүхдийн хэрэгцээнд нийцсэн найрлага",
            "Тогтвортой хэрэглээнд тохиромжтой",
          ]
        : [
            "Supports iron deficiency recovery",
            "Suitable for daily use",
            "Child-friendly formula approach",
            "Designed for consistent use",
          ],
      whoForTitle: isMn ? "Хэнд зориулсан бэ?" : "Who is it for?",
      whoForBody: isMn
        ? "Төмрийн хэрэглээг дэмжих шаардлагатай хүүхдийн өдөр тутмын хэрэглээнд чиглэсэн."
        : "Intended for children who need support for iron intake and recovery.",
      compositionTitle: isMn ? "Найрлага" : "Composition",
      ingredientLabel: isMn ? "Найрлага" : "Ingredient",
      amountLabel: isMn ? "Хэмжээ" : "Amount",
      compositionRows: [
        {
          ingredient: isMn ? "Төмрийн найрлага" : "Iron complex",
          amount: isMn ? "Тодорхойлолтын дагуу" : "Per label guidance",
        },
        {
          ingredient: isMn ? "Туслах найрлагууд" : "Supporting ingredients",
          amount: isMn ? "Тодорхойлолтын дагуу" : "Per label guidance",
        },
      ],
      compositionNote: isMn
        ? "Найрлагын дэлгэрэнгүйг бүтээгдэхүүний шошгоноос шалгана уу."
        : "See the product label for full composition details.",
      usageTitle: isMn ? "Хэрэглэх заавар" : "How to use",
      usageSteps: isMn
        ? [
            "Шошгон дээрх зааврыг уншина.",
            "Нас, хэрэгцээнд тохируулж хэрэглэнэ.",
            "Тогтмол хэрэглээг эрхэмлэнэ.",
          ]
        : [
            "Read the label instructions.",
            "Use according to age and need.",
            "Prioritize consistent use.",
          ],
      dosageTitle: isMn ? "Тунгийн мэдээлэл" : "Dosage guidance",
      dosageLines: isMn
        ? [
            "Тунг бүтээгдэхүүний шошго болон эмчийн зааврын дагуу тохируулна.",
            "Хэтрүүлэхгүй хэрэглэнэ.",
          ]
        : [
            "Follow the product label and clinician guidance for dosing.",
            "Do not exceed recommended use.",
          ],
      faqTitle: isMn ? "Түгээмэл асуулт" : "FAQ",
      faqItems: isMn
        ? [
            {
              question: "Хэзээ хэрэглэх вэ?",
              answer:
                "Өдөр тутмын хэрэглээнд шошгон дээрх зөвлөмжийн дагуу хэрэглэнэ.",
            },
            {
              question: "Хадгалалт хэр байх вэ?",
              answer:
                "Хэвийн өрөөний температурт, шууд нарны гэрлээс хол хадгална.",
            },
            {
              question: "Хэнтэй зөвлөх вэ?",
              answer: "Эмч, эм зүйчтэй зөвлөлдөнө үү.",
            },
          ]
        : [
            {
              question: "When should it be used?",
              answer:
                "Use according to label guidance as part of daily support.",
            },
            {
              question: "How should it be stored?",
              answer:
                "Store at normal room temperature away from direct sunlight.",
            },
            {
              question: "Who should I consult?",
              answer: "Consult a clinician or pharmacist.",
            },
          ],
      tabLabels: {
        info: isMn ? "Мэдээлэл" : "Info",
        composition: isMn ? "Найрлага" : "Composition",
        application: isMn ? "Хэрэглэх" : "Application",
        faq: isMn ? "Асуулт" : "FAQ",
      },
    };
  }

  if (id === "adva-biotics") {
    return {
      benefitsTitle: isMn ? "Яагаад сонгох вэ?" : "Why choose it",
      benefits: isMn
        ? [
            "Ашигтай бактери агуулсан",
            "Өдөр тутмын хэрэглээнд тохиромжтой",
            "Хүүхдийн хэрэгцээнд чиглэсэн",
            "Хэрэглэхэд хялбар",
          ]
        : [
            "Contains beneficial bacteria",
            "Suitable for daily use",
            "Targeted toward child needs",
            "Easy to use",
          ],
      whoForTitle: isMn ? "Хэнд зориулсан бэ?" : "Who is it for?",
      whoForBody: isMn
        ? "Гэдэсний бичил орчныг дэмжих зорилготой өдөр тутмын хэрэглээнд чиглэсэн."
        : "Designed for daily support of gut microbiome balance.",
      compositionTitle: isMn ? "Найрлага" : "Composition",
      ingredientLabel: isMn ? "Найрлага" : "Ingredient",
      amountLabel: isMn ? "Хэмжээ" : "Amount",
      compositionRows: [
        {
          ingredient: isMn ? "Пробиотик" : "Probiotics",
          amount: isMn ? "Тодорхойлолтын дагуу" : "Per label guidance",
        },
        {
          ingredient: isMn ? "Цайр" : "Zinc",
          amount: isMn ? "Тодорхойлолтын дагуу" : "Per label guidance",
        },
      ],
      compositionNote: isMn
        ? "Найрлагын дэлгэрэнгүйг бүтээгдэхүүний шошгоноос шалгана уу."
        : "See the product label for full composition details.",
      usageTitle: isMn ? "Хэрэглэх заавар" : "How to use",
      usageSteps: isMn
        ? [
            "Шошгон дээрх зааврыг уншина.",
            "Нас, хэрэгцээнд тохируулж хэрэглэнэ.",
            "Тогтмол хэрэглээг эрхэмлэнэ.",
          ]
        : [
            "Read the label instructions.",
            "Use according to age and need.",
            "Prioritize consistent use.",
          ],
      dosageTitle: isMn ? "Тунгийн мэдээлэл" : "Dosage guidance",
      dosageLines: isMn
        ? [
            "Тунг бүтээгдэхүүний шошго болон эмчийн зааврын дагуу тохируулна.",
            "Хэтрүүлэхгүй хэрэглэнэ.",
          ]
        : [
            "Follow the product label and clinician guidance for dosing.",
            "Do not exceed recommended use.",
          ],
      faqTitle: isMn ? "Түгээмэл асуулт" : "FAQ",
      faqItems: isMn
        ? [
            {
              question: "Хэзээ хэрэглэх вэ?",
              answer:
                "Өдөр тутмын хэрэглээнд шошгон дээрх зөвлөмжийн дагуу хэрэглэнэ.",
            },
            {
              question: "Хадгалалт хэр байх вэ?",
              answer:
                "Хэвийн өрөөний температурт, шууд нарны гэрлээс хол хадгална.",
            },
            {
              question: "Хэнтэй зөвлөх вэ?",
              answer: "Эмч, эм зүйчтэй зөвлөлдөнө үү.",
            },
          ]
        : [
            {
              question: "When should it be used?",
              answer:
                "Use according to label guidance as part of daily support.",
            },
            {
              question: "How should it be stored?",
              answer:
                "Store at normal room temperature away from direct sunlight.",
            },
            {
              question: "Who should I consult?",
              answer: "Consult a clinician or pharmacist.",
            },
          ],
      tabLabels: {
        info: isMn ? "Мэдээлэл" : "Info",
        composition: isMn ? "Найрлага" : "Composition",
        application: isMn ? "Хэрэглэх" : "Application",
        faq: isMn ? "Асуулт" : "FAQ",
      },
    };
  }

  return {
    benefitsTitle: isMn ? "Яагаад сонгох вэ?" : "Why choose it",
    benefits: isMn
      ? [
          "Өдөр тутмын хэрэглээнд тохиромжтой",
          "Хэрэглэхэд хялбар",
          "Хэрэглэгч төвтэй шийдэл",
          "Шошгоны дагуу хэрэглэх боломжтой",
        ]
      : [
          "Suitable for daily use",
          "Easy to use",
          "User-centered design",
          "Works well with label guidance",
        ],
    whoForTitle: isMn ? "Хэнд зориулсан бэ?" : "Who is it for?",
    whoForBody: isMn
      ? "Тухайн бүтээгдэхүүний зориулалтыг шошгон дээрх мэдээллээс шалгана уу."
      : "See the product label to confirm intended audience and usage.",
    compositionTitle: isMn ? "Найрлага" : "Composition",
    ingredientLabel: isMn ? "Найрлага" : "Ingredient",
    amountLabel: isMn ? "Хэмжээ" : "Amount",
    compositionRows: [
      {
        ingredient: isMn ? "Үндсэн найрлага" : "Primary ingredient",
        amount: isMn ? "Тодорхойлолтын дагуу" : "Per label guidance",
      },
      {
        ingredient: isMn ? "Туслах найрлага" : "Supporting ingredients",
        amount: isMn ? "Тодорхойлолтын дагуу" : "Per label guidance",
      },
    ],
    compositionNote: isMn
      ? "Найрлагын дэлгэрэнгүйг бүтээгдэхүүний шошгоноос шалгана уу."
      : "See the product label for full composition details.",
    usageTitle: isMn ? "Хэрэглэх заавар" : "How to use",
    usageSteps: isMn
      ? [
          "Шошгон дээрх зааврыг уншина.",
          "Зөвлөмжийн дагуу хэрэглэнэ.",
          "Эмч, эм зүйчтэй зөвлөлдөнө.",
        ]
      : [
          "Read the label instructions.",
          "Follow the recommended use.",
          "Consult a clinician or pharmacist.",
        ],
    dosageTitle: isMn ? "Тунгийн мэдээлэл" : "Dosage guidance",
    dosageLines: isMn
      ? [
          "Тунг бүтээгдэхүүний шошго болон эмчийн зааврын дагуу тохируулна.",
          "Хэтрүүлэхгүй хэрэглэнэ.",
        ]
      : [
          "Follow the product label and clinician guidance for dosing.",
          "Do not exceed recommended use.",
        ],
    faqTitle: isMn ? "Түгээмэл асуулт" : "FAQ",
    faqItems: isMn
      ? [
          {
            question: "Хадгалалт хэр байх вэ?",
            answer:
              "Хэвийн өрөөний температурт, хэт халуун ба хүйтнээс хол хадгална.",
          },
          {
            question: "Хэн хэрэглэх вэ?",
            answer: "Бүтээгдэхүүний шошго болон эмчийн зааврыг дагана уу.",
          },
          {
            question: "Хэзээ зогсоох вэ?",
            answer: "Тохиромжгүй шинж илэрвэл хэрэглэхээ зогсоож зөвлөлдөнө.",
          },
        ]
      : [
          {
            question: "How should it be stored?",
            answer:
              "Store at normal room temperature away from extreme heat or cold.",
          },
          {
            question: "Who should use it?",
            answer: "Follow the product label and clinician guidance.",
          },
          {
            question: "When should I stop?",
            answer: "Stop use and seek advice if unsuitable symptoms appear.",
          },
        ],
    tabLabels: {
      info: isMn ? "Мэдээлэл" : "Info",
      composition: isMn ? "Найрлага" : "Composition",
      application: isMn ? "Хэрэглэх" : "Application",
      faq: isMn ? "Асуулт" : "FAQ",
    },
  };
}

export function resolveProductDetail(
  id: string,
  locale: Locale,
): ResolvedProductDetail | null {
  const product = PRODUCTS_DB[id];
  if (!product) {
    return null;
  }

  const i18nKey = product.id ? I18N_PRODUCT_KEYS[product.id] : undefined;

  const name =
    (i18nKey ? t(`products.${i18nKey}.name`, locale) : "") ||
    product.id ||
    "Unknown";
  const description =
    (i18nKey ? t(`products.${i18nKey}.description`, locale) : "") ||
    "Product description unavailable.";
  const badge = (i18nKey ? t(`products.${i18nKey}.badge`, locale) : "") || "Premium";

  const tabsContent = getProductTabsContent(id, locale);
  const benefits = tabsContent.benefits;

  return {
    product,
    name,
    description,
    badge,
    benefits,
    tabsContent,
  };
}
