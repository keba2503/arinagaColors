import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await prisma.eventArinaga.delete({
      where: { id: parseInt(id) },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting event:', error.message, error.stack);
    return new Response(JSON.stringify({ error: 'Error deleting event' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const event = await prisma.eventArinaga.findUnique({
      where: { id: parseInt(id) },
    });

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    } else {
      return NextResponse.json(event, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching event' },
      { status: 500 },
    );
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
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
    const event = await prisma.eventArinaga.update({
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
