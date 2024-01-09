// import startDB from "lib/";
import startDB from "@/app/library/helpers/dbConfig";
import LinkModel from "@/app/library/models/linkModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { start } from "repl";

export const GET = async () => {
  try {
    await startDB();
    const data = await LinkModel.findOne();
    let link = data.link;
    if (!data)
      return NextResponse.json(
        {
          error: "No more links for today",
        },
        { status: 404 }
      );
    await data.deleteOne();

    return NextResponse.json({
      link,
    });
  } catch (e) {
    console.log(e.message);
    return NextResponse.json(
      {
        error: "Something went wrong trying to fetch link.",
      },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    await startDB();
    const body = await req.json();
    if (Array.isArray(body.links)) {
      // Iterate over each link and create a document for each
      for (const singleLink of body.links) {
        await LinkModel.create({ link: singleLink });
      }
    } else {
      // If body.links is not an array, handle it as a single link
      await LinkModel.create(body);
    }
    const count = await LinkModel.countDocuments();
    return NextResponse.json({
      message: "Links successfully created",
      count: count,
    });
  } catch (e) {
    console.log(e.message);
    return NextResponse.json(
      {
        error: "Something went wrong trying to add links",
      },
      { status: 500 }
    );
  }
};
