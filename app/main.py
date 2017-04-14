import webapp2
import logging

from routes import route_list

log = logging.getLogger(__name__)

log.debug("******** new instance of the app *************")
app = webapp2.WSGIApplication(route_list,
                              debug= True)
log.debug('App is ready to handle requests')

