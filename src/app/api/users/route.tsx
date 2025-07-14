

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function GET() {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json(users)

    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "Bunday email bilan foydalanuvchi mavjud." },
                { status: 400 }
            );
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Server xatosi" }, { status: 500 });
    }
}
