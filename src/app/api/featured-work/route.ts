import { NextResponse } from "next/server";

const featureWork = [
  {
    title: "Mini Project WEBGIS",
    description:
      "Developed an interactive WebGIS platform mapping local coffee shops, combining spatial data analysis with a sleek, user-centric interface to help users discover and filter cafes effortlessly.",

    roles: ["React Developer", "Arcgis Pro", "GIS Analyst", "Open Street Map"],

    image: "/images/feature-work/persebaran.png",

    link: "https://persebarancoffeeshop.vercel.app/",
  },

  {
    title: "3D Mapping Kota Padang",

    description:
      "An interactive 3D WebGIS platform designed to visualize the urban landscape of Padang City. By leveraging modern geospatial technologies and 3D spatial modeling, this project renders highly detailed, interactive city buildings and complex geospatial datasets directly in the browser with high performance. Please note that this website is currently still under development.",

    roles: ["3D Modelling", "WEBGIS", "MapLibre", "DeckGL"],

    image: "/images/feature-work/3D_MAP.png",

    link: "https://3dpadang.vercel.app/",
  },
];

export const GET = async () => {
  return NextResponse.json({
    featureWork,
  });
};
