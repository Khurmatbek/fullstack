
import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

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
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
        return NextResponse.json(user);

    } catch (error) {
        console.error("Error creating user:", error);
    }
}