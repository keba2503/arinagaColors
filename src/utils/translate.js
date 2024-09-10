export async function translateText(text, targetLanguage) {
  console.log('entro aqui');
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  console.log(apiKey);
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: text,
      target: targetLanguage,
    }),
  });

  const data = await response.json();
  console.log('translateText', data);
  if (data.error) {
    console.log('entro aqui error');

    throw new Error(data.error.message);
  }

  return data.data.translations[0].translatedText;
}
