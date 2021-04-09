# css面试题

### 盒模型宽度计算
   - **Dom.offsetWidth**: (padding+border+content)
   - 加上**box-sizing:border-box**属性时**width**设置的宽度就是**Dom.offsetWidth** 

### margin 纵向重叠问题
   - 相邻的margin-top和margin-bottom会发生重叠
   - 空白内容的 `<p></p>` 也会重叠(就是会被忽略)

### margin 负值的效果
   - **margin-left** **margin-top** 设置负值时自身会分别向左向上移动
   - **margin-right** **margin-bottom** 设置负值时自身不受影响在其旁边的浮动元素分别向左向上移动

### BFC理解与应用
   - Block format context ,块级格式化上下文
   - 一块独立渲染区域,内部元素渲染不会影响边界以外的元素
   - 形成BFC的常见条件
      - float不是none
      - position是absolute或fixed
      - overflow不是visible
      - display是flex inline-block等
    - BFC的常见应用
      - 清除浮动

### float布局
   - 圣杯布局和双飞翼布局
     - 目的
       - 三栏布局,中间一栏最先加载和渲染（内容最重要）
       - 两侧内容固定，中间内容随着宽度自适应
       - 一般用于PC网页
     - 圣杯布局
       - 中间用的100%宽设置**padding**值来进行中间宽度自适应
       - 两侧内容使用设置宽度固定值来进行宽度固定
       - left内容使用margin-left:-100% 以及 position:relative and left 负本身宽度 来进行左侧定位 
       - right内容使用设置margin-right:负本身宽度 来进行移动到右侧 注: 这里使用margin-right之所以会产生这样的效果可以理解成right本身宽度的消失了所以移动到了右侧
     - 双飞翼布局
       - 中间用的100%宽设置**margin**值来进行中间宽度自适应
       - 两侧内容使用设置宽度固定值来进行宽度固定
       - left内容使用margin-left:-100%
       - right内容使用设置margin-left:负本身宽度 来进行移动到右侧 注: 这里如果使用margin-rightright本身宽度的消失移动到了右侧但是因为有center margin的值在所以达不到我们想要的效果
  
### 手写clearfix清浮动
   - 直接上案例
    ```css
        .clearfix:after{
            content:'';
            display:table;/*也可以是block*/
            clear:both;
        }
        .clearfix{
          *zoom:1;/*兼容IE低版本 */
        }
    ```
### flex布局
   - 常用语法
     - flex-direction (设置主轴方向)
     - justify-content (主轴对齐方式)
     - align-items (交叉轴对齐)
     - flex-wrap (是否换行)
     - align-self (子元素在交叉轴的对齐方式)
### absolute relative定位
   - 特性
     - absolute 是根据最近一层的定位元素定位
     - relative 依据自身定位
   - 水平居中
     - inline元素:text-align:center
     - block元素: margin:auto
     - absolute元素: left:50% + margin-left 负值
   - 垂直居中
     - inline元素:line-height的值等于height值
     - absolute元素:top:50% + margin-top负值
     - absolute元素:left:50% + right:50% + transform: translate(-50%, -50%)
     - absolute元素:top,left,bottom,right = 0 + margin:auto
### 图文样式
   - line-height 如何继承
     - 写具体数值，如30px，则继承该值
     - 写比例，如2/1.5，则继承该比例 就是本身font-size的值*比例
     - 写百分比，比如200%，则继承计算出来的值

### 网页视口尺寸
   - window.screen.height 屏幕高度
   - window.innerHeight 网页视口高度
   - document.body.clientHeight body高度

### 响应式
   - 长度单位
     - px 绝对长度单位，最常用
     - em，相对长度单位，相对于父元素，不常用
     - rem，相对长度单位，相对于根元素，常用于响应式布局
       - rem具有阶梯性
     - vw/vh
       - window.innerHeight === 100vh
       - window.innerWidth === 100vw
     - vmax/vmin
       - vmax 视口宽和高哪个值大就是哪个
       - vmin 视口宽和高哪个值小就是哪个
   - media-query设置根元素html font-size
