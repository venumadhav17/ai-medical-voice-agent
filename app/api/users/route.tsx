import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  try {
    // Check if User Already Exist
    const users = await db
      .select()
      .from(usersTable)
      //@ts-ignore
      .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));
    // If not then Create New User
    if (users?.length == 0) {
      const result = await db
        .insert(usersTable)
        .values({
          //@ts-ignore
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
          credits: 10
        })
        //@ts-ignore
        .returning({ usersTable });
      return NextResponse.json(result[0]?.usersTable);
    }
    return NextResponse.json(users[0]);
  } catch (e) {
    return NextResponse.json(e);
  }
}
