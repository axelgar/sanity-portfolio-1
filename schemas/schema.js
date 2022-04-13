import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { project } from './project'
import { projectImage } from './projectImage'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    project,
    projectImage,
    {
      name: 'post',
      type: 'document',
      title: 'Post',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
          },
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'excerpt',
          title: 'Excerpt',
          type: 'string',
        },
        {
          name: 'coverImage',
          title: 'Cover Image',
          type: 'image',
        },
        {
          name: 'date',
          title: 'Date',
          type: 'datetime',
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{ type: 'author' }],
        },
      ],
    },

    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'picture',
          title: 'Picture',
          type: 'image',
        },
      ],
    },
  ]),
})
