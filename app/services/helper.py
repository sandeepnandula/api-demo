import logging
import json
import datetime
from google.appengine.ext.ndb.key import Key
from google.appengine.api.urlfetch import Error as UrlFetchError
from google.appengine.api import urlfetch
from google.appengine.ext.ndb import Model

log = logging.getLogger(__name__)


class ComplexEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime.datetime):
            return int((obj - datetime.datetime(1970, 1, 1)).total_seconds() * 1000)
        if isinstance(obj, Key):
            return obj.urlsafe()
        if isinstance(obj, Model):
            return obj.to_dict()
        return None


