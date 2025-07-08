import http.server
import socketserver
import os

PORT = 8000

web_dir = os.path.join(os.path.dirname(__file__), '.')
os.chdir(web_dir)

Handler = http.server.SimpleHTTPRequestHandler

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        print("Navigate to this address in your web browser.")
        print("Press Ctrl+C to stop the server.")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")
except OSError as e:
    print(f"\nCould not start server on port {PORT}. It might be in use.")
    print(f"Error: {e}")
