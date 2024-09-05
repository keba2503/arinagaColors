import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// DELETE: Eliminar un lugar de interés por ID
export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await prisma.placeOfInterest.delete({
      where: { id: parseInt(id) },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(
      'Error deleting place of interest:',
      error.message,
      error.stack,
    );
    return new Response(
      JSON.stringify({ error: 'Error deleting place of interest' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}

// GET: Obtener un lugar de interés por ID
export async function GET(request, { params }) {
  const { id } = params;

  try {
    const placeOfInterest = await prisma.placeOfInterest.findUnique({
      where: { id: parseInt(id) },
    });

    if (!placeOfInterest) {
      return NextResponse.json(
        { error: 'Place of interest not found' },
        { status: 404 },
      );
    } else {
      return NextResponse.json(placeOfInterest, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching place of interest' },
      { status: 500 },
    );
  }
}

// PUT: Actualizar un lugar de interés por ID
export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description, imageUrl, location } = await request.json();

  try {
    const placeOfInterest = await prisma.placeOfInterest.update({
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
