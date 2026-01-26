import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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
            const newEntry = await prisma.waitlist.create({
                data: {
                    email: email,
                },
            });

            return NextResponse.json(
                { message: 'Success! You have been added to the waitlist.', data: newEntry },
                { status: 200 }
            );
        } catch (dbError: any) {
            // Prisma unique constraint violation code
            if (dbError.code === 'P2002') {
                return NextResponse.json(
                    { message: 'You are already on the list!' },
                    { status: 409 }
                );
            }
            throw dbError;
        }

    } catch (error) {
        console.error('Waitlist API Error:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
