//函数防抖
const debounce = (func, wait) => {
    let timer = null
    return function () {
        const that = arguments.callee
        clearTimeout(timer)
        timer = setTimeout(() => {
            func(that)
        }, wait)
    }
}


//判断元素是否可见
const see = (el, binding) => {
    const offsetHeight = el.getBoundingClientRect().top //滚动距离游览器可视顶部高度
    let height = el.getBoundingClientRect().height //元素高度
    let wh = window.innerHeight //内容视口高度
    const animateClassName = binding.value || ' ' //动画类名
    const className = el.className           //当前类名
    el.style.visibility = 'hidden'  //隐藏元素

    //判读初始元素是否可见，可见添加动画类名
    if (offsetHeight <= wh && offsetHeight >= -height) {
        el.style.visibility = 'visible'
        el.className = className + ' ' + animateClassName
    }
    //监听滚动判读是否可见，可见执行动画，不可见则隐藏
    window.addEventListener('scroll', debounce(() => {
        const offsetHeight = el.getBoundingClientRect().top //滚动距离游览器可视顶部高度
        height = el.getBoundingClientRect().height
        if (offsetHeight <= wh && offsetHeight >= -height) {
            el.style.visibility = 'visible'
            el.className = className + ' ' + animateClassName
        } else {
            el.className = className
            el.style.visibility = 'hidden'
        }
    }, 100))
}

module.exports = {
    install(Vue) {
        Vue.directive('animate', {
            // 当被绑定的元素插入到 DOM 中时激活
            inserted(el, binding) {
                    see(el,binding)
                }
            
        })
    }
}
