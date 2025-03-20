import { type SchemaTypeDefinition } from "sanity";
// import training from "./training";
import service from "./service";
import about from "./about";
import blog from "./blog";
import socialLinks from "./socials-link";
import hero from "./hero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, about, service, blog, socialLinks],
};
