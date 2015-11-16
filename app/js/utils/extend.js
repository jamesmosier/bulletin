var Extend = function(target, source) {
  var a = Object.create(target);

  Object.keys(source).map(function(prop) {
    prop in a && (a[prop] = source[prop]);
  });

  return a;
};

export default Extend;
