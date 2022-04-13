export const projectImage = {
    name: 'projectImage',
    type: 'document',
    title: 'Project Image',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: Rule => Rule.required()
        },
    ]
}