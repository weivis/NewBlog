from app.components import components, views
from app.Common import ReturnRequest
from app.Middleware import NORMAL, TOKEN

@components.route('/Query', methods=["POST"])
@TOKEN(1)
def Query(request):
    """Query"""
    return ReturnRequest(views.Query(request.json))

@components.route('/Put', methods=["POST"])
@TOKEN(1)
def Put(request):
    """Put"""
    return ReturnRequest(views.Put(request.json))

@components.route('/Del', methods=["POST"])
@TOKEN(1)
def Del(request):
    """Del"""
    return ReturnRequest(views.Del(request.json))