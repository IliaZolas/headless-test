"use client"; 
import { useEffect, useState } from 'react';
import Card from '../components/card';
import { fetchBooks } from './fetchBooks';

interface Book {
  _id: string;
  image_url: string;
  title: string;
  description: string;
  cloudinary: object;
}

export default function BlogPosts() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
      console.log(booksData)
      console.log(books)
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {books.map((book) => (
          <Card
            key={book._id}
            image_url={book.cloudinary.secure_url}
            title={book.title}
            description={book.description[0]?.children[0]?.text}
            link={`/books/${book._id}`}
            buttonText='Read' 
            id={book._id}          
            />
        ))
        }
      </div>
    </main>
  );
}
