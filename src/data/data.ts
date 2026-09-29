import type { Fruit } from "../types";

export const ingredients: string[] = [
  "Alma",
  "Körte",
  "Szilva",
  "Meggy",
  "Kajszibarack",
];

export const popular: string[] = [
  "Szilvapálinka",
  "Barackpálinka",
  "Körtepálinka",
  "Almapálinka",
  "Birsalmapálinka",
];

export const flavors: string[] = [
  "Gyümölcsös",
  "Illatos",
  "Érett gyümölcsre jellemző",
  "Harmonikus",
  "Tiszta lecsengésű",
];


export const fruits: Fruit[] = [
  {
    id: 1,
    name: "Banán",
    image: "src/images/Banаn.jpg",
    alt: "Banán",
    description:
      "A banán trópusi gyümölcs, amely Magyarországon nem jellemző pálinkaalapanyag.",
  },
  {
    id: 2,
    name: "Birsalma",
    image: "src/images/birsalma.jpg",
    alt: "Birsalma",
    description:
      "A birsalma jellegzetes illatú gyümölcs, amelyből gyümölcspárlat is készíthető.",
  },
  {
    id: 3,
    name: "Mogyoró",
    image: "src/images/mogyoro.jpg",
    alt: "Mogyoró",
    description:
      "A mogyoró olajos mag, ezért nem a hagyományos gyümölcspárlatok alapanyagai közé tartozik.",
  },
  {
    id: 4,
    name: "Gránátalma",
    image: "src/images/granatalma.jpg",
    alt: "Gránátalma",
    description:
      "A gránátalma gyümölcs, jellegzetes édes-savanykás ízzel és sok apró maggal.",
  },
];