// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', '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');
});

// Put your campus prefix here
window.CAMPUS = 'rpp';