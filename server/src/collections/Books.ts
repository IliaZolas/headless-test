import { CollectionConfig } from "payload/types";

export const Books: CollectionConfig = {
    slug: 'books',
    upload: true,
    fields: [
        {
        name: 'title',
        type: 'text',
        required: true,
        },
        {
        name: 'description',
        type: 'richText',
        required: true,
        },
        {
        name: 'user',
        type: 'relationship',
        relationTo: 'users',
        required: true,
        },
    ],
};
