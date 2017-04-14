import logging
from base import BaseHandler

log = logging.getLogger(__name__)


class HomePageHandler(BaseHandler):

    def warm_up(self):
        self.render_html("index.html")