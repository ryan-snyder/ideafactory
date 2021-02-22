export default {
    type: 'object',
    name: 'pdfDocument',
    title: 'PDF Document',
    fields: [
      {
        type: 'url',
        name: 'url',
        description: "PDF url"
      }
    ],  preview: {
        select: {
          title: 'url'
        },
        prepare({ title }) {
          return {
            title: `PDF Document: ${title}`
          }
        }
    }
  
}