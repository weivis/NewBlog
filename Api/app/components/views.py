from app.Models import Components

def Query(request):
    components = request.get('components', None)
    limit = request.get('limit', None)

    if not limit:
        return 400, "参数有误", {}

    return 200, "", [ i.toDict() for i in Components.query.filter(Components.components == components).order_by(Components.create_time.desc(),Components.sort.desc()).limit(int(limit)) ]

def Put(request):
    components = request.get('components', None)
    totype = request.get('totype', None)
    data = request.get('data', None)
    cover = request.get('cover', None)
    title = request.get('title', None)
    introduce = request.get('introduce', None)

    if not components:
        return 400, "组件名不能为空", {}

    if not totype:
        return 400, "类型不能为空", {}

    if int(totype) == 2:
        if not cover:
           return 400, "站外链接必须上传封面", {} 

        if not title:
            return 400, "站外链接必须填写标题", {}

        if not introduce:
            return 400, "站外链接必须填写介绍", {}

    if not data:
        return 400, "数据不能为空", {}

    try:
        Components()._create(components=components, totype=totype, data=data, cover=cover, title=title, introduce=introduce)
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
