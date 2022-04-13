export const project = {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        },
        {
            name: 'imagesList',
            title: 'Images',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'projectImage' }] }],
            validation: Rule => Rule.required()
        },
    ]
}