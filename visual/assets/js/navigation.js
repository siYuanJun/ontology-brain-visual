/**
 * Ontology-Brain 全局导航栏注入脚本
 * 每个页面 <body> 开头调用 injectNavbar('pageKey') 注入 4 Tab 导航
 * pageKey: 'home' | 'skill' | 'harness-analysis' | 'harness-upgrade'
 */

(function () {
  var TABS = [
    { key: 'home',             label: '首页 Dashboard',      href: '/index.html' },
    { key: 'skill',            label: 'Skill 工程',          href: '/skill/index.html' },
    { key: 'harness-analysis', label: 'Harness 团队分析',    href: '/harness/analysis.html' },
    { key: 'harness-upgrade',  label: 'Harness 升级路线',    href: '/harness/upgrade.html' }
  ];

  function injectNavbar(activeKey, base) {
    base = base || '..';
    if (document.querySelector('.navbar')) return;
    var nav = document.createElement('nav');
    nav.className = 'navbar';
    var inner = document.createElement('div');
    inner.className = 'navbar-inner';

    var logo = document.createElement('a');
    logo.className = 'navbar-logo';
    logo.href = base + '/index.html';
    logo.innerHTML = 'Ontology<span>-Dome</span>';
    inner.appendChild(logo);

    var tabs = document.createElement('div');
    tabs.className = 'navbar-tabs';
    TABS.forEach(function (t) {
      var a = document.createElement('a');
      a.className = 'navbar-tab' + (t.key === activeKey ? ' active' : '');
      a.href = base + t.href;
      a.textContent = t.label;
      tabs.appendChild(a);
    });
    inner.appendChild(tabs);

    var burger = document.createElement('button');
    burger.className = 'hamburger';
    burger.innerHTML = '☰';
    burger.setAttribute('aria-label', '菜单');
    burger.addEventListener('click', function () {
      tabs.classList.toggle('open');
    });
    inner.appendChild(burger);

    nav.appendChild(inner);
    document.body.insertBefore(nav, document.body.firstChild);
  }

  /**
   * 页面内章节锚点导航（长页面使用）
   * sections = [{ id: 'sec-1', title: '一、现状' }]
   */
  function buildSectionNav(sections) {
    var wrap = document.createElement('nav');
    wrap.className = 'section-nav';
    var ul = document.createElement('ul');
    sections.forEach(function (s) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + s.id;
      a.textContent = s.title;
      a.dataset.target = s.id;
      li.appendChild(a);
      ul.appendChild(li);
    });
    wrap.appendChild(ul);
    document.body.appendChild(wrap);

    // 滚动高亮
    function highlight() {
      var pos = window.scrollY + 140;
      var current = sections[0].id;
      sections.forEach(function (s) {
        var el = document.getElementById(s.id);
        if (el && el.offsetTop <= pos) current = s.id;
      });
      ul.querySelectorAll('a').forEach(function (a) {
        a.classList.toggle('active', a.dataset.target === current);
      });
    }
    window.addEventListener('scroll', highlight, { passive: true });
    highlight();
  }

  window.injectNavbar = injectNavbar;
  window.buildSectionNav = buildSectionNav;
})();
