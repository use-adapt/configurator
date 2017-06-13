
from flask import json

from .configurator import app

@app.route('/')
def index():
    with open(app.config['DATA_FILE'], 'r') as f:
        data = json.loads(f.read())

    return json.jsonify(data)

@app.route('/project/<name>/<key>/<value>')
def project_set(name, key, value):
    with open(app.config['DATA_FILE'], 'r') as f:
        data = json.loads(f.read())

    projects = []
    for category in data['projects']:
        for project in category:
            projects.append(project)

    modified = None
    for project in projects:
        if project['name'] == name:
            project['name']['key'] = value
            modified = project['name']
            break

    data['projects'] = projects
    return json.jsonify(modified)

@app.route('/project/<name>/<key>')
def project_get(name, key):
    with open(app.config['DATA_FILE'], 'r') as f:
        data = json.loads(f.read())

    projects = []
    for category in data['projects']:
        for project in category:
            projects.append(project)

    for project in projects:
        if project['name'] == name:
            project['name']['key'] = value
            break

    data['projects'] = projects
    return json.jsonify(data)


