function getComb(data, comb) {
  let result = "";
  for (let ch of comb) {
    result += data[ch];
  }

  return result;
}

export async function GET(req) {
  // Set CORS headers for all responses
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers
    });
  }

  // Extract the 'comb' query parameter from the request URL
  const comb = req.nextUrl.searchParams.get('comb');
  console.log(comb);

  // 793261
  const keyData = {
    "3": "0GSuys8Jj82Nf",
    "2": "2WGd",
  };

  // If 'comb' is not provided, return an error response
  if (!comb) {
    return new Response(
      JSON.stringify({ error: "Params are missing" }),
      {
        status: 400,
        headers
      }
    );
  }

  // Return the JSON response with the dynamic value
  const responseData = {
    data: getComb(keyData, comb),
  };

  return new Response(JSON.stringify(responseData), {
    headers
  });
}

// Handle OPTIONS request explicitly
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}