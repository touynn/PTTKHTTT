import { Query } from "./query";
export async function Test(){
   // noStore(); // Uncomment this if you NEED fresh data on every request
                 // Otherwise, Next.js might cache the result based on params/request.
  try {
    console.log("Fetching from database...");
    // Note: The result is an array-like object, but TypeScript might need help.
    // Casting to unknown first, then to User[] is a common workaround.
    const query = `SELECT ten_quyen FROM quyen ORDER BY RANDOM() LIMIT 1`;
    const response = await Query(query)// Directly return the result
    const data = await response.json();
    console.log("fetched:", data);
    return data; // Directly return the result
  } catch (error) {
    console.error('Database Error:', error);
    // Handle errors appropriately, maybe return an empty array or throw
    // Be careful about leaking error details in production logs vs UI
    throw new Error('Failed to fetch users.'); // Or return [];
  }
}