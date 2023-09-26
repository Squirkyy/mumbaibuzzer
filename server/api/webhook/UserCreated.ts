export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const userID = body?.data?.id;


    return await prisma?.user.create({
        data: {
            ID: userID,
            // ... any other fields you want to set
        },
    });
});
