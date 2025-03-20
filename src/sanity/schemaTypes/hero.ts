const hero = {
  name: "hero",
  type: "document",
  title: "Hero Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Main title of the hero section",
    },
    {
      name: "backgroundImages",
      type: "array",
      title: "Background Images",
      of: [{ type: "image" }],
      description: "Images for the background slider",
    },
    {
      name: "heroText",
      type: "text",
      title: "Hero Text",
      description: "Text displayed under the main title",
    },
  ],
};

export default hero;
