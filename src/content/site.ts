import { assetUrl } from "@/lib/assetUrl";

export const site = {
  name: "argénte",
  tagline: "Hand-finished sterling silver",
  instagramUrl: "https://www.instagram.com/argentepk",
} as const;

export const carouselSlides = [
  {
    id: "aria-bangle",
    title: "Aria Bangle",
    imageSrc: assetUrl("/images/Aria Bangle/1.jpg"),
  },
  {
    id: "aria-cluster-hoops",
    title: "Aria Cluster Hoops",
    imageSrc: assetUrl("/images/Aria Cluster Hoops/1.jpg"),
  },
  {
    id: "crescent-panel-bracelet",
    title: "Crescent Panel Bracelet",
    imageSrc: assetUrl("/images/Crescent Panel Bracelet/1.jpg"),
  },
  {
    id: "grace-bracelet",
    title: "Grace Bracelet",
    imageSrc: assetUrl("/images/Grace Bracelet/1.jpg"),
  },
  {
    id: "luna-charm-hoops",
    title: "Luna Charm Hoops",
    imageSrc: assetUrl("/images/Luna Charm Hoops/1.jpg"),
  },
  {
    id: "elara-pear-studs",
    title: "Elara Pear Studs",
    imageSrc: assetUrl("/images/Elara Pear Studs/1.jpg"),
  },
] as const;

/** Featured on `/collections/studs` */
export const elaraPearStuds = {
  title: "Elara Pear Studs",
  description: "Pear silhouettes with a quiet, polished finish.",
  images: [
    assetUrl("/images/Elara Pear Studs/1.jpg"),
    assetUrl("/images/Elara Pear Studs/2.jpg"),
  ],
} as const;

/** Featured on `/collections/hoops` (order: Luna first, Aria second) */
export const hoopsProducts = [
  {
    id: "luna-charm-hoops",
    title: "Luna Charm Hoops",
    description: "Hoops with a subtle charm for movement and shine.",
    images: [
      assetUrl("/images/Luna Charm Hoops/1.jpg"),
      assetUrl("/images/Luna Charm Hoops/2.jpg"),
    ],
  },
  {
    id: "aria-cluster-hoops",
    title: "Aria Cluster Hoops",
    description: "Clustered forms with a soft, weight-balanced swing.",
    images: [
      assetUrl("/images/Aria Cluster Hoops/1.jpg"),
      assetUrl("/images/Aria Cluster Hoops/2.jpg"),
    ],
  },
] as const;

/** Featured on `/collections/bracelets` (Crescent first, Grace second) */
export const braceletsProducts = [
  {
    id: "crescent-panel-bracelet",
    title: "Crescent Panel Bracelet",
    description: "A crescent panel and chain for everyday layering.",
    images: [
      assetUrl("/images/Crescent Panel Bracelet/1.jpg"),
      assetUrl("/images/Crescent Panel Bracelet/2.jpg"),
    ],
  },
  {
    id: "grace-bracelet",
    title: "Grace Bracelet",
    description: "Refined links that catch light without shouting.",
    images: [
      assetUrl("/images/Grace Bracelet/1.jpg"),
      assetUrl("/images/Grace Bracelet/2.jpg"),
    ],
  },
] as const;

/** Featured on `/collections/bangles` */
export const ariaBangle = {
  title: "Aria Bangle",
  description: "A sculptural cuff that sits lightly on the wrist.",
  images: [
    assetUrl("/images/Aria Bangle/1.jpg"),
    assetUrl("/images/Aria Bangle/2.jpg"),
  ],
} as const;

export const about = {
  heading: "About us",
  paragraphs: [
    "We are a small studio focused on silver jewellery that feels effortless on the skin and calm in the room. Each design is refined until the silhouette, weight, and finish feel right for everyday wear.",
    "If you are looking for something understated, durable, and made with care, you are in the right place.",
  ],
} as const;

export const categories = [
  {
    slug: "studs",
    title: "Studs",
    href: "/collections/studs",
    imageSrc: elaraPearStuds.images[0],
  },
  {
    slug: "hoops",
    title: "Hoops",
    href: "/collections/hoops",
    imageSrc: hoopsProducts[0].images[0],
  },
  {
    slug: "bracelets",
    title: "Bracelets",
    href: "/collections/bracelets",
    imageSrc: braceletsProducts[0].images[0],
  },
  {
    slug: "bangles",
    title: "Bangles",
    href: "/collections/bangles",
    imageSrc: ariaBangle.images[0],
  },
] as const;
