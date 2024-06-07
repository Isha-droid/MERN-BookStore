import React, { useState } from 'react';
import { useParams , useLoaderData } from 'react-router-dom';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';



// Assuming you have Label, TextInput, Textarea, Button components defined somewhere

const EditBook = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    pdfURL,
  } = useLoaderData(); // You need to invoke the function

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self help",
    "Memoir",
    "Business",
    "Children",
    "Travel",
    "Religion",
    "Art and design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    category || bookCategories[0] // Use the category from loader data if available
  );

  const handleChangeSelectedValues = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleBookUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const bookAuthor = form.bookAuthor.value;
    const imageURL = form.imageURL.value;
    const categoryName = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      bookAuthor,
      imageURL,
      categoryName,
      bookDescription,
      bookPDFURL,
    };

    console.log(bookObj);

    // Perform further actions like sending the data to a server or updating state
    fetch(`http://localhost:3000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating book book:", error);
      });
    form.reset();
  };

  return (
    <div className='px-4 my-12 '>
      <h2 className='text-3xl font-bold mb-8'>Update a Book</h2>
      <form
        onSubmit={handleBookUpdate}
        className='flex lg:w-[1180px] flex-col flex-wrap gap-4'
      >
      <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required defaultValue={bookTitle} />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookAuthor" value="Book Author" />
            </div>
            <TextInput id="bookAuthor" name="bookAuthor" type="text" placeholder="Book Author" required defaultValue={authorName} />
          </div>
        </div>
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput id="imageURL" name="imageURL" type="url" placeholder="Book Image URL" required defaultValue={imageURL}/>
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book category" />
            </div>
            <select id='inputState' name="categoryName" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValues}>
              {bookCategories.map((item) => (
                <option key={item} value={item} defaultValue={bookCategories}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-8">
          <div className='w-full'>
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea id="bookDescription" name="bookDescription" type="text" placeholder="Book Description" required rows={4} defaultValue={bookDescription}/>
          </div>
          <div className='w-full'>
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF URL" />
            </div>
            <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL" required defaultValue={pdfURL}/>
          </div>
        </div>
        
        <Button type='submit' className='mt-5'>
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
