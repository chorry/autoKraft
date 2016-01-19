var options = {
    debug: true,
    interval: 1000,

    auto: {
        build : {
            enabled: true,
            items: {
                lumbermill: {
                    enabled: true,
                    uses: ["wood"]
                },
                mine: {
                    enabled: true,
                    uses: ["wood","mineral"]
                },
                warehouse: {
                    enabled: true,
                    uses: ["wood","mineral"]
                },
                fountain: {
                    enabled: true,
                    uses: ["mineral"]
                },
                pasture: {
                    enabled: false,
                    uses: ["wood"]
                },
                house: {
                    enabled: true,
                    uses: ["wood","mineral","food"]
                },
                library: {
                    enabled: true,
                    uses: ["wood","mineral"]
                },
                banner: {
                    enabled: true,
                    uses: ["wood","copper"]
                },
                foundry: {
                    enabled: false,
                    uses: ["copper","mineral"]
                },
                barn: {
                    enabled: true,
                    uses: []
                },
                casino: {
                    enabled: true,
                    uses: ["gold"]
                },
                market: {
                    enabled: false,
                    uses: ["wood"]
                }
            },
            threshold: 60
        },

        craft: {
            enabled: true,
            items: {
                pickaxe: {
                    enabled: false,
                    uses: ["wood", "copper"]
                },
                spear: {
                    enabled: false,
                    uses: ["wood", "copper"]
                },
                sword: {
                    enabled: false,
                    uses: ["iron"]
                },
                block: {
                    enabled: true,
                    uses: ["wood", "mineral"]
                },
                coin: {
                    enabled: true,
                    uses: ["gold"]
                }
            },
            threshold: 100
        }
    }
};

var getBuildSelector = function(name) {
    var selector = null;
    switch (name) {
        case 'lumbermill':
            selector = '.block.build_lumbermill';
            break;
        case 'mine':
            selector = '.block.build_mine';
            break;
        case 'warehouse':
            selector = '.block.build_warehouse';
            break;
        case 'fountain':
            selector = '.block.build_fountain';
            break;
        case 'pasture':
            selector = '.block.build_pasture';
            break;
        case 'house':
            selector = '.block.build_house';
            break;
        case 'library':
            selector = '.block.build_library';
            break;
        case 'banner':
            selector = '.block.build_banner';
            break;
        case 'foundry':
            selector = '.block.build_foundry';
            break;
        case 'barn':
            selector = '.block.build_barn';
            break;
        case 'casino':
            selector = '.block.build_casino';
            break;
        case 'market':
            selector = '.block.build_market';
            break;
    }
    return selector;

};

var getCraftSelector = function(name) {
    var selector = null;
    switch (name) {
        case 'pickaxe':
            selector = '.block.craft_pickaxe';
            break;
        case 'sword':
            selector = '.block.craft_sword';
            break;
        case 'spear':
            selector = '.block.craft_spear';
            break;
        case 'block':
            selector = '.block.craft_block';
            break;
        case 'coin':
            selector = '.block.craft_coin';
            break;
    }
    return selector;
};

var Manager = function() {};
Manager.prototype = {
    self: this,
    start: function() {
        this.loop = setInterval( this.doStuff.bind(this) , options.interval);
        console.log('Started');
    },
    stop: function() {
        clearInterval(this.loop);
        this.loop = null;
        console.log('Stopped');
    },
    doStuff: function() {
        if (options.auto.build.enabled ) {
            this.build();
        }
        if (options.auto.craft.enabled ) {
            this.craft();
        }
    },
    build: function () {
        var items = options.auto.build.items;
        for (var item in items) {
            if (items.hasOwnProperty(item) && items[item].enabled == true) {
                if (
                    this.canBuild(item)
                    && this.exceedBuildThreshold(item)
                    && this.buildIsUnlocked(item)
                ) {
                    build(item);
                }
            }
        }
    },
    craft: function () {
        var craftItems = options.auto.craft.items;
        for (var item in craftItems) {
            if (craftItems[item].enabled == true
                && this.canCraft(item)
                && this.craftIsUnlocked(item)
                && this.exceedCraftThreshold(item)
            ) {
                crafting(item);
            }
        }
    },
    exceedBuildThreshold: function(name) {
        var limitedResources = options.auto.build.items[name];
        var result = true;
        for (var resourceName in limitedResources) {
            if ( items[resourceName] < maximums[resourceName] * options.auto.build.threshold / 100 ) {
                result = false;
                break;
            }
        }
        return result;
    },
    exceedCraftThreshold: function (name) {
        var limitedResources = options.auto.craft.items[name].uses;
        var result = true;
        for (var resIdx in limitedResources) {
            var resourceName = limitedResources[resIdx];
            if (items[resourceName] < maximums[resourceName] * options.auto.craft.threshold / 100) {
                result = false;
                break;
            }
        }
        return result;
    },
    canCraft: function(name) {
        if ( $(getCraftSelector(name) + '.unavailable').length == 0 ) {
            return true
        }
        return false;
    },
    craftIsUnlocked: function(name) {
        return ( unlocked.hasOwnProperty('.craft_' + name ) && unlocked['.craft_' + name] == 1);
    },
    buildIsUnlocked: function(name) {
        if (name == 'lumbermill' || name == 'mine' ) {
            return true;
        }
        return ( unlocked.hasOwnProperty('.build_' + name ) && unlocked['.build_' + name] == 1);
    },
    canBuild: function(name) {
        if ( $(getBuildSelector(name) + '.unavailable').length == 0 ) {
            return true
        }
        return false;
    }
};

var toggleOptionItem = function(item) {
    if ( options.auto.build.items.hasOwnProperty(item) ) {
        options.auto.build.items[item].enabled = !options.auto.build.items[item].enabled;
    }
    if ( options.auto.craft.items.hasOwnProperty(item) ) {
        options.auto.craft.items[item].enabled = !options.auto.craft.items[item].enabled;
    }
};
var updateThreshold = function(type) {
    var curType = null;
    switch (type) {
        case 'build_thresh':
            curType = 'build';
            break;
        case 'craft_thresh':
            curType = 'craft';
            break;
        default:
            return false;
    }

    var newValue = prompt("Please enter new [" + curType + "] threshold in percents", options.auto[curType].threshold);

    if (newValue != null) {
        if (newValue < 0 ) {
            newValue = 0;
        } else if (newValue > 100) {
            newValue = 100;
        }
        options.auto[curType].threshold = newValue;
        //update text
        $('#'+curType+'_thresh_value').text(newValue);
    }
};

var appendAutoTab = function() {
    var htmlTab = '<li id="autokraftpane"><a data-toggle="tab" href="#autokraft" aria-expanded="false">AutoKraft</li>';
    $('#legacypane').after(htmlTab);

    var buildingsList, craftingList, buildingThreshold, craftingThreshold;
    buildingsList = craftingList = '';

    for (var item in options.auto.build.items ) {
        var checked = '';
        if (options.auto.build.items[item].enabled) {
            checked = 'checked';
        }
        buildingsList += '<div class="block" style="display: inline-block;"><input name="'+ item +'" type="checkbox" ' + checked + ' class="autokraft_option"/>'+item+'</div>';
    }

    for (var item in options.auto.craft.items ) {
        var checked = '';
        if (options.auto.craft.items[item]) {
            checked = 'checked';
        }
        craftingList += '<div class="block" style="display: inline-block;"> <input name="'+ item +'" type="checkbox" ' + checked + ' class="autokraft_option" />'+item+'</div>';
    }

    buildingThreshold = '<div><span id="build_thresh" class="option_threshold">Building threshold:<span id="build_thresh_value">' + options.auto.build.threshold + '</span>% </span></div>';
    craftingThreshold = '<div><span id="craft_thresh" class="option_threshold">Crafting threshold:<span id="craft_thresh_value">' + options.auto.craft.threshold + '</span>% </span></div>';

    var htmlSettings = '<div id="autokraft" class="autokraft tab-pane fade"><h3>AutoKraft settings</h3>' +
        '<div class="craftline" style="margin-left: 500px;">' +
        '<div id="Build"><h4>Buildings</h4>' +
            buildingThreshold +
            buildingsList +
        '</div>' +
        '<div id="Craft"><h4>Crafting</h4>' + craftingThreshold + craftingList + '</div>' +
        '</div></div>';
    $('#legacy').after(htmlSettings);
    $('.autokraft_option').on('click', function(e) {
        toggleOptionItem(this.name);
    });
    $('.option_threshold').on('click', function(e) {
        updateThreshold(this.id)
    });

};

appendAutoTab();

var x = new Manager();
x.start();


function dobet(roundsAmount) {
    var minbet, maxbet, currentBet, goldEarned, round, betLog;
    round = 0;
    minbet = 0.5;
    maxbet = $('input.betamount').attr("max");
    goldEarned = 0;
    currentBet = minbet;
    betLog = '';

    for (var rNum = 0; rNum < roundsAmount; rNum ++ ) {
        // place a bet
        if (items['gold'] < currentBet) {
            console.log('Run out of gold to gamble!');
            break;
        }
        $('input.betamount').val(currentBet);
        bet('low');
        // parse casino log
        var casinoLog = $('.casinolog').text();
        var gameResult = casinoLog.match(/Sorry/);
        var betResult = $('.betresult').text();
        if (gameResult != null) {
            betLog += "[LOSE] " + currentBet + " for low, got " + betResult + "\n";
            goldEarned = goldEarned - currentBet;
            currentBet = currentBet * 2;
            if (currentBet > maxbet) {
                console.log('Maxbet exceeded! Earnings: ' + goldEarned + ' gold');
            }
        } else {
            betLog += "[WON] " + currentBet + " for low, got " + betResult + "\n";
            goldEarned = goldEarned + currentBet;
            currentBet = minbet;
        }
        round = round + 1;
        console.log("round #" + round + ", earning: " + goldEarned);
    }
    console.log("Rounds played:" + round +", earned:" + goldEarned);
    console.log(betLog);
}