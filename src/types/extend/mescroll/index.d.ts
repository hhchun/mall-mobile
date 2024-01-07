type _MescrollDown = Partial<{
  /**
   * 是否启用下拉刷新
   * 如果配置false,则不会初始化下拉刷新的布局
   * 默认值: true
   */
  use: boolean;
  /**
   * 是否在初始化完毕之后自动执行一次下拉刷新的回调
   * 默认值: true
   */
  auto: boolean;
  /**
   * 是否使用系统自带的下拉刷新,默认false,仅mescroll-body生效
   * 值为true时,需在pages配置"enablePullDownRefresh":true 和 "mp-alipay":{"allowsBounceVertical":"YES"}
   * 默认值: false
   */
  native: boolean;
  /**
   * 下拉的距离在offset范围内的提示文本
   * 默认值: 下拉刷新
   */
  textInOffset: string;
  /**
   * 下拉的距离大于offset范围的提示文本
   * 默认值: 释放更新
   */
  textOutOffset: string;
  /**
   * 加载中的提示文本
   * 默认值: 加载中 ...
   */
  textLoading: string;
  /**
   * 加载成功的提示文本 (1.3.3新增)
   * 默认值: 加载成功
   */
  textSuccess: string;
  /**
   * 加载失败的提示文本 (1.3.3新增)
   * 默认值: 加载失败
   */
  textErr: string;
  /**
   * 延时结束的时长,也是显示加载成功/失败的时长,单位ms (1.3.3新增)
   * 默认值: 100
   */
  beforeEndDelay: number;
  /**
   * 下拉区域背景颜色 (1.2.4新增)
   * 支持背景图和渐变: 如 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)' (1.2.6版本)
   * 支持一行代码定义background: https://www.runoob.com/cssref/css3-pr-background.html
   * 建议同步配置pages.json的"backgroundColorTop"
   * 默认值: transparent
   */
  bgColor: string;
  /**
   * 下拉文本的颜色 (当bgColor配置了颜色,textColor未配置时,则会默认为白色 1.2.4新增)
   * 默认值: gray
   */
  textColor: string;
  /**
   * 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),
   * 那么是否显示下拉刷新的进度需配置down的callback才生效
   * 默认值: false
   */
  autoShowLoading: boolean;
  /**
   * 是否锁定下拉刷新,
   * 如果配置true,则会锁定不可下拉,可通过调用mescroll.lockDownScroll(false)解锁
   * 默认值: false
   */
  isLock: boolean;
  /**
   * 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
   * 默认值: 80
   */
  offset: number;
  /**
   * 下拉的节流配置 (值越大每秒更新下拉状态的频率越高, 当您发觉下拉卡顿时可尝试调高/低此值)
   * 注意: 1.3.0版本已废弃, 已通过wxs提高性能, 无需手动节流
   * 默认值: 80
   */
  fps: number;
  /**
   * 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例,
   * 值小于1且越接近0,高度变化越小,表现为越往下越难拉
   * 默认值: 1
   */
  inOffsetRate: number;
  /**
   * 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;
   * 值越接近0,高度变化越小,表现为越往下越难拉
   * 默认值: 0.2
   */
  outOffsetRate: number;
  /**
   * 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
   * 默认值: 20
   */
  bottomOffset: number;
  /**
   * 触发下拉最少要偏移的角度(滑动的轨迹与水平线的锐角值),取值区间 [0,90];
   * 默认45度,即向下滑动的角度大于45度(方位角为45°~145°及225°~315°)则触发下拉;
   * 而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突
   * 默认值: 45
   */
  minAngle: number;
}>;

type _MescrollUp = Partial<{
  /**
   * 是否启用上拉加载
   * 如果配置false,则不会初始化下拉刷新的布局
   * 默认值: true
   */
  use: boolean;
  /**
   * 是否在初始化完毕之后自动执行一次上拉加载的回调
   * 当配置为false时,建议down的auto也为false,因为downCallback默认调用resetUpScroll,最终还会触发upCallback
   * 如果是想实现返回刷新页面,那么其实不需要设置auto为false, 详情请看: https://www.mescroll.com/uni.html#note
   * 默认值: true
   */
  auto: boolean;
  /**
   * 是否允许橡皮筋回弹效果,默认不允许; 1.1.5新增,详情: https://www.mescroll.com/qa.html#q25
   * 1.3.0版本已废弃,已通过renderjs自动判断,无需配置mescroll-touch
   * 默认值: false
   */
  isBounce: boolean;

  page: {
    /**
     * 当前页码,回调之前加1,即callback(page)从1开始
     * 默认值: 0
     */
    num: number;
    /**
     * 每页数据的数量
     * 默认值: 10
     */
    size: number;
    /**
     * 加载第一页数据服务器返回的时间 (可空); 防止用户翻页时,后台新增了数据从而导致下一页数据重复
     */
    time?: string;
  };
  /**
   * 如果列表已无数据,可设置列表的总数量要大于指定数量时才显示无更多数据;
   * 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
   * 默认值: 5
   */
  noMoreSize: number;
  /**
   * 上拉加载中的文本
   * 加载中 ...
   */
  textLoading: string;
  /**
   * 没有更多数据的提示文本
   * 默认值: -- END --
   */
  textNoMore: string;
  /**
   * 下拉区域背景颜色 (1.2.4新增)
   * 默认值: transparent
   */
  bgColor: string;
  /**
   * 下拉文本的颜色(当bgColor配置了颜色,textColor未配置时,则会默认为白色 1.2.4新增)
   * 支持背景图和渐变: 如 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)' (1.2.6版本)
   * 支持一行代码定义background: https://www.runoob.com/cssref/css3-pr-background.html
   * 建议同步配置pages.json的"backgroundColorBottom"
   * 默认值: gray
   */
  textColor: string;
  /**
   * 回到顶部按钮的配置
   */
  toTop: {
    /**
     * 图片路径,必须配置src才会显示,(若想禁用,则src为空串即可)
     */
    src?: string;
    /**
     * 列表滚动显示回到顶部按钮的距离,单位px
     * 默认值: 1000
     */
    offset?: number;
    /**
     * 回到顶部的动画时长,单位ms
     * 当值为0或300则使用系统自带回到顶部更流畅,其他值则通过js模拟,比较耗性能,所以非特殊情况不建议修改
     * 默认值: 300
     */
    duration?: number;
    /**
     * fixed定位z-index值(1.2.0新增)
     */
    zIndex?: number | string;
    /**
     * 到右边的距离(支持"20rpx", "20px","20%"格式的值,纯数字则默认单位rpx. 1.2.0新增)
     */
    right?: number | string;
    /**
     * 到底部的距离(支持"20rpx", "20px","20%"格式的值,纯数字则默认单位rpx. 1.2.0新增)
     */
    bottom?: number | string;
    /**
     * bottom的偏移量是否加上底部安全区的距离,
     * 适配iPhoneX时使用(具体页面如不配此项,则取mescroll组件props的safearea值. 1.2.0新增)
     * 默认值: false
     */
    safearea?: boolean;
    /**
     * 回到顶部图标的宽度(支持"20rpx","20px","20%"格式的值,纯数字则默认单位rpx. 1.2.0新增)
     */
    width?: number | string;
    /**
     * 圆角(支持"20rpx","20px","20%"格式的值,纯数字则默认单位rpx. 1.2.0新增)
     */
    radius?: number | string;
    /**
     * 到左边的距离,此项有值时,right不生效(支持"20rpx","20px","20%"格式的值,纯数字则默认单位rpx. 1.2.0新增)
     */
    left?: number | string;
  };
  /**
   * 列表第一页无任何数据时,显示的空布局
   */
  empty: {
    /**
     * 是否启用
     */
    use?: boolean;
    /**
     * 空布局的图标路径 (支持网络路径)
     */
    icon?: string;
    /**
     * 提示文本
     */
    tip?: string;
    /**
     * 按钮文本
     */
    btnText?: string;
    /**
     * 是否使用定位,配置fixed为true,top和zIndex才生效(transform会使fixed失效,所以最终还是会降级为absolute)
     * 默认值: false
     */
    fixed?: boolean;
    /**
     * fixed定位的top值(完整的单位值,如"100rpx", "10%";)
     */
    top?: string;
    /**
     * fixed定位z-index值
     */
    zIndex?: number;
  };
  /**
   * 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新
   * 默认值: false
   */
  isBoth: boolean;
  /**
   * 是否锁定上拉加载,如果配置true,则会锁定不可上拉,可通过调用mescroll.lockUpScroll(false)解锁
   * 默认值: false
   */
  isLock: boolean;
  /**
   * 距底部多远时,触发upCallback ; 1.1.0新增 (仅mescroll-uni生效)
   * mescroll-body配置的是pages.json的onReachBottomDistance
   * 默认值: 150
   */
  offset: number;
  /**
   * 是否监听滚动事件, 默认false(仅mescroll-uni可用;mescroll-body是页面的onPageScroll),
   * 监听列表滚动是非常耗性能的,很容易出现卡顿,非特殊情况不要配置此项
   * 默认值: false
   */
  onScroll: boolean;
}>;

type _MescrollEvent = Partial<{
  optDown: _MescrollDown;
  optUp: _MescrollUp;
}> & _MescrollMethods;

interface _MescrollGeneralCallback {
  (event: _MescrollEvent): void;
}

type _MescrollOnDown = _MescrollGeneralCallback;

type _MescrollOnUp = _MescrollGeneralCallback;

type _MescrollOnInit = _MescrollGeneralCallback;

type _MescrollOnEmptyclick = _MescrollGeneralCallback;

type _MescrollOnTopclick = _MescrollGeneralCallback;

type _MescrollOnScroll = _MescrollGeneralCallback;

type _MescrollProps = Partial<{
  /**
   * 下拉刷新的配置参数
   */
  down: _MescrollDown;
  /**
   * 上拉加载的配置参数
   */
  up: _MescrollUp;
  /**
   * 国际化语言配置
   */
  i18n: {};
  /**
   * 下拉刷新区域往下偏移的距离
   * 比如希望偏移100rpx, 则top="100", 传的值是rpx的数值
   * 当:fixed="true", 此时top为fixed的top (已自动加上window-top的值)
   * 当:fixed="false"则为padding-top
   * 1.2.0版本开始支持"100rpx", "100px", "100%"格式的值
   * 默认值: 0
   */
  top: string | number;
  /**
   * top的偏移量是否加上状态栏高度(mescroll-uni当fixed为false时不生效, mescroll-body生效)1.1.9新增
   * 使用场景: 取消原生导航栏时,配置此项可自动加上状态栏高度的偏移量
   * 1.2.6版本: 支持传入字符串背景,如 色值'#ffff00', 背景图'url(xxx) 0 0/100% 100%', 渐变'linear-gradient(xx)'
   * 支持一行代码定义background: https://www.runoob.com/cssref/css3-pr-background.html
   * 默认值: false
   */
  topbar: boolean | number;
  /**
   * 上拉加载区域往上偏移的距离
   * 比如希望偏移100rpx, 则bottom="100", 传的值是rpx的数值
   * 当:fixed="true", 此时bottom为fixed的bottom (已自动加上window-bottom的值)
   * 当:fixed="false"则为padding-bottom
   * 1.2.0版本开始支持"100rpx", "100px", "100%"格式的值
   * 默认值: 0
   */
  bottom: string | number;
  /**
   * bottom的偏移量是否加上底部安全区的距离(1.2.0新增)
   * 适配iPhoneX时使用, 此项值对回到顶部按钮生效
   * 默认值: false
   */
  safearea: boolean;
  /**
   * 是否通过fixed定位来固定mescroll-uni的高度,默认true; (mescroll-body不生效,因为无需固定高度)
   * 当配置:fixed="false"时,则mescroll-uni高度跟随父元素, 此时父元素必须有固定的高度,否则列表滚动异常
   * 所以不建议使用fixed,建议通过flex固定高度或配置height来固定mescroll-uni的高度
   * 默认值: true
   */
  fixed: boolean;
  /**
   * 对mescroll-uni可简单快捷设置的高度, 此项有值,则不使用fixed(1.2.0新增)
   * 对mescroll-body可设置最小高度,默认100%,使列表不满屏仍可下拉(1.2.1新增)
   * 支持100, "100rpx", "100px", "100%"格式的值
   * 其中纯数字则默认单位rpx, 百分比则相对于windowHeight
   */
  height: string | number;
  /**
   * tab页是否偏移TabBar的高度,避免列表被TabBar遮住,(仅h5生效,仅h5需要, 1.2.7新增)
   * 默认值: true
   */
  bottombar: boolean;
  /**
   * 是否支持sticky,当值配置true时,需避免在mescroll-body标签前面加非定位的元素,否则下拉区域无法隐藏
   * 默认值: false
   */
  sticky: boolean;
}>;

type _MescrollEvents = Partial<{
  /**
   * 下拉刷新的回调(返回mescroll实例对象)
   */
  onDown: _MescrollOnDown;
  /**
   * 上拉加载的回调(返回mescroll实例对象),此时mescroll会携带page的参数
   */
  onUp: _MescrollOnUp;
  /**
   * mescroll组件初始化完成的回调(返回mescroll实例对象)
   */
  onInit: _MescrollOnInit;
  /**
   * 点击empty配置的btnText按钮回调(返回mescroll实例对象)
   */
  onEmptyclick: _MescrollOnEmptyclick;
  /**
   * 点击回到顶部的按钮回调(返回mescroll实例对象)
   */
  onTopclick: _MescrollOnTopclick;
  /**
   * 滚动监听(需在up配置onScroll:true,仅mescroll-uni可用,mescroll-body是页面的onPageScroll)
   */
  onScroll: _MescrollOnScroll;
}>;
interface _PageScrollOption {
  /**
   * 页面在垂直方向已滚动的距离（单位 px）
   */
  scrollTop: number;
}

type _MescrollMethods = Required<{
  /**
   * 隐藏下拉刷新和上拉加载的状态, 在联网获取数据成功后调用
   * @param dataSize 当前页获取的数据总数(注意是当前页)
   * @param totalPage 列表的总页数
   * @param systime 加载第一页数据的服务器时间(可空),详情: https://www.mescroll.com/qa.html#q9
   * @returns
   */
  endByPage: (dataSize?: number, totalPage: number, systime?: string) => void;
  /**
   * 隐藏下拉刷新和上拉加载的状态, 在联网获取数据成功后调用
   * @param dataSize 当前页获取的数据总数(注意是当前页)
   * @param totalSize 列表的总数据量
   * @param systime 加载第一页数据的服务器时间(可空)
   * @returns
   */
  endBySize: (dataSize?: number, totalSize: number, systime?: string) => void;
  /**
   * 隐藏下拉刷新和上拉加载的状态, 在联网获取数据成功后调用
   * @param dataSize 当前页获取的数据量(注意是当前页)
   * @param hasNext 是否有下一页数据true/false
   * @param systime 加载第一页数据的服务器时间(可空)
   * @returns
   */
  endSuccess: (dataSize?: number, hasNext?: boolean, systime?: string) => void;
  /**
   * 隐藏下拉刷新和上拉加载的状态,在联网获取数据失败后调用,
   * mescroll内部会自动恢复原来的页码,时间等变量
   * @returns
   */
  endErr: () => void;
  /**
   * 重置列表为第一页(常用于列表筛选条件变化或切换菜单时重新刷新列表数据)
   * 内部实现: 把page.num=1,再主动触发up.callback
   * @param isShowLoading 是否显示进度布局,
   *                      不传参则显示上拉加载的进度布局,
   *                      true(显示下拉刷新的进度布局),
   *                      false(不显示上拉和下拉的进度,常用于静默更新列表数据)
   * @returns
   */
  resetUpScroll: (isShowLoading?: boolean) => void;
  /**
   * 主动触发下拉刷新
   * @returns
   */
  triggerDownScroll: () => void;
  /**
   * 主动触发上拉加载
   * @returns
   */
  triggerUpScroll: () => void;
  /**
   * 设置当前page.num的值
   * 如果要重置列表数据,请使用this.mescroll.resetUpScroll(), 而不是setPageNum(1)
   * @param num
   * @returns
   */
  setPageNum: (num: number) => void;
  /**
   * 设置当前page.size的值
   * @param size
   * @returns
   */
  setPageSize: (size: number) => void;
  /**
   * 获取下拉刷新的配置(可直接动态修改配置的值)
   * @returns
   */
  optDown: () => _MescrollDown;
  /**
   * 获取上拉加载的配置(可直接动态修改配置的值)
   * @returns
   */
  optUp: () => _MescrollUp;
  /**
   * 锁定下拉刷新
   * @param isLock true或不传(锁定),false(解锁)
   * @returns
   */
  lockDownScroll: (isLock?: boolean) => void;
  /**
   * 锁定上拉加载
   * @param isLock true或不传(锁定),false(解锁)
   * @returns
   */
  lockUpScroll: (isLock?: boolean) => void;
  /**
   * 滚动列表到指定位置
   * @param y 0(回到列表顶部),如需滚动到列表底部,可设置y很大的值,比如y=99999;当y为css选择器时,则mescroll可滚动到指定view(需更新到1.3.2)
   * @param t 时长,单位ms,默认300,如果不需要动画缓冲效果,则传0
   * @returns
   */
  scrollTo: (y: number | string, t: number) => void;
  /**
   * 显示下拉刷新的进度布局
   * @returns
   */
  showDownScroll: () => void;
  /**
   * 隐藏下拉刷新的进度布局
   * @returns
   */
  endDownScroll: () => void;
  /**
   * 结束上拉加载的状态
   * @param isShowNoMore true(显示无更多数据),false(隐藏上拉加载),不传(保持当前状态)
   * @returns
   */
  endUpScroll: (isShowNoMore?: boolean) => void;
  /**
   * 显示上拉加载的进度布局
   * @returns
   */
  showUpScroll: () => void;
  /**
   * 显示上拉无更多数据的布局
   * @returns
   */
  showNoMore: () => void;
  /**
   * 隐藏上拉加载的布局
   * @returns
   */
  hideUpScroll: () => void;
  /**
   * 显示无任何数据的空布局
   * @returns
   */
  showEmpty: () => void;
  /**
   * 移除无任何数据的空布局
   * @returns
   */
  removeEmpty: () => void;
  /**
   * 显示回到顶部的按钮
   * @returns
   */
  showTopBtn: () => void;
  /**
   * 隐藏回到顶部的按钮
   * @returns
   */
  hideTopBtn: () => void;
  /**
   * 获取滚动条的位置y,也可以在up配置onScroll监听滚动条的位置
   * @returns
   */
  getScrollTop: () => number;
  /**
   * 获取body的高度
   * @returns
   */
  getBodyHeight: () => number;
  /**
   * 获取滚动内容的高度(mescroll-uni支持, mescroll-body不支持)
   * @returns
   */
  getScrollHeight: () => number;
  /**
   * 获取mescroll的高度(mescroll-uni支持, mescroll-body不支持)
   * @returns
   */
  getClientHeight: () => number;
  /**
   * 获取到底部的距离(mescroll-uni支持, mescroll-body不支持)
   * @returns
   */
  getScrollBottom: () => number;
  /**
   * 获取mescroll的唯一元素id
   * 配合uni.createSelectorQuery获取更多信息, mescroll-uni支持,mescroll-body不支持
   * @returns
   */
  viewId: () => string;
  /**
   * 获取滚动的方向(true向上滑 / false向下滑, mescroll-uni支持, mescroll-body不支持)
   * @returns
   */
  isScrollUp: () => boolean;
  /**
   * 获取滚动的方向(true向上滑 / false向下滑, mescroll-uni支持, mescroll-body不支持)
   * @returns
   */
  isScrollUp: () => boolean;
  /**
   * mescroll的版本号
   * @returns
   */
  version: () => string;
  /**
   * 显示系统自带的下拉刷新时需要处理的业务
   * @returns
   */
  onPullDownRefresh: () => void;
  /**
   * 列表滚动事件
   * @param e
   * @returns
   */
  onPageScroll: (e: _PageScrollOption) => void;
  /**
   * 滚动到底部的事件
   * @returns
   */
  onReachBottom: () => void;
}>;

type _MescrollInstance = _MescrollProps & _MescrollEvents;

declare module "mescroll-uni/mescroll-body.vue" {
  import { Component } from "@/types/common";
  const component: Component<_MescrollInstance>;

  export default component;
  export {
    _MescrollInstance as MescrollInstance,
    _MescrollProps as MescrollProps,
    _MescrollEvents as MescrollEvents,
    _MescrollMethods as MescrollMethods,
    _MescrollDown as MescrollDown,
    _MescrollUp as MescrollUp,
    _MescrollEvent as MescrollEvent,
    _MescrollGeneralCallback as MescrollGeneralCallback,
    _MescrollOnDown as MescrollOnDown,
    _MescrollOnInit as MescrollOnInit,
    _MescrollOnEmptyclick as MescrollOnEmptyclick,
    _MescrollOnTopclick as MescrollOnTopclick,
    _MescrollOnScroll as _MescrollOnScroll,
  };
}

declare module "mescroll-uni/mescroll-uni.vue" {
  import { Component } from "@/types/common";
  const component: Component<_MescrollInstance>;

  export default component;
  export {
    _MescrollInstance as MescrollInstance,
    _MescrollProps as MescrollProps,
    _MescrollEvents as MescrollEvents,
    _MescrollMethods as MescrollMethods,
    _MescrollDown as MescrollDown,
    _MescrollUp as MescrollUp,
    _MescrollGeneralEvent as MescrollGeneralEvent,
    _MescrollGeneralCallback as MescrollGeneralCallback,
    _MescrollOnDown as MescrollOnDown,
    _MescrollOnInit as MescrollOnInit,
    _MescrollOnEmptyclick as MescrollOnEmptyclick,
    _MescrollOnTopclick as MescrollOnTopclick,
    _MescrollOnScroll as _MescrollOnScroll,
  };
}
