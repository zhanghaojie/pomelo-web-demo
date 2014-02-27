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
Handler.prototype.entry = function(msg, session, next) {
   // 登陆验证什么的都省略了，直接绑定admin用户
   session.bind("admin", function() {
      next(null, {code: 200, msg: 'welcome admin.'});
   })
};
