const service = {
  name: "service",
  type: "document",
  title: "Service Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
      description: "Main title of the service section",
    },
    {
      name: "description",
      type: "text",
      title: "Section Description",
      description: "Subtitle or description under the title",
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
    },
    {
      name: "services",
      type: "array",
      title: "Service Offerings",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) => Rule.min(4).error('Minimum 4 services are required'),
      of: [
        {
          type: "object",
          title: "Service",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Service Title",
            },
            {
              name: "description",
              type: "text",
              title: "Service Description",
            },
          ],
        },
      ],
      description: "List of services offered (minimum 4 items required)",
    },
  ],
};

export default service;
