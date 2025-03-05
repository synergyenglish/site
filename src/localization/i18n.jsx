import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  // debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        home: {
          button: {
            learn: "Learn More",
            join: "Join us",
          },
          nav: {
            Home: "Home",
            Mission: "Mission",
            Courses: "Courses",
            FAQ: "FAQ",
            Feedbacks: "Feedbacks",
          },
          mission: {
            sectionTitle: "Our Mission",
            firstTitle: "Learning isn’t just about memorizing words",
            firstSubtitle:
              "`Through our experience, we believe our kids learn best when they’re having fun, which is why our lessons are filled with games, creativity, and laughter. After every lesson, speaking English becomes an activity they love to do!`",
            secondTitle: "The best way to learn is to have fun learning!",
            secondSubtitle:
              "When learning feels like play, children stay curious, engaged, and excited to keep exploring. Our interactive approach helps young kids build confidence in speaking English naturally, without fear of making mistakes.",
          },
          courses: {
            sectionTitle: "Our Courses",
            title: "Courses from age 6 to 16",
            subtitle:
              "Whether your child is just starting out or looking to level up their English skills, we have a course that fits their journey. Our classes range from General English to phonics and YLE certificate programs.",
            courseDetails: {
              yle: {
                title: "Young Learners English Courses",
                shortDescription:
                  "Cambridge-aligned courses(YLE Starters, Movers, Flyers, kET), designed to help kids grow in confidence and prepare for international exams.",
                longDescription:
                  "YLE is a course we encourage students from age 6 to 16 to learn as it greatly assist our students in accessing their skills at a young age. YLE is a course we encourage students from age 6 to 16 to learn as it greatly assist our students in accessing their skills at a young age.",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Levels",
                    body: "Pre-Starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              generalEnglish: {
                title: "General English Course",
                shortDescription:
                  "Our General English course is perfect for kids who are just starting their English journey as we focus on developing essential foundational skills.",
                longDescription:
                  "Our general english course is for kids with no background english to gain In just 60 lessons, you could see remarkable improvements in your speaking and listening skills, and we have six CEFR-aligned levels (A1 to C2) to suit every learner. Our convenient Bangkok locations make it easy to learn English in-person, or you can choose online sessions for ultimate flexibility.",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Levels",
                    body: "Elementary, Foundation, Beginner, Pre-intermediate, Intermediate, Upper Intermediate, Advanced",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              art: {
                title: "Art and Extracarriculars",
                shortDescription:
                  "The best learning happens when kids are truly engaged. That’s why we offer Art & Craft, Storytelling, and Music Clubs for every kids in Synergy.",
                longDescription:
                  "We don't just teach kids English. We like to keep our kids positive and excited to learn with us. That's why we have tailored some free learing clubs that are fun and enjoyable for our kids. ",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              phonic: {
                title: "Phonic For Kids",
                shortDescription:
                  "The perfect start for little learners! We help young kids master pronunciation, letter sounds, and early reading skills.",
                detailDescirption:
                  "Our Phonics Class is the perfect start for young learners, especially for bilingual children speaking Myanmar and Thai. We focus on building strong foundational skills in letter sounds, blending, and pronunciation, helping kids bridge the gap between their native languages and English. Our interactive, play-based approach makes learning fun, engaging, and stress-free, ensuring kids develop confidence in reading and speaking.",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
            },
            button: "Learn More",
          },
          faq: {
            title: "Learn more about our center",
            accordians: [
              {
                title: "What course book are we using?",
                body: "Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence.",
              },
              {
                title: "How long a course would take for 6 - 9 olds?",
                body: "Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "Are the classes only through online?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "From which level, are YLE Courses starting?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "Can my child of 5 years old attend?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "What are Synergy English Free Clubs?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
            ],
          },
          feedbacks: {
            sectionTitle: "Feedbacks",
            title: "Feedbacks from our lovely parents",
            button: "Join us",
          },
          footer: {
            title: "Come join our Synergy classes",
            button: "Join us",
            nav: {
              Home: "Home",
              Mission: "Our Mission",
              Courses: "Courses",
              Faq: "FAQ Questions",
              Feedbacks: "Feedbacks",
            },
            learnMore: {
              Video: "Watch our video",
              Art: "Art and Craft",
              FreeClubs: "Free Synergy Clubs",
            },
          },
        },
      },
    },
    my: {
      translation: {
        home: {
          button: {
            learn: "ပိုမိုလေ့လာရန်",
            join: "သင်တန်းအပ်ရန်",
          },
          nav: {
            Home: "ပင်မ",
            Mission: "ရည်ရွယ်ချက်",
            Courses: "အတန်းများ",
            FAQ: "မေးခွန်းများ",
            Feedbacks: "မှတ်ချက်",
          },
          mission: {
            sectionTitle: "ရည်ရွယ်ချက်",
            firstTitle:
              "ပျော်ပျော်ရွှင်ရွှင်သင်ယူခြင်းက အထိအရောက်ဆုံး သင်ယူခြင်းပါပဲ",
            firstSubtitle:
              "သားသားမီးမီးလေးတွေက စာသင်တဲ့အခါမှာ ပျော်ပျော်ရွှင်ရွှင်ရှိနေမယ်၊ ပျင်းတယ်လို့ မခံစားရဘူးဆိုရင် အထိအရောက်ဆုံးသင်ယူနိုင်လိမ့်မယ်လို့ ခံယူထားပါတယ်။",
            secondTitle:
              "ဒါကြောင့်မို့ သားသားမီးမီးတို့ ပျော်ပျော်ရွှင်ရွှင်နဲ့သင်ယူနိုင်မို့ ရည်ရွယ်ထားပါတယ်။",
            secondSubtitle:
              "သားသားမီးမီးလေးတွေက စာသင်တဲ့အခါမှာ ပျော်ပျော်ရွှင်ရွှင်ရှိနေမယ်၊ ပျင်းတယ်လို့ မခံစားရဘူးဆိုရင် အထိအရောက်ဆုံးသင်ယူနိုင်လိမ့်မယ်လို့ ခံယူထားပါတယ်။",
          },
          courses: {
            sectionTitle: "အတန်းများ",
            title: "အသက် ၆ နှစ်မှ ၁၆ နှစ်ကလေးများအတွက် အတန်းများ",
            subtitle:
              "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
            courseDetails: {
              yle: {
                title: "Young Learners English Course",
                shortDescription:
                  "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
                longDescription:
                  "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်. Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Levels",
                    body: "Pre-Starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              generalEnglish: {
                title: "General English Course",
                shortDescription:
                  "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
                longDescription:
                  "Our general english course is for kids with no background english to gain In just 60 lessons, you could see remarkable improvements in your speaking and listening skills, and we have six CEFR-aligned levels (A1 to C2) to suit every learner. Our convenient Bangkok locations make it easy to learn English in-person, or you can choose online sessions for ultimate flexibility.",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Foundational, Beginner, Jumper, Pre-intermediate, Intermediate, Upper Intermediate, Advanced",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              art: {
                title: "Art and Extracarriculars",
                shortDescription:
                  "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
                longDescription:
                  "We don't just teach kids English. We like to keep our kids positive and excited to learn with us. That's why we have tailored some free learing clubs that are fun and enjoyable for our kids. ",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              phonic: {
                title: "Phonic For Kids",
                shortDescription:
                  "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
                longDescription:
                  "Pronounciation Training for kids between age of 6 to 16. We do encourage parents to help kids build up vocabularies and pronouciations since young age. This course is designed to help your kids build a solid foundation for language fluency",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
            },
            button: "ပိုမိုဖတ်ရှူရန်",
          },
          faq: {
            title: "ကျောင်းအကြောင်းပိုမိုလေ့လာရန်",
            accordians: [
              {
                title: "What course book are we using?",
                body: "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်. Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
              },
              {
                title: "How long a course would take for 6 - 9 olds?",
                body: "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်. Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
              },
              {
                title: "Are the classes only through online?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "From which level, are YLE Courses starting?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "Can my child of 5 years old attend?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "What are Synergy English Free Clubs?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
            ],
          },
          feedbacks: {
            sectionTitle: "မှတ်ချက်များ",
            title: "Synergy မှ ကျောင်းသားမိဘများရဲ့ မှတ်ချက်များ",
            button: "သင်တန်းအပ်ရန်",
          },
          footer: {
            title: "ပျော်ပျော်ရွှင်ရွှင် သင်ယူကြ‌ရအောင်",
            button: "သင်တန်းအပ်ရန်",
            nav: {
              Home: "ပင်မစာမျက်နှာ",
              Mission: "ရည်ရွယ်ချက်",
              Courses: "အတန်းများ",
              Faq: "မေးခွန်းများ",
              Feedbacks: "မှတ်ချက်",
            },
            learnMore: {
              Video: "ဗီဒီရို ကြည့်ရှူရန်",
              Art: "ပန်ချီ နှင့် လက်မှု အတန်း",
              FreeClubs: "အခြား Synergy အတန်းများ",
            },
          },
        },
      },
    },
  },
});

export default i18n;
