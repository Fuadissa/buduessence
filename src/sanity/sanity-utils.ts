import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getHeroContent() {
  try {
    const data = await client.fetch(groq`*[_type == "hero"][0]`);
    return data;
  } catch (error) {
    console.error("Error fetching hero content:", error);
    return null;
  }
}

export async function getAboutUsContent() {
  try {
    const data = await client.fetch(groq`*[_type == "about"][0]`);
    return data;
  } catch (error) {
    console.error("Error fetching about us content:", error);
    return null;
  }
}

// export async function getTrainingContent() {
//   try {
//     const data = await client.fetch(groq`*[_type == "training"][0]`);
//     return data;
//   } catch (error) {
//     console.error("Error fetching training content:", error);
//     return null;
//   }
// }

export async function getBlogsContent() {
  try {
    const data = await client.fetch(groq`*[_type == "blog"]`);
    return data;
  } catch (error) {
    console.error("Error fetching blog content:", error);
    return null;
  }
}

export async function getBlogContent(slug: string) {
  try {
    const data = await client.fetch(groq`*[_type == "blog" && slug.current == $slug][0]`, { slug });
    return data;
  } catch (error) {
    console.error("Error fetching blog content:", error);
    return null;
  }
}

export async function getServiceContent() {
  try {
    const data = await client.fetch(groq`*[_type == "service"][0]`);
    return data;
  } catch (error) {
    console.error("Error fetching contact content:", error);
    return null;
  }
}

export async function getSocialLinks() {
  try {
    const data = await client.fetch(groq`*[_type == "socialLinks"][0]`);
    return data;
  } catch (error) {
    console.error("Error fetching contact content:", error);
    return null;
  }
}