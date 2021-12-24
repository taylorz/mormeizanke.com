export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'aboutText',
      title: 'About Text',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}
