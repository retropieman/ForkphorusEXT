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
    ext.dlw = function(filename, text, callback) {
        var dcor = propmt("You are about to download a file. Type in 'y' if you want to donload" + filename);
        if (dcor === 'y'){
            // http://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
            // with a little bit of help from @sheeptester
            var sacrifice=document.createElement('a');
            sacrifice.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(text));
            sacrifice.setAttribute('download',filename);
            sacrifice.style.display='none';
            document.body.appendChild(sacrifice);
            sacrifice.click();
            document.body.removeChild(sacrifice);
        } else{
            alert("The download was canceled. Please report this project if you think it is malware.");
        }
      };
    

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['w', 'Open google popup', 'ogoogs'],
            ['w', 'Open project with ID %n', 'gotox'],
            ['w', 'Open packaged project with ID %n', 'goproj'],
            ['w', 'Download  file %n with data %s', 'dlw'],
        ]
        
    };

    // Register the extension
    ScratchExtensions.register('ForkphorusEXT', descriptor, ext);
})({});
