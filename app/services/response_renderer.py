import os
import json
import logging
import jinja2
from helper import ComplexEncoder

log = logging.getLogger(__name__)

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), "../")),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)


class ResponseRenderer(object):
    """Different types of responses"""

    def __init__(self, arg):
        super(ResponseRenderer, self).__init__()

    def render_html(self, _template):
        tmpl = os.path.join(os.path.dirname(__file__), "../"+_template)
        template_content = open(tmpl, 'r').read()
        self.response.headers['Content-Type'] = 'text/html'
        self.response.out.write(template_content)

    def render_template(self, _template, data):
        template = JINJA_ENVIRONMENT.get_template(_template)
        template_content = template.render(data)
        self.response.out.write(template_content)

    def get_template_string(self, _template, data):
        template = JINJA_ENVIRONMENT.get_template(_template)
        template_content = template.render(data)
        return template_content

    def render_json(self, obj):
        rv = json.dumps(obj, cls=ComplexEncoder)
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(rv)

    def render_js(self, _template, data):
        template = JINJA_ENVIRONMENT.get_template(_template)
        template_content = template.render(data)
        self.response.headers['Content-Type'] = 'application/javascript'
        self.response.out.write(template_content)

    def render_text(self, obj):
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write(obj)
