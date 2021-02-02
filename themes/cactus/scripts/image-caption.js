hexo.extend.filter.register('after_post_render', function (data) {
  if (hexo.config.image_caption && hexo.config.image_caption.enable == true) {
    var className = hexo.config.image_caption.class_name || 'highlight';
    if (
      data.layout == 'post' ||
      data.layout == 'page' ||
      data.layout == 'about'
    ) {
      data.content = data.content.replace(
        /(<img [^>]*alt="([^"]+)"[^>]*>)/g,
        '$1' + '<figcaption class="' + className + '">$2</figcaption>'
      );
    }
  }
  return data;
});
