import webapp2
from services.response_renderer import ResponseRenderer

# from webapp2_extras import sessions


class BaseHandler(webapp2.RequestHandler, ResponseRenderer):
    def __init__(self, request, response):
        self.initialize(request, response)

    def handle_exception(self, exception, debug):
        super(BaseHandler, self).handle_exception(exception, debug)