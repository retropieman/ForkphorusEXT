(function(ext) {
    
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {
    };

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Functions for block with type 'w' will get a callback function as the 
    // final argument. This should be called to indicate that the block can
    // stop waiting.
    ext.ogoogs = function(callback) {
        window.open('http://google.com','1573258053476','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');return false;
    };
    ext.gotox = function(xid, callback) {
        window.open('https://forkphorus.github.io/#' + xid,'1573258053476','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');return false;
    };
    ext.goproj = function(xid, callback) {
        
        window.open('https://forkphorus.github.io/app.html?id=' + xid,'1573258053476','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');return false;
    };
    ext.getword = function(of, instr){
        var str = instr.trim().split(" ");
        var to = of - 1;
        return str[to];
    };
    ext.b64 = function(do, toen){
        var x = window.btoa(toen);
        return x;
    };
    
    

  
    // Register the extension
    ScratchExtensions.register('ForkphorusEXT', descriptor, ext);
})({});
var descriptor = {
    blocks: [
            ['w', 'Open google popup', 'ogoogs'],
            ['w', 'Open project with ID %n', 'gotox'],
            ['w', 'Open packaged project with ID %n', 'goproj'],
            ['r', 'Get word %n of %s', 'getword', 1, "Hello World"],
            ['r', '%s.decenc %s to base64', 'b64', 'test']
    ],
    menus: {
        decenc: ['encode', 'decode'],
        
    },
    url: 'http://info.scratch.mit.edu/WeDo',
    displayName: 'Advanced Scratch'
};
