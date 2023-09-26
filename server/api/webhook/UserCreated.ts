export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    return await prisma?.user.create(body.data?.id);
});