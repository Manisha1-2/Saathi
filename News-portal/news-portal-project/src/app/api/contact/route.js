import { NextResponse } from "next/server";

export async function POST(request) {

  try {

    const body = await request.json();

    console.log("New Contact Message:", body);


    return NextResponse.json({
      success: true,
      message: "Message received successfully",
    });


  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );

  }
}