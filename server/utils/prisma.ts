// server/prisma.ts

import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

let prismaInstance: PrismaClient;

if (process.env.NODE_ENV === "production") {
    prismaInstance = new PrismaClient();
} else {
    // Prevent multiple instances of Prisma Client in development
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prismaInstance = global.prisma;
}

export default prismaInstance;
