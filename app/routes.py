import webapp2

# This is the place where all of your URL mapping goes
route_list = []

route_list.extend([
    webapp2.Route(r'/updateUser', handler='handlers.HomePageHandler:update_user', methods="PUT"),
    webapp2.Route(r'/deleteUser/<:.*>', handler='handlers.HomePageHandler:delete_user', methods="DELETE"),
    webapp2.Route(r'/registerUser', handler='handlers.HomePageHandler:register_user', methods="POST"),
    webapp2.Route(r'/getAllUsers', handler='handlers.HomePageHandler:get_all_users', methods="GET"),
    webapp2.Route(r'/', handler='handlers.HomePageHandler:load_home_page', methods="GET")
    # webapp2.Route(r'/', handler='handlers.HomePageHandler:warm_up', methods="GET")
])
