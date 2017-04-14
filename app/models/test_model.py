import logging
from google.appengine.ext import ndb
from models.model_utils import ModelUtils

log = logging.getLogger(__name__)


class TestModel(ModelUtils, ndb.Model):
    Name = ndb.StringProperty()

    @staticmethod
    def update_name(name):
        if name:
          test_model = TestModel(id= name)
          test_model.Name = name
          test_model.put()
