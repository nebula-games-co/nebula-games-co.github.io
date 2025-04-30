self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    if (url.searchParams.get('action') === 'verify') {
        const code = url.searchParams.get('code');
        const response = {
            success: code === currentCode,
            message: code === currentCode ? "Valid code" : "Invalid code",
            token: code === currentCode ? sessionToken : null
        };
        
        event.respondWith(
            new Response(JSON.stringify(response), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
        );
    }
});
