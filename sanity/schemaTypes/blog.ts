export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the blog',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'blogImage',
      type: 'image',
      title: 'Image of your blog article',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description of the blog',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content of your blog article',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
