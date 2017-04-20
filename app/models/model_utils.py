class ModelUtils(object):
    def to_dict(self):
        result = super(ModelUtils, self).to_dict()
        result['key'] = self.key
        result['id'] = self.key.id()
        return result

table2dict = lambda r: {c.name: getattr(r, c.name) for c in r.__table__.columns}


class CannotFindEntity(Exception):
    pass


class TooManyResults(Exception):
    pass


class ParameterMissing(Exception):

    pass


class EntityAlreadyExists(Exception):
    pass


class PermissionDenied(Exception):
    pass
