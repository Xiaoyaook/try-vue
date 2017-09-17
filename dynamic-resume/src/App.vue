<template>
  <div id="app">
    <ResumeStyle :nowStyle="nowStyle"></ResumeStyle>
    <Resume :nowCode="nowCode" :enableHtml="enableHtml"></Resume>
  </div>
</template>

<script>
import ResumeStyle from './components/ResumeStyle'
import Resume from './components/Resume'

export default {
  name: 'app',
  components: {
    ResumeStyle,
    Resume
  },
  data: function () {
    return {
      nowCode: '',
      resumeCode: `
      xiaoyaook
      ----
      初学者
      技能
      ----
      * 前端开发
      * Python 开发
      工作经历
      ----
      1. 占位...
      2. 占位...
      3. 占位...
      4. 占位...
      > 如果你喜欢这个效果，Fork [方应航](https://github.com/jirengu-inc/animating-resume)，打造你自己的简历！
      `,
      resumeStyle: [`
        * {
          transition: all .3s;
        }
        html {
          color: rgb(222,222,222); background: rgb(0,43,54);
        }
        .lf-style {
          padding: .5em;
          border: 1px solid;
          margin: .5em;
          overflow: auto;
          width: 45vw; height: 90vh;
        }
        .token.selector{ color: rgb(133,153,0); }
        .token.property{ color: rgb(187,137,0); }
        .token.punctuation{ color: yellow; }
        .token.function{ color: rgb(42,161,152); }
        html{
          perspective: 1000px;
        }
        .lf-style {
          position: fixed; left: 0; top: 0;
          -webkit-transition: none;
          transition: none;
          -webkit-transform: rotateY(10deg) translateZ(-100px) ;
                  transform: rotateY(10deg) translateZ(-100px) ;
        }
        .rt-resume {
          position: fixed; right: 0; top: 0;
          padding: .5em;  margin: .5em;
          width: 48vw; height: 90vh;
          border: 1px solid;
          background: white; color: #222;
          overflow: auto;
        }
        /* 好了，我开始写简历了 */
        `,
        `
        /* 这个简历好像差点什么
         * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
         * 简单，用开源工具翻译成 HTML 就行了
         */
        `
      ],
      nowStyle: ``,
      interval: 10,
      enableHtml: false
    }
  },
  methods: {
    showResume: function () {
      return new Promise((resolve, reject) => {
        let interval = this.interval
        let n = 0
        let timer = setInterval(() => {
          this.nowCode = this.resumeCode.substring(0, n)
          n += 1
          if (this.nowCode.length === this.resumeCode.length) {
            resolve(console.log(';)'))
            clearInterval(timer)
          }
        }, interval)
      })
    },
    showStyle: function (num) {
      return new Promise((resolve, reject) => {
        let interval = this.interval
        /*  */
        let show = function () {
          let style = this.resumeStyle[num]
          if (!style) { return }
          let length = this.resumeStyle.filter((item, i) => { // 计算数组前n个元素的长度
            return i <= num
          }).reduce((result, item) => {
            result += item.length
            return result
          }, 0)
          let prefixLength = length - style.length
          let l = this.nowStyle.length - prefixLength
          let char = style.substring(l, l + 1) || ' '
          this.nowStyle += char
          if (this.nowStyle.length < length) {
            setTimeout(show, interval)
          } else {
            resolve(console.log(':)'))
          }
        }.bind(this)
        show()
      })
    },
    showHtml: function () {
      return new Promise((resolve, reject) => {
        this.enableHtml = true
        resolve(console.log('-.-'))
      })
    },
    makeResume: async function () {
      await this.showStyle(0)
      await this.showResume()
      await this.showStyle(1)
      await this.showHtml()
    }
  },
  created: function () {
    this.makeResume()
  }
}
</script>

<style>

</style>
