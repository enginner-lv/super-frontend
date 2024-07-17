# 初步探索 AI 生成业务组件

上一篇，我们学习了`整洁的业务组件架构`。

基于业务组件的开发流程，笔者早在去年中旬的时候，就探索了 AI 如何生成前端业务组件，详见：[【在公司前端项目中落地 ChatGPT】初探成果](https://juejin.cn/post/7230319403723948093)、[【在公司前端项目中落地 ChatGPT】聊天式编程](https://juejin.cn/post/7233231723211030586)

## 初步探索

总结起来 4 步走：

`1、定义角色`

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240429072654.png)

`2、投喂基础 UI 组件数据`

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240429072719.png)

`3、描述业务组件的基本信息，开始生成代码`

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240429072734.png)

`4、迭代优化`

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240429072750.png)

::: details 获取提示词源文件

[关注公众号 LV 技术派](/me)，后台回复 ai 资料 获得提示词源文件。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240429073907.png)
:::

::: warning 注意
上面是笔者在 AI 赋能前端早些时候的探索经历，现在已经有了更多新的洞察和落地方案。
:::

## 存在的问题

前端包含许多的基础 UI 组件库，比如 antd、Mui、ElementUI、NextUI 等。

我们聊到的业务组件，80%都是基于这种基础 UI 组件封装开发出来的。

我们回顾一下，上面提到的 AI 生成业务组件步骤。

`1、定义角色`

`2、投喂基础 UI 组件数据`

`3、提供需求`

`4、持续迭代`

我们发现，第 1、2 步是属于`公共`的部分，因为每次生成业务组件都需要前置用到。

因此，我们考虑提供一个 AI 小助手，将第 1、2 步的能力封装进去，用户只需要关心 3、4 步即可。

下一篇章，我们来做一个专门生成业务组件的 AI 助手。

[👬 交个朋友，一起探索 AI 时代下前端的转型（超级个体）之路](/me)
