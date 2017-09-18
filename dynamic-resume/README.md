用vue制作一个会动的简历

> 参考自[方应航](https://github.com/jirengu-inc/animating-resume)

代码高亮用Prism.js,Markdown转HTML用marked.js
有一个坑是``里的字符要顶格写,不然marked无法正确解析

有个问题是,为何用refs调用子组件的方法,显示
"TypeError: Cannot read property 'goBottom' of undefined"

