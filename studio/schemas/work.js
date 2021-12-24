export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    },
    {
      name: 'publication',
      title: 'Publication',
      type: 'reference',
      to: {type: 'publication'}
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'}
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    },
  ],
  orderings: [
    {
      title: 'Category',
      name: 'categoryDesc',
      by: [
        {field: 'category', direction: 'desc'}
      ]
    },
  ]
}
