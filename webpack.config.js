//불러들이기, 설정
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // 파일의 시작점
  entry:'./js/main.js',
  // 결과물을 보내는 장소
  output:{
    // resolve 안에는 위치, 폴더명 //__dirname : 지금의 폴더에서 사용하겠다
    path:path.resolve(__dirname,'dist'), //전역 사용
    filename : 'main.js',
    clean:true // true일 경우 기존의 것 사라짐
  },
  module:{
    rules:[
      {//어떤 파일을 검색
        test:/\.s?css$/,
        // 사용할 loader -> 순서가 중요함 ( 얘를 거쳐서 얘를 할거야,,)
        use:[
          //css 먼저 치고 그다음 style이 받을거임,, -> 그래서 웹브라우저에서 콘솔보면 style에 css가 들어가있음,,
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:['babel-loader']
      }
    ]
  },
  plugins:[
    new HtmlPlugin({
      template : './index.html'
    }),
    new CopyPlugin({
      patterns : [{
        from : 'static'
      }]
    })
  ]
}