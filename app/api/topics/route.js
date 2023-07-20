import connectDB from "@/libs/mongodb";
import Topic from '@/models/topic'
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });


}

export async function GET() {
    await connectDB();
    await Topic.find();
    const topics = await Topic.find();

    return NextResponse.json({ topics }, { status: 201 });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });

} 