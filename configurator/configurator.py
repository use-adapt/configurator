
from flask import Flask

app = Flask(__name__)
DATA_FILE = "/home/zack/src/adapt/configurator/data/data.json"
app.config.from_object(__name__)
