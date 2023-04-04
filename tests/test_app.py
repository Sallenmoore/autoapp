import sys

from app.models.model import Model

from autonomous import log


class TestApp:
    def test_model(self):
        m = Model(name="test")
        m.save()
        assert m.pk
