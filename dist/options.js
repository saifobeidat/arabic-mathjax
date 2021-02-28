alert('Hi From github')
window.MathJax = {
    jax: ["input/TeX", "output/HTML-CSS"],
    'HTML-CSS': {
      undefinedFamily: 'Amiri'
    },
    extensions: ["tex2jax.js","[arabic]/arabic.js"],
    AuthorInit: function () {
            MathJax.Ajax.config.path["arabic"] = "https://cdn.jsdelivr.net/gh/saifobeidat/arabic-mathjax/dist";
        },
    tex2jax: {
      inlineMath: [
        ['$', '$'],
        ["\\(", "\\)"]
      ],
      processEscapes: true,
    },
  };
