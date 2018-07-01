var SM = (function () {

    var my = {};

    my.get = function (key) {
        return localStorage.getItem(key);
    }

    ...

    return my;

}());

var GB = (function (SM) {
    var my = {};

    my.blockTheseSites = {
        "gawker.com"        : "Gawker Media",
        "io9.com"           : "SciFi Blog",
        "gizmodo.com"       : "Gadget Blog",
        ...
    }

    if (!SM.get("blocklist")) {
        SM.put("blocklist", JSON.stringify(my.blockTheseSites));
    }

    my.getBlockedSites = function () {
        return JSON.parse(SM.get("blocklist"));
    }

    my.setWatchThisInstead = function (value) {
        ...
    }

    my.getWatchThisInstead = function () {
        return SM.get("instead");
    }

    my.addBlockedSite = function (site) {
        my.blockedSites = JSON.parse(SM.get("blocklist"));
        my.blockedSites[site] = "Custom Add";
        SM.put("blocklist", JSON.stringify(my.blockedSites));
    }

    my.removeBlockedSite = function (site) {
        my.blockedSites = JSON.parse(SM.get("blocklist"));
        delete my.blockedSites[site];
        SM.put("blocklist", JSON.stringify(my.blockedSites));
    }

    return my;
}(SM));



disableScroll()
