import logging
import json
from base import BaseHandler
from services.home_page_services import HomePageServices

log = logging.getLogger(__name__)


class HomePageHandler(BaseHandler):

    def load_home_page(self):
        self.render_html("Home.html")

    def warm_up(self):
        self.render_text("hello world")

    def get_all_users(self):
        users = HomePageServices.get_all_users()
        if users:
            self.render_json({"status": "success", "msg": users})
        else:
            self.render_json({"status": "error", "msg": "invalid"})

    def register_user(self):
        params = json.loads(self.request.body)
        log.info(params)
        name = params.get("userName")
        email_id = params.get("email")
        fav_food = params.get("fav_food")
        platform = params.get("platform")
        if name and email_id and fav_food and platform:
            user_status = HomePageServices.register_a_user(name, email_id, fav_food, platform)
            self.render_json(user_status)
        else:
            self.render_json({"status": "error", "msg": "fill the form"})

    def update_user(self):
        params = json.loads(self.request.body)
        email = params.get("email")
        fav_food = params.get("fav_food")
        if email and fav_food:
            status = HomePageServices.update_user(email, fav_food)
            self.render_json(status)
        else:
            self.render_json({"status": "error", "msg": "fill the form"})

    def delete_user(self, email):
        if email:
            status = HomePageServices.delete_user(email)
            self.render_json(status)
        else:
            self.render_json({"status": "error", "msg": "fill the credentials"})