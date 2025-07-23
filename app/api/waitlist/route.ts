import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const docRef = await addDoc(collection(db, "waitlist"), {
      name,
      email,
      createdAt: Timestamp.now(),
    });
    return NextResponse.json({ id: docRef.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
