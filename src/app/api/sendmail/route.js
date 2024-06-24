import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Verifica que las variables de entorno estén presentes
    if (!process.env.CORREO || !process.env.PASS) {
      throw new Error('Las credenciales de correo no están configuradas');
    }

    console.log('Correo:', process.env.CORREO);
    console.log('Contraseña:', process.env.PASS);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CORREO,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: process.env.CORREO,
      to: 'arinagacolors@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el correo' }), { status: 500 });
  }
}
