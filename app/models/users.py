import logging
from google.appengine.ext import ndb
from models.model_utils import ModelUtils

log = logging.getLogger(__name__)


class Users(ModelUtils, ndb.Model):
    name = ndb.StringProperty()
    email_id = ndb.StringProperty()
    fav_food = ndb.StringProperty()
    platform = ndb.StringProperty()

    @staticmethod
    def create_or_update(name, email_id, fav_food, platform):
        test_model = Users(id= email_id)
        test_model.name = name
        test_model.email_id = email_id
        test_model.fav_food = fav_food
        test_model.platform = platform
        test_model.put()
        return test_model