export const fetchBooks = async () => {
    const response = await fetch('http://localhost:4000/api/getBooks', {
        method: 'GET'
    }); 
    const data = await response.json();
    return data.books;
};
