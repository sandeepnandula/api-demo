import logging
from google.appengine.ext import ndb
from models.users import Users
log = logging.getLogger(__name__)


class HomePageServices(object):
    @staticmethod
    def get_all_users():
        users = Users.query().fetch()
        log.info(users)
        users_details = []
        for user in users:
            users_details.append({"user_name": user.name, "email": user.email_id, "fav_food": user.fav_food})
        return users_details

    @staticmethod
    def register_a_user(name, email_id, fav_food, platform):
        log.info(name)
        user_obj = Users.get_by_id(email_id)
        if not user_obj:
            Users.create_or_update(name, email_id, fav_food, platform)
            return {"status": "success", "msg": " you are registered"}
        else:
            return {"status": "error", "msg": "you have already registered"}

    @staticmethod
    def update_user(email_id, fav_food):
        user_obj = Users.get_by_id(email_id)
        if user_obj:
            Users.create_or_update(user_obj.name, email_id, fav_food, user_obj.platform)
            return {"status": "success", "msg": " updated"}
        else:
            return {"status": "error", "msg": "invalid credentials"}

    @staticmethod
    def delete_user(email_id):
        user_obj = Users.get_by_id(email_id)
        if user_obj:
            ndb.Key(Users, email_id).delete()
            return {"status": "success", "msg": " deleted"}
        else:
            return {"status": "error", "msg": "invalid credentials"}