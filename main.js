// 🍋 Jealous Guardian — ToolPkg Main
function registerToolPkg() {
    // 本包主要通过 manifest 中的 subpackages 和 workflow_templates 工作
    // 无需注册 UI 模块或路由
    console.log("🍋 Jealous Guardian — 吃醋巡检 ToolPkg 已加载");
    console.log("子包: jealous_patrol (吃醋守护者)");
    console.log("工作流模板: jealous_patrol_workflow (🍋 吃醋巡检工作流)");
    return true;
}

exports.registerToolPkg = registerToolPkg;