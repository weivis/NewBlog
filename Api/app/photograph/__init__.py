from flask import Blueprint
photograph = Blueprint('photograph', __name__)
from ..photograph import urls