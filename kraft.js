//css styles
var stylesheet = document.styleSheets[1];
stylesheet.insertRule('.overResLimit { border: 1px solid red}', stylesheet.length);
stylesheet.insertRule('.resLimitReached { color: maroon } ', stylesheet.length);
stylesheet.insertRule('.craftline { width: 500px; }', stylesheet.length);
stylesheet.insertRule('.autokraft { width: 500px; float: left; }', stylesheet.length);
stylesheet.insertRule('.subpanel { float: left; }', stylesheet.length);
//yep, i suck with css
stylesheet.insertRule('.craftline .tab-pane.fade { display: none; }', stylesheet.length);
stylesheet.insertRule('.craftline .tab-pane.fade.active { display: block !important; }', stylesheet.length);

var options = {
    interval: 1000,

    auto: {
        build: {
            enabled: false,
            items: {
                lumbermill: {
                    enabled: true,
                    uses: ["wood"]
                },
                mine: {
                    enabled: true,
                    uses: ["wood", "mineral"]
                },
                warehouse: {
                    enabled: true,
                    uses: ["wood", "mineral"]
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
                    uses: ["wood", "mineral", "food"]
                },
                library: {
                    enabled: true,
                    uses: ["wood", "mineral"]
                },
                banner: {
                    enabled: true,
                    uses: ["wood", "copper"]
                },
                foundry: {
                    enabled: false,
                    uses: ["copper", "mineral"]
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
                },
                kiln: {
                    enabled: false,
                    uses: ["mineral", "block"]
                },
                statue: {
                    enabled: false,
                    uses: ["bronze"]
                },
                towncenter: {
                    enabled: false,
                    uses: ["block","structure","coin"]
                },
                workbench: {
                    enabled: false,
                    uses: ["steel"]
                },
                castle: {
                    enabled: false,
                    uses: ["block","gold"]
                },
                relic: {
                    enabled: false,
                    uses: ["token"]
                },
                shipyard: {
                    enabled: false,
                    uses: ["wood","structure"]
                },
                docks: {
                    enabled: false,
                    uses: ["iron","plank"]
                },
                bank: {
                    enabled: false,
                    uses: ["block","steel","coin"]
                },
                crusher: {
                    enabled: false,
                    uses: ["copper","iron","steel"]
                },
                blockyard: {
                    enabled: false,
                    uses: ["bronze","pickaze"]
                },
                bunker: {
                    enabled: false,
                    uses: ["frame","pickaxe"]
                },
                laboratory: {
                    enabled: false,
                    uses: ["frame","glass"]
                },
                scienceoutpost: {
                    enabled: false,
                    uses: ["frame","glass","territory"]
                },
                tradeoutpost: {
                    enabled: false,
                    uses: ["frame","coin","territory"]
                },
                militaryoutpost: {
                    enabled: false,
                    uses: ["frame","sword","armor","territory"]
                },
                quarry: {
                    enabled: false,
                    uses: ["mineral","pickaxe"]
                },
                carpentry: {
                    enabled: false,
                    uses: ["frame","brick"]
                },
                blastfurnace: {
                    enabled: false,
                    uses: ["brick"]
                },
                compressor: {
                    enabled: false,
                    uses: ["brick","glass","frame"]
                },
                share: {
                    enabled: false,
                    uses: ["token"]
                },
                repository: {
                    enabled: false,
                    uses: ["block","glass","bottlecost"]
                },
                trainstation: {
                    enabled: false,
                    uses: ["wood","iron","frame"]
                },
                workshop: {
                    enabled: false,
                    uses: ["brick","plate","engine"]
                },
                powerplant: {
                    enabled: false,
                    uses: ["frame","plate"]
                },
                cementkiln: {
                    enabled: false,
                    uses: ["steel","plate"]
                },
                university: {
                    enabled: false,
                    uses: ["cement","brick","frame"]
                },
                concretemixer: {
                    enabled: false,
                    uses: ["brick","plate"]
                },
                toolfactory: {
                    enabled: false,
                    uses: ["brick","concrete"]
                },
                barracks: {
                    enabled: false,
                    uses: ["concrete"]
                }
            },
            threshold: "60"
        },
        craft: {
            enabled: true,
            items: {
                pickaxe: {
                    enabled: false,
                    cost: {
                        "wood": 20,
                        "copper": 1
                    }
                },
                spear: {
                    enabled: false,
                    cost: {"wood": 50, "copper": 3}
                },
                sword: {
                    enabled: false,
                    cost: {"iron": 10}
                },
                block: {
                    enabled: false,
                    cost: {"wood": 100, "mineral": 200}
                },
                coin: {
                    enabled: false,
                    cost: {"gold": 5}
                },
                bronze: {
                    enabled: true,
                    cost: {"copper": 40, "tin": 10}
                },
                structure: {
                    enabled: false,
                    cost: {"wood": 1000, "iron": 20}
                },
                armor: {
                    enabled: false,
                    cost: {"steel": 30, "bronze": 5}
                },
                supplies: {
                    enabled: false,
                    cost: {"plank": 5, "food": 500, "water": 100}
                },
                chest: {
                    enabled: false,
                    cost: {"plank": 100, "steel": 30, "bronze": 5, "lock": 1}
                },
                glass: {
                    enabled: false,
                    cost: {"tin": 50, "sand": 200, "coal": 50}
                },
                bottle: {
                    enabled: false,
                    cost: {"glass": 5}
                },
                greatsword: {
                    enabled: false,
                    cost: {"steel": 100}
                },
                frame: {
                    enabled: false,
                    cost: {"block": 500, "structure": 100, "steel": 100}
                },
                brick: {
                    enabled: false,
                    cost: {"sand": 500, "clay": 150}
                },
                gunpowder: {
                    enabled: false,
                    cost: {"sand": 300, "coal": 100, "bronze": 10, "chemicals": 5}
                },
                ammo: {
                    enabled: false,
                    cost: {"iron": 50, "gunpowder": 10}
                },
                musket: {
                    enabled: false,
                    cost: {"wood": 500, "iron": 500, "steel": 300}
                },
                plate: {
                    enabled: false,
                    cost: {"copper": 400, "iron": 200, "nickel": 10}
                },
                engine: {
                    enabled: false,
                    cost: {"steel": 400, "plate": 100, "bronze": 200}
                },
                book: {
                    enabled: false,
                    cost: {"knowledge": 2500}
                },
                strategy: {
                    enabled: false,
                    cost: {"plans": 2500}
                },
                patent: {
                    enabled: false,
                    cost: {"coin": 2500}
                }
            },
            threshold: "100"
        },
        explore: {
            enabled: false,
            fight: false,
            items: {
            "pikeman": { enabled: false, limit: 2, cost: { "food": 50, "spear": 1} },
            "swordman": { enabled: false, limit: 0, cost: { "food": 150, "sword": 1} },
            "medic": { enabled: false, limit: 0, cost: { "food": 1000, "coin": 20} },
            "bersek": { enabled: false, limit: 0, cost: { "food": 50, "greatsword": 1} },
            "warelephant": { enabled: false, limit: 0, cost: { "supplies": 100, "elephant": 1} },
            "musketeer": { enabled: false, limit: 0, cost: { "coin": 100, "musket": 1, "armor": 1} },
            "lighttank": { enabled: false, limit: 0, cost: { "plate": 200, "engine": 2} },
            "knight": { enabled: false, limit: 0, cost: { "swordman": 1, "horse": 1, "armor": 1} }
        }},
        science: {
            threshold: "60",
            items: {
                economy: false,
                science: false,
                military: false
            }
        },
        sources: {
            "food":"items",
            "plate":"craft",
            "engine":"craft",
            "swordman":"people",
            "horse":"craft",
            "armor":"craft",
            "coin":"craft",
            "sword":"craft",
            "spear":"craft",
            "greatsword":"craft",
            "musket":"craft",
            "supplies":"craft",
            "elephant":"craft"
        }
    }
};


var getBuildSelector = function (name) {
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

var getCraftSelector = function (name) {
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

var Manager = function () {};

Manager.prototype = {
    self: this,
    saveSettings: function() {
        localStorage.setItem('autokraft_options', JSON.stringify(options));
    },
    loadSettings: function() {
        var retrievedObject = localStorage.getItem('autokraft_options');
        if (retrievedObject != null) {
            var loadedOptions = JSON.parse(retrievedObject);
            loadedOptions.auto.enabled = false; // ak should be disabled by default
            options = this.updateSettings(loadedOptions, options);
        }
    },
    updateSettings: function(currentSettings, newSettings) {
        return $.extend(true, newSettings, currentSettings);
    },
    init: function() {
        this.loadSettings();
        appendAutoTab();
        hotfix();
    },
    start: function () {
        this.loop = setInterval(this.doStuff.bind(this), options.interval);
    },
    stop: function () {
        clearInterval(this.loop);
        this.loop = null;
    },
    doStuff: function () {
        this.build();
        this.craft();
        this.explore();
        this.doScience();
        this.updateResourceColors();
    },
    updateResourceColors: function() {
        var resourceRows = $('.inventory table tbody tr').contents();
        var blockStart = false;
        for (var i=0; i<resourceRows.length; i++) {
            if ($(resourceRows[i]).hasClass('resource')) {
                blockStart = true;
            }
            if (blockStart && $(resourceRows[i]).hasClass('amount')) {
                var rowContent = $(resourceRows[i]).text();
                if (parseInt (rowContent.split('/')[0]) ==
                    parseInt (rowContent.split('/')[1])) {
                    $(resourceRows[i]).addClass('resLimitReached');
                } else {
                    $(resourceRows[i]).removeClass('resLimitReached');
                }
                blockStart = false;
            }
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
            if (craftItems.hasOwnProperty(item)) {
                if (craftItems[item].enabled == true
                    && this.canCraft(item)
                    && this.craftIsUnlocked(item)
                    && this.exceedCraftThreshold(item)
                    && this.lessThanMaxValue(item)
                ) {
                    crafting(item);
                }
            }
        }
    },
    explore: function() {
        //build units
        for (var unit in options.auto.explore.items){
            if (options.auto.explore.items.hasOwnProperty(unit)) {
                var u = options.auto.explore.items[unit];
                if (u.enabled
                    && (u.limit > people[unit])
                    && canBuildUnit(unit, u.cost)
                )//limit enabled cost
                {
                    hire(unit);
                }
            }
        }

        if (window.unlocked['.expedition'] == 1
            && options.auto.explore.enabled) {
            if ( ( $('.encounter').is(':visible') )) {
                (options.auto.explore.fight == true) ? fight() : retreat();
            } else {
                expedition();
            }

        }
    },
    doScience: function() {
        if (!this.exceedScienceThreshold()) {
            return;
        }
        var science = null;
        for (var item in options.auto.science.items) {
            if (options.auto.science.items.hasOwnProperty(item)) {
                if (options.auto.science.items[item] == true) {
                    if (science == null) {
                        science = {name: item, value: bonus[item]}
                    } else {
                        if (bonus[item] < science.value) {
                            science = {name: item, value: bonus[item]}
                        }
                    }
                }
            }
        }

        if (science != null) {
            develop(science.name)
        }
    },
    getResourceValue: function (name) {
        if (craft.hasOwnProperty(name)) {
            return craft[name];
        }
        if (items.hasOwnProperty(name) >= 0) {
            return items[name];
        }
        return null
    },
    exceedBuildThreshold: function (name) {
        var limitedResources = options.auto.build.items[name].uses;
        var result = true;
        for (var resIdx in limitedResources) {
            if ( limitedResources.hasOwnProperty(resIdx) ) {
                var resourceName = limitedResources[resIdx];
                if (this.getResourceValue(resourceName) < maximums[resourceName] * options.auto.build.threshold / 100) {
                    result = false;
                    break;
                }
            }
        }
        return result;
    },
    exceedCraftThreshold: function (name) {
        var limitedResources = options.auto.craft.items[name].cost;
        var result = true;
        for (var resourceName in limitedResources) {
            if (limitedResources.hasOwnProperty(resourceName) ){
                var resourceCost = limitedResources[resourceName];
                if (this.getResourceValue(resourceName) < maximums[resourceName] * options.auto.craft.threshold / 100 ||
                    this.getResourceValue(resourceName) < resourceCost
                ) {
                    result = false;
                    break;
                }
            }
        }
        return result;
    },
    exceedScienceThreshold: function() {
        return ( items.knowledge >= maximums.knowledge * options.auto.science.threshold / 100 );
    },
    lessThanMaxValue: function(name) {
        var keyName = 'limit';
        return !( options.auto.craft.items[name].hasOwnProperty(keyName) &&
        options.auto.craft.items[name][keyName] > 0 &&
        craft[name] >= options.auto.craft.items[name][keyName] );
    },
    canCraft: function (name) {
        return $(getCraftSelector(name) + '.unavailable').length == 0;
    },
    craftIsUnlocked: function (name) {
        return ( unlocked.hasOwnProperty('.craft_' + name) && unlocked['.craft_' + name] == 1);
    },
    buildIsUnlocked: function (name) {
        if (name == 'lumbermill' || name == 'mine') {
            return true;
        }
        return ( unlocked.hasOwnProperty('.build_' + name) && unlocked['.build_' + name] == 1);
    },
    canBuild: function (name) {
        return  ($(getBuildSelector(name) + '.unavailable').length == 0);
    }
};

var toggleAk = function() {
    (options.auto.enabled == true) ? kraftManager.stop() : kraftManager.start();
    options.auto.enabled = !options.auto.enabled;
};

var toggleAkExplore = function() {
    options.auto.explore.enabled = !options.auto.explore.enabled;
    kraftManager.saveSettings();
};

var toggleAkExploreFight = function() {
    options.auto.explore.fight = !options.auto.explore.fight;
    kraftManager.saveSettings();
};

var toggleOptionItem = function (item) {
    if (options.auto.build.items.hasOwnProperty(item)) {
        options.auto.build.items[item].enabled = !options.auto.build.items[item].enabled;
        kraftManager.saveSettings();
    }
    if (options.auto.craft.items.hasOwnProperty(item)) {
        options.auto.craft.items[item].enabled = !options.auto.craft.items[item].enabled;
        kraftManager.saveSettings();
    }
    if (options.auto.science.items.hasOwnProperty(item)) {
        options.auto.science.items[item] = !options.auto.science.items[item];
        kraftManager.saveSettings();
    }
    if (options.auto.explore.items.hasOwnProperty(item)) {
        options.auto.explore.items[item].enabled = !options.auto.explore.items[item].enabled;
        kraftManager.saveSettings();
    }
};

function switchAll(type, state) {
    var selector = '';
    switch (type) {
        case 'build' :
            selector = 'build';
            break;
        case 'craft':
            selector = 'craft';
            break;
        default:
            return;
    }
    Object.keys(options.auto[selector].items).forEach( function(k) {
        options.auto[selector].items[k].enabled = state;
        $('input[name="'+ k + '"].autokraft_option').prop('checked', state);
    });
    kraftManager.saveSettings();
}

var updateMaxValueLimit = function(type, itemName) {
    var defaultValue = options.auto[type].items[itemName].hasOwnProperty('limit') ?
        options.auto[type].items[itemName].limit
        : 0;
    var newValue = parseInt(prompt("Enter new limit for [" + itemName + "]. 0 is for no limit", defaultValue));
    if (isNaN(newValue)) {
        return defaultValue;
    }
    if (newValue < 0) { newValue = 0 }
    options.auto[type].items[itemName].limit = newValue;
    $('span.' + type + '_limit_setter[data-name='+itemName+']')[0].innerHTML = newValue;
    kraftManager.saveSettings();
    return newValue;
};

var updateThreshold = function (type) {
    var curType = null;
    switch (type) {
        case 'build_thresh':
            curType = 'build';
            break;
        case 'craft_thresh':
            curType = 'craft';
            break;
        case 'science_thresh':
            curType = 'science';
            break;
        default:
            return false;
    }

    var newValue = prompt("Please enter new [" + curType + "] threshold in percents", options.auto[curType].threshold);

    if (newValue != null) {
        if (newValue < 0) {
            newValue = 0;
        } else if (newValue > 100) {
            newValue = 100;
        }
        options.auto[curType].threshold = newValue;
        //update text
        $('#' + curType + '_thresh_value').text(newValue);
    }
    kraftManager.saveSettings();
};

var appendAutoTab = function () {
    if ($('#autokraftpane').length) {
        return;
    }
    var htmlTab = '<li id="autokraftpane"><a data-toggle="tab" href="#autokraft" aria-expanded="false">AutoKraft</li>';
    $('#legacypane').after(htmlTab);

    var akTabs =  '<ul class="nav nav-tabs">'
        + '<li class="active"><a data-toggle="tab" href="#ak_Settings">Settings</a></li>'
        + '<li><a data-toggle="tab" href="#ak_Build">Buildings</a></li>'
        + '<li><a data-toggle="tab"  href="#ak_Craft">Crafting</a></li>'
        + '<li><a data-toggle="tab"  href="#ak_Science">Science</a></li>'
        + '<li><a data-toggle="tab"  href="#ak_Explore">Explore</a></li>'
        + '</ul>';

    var akSettingsTab = '<div id="ak_Settings" class="tab-pane fade active in"></div>';
    var akSettingsButtons = '<div>'
            + '<input name="ak_enable" type="checkbox" '  +
        ( (options.auto.enabled == true) ? ' checked ' : '' )
        + ' class="autokraft_option" onclick="toggleAk();"> Enable'
        + '</div>';


    var akBuildTab = '<div id="ak_Build" class="tab-pane fade"></div>';
    var akBuildButtons = '<div>'
        + '<button class="btn btn-default option_threshold" type="button" id="build_thresh">'
        + 'Threshold <span id="build_thresh_value">' + options.auto.build.threshold + '</span> %'
        + '</button>'
        + '<button class="enable_toggle btn btn-default" type="button" data-state=true data-type="build">Enable all</button>'
        + '<button class="enable_toggle btn btn-default" type="button" data-state=false data-type="build">Disable all</button>'
        + '</div>';

    var akCraftTab = '<div id="ak_Craft" class="tab-pane fade"></div>';
    var akCraftButtons = '<div>'
        + '<button class="btn btn-default option_threshold" type="button" id="craft_thresh">'
        + 'Threshold <span id="craft_thresh_value">' + options.auto.craft.threshold + '</span> %'
        + '</button>'
        + '<button class="enable_toggle btn btn-default" type="button" data-state=true data-type="craft">Enable all</button>'
        + '<button class="enable_toggle btn btn-default" type="button" data-state=false data-type="craft">Disable all</button>'
        + '</div>';

    var akScienceTab = '<div id="ak_Science" class="tab-pane fade"></div>';
    var akScienceButtons = '<div>'
        + '<button class="btn btn-default option_threshold" type="button" id="science_thresh">'
        + 'Threshold <span id="science_thresh_value">' + options.auto.science.threshold + '</span> %'
        + '</button>'
        + '</div>';

    var akExploreTab = '<div id="ak_Explore" class="tab-pane fade"></div>';
    var akExploreButtons = '<div>'
        + '<span><input name="ak_explore_enable" type="checkbox" '  +
        ( (options.auto.explore.enabled == true) ? ' checked ' : '' )
        + ' class="autokraft_option" onclick="toggleAkExplore();">Auto exploration'
        + '</span><span><input name="ak_explore_fight" type="checkbox" ' +
        ( (options.auto.explore.fight == true) ? ' checked ' : '' ) +
        ' class="autokraft_option" onclick="toggleAkExploreFight()">' +
        'Fight on exploration</span>'
        + '</div>';


    //create build items tab
    var akBuildTable = '<table class="table table-hover"><thead><th>enable</th><th>name</th></thead>';
    for (var item in options.auto.build.items) {
        var checked = '';
        if (options.auto.build.items[item].enabled) {
            checked = 'checked';
        }
        akBuildTable +=
        '<td><input name="' + item + '" type="checkbox" ' + checked + ' class="autokraft_option"></td>'
        + '<td>' + item + '</td>'
        + '</tr>';
    }
    akBuildTable += '</table>';

    //create craft items table
    var akCraftTable = '<table class="table table-hover"><thead><th>enable</th><th>name</th><th>max amount</th></thead>';
    for (var item in options.auto.craft.items) {
        var checked = '';
        if (options.auto.craft.items[item].enabled) {
            checked = 'checked';
        }
        akCraftTable +=
                '<td><input name="' + item + '" type="checkbox" '+checked+' class="autokraft_option"></td>'
                + '<td>' + item + '</td>'
                + '<td><span class="craft_limit_setter" data-name="'+item+'">' + options.auto.craft.items[item].limit + '</span></td>'
                + '</tr>';
    }
    akCraftTable += '</table>';


    var akScienceTable = '<div>';
    for (var item in options.auto.science.items) {
        var checked = '';
        if (options.auto.science.items[item]) {
            checked = 'checked';
        }
        akScienceTable += '<span class="checkbox-inline"><input name="' + item + '" type="checkbox" ' + checked
            + ' class="autokraft_option">&nbsp;' + item + '</span>';

    }
    akScienceTable += '</div>';

    var akExploreTable = '<div>';
    akExploreTable += '<table class="table table-hover"><thead><th>enable</th><th>name</th><th>Max amount</th></thead>';
    for (var item in options.auto.explore.items) {
        var checked = '';
        if (options.auto.explore.items[item].enabled) {
            checked = 'checked';
        }
        akExploreTable +=
            '<td><input name="' + item + '" type="checkbox" '+checked+' class="autokraft_option"></td>'
            + '<td>' + item + '</td>'
            + '<td><span class="explore_limit_setter" data-name="'+item+'">' + options.auto.explore.items[item].limit + '</span></td>'
            + '</tr>';
    }

    var htmlSettings = '<div id="autokraft" class="autokraft tab-pane fade"><h3>AutoKraft settings</h3>'
            +'<div class="craftline"></div></div>';

    $('#legacy').after(htmlSettings);
    $(akTabs).appendTo( ('#autokraft .craftline') );
    $(akSettingsTab).appendTo( ('#autokraft .craftline') );
    $(akBuildTab).appendTo( ('#autokraft .craftline') );
    $(akCraftTab).appendTo( ('#autokraft .craftline') );
    $(akScienceTab).appendTo( ('#autokraft .craftline') );
    $(akExploreTab).appendTo( ('#autokraft .craftline') );
    $(akSettingsButtons).appendTo('#ak_Settings');
    $(akBuildButtons).appendTo('#ak_Build');
    $(akBuildTable).appendTo('#ak_Build');
    $(akCraftButtons).appendTo('#ak_Craft');
    $(akCraftTable).appendTo('#ak_Craft');
    $(akScienceButtons).appendTo('#ak_Science');
    $(akScienceTable).appendTo('#ak_Science');
    $(akExploreButtons).appendTo('#ak_Explore');
    $(akExploreTable).appendTo('#ak_Explore');

    $('.autokraft_option').on('click', function (e) {
        toggleOptionItem(this.name);
    });
    $('.option_threshold').on('click', function (e) {
        updateThreshold(this.id)
    });
    $('.enable_toggle').on('click', function(e){
        switchAll($(this).data('type'), $(this).data('state'));
    });
    $('.craft_limit_setter').on('click', function(e){
        updateMaxValueLimit('craft', $(this).data('name'));
    });
    $('.explore_limit_setter').on('click', function(e){
        updateMaxValueLimit('explore', $(this).data('name'));
    });

};

function canBuildUnit(unitName, costList) {
    for (var k in costList) {
        if (options.auto.sources.hasOwnProperty(k) &&
                window.unlocked['.hire_' + unitName] &&
                window[ options.auto.sources[k] ][k] >= costList[k]
        ) {
            //so far so good
        } else {
            return false;
        }
    }
    return true;
}

var hotfix = function() {
    options.auto.explore.items.knight.cost.swordman = 1;
}

var kraftManager = new Manager();
kraftManager.init();