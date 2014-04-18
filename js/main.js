function _init() {
  
    var PageLoader = {
        init: function() {
            NewSite.adComponent.hide();
            var qs = NewSite.getQueryString();
            var contentId = qs.contentId || qs.contentid || qs.CONTENTID;

            NewSite.videoPlayerComponent.playVideo(contentId);
        }
    };

    if (NewSite.readyEventFired()) {
        PageLoader.init();
    }
    else {
        NewSite.addListener("newsiteReady", PageLoader, "init");
    }
}
