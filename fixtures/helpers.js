

module.exports = {
  wrapHybridPromise: function(promise) {
    return {
      then: function (fulfill) {
        promise.then(function (title) {
          fulfill(title);
        });
      }
    }
  }
};
