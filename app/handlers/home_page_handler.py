import logging
from base import BaseHandler

log = logging.getLogger(__name__)


class HomePageHandler(BaseHandler):

    def load_home_page(self):
        self.render_html("Home.html")

    def warm_up(self):
        self.render_text("hello world")
