module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
};

/**
 * New client entry chat server.
 *
 * @param  {Object}   msg     request message
 * @param  {Object}   session current session object
 * @param  {Function} next    next stemp callback
 * @return {Void}
 */
Handler.prototype.handle = function(msg, session, next) {
   var uid = session.uid, level;
   // 这里应该用uid从数据库获取用户信息，这就不写了，直接通过用户名来判断
   if (uid === "admin") {
      level = "payment";
   }

   if (level === "payment") {
      // 处理付款流程.....
      // 这里只返回回调地址的query信息
      console.log("call payment handle");
      next(null, {code: 200, msg: msg});
   }
   else {
      next(null, {code: 500, msg: "failed"})
   }
};
