import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { message: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'waitlist.json');

        // Ensure data directory exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        let waitlist = [];

        // Read existing data if file exists
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, 'utf8');
            try {
                waitlist = JSON.parse(fileData);
            } catch (e) {
                // If file is corrupt, start fresh
                waitlist = [];
            }
        }

        // Check if email already exists
        if (waitlist.some((entry: any) => entry.email === email)) {
            return NextResponse.json(
                { message: 'You are already on the list!' },
                { status: 409 } // Conflict
            );
        }

        // Add new email
        const newEntry = {
            email,
            date: new Date().toISOString(),
        };

        waitlist.push(newEntry);

        // Save back to file
        fs.writeFileSync(filePath, JSON.stringify(waitlist, null, 2));

        return NextResponse.json(
            { message: 'Success! You have been added to the waitlist.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Waitlist API Error:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
