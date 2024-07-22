# 「聊天式」代码生成

在上一篇文章[「循序渐进式」代码生成》](/guide/advanced-improvement/ai-product/step-by-step)中，我们聊到了`循序渐进式`的代码生成，但是发现了一个问题：不同的人由于知识背景的不同，使用方式和效果都不一样。

比如，有的伙伴本身对于产品设计或 UI 设计有一定的了解，因此生成的代码效果会更好，然而这部分人占比相对较少。

因此，我在想，有没有一种方式，能够辅助用户更好地表达清楚自己内心的诉求、从而让 AI 生成的代码更符合大部分人的预期呢？

于是，我想到了`聊天式`的代码生成方式，在生成正式的代码之前，先和 AI 聊天，让 AI 了解我们的需求，同时让 AI 也不断给用户一些建议，让用户更好地表达自己的需求。最终将整个聊天的上下文抽象化为真实的代码。

下面，正式开始介绍`聊天式代码生成`。

## LV0 Copilot

在 LV0 的最新版本中，我们加入了一个 `Copilot` 的助手，这个助手可以帮助用户更好地表达自己的需求，从而生成更加符合预期的代码。

👇 点击打开 Copilot。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709075830.png)

在生成代码之前，我们可以和 Copilot 进行一段对话，让 Copilot 了解我们的需求，然后生成代码。

Copilot 主要包含 3 个功能：

`1、分析用户的需求，分析出来实现这个需求所需要的基础组件（包括开源组件和私有自定义组件）。`

如下，给一张图，Copilot 可以分析出设计稿中所需要的私有组件、来源和使用描述。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709080121.png)

![20240709080430](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709080430.png)

`2、智能提供建议，帮助用户从 0 ～ 1。`

如下，我想做一个贪吃蛇的游戏，但是不知道从何下手，Copilot 可以给我一些建议。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709080649.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709080732.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709080832.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709080937.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709081018.png)

`3、汇总整个对话的上下文参数，生成最终的代码。`

继续上面的贪吃蛇示例，Copilot 会邀请用户确认是否生成业务组件，用户确认后，Copilot 会生成最终的代码。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709081225.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709081345.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709081749.png)

下面提供几个案例，让大家更好地了解 Copilot 的使用方式。

## 案例

`案例一：`

需求：生成一个可搜索、分页的卡片列表，每个卡片包含 logo、name、description，可以编辑、删除、分享。

👇 输入需求。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709082441.png)

👇 Copilot 根据需求列出来我所需要的基础组件，并询问我是否需要按照建议进行调整。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709082615.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709082646.png)

👇 当我确认无误后，Copilot 会弹出一个二次确认框，询问我是否生成业务组件。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709082909.png)

👇 点击确认后，Copilot 将汇总整个对话的上下文参数，开始生成最终的业务组件代码。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709221342.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709221537.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709221619.png)

👇 针对可视化的结果，提出一些新的要求。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709221730.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709222008.png)

👇 Copilot 针对新的要求，给出了一些建议。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709222057.png)

👇 最终生成的效果。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709222342.png)

如上案例，细心的伙伴可能发现了，正是 LV0 新版的列表页面。👇

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709222827.png)

ps：有一些差别是因为我后面用 LV0 的 Vscode Continue 插件进行了一些细节的优化。（后续有专门的文章来分享如何将 LV0 集成到 Vscode 插件中）

`案例二：`

`需求：` Codegen 是 LV0 中一个很重要的概念，是生成业务组件的核心引擎，其中定义了包括框架（如 react 或者 vue 等）、npm 包、私有组件、以及 AI Model 等在内。

由于不同的用户、不同公司所使用的技术栈和基础组件、私有组件可能都不一样，因此，LV0 现在要支持用户可以自定义 Codegen，需要一个 Codegen 的配置页面，可以给用户来自定义生成业务组件的框架、npm 包、私有组件、AI Model 等。

Codegen 的部分数据结构大概如下：

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709233301.png)

👇 输入需求。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709232503.png)

👇 Copilot 分析了 Codegen 配置页面所需要的基础组件，同时还提供了一些建议。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709233041.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709233816.png)

👇 汇总所有数据，开始生成代码。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709233925.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709233955.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709234054.png)

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709234222.png)

👇 针对可视化的结果，提出一些新的要求。

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709234424.png)

（中间省略一些跟 Copilot 的交互）

👇 最终效果

![](https://lvjishupai.oss-cn-beijing.aliyuncs.com/20240709235300.png)

---

## 一些想法

如上 Copilot 案例，我们可以看到：

1、当你有一些需求场景，但是不知道从何下手时，Copilot 可以帮助你进行需求分析，给出一些产品功能上的建议。

2、当你不太懂设计时，Copilot 可以针对你的功能需求，分析出实现功能所需要的基础组件，同时还能够给出一些 UI 设计上的建议。（从我个人的使用上来看，目前这个环节在 LV0 的 Copilot 中还比较弱，用户最好能够提供一些参考的设计稿贴图，不过针对这个问题，我有了一些`新的 idear`正在探索中～）

3、当你觉得 Copilot 给出的建议最终符合了你的需求时候，你可以让 Copilot 汇总整个的对话上下文参数，生成最终的代码。

AI 时代，很多角色会发生变化，前端开发者也不例外。未来的前端开发者，不仅仅是一个`前端代码工人`。

借助 AI 工具，借助 Copilot，我们可能会是一个个的`超级个体`，拥有更多的能力，更多的技能，更多的价值，不局限于前端，我们可以搞定产品、UI 设计、后端、甚至运营...

我现在也在探索如何从前端成为 `超级个体` 道路上，LV0 这个产品，也是我探索这条道路上的一些小经验沉淀，产品尚在早期，欢迎感兴趣的小伙伴一起来探讨交流。

[👬 交个朋友，一起探索 AI 时代下前端的转型（超级个体）之路](/me)
