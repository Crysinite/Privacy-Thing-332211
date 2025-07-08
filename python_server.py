from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/terms')
def terms():
    return render_template('terms.html')

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')

# Individual service routes
@app.route('/service/facebook')
def facebook():
    return render_template('services/facebook.html')

@app.route('/service/twitter')
def twitter():
    return render_template('services/twitter.html')

@app.route('/service/discord')
def discord():
    return render_template('services/discord.html')

# Generic service route for future services
@app.route('/service/<service_name>')
def service_detail(service_name):
    try:
        return render_template(f'services/{service_name.lower()}.html')
    except:
        return render_template('index.html')  # Redirect to home if service not found

# Serve static files
@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    # Enable debug mode for development
    app.run(debug=True, host='0.0.0.0', port=5000)