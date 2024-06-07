import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
      .catch(error => console.error("Error fetching books:", error));
  }, ); // Make sure to provide an empty dependency array to useEffect to run it only once

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/book/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        alert("Book deleted successfully");
        setAllBooks(data);
      })
      .catch(error => console.error("Error deleting book:", error));
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Book</h2>
      <div className="overflow-x-auto">
        <Table className='lg:w-[1180px]'>
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Book Category</Table.HeadCell>
            <Table.HeadCell>Prices</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {Array.isArray(allBooks) && allBooks.map((book, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={book._id}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>10$</Table.Cell>
                <Table.Cell>
                  <Link to={`/admin/dashboard/edit-book/${book._id}`} className="font-medium text-cyan-600 mr-5 hover:underline dark:text-cyan-500">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(book._id)} className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageBook;
