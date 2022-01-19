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
      name: 'pdf',
      title: 'PDF',
      type: 'file'
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
      name: 'month',
      title: 'Month',
      type: 'string',
      options: {
        list: [
          {title: 'January', value: '01'},
          {title: 'February', value: '02'},
          {title: 'March', value: '03'},
          {title: 'April', value: '04'},
          {title: 'May', value: '05'},
          {title: 'June', value: '06'},
          {title: 'July', value: '07'},
          {title: 'August', value: '08'},
          {title: 'September', value: '09'},
          {title: 'October', value: '10'},
          {title: 'November', value: '11'},
          {title: 'December', value: '12'},
        ],
        layout: 'radio'
      }
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
