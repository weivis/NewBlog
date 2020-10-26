from PIL import Image

def HeadImg(files):
    """图片处理:头像裁剪"""
    
    file = Image.open(files)

    topw = [0, 0]

    xl, yl = file.size
    print(xl, yl)

    if xl > yl:
        topw = [yl, 1]
        print(topw)
    else:
        topw = [xl, 0]
        print(topw)

    px = topw[0]

    file = file.crop((0, 0, px, px))

    print(file.size)
    return file

# def ArticleCover(files):
#     templateW = 320
#     templateH = 192

#     im = Image.open(files)
#     size = im.size

#     if size[0] > size[1]:
#         rate = float(320) / float(size[0])
#     else:
#         rate = float(200) / float(size[1])

#     new_size = (int(size[0] * rate), int(size[1] * rate))
#     file = im.resize(new_size,Image.ANTIALIAS)
#     return file.crop((0, 0, 320, 192))

def ArticleCover(files):
    templateW = 320
    templateH = 192

    file = Image.open(files)
    source_w = [0, file.size[0]]
    source_h = [1, file.size[1]]

    # 取出源文件最短的一条边
    minlength = source_w if source_w[1] < source_h[1] else source_h

    if minlength[0] == 1:
        if source_w[1] > source_h[1]:
            rate = float(320) / float(source_w[1])
        else:
            rate = float(192) / float(source_h[1])
            
        new_size = (int(source_w[1] * rate), int(source_h[1] * rate))

        file = file.resize(new_size,Image.ANTIALIAS)
        
    else:

        # 切割高度比例
        cropH = minlength[1] / 1.665

        # 裁剪
        file = file.crop((0, 0, minlength[1], cropH))

        # 高质量压缩
        file = file.resize((templateW, templateH),Image.ANTIALIAS)

    return file.crop((0, 0, 320, 192))

def ProjectCover(files):
    templateW = 465
    templateH = 210

    file = Image.open(files)
    source_w = [0, file.size[0]]
    source_h = [1, file.size[1]]

    # 取出源文件最短的一条边
    minlength = source_w if source_w[1] < source_h[1] else source_h

    if source_w[1] > source_h[1]:
        rate = float(465) / float(source_w[1])
    else:
        rate = float(210) / float(source_h[1])
        
    new_size = (int(source_w[1] * rate), int(source_h[1] * rate))

    file = file.resize(new_size,Image.ANTIALIAS)
        
    return file.crop((0, 0, 320, 192))
    