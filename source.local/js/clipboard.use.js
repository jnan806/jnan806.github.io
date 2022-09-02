/*页面载入完成后，创建复制按钮*/
!function (e, t, a) {
  /* code */
  var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet>';
    copyHtml += '<span>复制</span>';
    copyHtml += '</button>';
    $("pre code").parent().addClass("highlight");
    $("pre code").before(copyHtml);
    var copyCode = new ClipboardJS('.btn-copy', {
      target: function(trigger) {
        return trigger.nextElementSibling;
      }
    });

    copyCode.on('success', function(event) {
      event.clearSelection();
      event.trigger.textContent = '复制成功';
      window.setTimeout(function() {
        event.trigger.textContent = '复制';
      }, 2000);
    });
    copyCode.on('error', function(event) {
      event.trigger.textContent = '用 "Ctrl + C" 进行复制';
      window.setTimeout(function() {
        event.trigger.textContent = '复制';
      }, 2000);
    });

  }
  initCopyCode();
}(window, document);

// !function () {
//   var pre = document.getElementsByTagName('pre');
//   for (var i = 0; i < pre.length; i++) {
//     var isLanguage = pre[i].children[0].className.indexOf('language-');
//     if ( isLanguage === 0 ) {
//       var button = document.createElement('button');
//       button.className = 'btn-copy';
//       button.textContent = '复制';
//
//       pre[i].appendChild(button);
//     }
//   }
//   var copyCode = new ClipboardJS('.btn-copy', {
//     target: function(trigger) {
//       return trigger.previousElementSibling;
//     }
//   });
//
//   copyCode.on('success', function(event) {
//     event.clearSelection();
//     event.trigger.textContent = '复制成功';
//     window.setTimeout(function() {
//       event.trigger.textContent = '复制';
//     }, 2000);
//   });
//   copyCode.on('error', function(event) {
//     event.trigger.textContent = '用 "Ctrl + C" 进行复制';
//     window.setTimeout(function() {
//       event.trigger.textContent = '复制';
//     }, 2000);
//   });
//
// }();