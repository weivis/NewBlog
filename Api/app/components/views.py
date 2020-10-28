from app.Models import Components

def Query(request):
    components = request.get('components', None)
    limit = request.get('limit', None)

    if not components or not limit:
        return 400, "参数有误", {}

    return 200, "", [ i.toDict() for i in Components.query.filter(Components.components == components).order_by(Components.create_time.desc(),Components.sort.desc()).limit(int(limit)) ]

def Put(request):
    components = request.get('components', None)
    totype = request.get('totype', None)
    data = request.get('data', None)

    if not components:
        return 400, "组件名不能为空", {}

    if not totype:
        return 400, "类型不能为空", {}

    if not data:
        return 400, "数据不能为空", {}

    try:
        Components()._create(components=components, totype=totype, data=data)
        return 200, "", {}

    except Exception as e:
        print(e)
        return 400, "", {}

def Del(request):
    id = request.get("id", None)

    if not id:
        return 400, "ID不能为空", {}

    obj = Components.query.get(id)

    if not obj:
        return 400, "项不存在", {}

    try:
        obj._delete()
        return 200, "", {}

    except Exception as e:
        print(e)
        return 400, "", {}
