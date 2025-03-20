const training = {
  name: "training",
  type: "document",
  title: "Training Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
      description: "Main title of the training section",
    },
    {
      name: "description",
      type: "text",
      title: "Section Description",
      description: "Subtitle or description under the title",
    },
    {
      name: "cards",
      type: "array",
      title: "Training Cards",
      of: [
        {
          type: "object",
          title: "Card",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Card Title",
            },
            {
              name: "content",
              type: "array",
              title: "Card Content",
              of: [{ type: "block" }],
              description: "Main content of the card",
            },
            {
              name: "listItems",
              type: "array",
              title: "List Items (optional)",
              of: [{ type: "string" }],
              description: "List of bullet points (optional)",
            },
            {
              name: "buttonText",
              type: "string",
              title: "Button Text",
              description: "Text for the button",
            },
            {
              name: "buttonLink",
              type: "url",
              title: "Button Link",
              description: "URL where the button leads",
            },
          ],
        },
      ],
      description: "Add training content cards",
    },
  ],
};

export default training;
