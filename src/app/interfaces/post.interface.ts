export interface singlePost {
    id: number,
    title: string;
    excerpt: string;
    text: string;
    author?: string;
    image: string;
    date?: Date;
    category: string;
    featured?: boolean;
}