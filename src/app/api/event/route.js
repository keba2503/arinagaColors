import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  const {
    name,
    date,
    location,
    description,
    image,
    fullDescription,
    exactLocation,
    mainActivities,
    recommendations,
    moreInfoLink,
  } = await request.json();

  try {
    const event = await prisma.event.create({
      data: {
        name,
        date: new Date(date),
        location,
        description,
        image,
        fullDescription,
        exactLocation,
        mainActivities,
        recommendations,
        moreInfoLink,
      },
    });
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating event' },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const events = await prisma.event.findMany();
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching events' },
      { status: 500 },
    );
  }
}

export async function PUT(request) {
  const { id } = request.params;
  const {
    name,
    date,
    location,
    description,
    image,
    fullDescription,
    exactLocation,
    mainActivities,
    recommendations,
    moreInfoLink,
  } = await request.json();

  try {
    const event = await prisma.event.update({
      where: { id: parseInt(id) },
      data: {
        name,
        date: new Date(date),
        location,
        description,
        image,
        fullDescription,
        exactLocation,
        mainActivities,
        recommendations,
        moreInfoLink,
      },
    });

    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating event' },
      { status: 500 },
    );
  }
}

export async function DELETE(request) {
  const { id } = request.params;

  try {
    await prisma.event.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting event' },
      { status: 500 },
    );
  }
}
