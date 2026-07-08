const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Contact = require('./models/Contact');

dotenv.config();

const contacts = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@example.com',
    favoriteColor: 'azul',
    birthday: '1990-05-15'
  },
  {
    firstName: 'María',
    lastName: 'García',
    email: 'maria.garcia@example.com',
    favoriteColor: 'rojo',
    birthday: '1992-08-22'
  },
  {
    firstName: 'Carlos',
    lastName: 'Rodríguez',
    email: 'carlos.rodriguez@example.com',
    favoriteColor: 'verde',
    birthday: '1988-12-10'
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing contacts
    await Contact.deleteMany({});
    console.log('Cleared existing contacts');

    // Insert new contacts
    const insertedContacts = await Contact.insertMany(contacts);
    console.log('Inserted contacts:', insertedContacts.length);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}

seedDatabase();
