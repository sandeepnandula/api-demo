import webapp2

# This is the place where all of your URL mapping goes
route_list = []

route_list.extend([
    webapp2.Route(r'/', handler='handlers.HomePageHandler:warm_up', methods="GET")
])
