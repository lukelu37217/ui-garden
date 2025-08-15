// 这是一个故意有格式问题的演示文件
// 用来展示pre-commit hooks的工作效果

function   demoFunction(  ){
const message="Hello Teacher!"   ;
   console.log(message)
  return   message
}

// 缺少分号，格式混乱 - 会被prettier和eslint自动修复
export default demoFunction
