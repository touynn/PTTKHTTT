// lib/db.js (or lib/postgres.js, or utils/db.js - choose a location)
import postgres, { Sql } from 'postgres';
import { unstable_noStore as noStore } from 'next/cache'; // For disabling caching in Server Components if needed

// Prevent multiple connections during development hot-reloading
// See: https://github.com/vercel/next.js/issues/7752
// And: https://github.com/porsager/postgres#connection-pooling-and-disconnections

declare global {
    var postgresSqlClient: Sql<{}> | undefined; // Or just Postgres if you initialize it immediately
}

// Ensure consistent declaration type
const globalForPostgres = globalThis as typeof globalThis & {
    postgresSqlClient?: Sql<{}>;
};

let sql: Sql<{}>;

if (process.env.NODE_ENV === 'production') {
    // In production, use the environment variable directly
    if (!process.env.POSTGRES_URL) {
        throw new Error("POSTGRES_URL environment variable is not set in production.");
    }
    sql = postgres(process.env.POSTGRES_URL, {
        // Production-specific options (optional)
        // ssl: 'require', // Example: Force SSL in production if needed
        max: 10, // Example: Max connections
        idle_timeout: 30, // Example: Close idle connections after 30s
        // Add other production config as needed
    });
    console.log('PostgreSQL connection established for production.');

} else {
    // In development, use a global variable to preserve the connection
    // across module reloads caused by HMR (Hot Module Replacement).
    if (!globalForPostgres.postgresSqlClient) {
        if (!process.env.POSTGRES_URL) {
            console.warn("POSTGRES_URL environment variable is not set. Using default or potentially failing.");
            // Optionally provide default dev credentials here, but env var is better
        }
        console.log(process.env.POSTGRES_URL);
        globalForPostgres.postgresSqlClient = postgres(process.env.POSTGRES_URL || '', {
            // Development-specific options (optional)
            max: 5, // Fewer connections might be fine for dev
            // Add other development config as needed
        });
        console.log('PostgreSQL connection established for development (new).');
    } else {
        console.log('PostgreSQL connection reused for development.');
    }
    sql = globalForPostgres.postgresSqlClient;
}

export { sql, noStore }; // Export the sql instance and noStore utility