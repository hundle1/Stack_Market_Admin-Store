import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export async function GET(
  req: Request,
  { params }: { params: { actorId: string } }
) {
  try {
    if (!params.actorId) {
      return new NextResponse("Actor name id is required", { status: 400 });
    }

    const actor = await prismadb.actor.findUnique({
      where: {
        id: params.actorId
      }
    });
  
    return NextResponse.json(actor);
  } catch (error) {
    console.log('[ACTOR_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function DELETE(
  req: Request,
  { params }: { params: { actorId: string, storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.actorId) {
      return new NextResponse("Actor name id is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId
      }
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const actor = await prismadb.actor.delete({
      where: {
        id: params.actorId
      }
    });
  
    return NextResponse.json(actor);
  } catch (error) {
    console.log('[ACTOR_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};


export async function PATCH(
  req: Request,
  { params }: { params: { actorId: string, storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name, nickname } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!nickname) {
      return new NextResponse("Nick Name is required", { status: 400 });
    }


    if (!params.actorId) {
      return new NextResponse("Actor name id is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId
      }
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const actor = await prismadb.actor.update({
      where: {
        id: params.actorId
      },
      data: {
        name,
        nickname,
      }
    });
  
    return NextResponse.json(actor);
  } catch (error) {
    console.log('[ACTOR_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
