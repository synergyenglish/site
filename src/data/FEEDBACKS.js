const isLocal = window.location.hostname === "localhost";

// const BASE_CDN_URL = import.meta.env.VITE_BASE_CDN_URL || "/assets/";
const BASE_CDN_URL = "https://kaibryan1.github.io/synergyenglish/assets/";

const CDN_IMAGES = {
  profiles: {
    mohmoh: "/Profiles/MohMoh.png",
    popo: "/Profiles/PoPo.png",
    shweyeewin: "/Profiles/ShweYeeWin.png",
  },
  illustrations: {
    Cloud: "/Others/Illu-Cloud.svg",
    Flower: "/Others/Illu-Flower.svg",
    Plant: "/Others/Illu-Plant.svg",
    Star: "/Others/Illu-Star.svg",
  },
};

const imageBase = isLocal ? "/assets" : BASE_CDN_URL;

// Profiles
const mohmohImage = imageBase + CDN_IMAGES.profiles.mohmoh;
const popoImage = imageBase + CDN_IMAGES.profiles.popo;
const shweyeewinImage = imageBase + CDN_IMAGES.profiles.shweyeewin;

// Illustrations
const flowerImage = imageBase + CDN_IMAGES.illustrations.Flower;
const cloudImage = imageBase + CDN_IMAGES.illustrations.Cloud;
const plantImage = imageBase + CDN_IMAGES.illustrations.Plant;
const starImage = imageBase + CDN_IMAGES.illustrations.Star;

export const FEEDBACKS = [
  [
    {
      id: 1,
      body: "“My child used to be shy about speaking English, but now she’s more confident and excited to learn! The teachers make lessons so fun and engaging.”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: cloudImage,
    },
    {
      id: 2,
      body: "“We love how the lessons are interactive and playful. My son enjoys every class, and I can see real improvement in his speaking and reading skills!”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: flowerImage,
    },
    {
      id: 3,
      body: "“The best part is that my child is actually excited for class! The teachers are patient, and the activities make learning feel like play.”",
      parent: {
        name: "Moh Moh",
        initial: "W",
        image: mohmohImage,
      },
      // illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Plant,
      illustration: flowerImage,
    },
    {
      id: 4,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: starImage,
    },
  ],
  [
    {
      id: 5,
      body: "“My daughter enjoys the Art & Craft Club so much! She learns English while being creative, and it helps her remember words better”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: flowerImage,
    },
    {
      id: 6,
      body: "“My daughter enjoys the Art & Craft Club so much! She learns English while being creative, and it helps her remember words better”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: starImage,
    },
    {
      id: 7,
      body: "“The Music Club is such a great way for kids to learn English naturally through songs. My son sings in English all the time now”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: popoImage,
      },
      illustration: flowerImage,
    },
    {
      id: 8,
      body: "“The storytelling sessions are magical! My child has started making up her own little stories in English at home. We can't even keep up with listening to her stories.”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: shweyeewinImage,
      },
      illustration: starImage,
    },
    {
      id: 9,
      body: "“My son struggled with phonics before, but after joining Synergy English, he’s reading with so much more confidence. The fun and engaging teaching style really works.”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: plantImage,
    },
  ],
  [
    {
      id: 10,
      body: "“My son struggled with phonics before, but after joining Synergy English, he’s reading with so much more confidence. The fun and engaging teaching style really works!”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: cloudImage,
    },
    {
      id: 11,
      body: "“I was looking for an English class that wasn’t just memorizing words, and I found the perfect place! The lessons are interactive, and my daughter loves the activities.”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: flowerImage,
    },
    {
      id: 12,
      body: "“The best thing about Synergy English is that my child actually looks forward to class! She’s learning English in a way that’s fun and natural.”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: starImage,
    },
    {
      id: 13,
      body: "“I'have been looking for teachers that can handle my child's burst energy and teachers from Synergy English are so patient and I can hear them having fun while learning.”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: plantImage,
    },
  ],
  [
    {
      id: 14,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: flowerImage,
    },
    {
      id: 15,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: flowerImage,
    },
    {
      id: 16,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: starImage,
    },
    {
      id: 17,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: cloudImage,
    },
  ],
];
