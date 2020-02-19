export class BookBuilder {
    title: string;
    author: string;
    link: string;
    cover: string;

    constructor(title: string) {
        this.title = title;
    }

    setCover(cover: string): BookBuilder {
        this.cover = cover;
        return this;
    }

    setAuthor(author: string): BookBuilder {
        this.author = author;
        return this;
    }

    setTitle(title: string): BookBuilder {
        this.title = title;
        return this;
    }

    setLink(link: string): BookBuilder {
        this.link = link;
        return this;
    }

    build(): Book {
        return new Book(this);
    }

}

export class Book {
    title: string;
    author: string;
    link: string;
    cover: string;

    constructor(builder: BookBuilder) {
        this.title = builder.title;
        this.author = builder.author;
        this.link = builder.link;
        this.cover = builder.cover;
    }
}