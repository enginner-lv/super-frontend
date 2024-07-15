const fs = require("fs");
const path = require("path");

// Provided sidebar data
const sidebarData = [
  {
    text: "前言",
    link: "preface",
    collapsed: true,
    items: [
      { text: "小册介绍", link: "intro" },
      { text: "核心理论", link: "core-theory" },
      { text: "章节说明", link: "chapter-guide" },
    ],
  },
  {
    text: "探索与入门",
    link: "getting-started",
    collapsed: true,
    items: [
      { text: "市场调研与全流程分析", link: "market-research" },
      { text: "整洁的业务组件架构", link: "clean-architecture" },
      { text: "初步探索AI生成业务组件", link: "ai-exploration" },
      { text: "做一个生成业务组件的AI助手", link: "ai-assistant" },
    ],
  },
  {
    text: "进阶提升",
    link: "advanced-improvement",
    collapsed: true,
    items: [
      {
        text: "开发一个专门生成业务组件的AI产品",
        link: "ai-product",
        items: [
          {
            text: "产品定位、五大功能、两大核心能力",
            link: "product-features",
          },
          {
            text: "「循序渐进式」代码生成",
            link: "step-by-step",
          },
          {
            text: "「聊天式」代码生成",
            link: "chat-style",
          },
          {
            text: "集成公司私有组件库生成代码",
            link: "private-integration",
          },
          {
            text: "集成到VsCode IDE生成代码",
            link: "vscode-integration",
          },
        ],
      },
      {
        text: "如何基于公司私有组件库生成业务组件",
        link: "private-components",
        items: [
          {
            text: "问题分析与解决方案",
            link: "analysis-solutions",
          },
          {
            text: "认知 RAG：打造垂直领域的私有 AI 知识库",
            link: "understand-rag",
          },
          {
            text: "三种接入私有组件库的方案",
            link: "integration-solutions",
            items: [
              {
                text: "方案一：基于开源知识库平台接入私有组件库",
                link: "solution-1",
              },
              {
                text: "方案二：基于 LlamaIndex 接入私有组件库",
                link: "solution-2",
              },
              {
                text: "方案三：自定义 Agent 接入私有组件库",
                link: "solution-3",
              },
            ],
          },
        ],
      },
      {
        text: "集成 AI 到 IDE，打造沉浸式编码工作流",
        link: "integration-ide",
        items: [
          {
            text: "Github Copilot",
            link: "github-copilot",
            items: [
              {
                text: "产品定位",
                link: "product-positioning",
              },
              {
                text: "通用技能",
                link: "general-skills",
              },
              {
                text: "组合神技",
                link: "combo-techniques",
              },
              {
                text: "最佳实践案例",
                link: "best-practices",
              },
            ],
          },
          {
            text: "自定义 Copilot",
            link: "custom-copilot",
            items: [
              {
                text: "Continue ---- 自定义 Copilot 神器",
                link: "continue-custom-copilot",
              },
              {
                text: "自定义 Command",
                link: "custom-command",
              },
              {
                text: "自定义 Context",
                link: "custom-context",
              },
              {
                text: "自定义 Agent",
                link: "custom-agent",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: "案例剖析与实践",
    link: "case-analysis",
    collapsed: true,
    items: [
      {
        text: "开发一个功能全流程案例",
        link: "feature-development",
      },
      {
        text: "开发一个项目全流程案例",
        link: "project-development",
      },
    ],
  },
];

const defaultContent = `写作中...\n催更，关注最新消息[点这里](/me.md)`;

function generateFiles(items, rootPath) {
  if (!fs.existsSync(rootPath)) {
    fs.mkdirSync(rootPath, { recursive: true });
  }

  items.forEach((item) => {
    const filePath = path.join(rootPath, `${item.link}.md`);

    if (item.items && item.items.length > 0) {
      generateFiles(item.items, filePath.replace(".md", ""));
    } else {
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, defaultContent);
      }
    }
  });
}

generateFiles(sidebarData, path.join(__dirname, "../docs/guide"));

console.log("Markdown files and directories have been generated.");
