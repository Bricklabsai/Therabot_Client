
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
        content: string,
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