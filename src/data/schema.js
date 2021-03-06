import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default schema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'posts',
            columns: [
                { name: 'title', type: 'string' },
                { name: 'subtitle', type: 'string' },
                { name: 'body', type: 'string' },
            ],
        }),
        tableSchema({
            name: 'comments',
            columns: [
                { name: 'body', type: 'string' },
                { name: 'post_id', type: 'string', isIndexed: true },
                { name: 'is_nasty', type: 'bool' },
            ],
        }),
    ],
})