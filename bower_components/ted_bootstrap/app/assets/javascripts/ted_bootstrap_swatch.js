/**
 * JS for TED Bootstrap's docs. Modeled, of course, on:
 * https://github.com/twbs/bootstrap/blob/master/docs/assets/js/_src/application.js
 */

//= require jquery
//= require ted_bootstrap

jQuery(function ($) {

  /**
   * Set up dynamic contents
   */

  var $sideNav = $('ul.tbs-sidenav');
  var $links = $('div.tbs-content h1[id], div.tbs-content h2[id], div.tbs-content h3[id]');

  var nav = [];
  $links.each(function () {
    var $link = $(this),
        obj = {href: $link.attr('id'), label: $link.text(), children: []};

    if ($link.prop('tagName').toLowerCase() === 'h1') {
      nav.push(obj);
    } else {
      nav[nav.length - 1].children.push(obj);
    }
  });

  function getHtml(links) {
    return links.map(function (item) {
      var html = '<li><a href=#' + item.href + '>' + item.label + '</a>';
      if (item.children.length) {
        html += '<ul class=nav>' + getHtml(item.children) + '</ul>';
      }
      html += '</li>';
      return html;
    }).join('');
  }

  $sideNav.html(getHtml(nav));

  /**
   * Highlight current contents location
   */

  var $window = $(window);
  var $body   = $(document.body);

  $body.scrollspy({
    target: 'div.tbs-sidebar',
  });

  $window.on('load', function () {
    $body.scrollspy('refresh');
  });

  /**
   * Float contents nav to the right
   */

  var $footer = $('footer.tbs-footer');
  var $sideBar = $('div.tbs-sidebar');

  $sideBar.affix({
    offset: {
      top: function () {
        var offsetTop      = $sideBar.offset().top;
        var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10);
        var navOuterHeight = $('header.navbar').first().height();

        return (this.top = offsetTop + navOuterHeight - sideBarMargin);
      },
      bottom: function () {
        return (this.bottom = $footer.outerHeight(true));
      }
    }
  });

});