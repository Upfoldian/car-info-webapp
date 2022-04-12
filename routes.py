from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/img_debug')
def hello():
	return 'Hello, World'