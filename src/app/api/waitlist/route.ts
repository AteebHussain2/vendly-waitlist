import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { message: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        try {
            // 1. Create the table if it doesn't exist (Lazy initialization)
            // handling table creation here ensures "one-click" usage for the user
            await sql`
        CREATE TABLE IF NOT EXISTS waitlist (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) NOT NULL UNIQUE,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `;

            // 2. Insert the email
            await sql`
        INSERT INTO waitlist (email)
        VALUES (${email})
      `;

            return NextResponse.json(
                { message: 'Success! You have been added to the waitlist.' },
                { status: 200 }
            );
        } catch (dbError: any) {
            // Handle duplicate email error (Unique constraint violation)
            if (dbError.code === '23505') {
                return NextResponse.json(
                    { message: 'You are already on the list!' },
                    { status: 409 }
                );
            }
            throw dbError; // Rethrow other errors to the generic handler
        }

    } catch (error) {
        console.error('Waitlist API Error:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
