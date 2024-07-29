
export type StrapiBase<T> = {
    data?: T,
    meta?: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number,
        }
    },
    error?: {
        status: number,
        name: string,
        message: string,
        details: object,
    }
}

export type Category = {
    id: number,
    attributes: {
        Name: string,
        slug: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string
    }
}

export type PostSummary = {
    id: number,
    attributes: {
        title: string;
        excerpt: string;
        slug: string;
        updatedAt: string;
        author: {
            data: Author
        }
        featuredImage: any;
        
    }
}

export type Post = {
    id: number,
    attributes: {
        title: string;
        excerpt: string;
        // this might be removed
        slug: string;
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        content: any,
        featuredImage: object,
        category: {
            data: Category,
        },
        author: {
            data: Author
        },
    }
}

export type Author = {
    id: number,
    attributes: {
        name: string,
        bio: string | null,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        image: object
    }
}

export type Image = {
    id: number,
}

const c = {
    "data":
    {
        "id": 3,
        "attributes":
        {
            "name": "20240703_171536.jpg",
            "alternativeText": null,
            "caption": null,
            "width": 4080,
            "height": 3060,
            "formats":
            {
                "large": { "ext": ".jpg", "url": "/uploads/large_20240703_171536_093d4ac5d1.jpg", "hash": "large_20240703_171536_093d4ac5d1", "mime": "image/jpeg", "name": "large_20240703_171536.jpg", "path": null, "size": 136.57, "width": 1000, "height": 750, "sizeInBytes": 136575 },
                "small": { "ext": ".jpg", "url": "/uploads/small_20240703_171536_093d4ac5d1.jpg", "hash": "small_20240703_171536_093d4ac5d1", "mime": "image/jpeg", "name": "small_20240703_171536.jpg", "path": null, "size": 32.82, "width": 500, "height": 375, "sizeInBytes": 32819 },
                "medium": { "ext": ".jpg", "url": "/uploads/medium_20240703_171536_093d4ac5d1.jpg", "hash": "medium_20240703_171536_093d4ac5d1", "mime": "image/jpeg", "name": "medium_20240703_171536.jpg", "path": null, "size": 73.95, "width": 750, "height": 563, "sizeInBytes": 73947 },
                "thumbnail": { "ext": ".jpg", "url": "/uploads/thumbnail_20240703_171536_093d4ac5d1.jpg", "hash": "thumbnail_20240703_171536_093d4ac5d1", "mime": "image/jpeg", "name": "thumbnail_20240703_171536.jpg", "path": null, "size": 6.25, "width": 208, "height": 156, "sizeInBytes": 6245 }
            },
            "hash": "20240703_171536_093d4ac5d1",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 2023.18,
            "url": "/uploads/20240703_171536_093d4ac5d1.jpg",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2024-07-08T17:48:01.902Z",
            "updatedAt": "2024-07-08T17:51:52.500Z"
        }
    }
}
