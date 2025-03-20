const about = {
  name: "about",
  type: "document",
  title: "About Us Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
      description: "Main title of the About Us section",
    },
    {
      name: "description",
      type: "text",
      title: "Section Description",
      description: "Brief introduction about the company",
    },
    {
      name: "aboutImage",
      type: "image",
      title: "About Image",
      description: "About Image",
      options: { hotspot: true },
    },
    {
      name: "button",
      type: "object",
      title: "Button",
      fields: [
        {
          name: "text",
          type: "string",
          title: "Button Text",
          description: "Text to display on the button"
        },
        {
          name: "link",
          type: "url",
          title: "Button Link",
          description: "URL for the button"
        }
      ]
    }
  ],
};

export default about;