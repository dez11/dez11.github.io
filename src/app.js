var $ = require('jquery'),
    template = require('lodash.template');

var compiled = template(require('./views/brightcove-embed-code.html')),
    config = {
      account: '1752604059001',
      player: '52d490a5-eef6-4e2e-a39f-d9c4b212d45f',
      embed: 'default'
    },
    markup = compiled(config);

var importScript = (src) => {
  var deferred = new $.Deferred(),
      js = document.createElement('script');

  js.type = "text\/javascript"
  js.src = src
  js.onload = (evt) => deferred.resolve(evt)
  js.onerror = (evt) => deferred.reject(evt)
  document.getElementsByTagName('body')[0].appendChild(js)
  return deferred
}

// +++++++++++++++++++++++++++++++++++
// メイン処理
// +++++++++++++++++++++++++++++++++++
// プレイヤーをHTMLに書き出す
$('#player').html(markup);

// brightcoveのjsを読み込む
importScript('//players.brightcove.net/1752604059001/52d490a5-eef6-4e2e-a39f-d9c4b212d45f_default/index.min.js').then((evt) => {

  // 読み込みが成功した場合
  videojs('myPlayerID').ready(function () {
    var myPlayer = this,
        theDiv = $('#insertionPoint');

    // 各イベントのログ出力
    myPlayer.on('loadeddata', () => {
      theDiv.append('loadeddata<br>');
    });
    myPlayer.on('loadedmetadata', () => {
      theDiv.append('loadedmetadata<br>');
    });
    myPlayer.on('loadstart', () => {
      theDiv.append('loadstart<br>');
    });
    myPlayer.on('playing', () => {
      theDiv.append('playing<br>');
    });
  });
}, (evt) => {
  // 読み込みが失敗した場合
  console.log('Error')
});
