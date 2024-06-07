const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("hello world");
});

const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://mern-book-store:LIB3hQngJtKOXBPO@cluster0.ko9vcqj.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log('Connected to MongoDB Atlas');
    const booksCollection = client.db("BookInventary").collection("books");

    app.post("/upload-book", async (req, res) => {
      console.log("upload book called");
      const data = req.body;
      try {
        const result = await booksCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        console.error('Error uploading book:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    app.get("/all-books", async (req, res) => {
      try {
        const books = await booksCollection.find().toArray();
        res.send(books);
      } catch (error) {
        console.error('Error fetching all books:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    app.patch("/book/:id", async (req, res) => {
      const { id } = req.params;
      console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) }; // Assuming you are using ObjectId for _id
    
      const options = { upsert: true };
    
      try {
        if (!client.topology.isConnected()) {
          await client.connect();
          console.log('Connected to MongoDB Atlas');
        }
    
        const result = await booksCollection.updateOne(filter, { $set: updateBookData }, options);
    
        if (result.matchedCount === 0 && result.upsertedCount === 0) {
          res.status(404).json({ message: 'No book found with the provided ID' });
        } else {
          res.status(200).json({ message: 'Book updated successfully' });
        }
      } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });
    

    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;


      try {
        if (!client.topology.isConnected()) {
          await client.connect();
          console.log('Connected to MongoDB Atlas');
        }

        const result = await booksCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
          res.status(404).json({ message: 'No book found with the provided ID' });
        } else {
          res.status(200).json({ message: 'Book deleted successfully' });
        }
      } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      try {
        const result = await booksCollection.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error('Error fetching books by category:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });


    app.get("/book/:id", async (req, res) => {
      console.log("called");
      const { id } = req.params;
      console.log("fetched....");
      console.log(id);
    
      try {
    
        // Use MongoDB native driver to find by ID
        const result = await client.db("BookInventary").collection("books").findOne({ _id: id});
    
        console.log('Result:', result);  // Log the result for debugging
    
        if (result) {
          console.log('Book found:', result);
          res.send(result);  // Send the response if the book is found
        } else {
          console.log('Book not found');
          res.status(404).json({ message: 'Book not found' });  // Send a 404 response if the book is not found
        }
      } catch (error) {
        console.error('Error fetching book by ID:', error);
        res.status(500).json({ message: 'Internal server error' });  // Send a 500 response in case of an error
      }
    });
    
    
  } finally {
    // Uncomment the next two lines if you want to close the MongoDB connection when the server stops
    // await client.close();
    // console.log('Connection to MongoDB Atlas closed');
  }
}

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
  run().catch(console.error);
});
