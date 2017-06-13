

class Project():
    def __init__(self, name: str, category: str, github: str = None,
            website: str = None, image: str = None, image_source: str = None,
            configurations: List[Configuration] = []):
        self.name = name
        self.category = category
        self.github = github
        self.website = website
        self.image = image
        self.image_source = image_source
        self.configurations = []

    def add_configuration(self, conf: Configuration):
        self.configurations.append(conf)

class Configuration():
    def __init__(self, project_name: str, requirement_list: List[Requirement]):
        self.project_name = project_name
        self.requirement_list = requirement_list

    def add_requirement(self, req: Requirement):
        self.requirement_list.append(req)

class Requirement():
    def __init__(self, name: str, category: str):
        self.name = name
        self.category = category
