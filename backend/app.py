from flask import Flask

# flask --app app run
app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
