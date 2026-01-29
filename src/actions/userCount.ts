'use server';

import { prisma } from "@/lib/prisma";

export default async function userCount() {
    return await prisma.waitlist.count()
}