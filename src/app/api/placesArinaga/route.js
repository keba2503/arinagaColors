import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Create a new Place of Interest
export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Request Body:', body);
    const { title, description, imageUrl, location } = body;

    if (!title || !description || !imageUrl || !location) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 },
      );
    }

    const placeOfInterest = await prisma.placeOfInterestArinaga.create({
      data: { title, description, imageUrl, location },
    });

    return NextResponse.json(placeOfInterest, { status: 201 });
  } catch (error) {
    console.error('Error en POST:', error);
    return NextResponse.json({ error: 'Error creando lugar' }, { status: 500 });
  }
}

// Get all Places of Interest
export async function GET() {
  try {
    const placesOfInterest = await prisma.placeOfInterestArinaga.findMany();
    return NextResponse.json(placesOfInterest, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching places of interest' },
      { status: 500 },
    );
  }
}

// Update an existing Place of Interest by ID
export async function PUT(request) {
  const { id } = request.params;
  const { title, description, imageUrl, location } = await request.json();

  try {
    const placeOfInterest = await prisma.placeOfInterestArinaga.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        imageUrl,
        location,
      },
    });

    return NextResponse.json(placeOfInterest, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating place of interest' },
      { status: 500 },
    );
  }
}

// Delete a Place of Interest by ID
export async function DELETE(request) {
  const { id } = request.params;

  try {
    await prisma.placeOfInterestArinaga.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting place of interest' },
      { status: 500 },
    );
  }
}
