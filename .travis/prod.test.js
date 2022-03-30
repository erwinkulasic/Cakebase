const cakebase = require('../src/index.js')('../src/data.json');

async function GenerateData() {

    console.time("GenerateData"); // Start the timer

    for (let i = 0; i < 10000; i++) // Generate 10,000 random data
        await cakebase.set({ index: i, hello: 'world' }); // Set the data

    console.timeEnd("GenerateData"); // End the timer

    console.log("Data successfully generated."); // Log the data
}

async function ReadData() {

    console.time("ReadData"); // Start the timer

    for (let i = 0; i < 10000; i++) { // Read 10,000 random data

        let data = cakebase.get(e => e.index === i); // Get the data

        console.log(data); // Log the data
    }

    console.timeEnd("ReadData"); // End the timer

    console.log("Data successfully readed."); // Log the data
}

async function UpdateData() {

    console.time("UpdateData"); // Start the timer

    for (let i = 0; i < 10000; i++) { // Update 10,000 random data
        await cakebase.update(e => e.index === i, { email: "hello@some.com" }); // Update the data
    }

    console.timeEnd("UpdateData"); // End the timer

    console.log("Data successfully updated."); // Log the data
}

async function DeleteData() { // Delete all data

    console.time("DeleteData"); // Start the timer

    await cakebase.delete(e => e.hello === 'world'); // Delete all data

    console.timeEnd("DeleteData"); // End the timer

    console.log("Data successfully deleted."); // Log the data
}

async function Run() {

    console.time("runtime"); // Start the timer

    await GenerateData(); // Generate data
    await ReadData(); // Read data
    await UpdateData(); // Update data
    await DeleteData(); // Delete data

    console.timeEnd("runtime"); // End the timer
}

Run();